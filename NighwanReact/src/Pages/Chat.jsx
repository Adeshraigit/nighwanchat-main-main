import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle, Send, Loader2, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './Chat.css';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', phone: '' });
  const [currentDetailsStep, setCurrentDetailsStep] = useState('initial');
  const [error, setError] = useState(null);

  const validateName = (name) => name.trim().length >= 2;
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  useEffect(() => {
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      setCurrentDetailsStep('chat');
    }
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addSystemMessage("Hi there! Welcome to our chat. Feel free to send your first message.");
    }
  }, [isOpen]);

  const addSystemMessage = (text) => {
    setMessages((prev) => [...prev, { text, type: 'system' }]);
  };

  const checkUserExists = async (phone) => {
    try {
      const response = await fetch(`https://jobportalapi.leanxpert.in/api/EnquiryForm?phone=${phone}`);
      if (!response.ok) throw new Error("Error checking user existence.");
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error("Error checking user:", error);
      return false;
    }
  };

  const submitUserDetails = async (details) => {
    try {
      const requestBody = {
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "User",
        updatedBy: "User",
        updatedOn: new Date().toISOString(),
        enquiryFormId: 0,
        name: details.name,
        mobileNo: details.phone,
        emailId: "",
        serviceTypeId: 0,
        serviceType: " NTPL Chat Inquiry",
        sourceId: 0,
        source: "Website React",
        message: "User started chat through AI assistant",
        captcha: "123456",
        enquiryFormIds: [0],
      };

      const response = await fetch("https://jobportalapi.leanxpert.in/api/EnquiryForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error("Failed to submit details.");

      localStorage.setItem("sessionId", `session-${Date.now()}`);
      return true;
    } catch (error) {
      setError(error.message);
      return false;
    }
  };

  const logQuestionToAPI = async (message) => {
    try {
      const requestBody = {
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "User",
        updatedBy: "User",
        updatedOn: new Date().toISOString(),
        aiQuestionBankId: 0,
        aiQuestionBankName: message,
        aiQuestionBankIds: [0],
      };

      await fetch('https://hrmsapi.leanxpert.in/api/AIQuestionBank', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
    } catch (err) {
      console.error("Error logging question:", err.message);
    }
  };

  const getChatbotResponse = async (message) => {
    try {
      const response = await fetch('https://nighwanchat.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: message }),
      });

      if (!response.ok) throw new Error(`Failed to send message: ${response.status}`);

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      return data.response;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };

  const sendMessage = useCallback(async () => {
    if (!inputMessage.trim() || isLoading) return;

    const trimmedMessage = inputMessage.trim();
    setMessages((prev) => [...prev, { text: trimmedMessage, type: 'user' }]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    try {
      switch (currentDetailsStep) {
        case 'initial':
          addSystemMessage("Great! Before we continue, could you please tell me your name?");
          setCurrentDetailsStep('name');
          break;

        case 'name':
          if (validateName(trimmedMessage)) {
            setUserDetails((prev) => ({ ...prev, name: trimmedMessage }));
            addSystemMessage(`Nice to meet you, ${trimmedMessage}! What's your phone number?`);
            setCurrentDetailsStep('phone');
          } else {
            addSystemMessage("Please enter a valid name (at least 2 characters).");
          }
          break;

        case 'phone':
          if (validatePhone(trimmedMessage)) {
            const phoneExists = await checkUserExists(trimmedMessage);
            if (phoneExists) {
              addSystemMessage("This phone number is already registered. Please use a different number.");
            } else {
              const updatedUserDetails = { ...userDetails, phone: trimmedMessage };
              setUserDetails(updatedUserDetails);
              const detailsSubmitted = await submitUserDetails(updatedUserDetails);
              if (detailsSubmitted) {
                addSystemMessage("Perfect! All your details are now complete. How can I help you today?");
                setCurrentDetailsStep('chat');
              }
            }
          } else {
            addSystemMessage("Please enter a valid 10-digit phone number.");
          }
          break;

        case 'chat':
          await logQuestionToAPI(trimmedMessage);
          const responseMessage = await getChatbotResponse(trimmedMessage);
          if (responseMessage) {
            setMessages((prev) => [...prev, { text: responseMessage, type: 'system' }]);
          }
          break;

        default:
          break;
      }
    } catch (err) {
      addSystemMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [inputMessage, currentDetailsStep, isLoading, userDetails]);

  // Handler to listen for Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="floating-chat-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <MessageCircle className="icon" />
            <h1 className="chat-heading">NTPL AI Chat</h1>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="messages-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}-message`}>
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            ))}
            {isLoading && (
              <div className="loading">
                <Loader2 className="loading-icon" />
                <span>Processing...</span>
              </div>
            )}
            {error && <div className="error-message">{error}</div>}
          </div>

          <div className="input-container">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()} className="send-button">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
      <button className="chat-toggle-button" onClick={() => setIsOpen(true)}>
        <MessageCircle size={24} />
      </button>
    </div>
  );
}