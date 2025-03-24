const express = require('express');
const natural = require('natural');
const Groq = require('groq-sdk');
const dotenv = require('dotenv');
const cors = require('cors');
const tokenizer = new natural.WordTokenizer();

// Load environment variables from a .env file
dotenv.config();

// Initialize the Groq SDK with your API key
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Knowledge base with provided Q&A data
const knowledgeBase = [
    {
        question: "hi,HI,hello",
        answer: "Hello! How can I assist you today?"
    },
    {
        question: "What is Nighwan Technology?",
        answer: "Nighwan Technology integrates AI, ML, and lean manufacturing to transform businesses, optimize operations, reduce costs, and drive sustainable growth."
    },
    {
        question: "What makes Nighwan Technology unique?",
        answer: "Our blend of AI/ML innovation, lean consultancy, customer-first approach, and scalable solutions sets us apart from other IT companies."
    },
    {
        question: "How can I contact Nighwan Technology?",
        answer: "Reach us via our website’s contact form, email at contact@nighwantech.com, or call +91 8985025794. Our support team responds within 2 minutes!"
    },
    {
        question: "Where is Nighwan Technology located?",
        answer: "Our registered office is in Gaya, India. We have a global presence with over 150 successful projects worldwide."
    },
    {
        question: "Does Nighwan Technology offer career opportunities?",
        answer: "Yes, we're always looking for talented individuals. Visit our Career section to explore current openings and join our team."
    },
    {
        question: "What services does Nighwan Technology offer?",
        answer: "We offer Lean Consultancy, Branding, ERP Development, AI/ML Solutions, Web/Mobile App Development, Data Analytics, IoT Solutions, Digital Marketing, IT Support & Maintenance, and DevOps Services."
    },
    {
        question: "Does Nighwan Technology provide custom software development?",
        answer: "Yes, we specialize in custom software development, including ERP systems tailored to your business needs."
    },
    {
        question: "What AI and ML solutions does Nighwan Technology offer?",
        answer: "Our AI/ML solutions include intelligent automation tools, predictive models, and customized machine learning applications for operational efficiency."
    },
    {
        question: "How does Nighwan Technology approach lean consultancy?",
        answer: "We identify inefficiencies, eliminate waste, and optimize processes using lean principles combined with advanced technology."
    },
    {
        question: "What cloud services does Nighwan Technology offer?",
        answer: "We provide cloud migration, hosting, and infrastructure management across AWS, Azure, and Google Cloud for robust, secure, and scalable solutions."
    },
    {
        question: "Does Nighwan Technology support digital transformation?",
        answer: "Yes, we guide businesses through digital transformation using modern technologies like AI, IoT, and automation."
    },
    {
        question: "How does Nighwan Technology handle IT support and maintenance?",
        answer: "We offer 24/7 IT support and maintenance, with a dedicated team monitoring systems to ensure seamless performance and minimal downtime."
    },
    {
        question: "What digital marketing services does Nighwan Technology provide?",
        answer: "Our digital marketing services boost online presence through engaging campaigns and data-driven strategies for sustainable growth."
    },
    {
        question: "How does Nighwan Technology incorporate DevOps?",
        answer: "Our DevOps services streamline development and operations for faster deployment and more reliable system performance."
    },
    {
        question: "What is Nighwan Technology's methodology for delivering solutions?",
        answer: "We follow a six-step model: Understand, Analyze, Innovate, Implement, Optimize, and Evolve to ensure solutions grow with your business."
    },
    {
        question: "Can you share Nighwan Technology's success stories?",
        answer: "We've successfully delivered projects like HRMS with Job Portal, Transport Management System (TMS), E-Commerce Platform, and Data Analytics Platform. Visit our website for full case studies and testimonials."
    },
    {
        question: "What industries does Nighwan Technology serve?",
        answer: "We serve diverse industries including healthcare, finance, e-commerce, manufacturing, logistics, education, and more, with tailored solutions for each."
    },
    {
        question: "How does Nighwan Technology ensure customer satisfaction?",
        answer: "We prioritize a customer-first approach, continuous support, and open communication, with a 99% client satisfaction rate."
    },
    {
        question: "Are Nighwan Technology's solutions scalable?",
        answer: "Yes, our solutions are designed to grow with your business, whether you're a startup or a large enterprise."
    },
    {
        question: "How does Nighwan Technology support ongoing innovation?",
        answer: "We provide continuous support, regular maintenance, and proactive optimization to ensure your technology evolves with your business needs."
    }
];

// Helper function to detect greetings
function isGreeting(query) {
    const greetings = ["hi", "hello", "hey"];
    return greetings.includes(query.toLowerCase().trim());
}

// Function to retrieve relevant documents from the knowledge base
function retrieveRelevantDocuments(query) {
    const queryTokens = tokenizer.tokenize(query.toLowerCase());
    return knowledgeBase.filter(doc => {
        const docTokens = tokenizer.tokenize((doc.question + " " + doc.answer).toLowerCase());
        return queryTokens.some(token => docTokens.includes(token));
    });
}

// Function to generate a response using the Groq API
async function generateResponse(context) {
    try {
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a professional AI assistant. Provide short, informative responses using Markdown formatting. Use **bold** for emphasis, *italics* for definitions, and lists for multiple points.",
                },
                {
                    role: "user",
                    content: context,
                },
            ],
            model: "llama-3.3-70b-versatile", // Replace with your actual Groq model ID
        });

        let rawResponse = response.choices[0]?.message?.content || "Sorry, I could not generate a response.";
        // Normalize newlines and remove extra spaces around punctuation
        rawResponse = rawResponse.replace(/\n+/g, '\n').trim();
        rawResponse = rawResponse.replace(/(\w+)(\s*)([,.!?;:])(\s*)/g, '$1$3$4');

        return rawResponse;
    } catch (error) {
        console.error('Error generating response:', error);
        return 'Sorry, I could not generate a response.';
    }
}

// RAG Chatbot function that processes the query
async function ragChatbot(query) {
    // Check if the query is a simple greeting
    if (isGreeting(query)) {
        const greetingDoc = knowledgeBase.find(doc =>
            doc.question.toLowerCase().includes("hi")
        );
        if (greetingDoc) {
            return greetingDoc.answer;
        }
    }

    const relevantDocuments = retrieveRelevantDocuments(query);
    if (relevantDocuments.length === 0) {
        return 'Sorry, I could not find any relevant information.';
    }

    const context = relevantDocuments.map(doc => doc.answer).join(' ');
    const response = await generateResponse(context);
    return response;
}

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.post('/chat', async (req, res) => {
    const { query } = req.body;
    try {
        const response = await ragChatbot(query);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', (req, res) => {
    res.send('RAG chatbot server is running');
});

app.listen(port, () => {
    console.log(`RAG chatbot server running on port ${port}`);
});