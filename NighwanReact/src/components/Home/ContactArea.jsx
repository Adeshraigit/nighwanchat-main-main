import React, { useState, useEffect, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import supportIcon from '../../assets/imgs/support-icon.svg';
import mapIcon from '../../assets/imgs/india.svg';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';

// Enhanced ErrorBoundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1>Oops, something went wrong!</h1>
          <p>{this.state.error?.message || "An unexpected error occurred."}</p>
          <button onClick={this.handleReload}>Reload Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// ContactArea Component
const ContactArea = () => {
  const captchaRef = useRef(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    country: "",
    message: "",
    privacy_policy_accept: false,
  });
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isHCaptchaLoaded, setIsHCaptchaLoaded] = useState(false);
  const [hcaptchaError, setHCaptchaError] = useState(null);

  // hCaptcha Callbacks
  const handleLoad = () => {
    console.log("hCaptcha loaded successfully");
    setIsHCaptchaLoaded(true);
    setHCaptchaError(null);
  };

  const handleVerify = (token) => {
    console.log("hCaptcha verified, token:", token);
    setCaptchaToken(token);
  };

  const handleExpire = () => {
    console.log("hCaptcha expired");
    setCaptchaToken(null);
  };

  const handleError = (error) => {
    console.error("hCaptcha error:", error);
    setHCaptchaError("Failed to load hCaptcha. Please try again later.");
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First Name is required.";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone_number.trim() || !/^\d{10}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.privacy_policy_accept) {
      newErrors.privacy_policy_accept = "You must agree to the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Form Data
  const submitFormData = async (formData, captchaToken) => {
    try {
      // Optionally, you can verify the captchaToken on your backend here
      // before proceeding with the form submission.

      // Build your request body without including the captcha token
      const requestBody = {
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "User",
        updatedBy: "User",
        updatedOn: new Date().toISOString(),
        enquiryFormId: 0,
        name: `${formData.first_name}`,
        mobileNo: formData.phone_number,
        emailId: formData.email,
        serviceTypeId: 0,
        serviceType: window.location.href,
        sourceId: 0,
        source: "NTPL Website Contact Form",
        message: formData.message,
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

      if (!response.ok) throw new Error("Failed to submit form.");

      setAlertMessage("Form submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        country: "",
        message: "",
        privacy_policy_accept: false,
      });
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha();
      }
    } catch (error) {
      setAlertMessage("Failed to submit form. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setAlertMessage("Please complete the captcha.");
      return;
    }
    if (validateForm()) {
      setIsLoading(true);
      submitFormData(formData, captchaToken);
    } else {
      setAlertMessage("Please correct the errors before submitting.");
    }
  };

  // Cleanup on Unmount
  useEffect(() => {
    return () => {
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha();
      }
    };
  }, []);

  return (
    <ErrorBoundary>
      <section className="contact-area">
        <div className="custom-container">
          <div className="custom-row">
            <div className="contact-form-wrap">
              <div className="contact-form-body">
                <h5 className="section-subtitle">Contact</h5>
                <h1 className="section-title">Let's get in touch</h1>
                <p>
                  You can reach us anytime via{' '}
                  <a href="mailto:contact@nighwantech.com">contact@nighwantech.com</a>
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="input-row">
                    <div className="input-group">
                      <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder={errors.first_name ? "Name is required." : "Your Name"}
                        value={formData.first_name}
                        onChange={handleChange}
                        className={errors.first_name ? "error-input" : ""}
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder={errors.email ? "Please enter a valid email address." : "Your Email"}
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error-input" : ""}
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group phone-number">
                      <select className="number-prefix">
                        <option value="IN">IN</option>
                      </select>
                      <label htmlFor="phone_number"></label>
                      <input
                        id="phone_number"
                        type="tel"
                        name="phone_number"
                        placeholder={errors.phone_number ? "Please enter a valid 10-digit phone number." : "Your Number"}
                        value={formData.phone_number}
                        onChange={handleChange}
                        className={errors.phone_number ? "error-input" : ""}
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Leave us a message...."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <span className="error-message">{errors.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group input-checkbox">
                      <input
                        type="checkbox"
                        id="privacy_policy_accept"
                        name="privacy_policy_accept"
                        checked={formData.privacy_policy_accept}
                        onChange={handleChange}
                      />
                      <label htmlFor="privacy_policy_accept">
                        You agree to our <a href="#">terms and conditions.</a>
                      </label>
                      {errors.privacy_policy_accept && (
                        <span className="error-message">{errors.privacy_policy_accept}</span>
                      )}
                    </div>
                  </div>
                  <div className="input-row">
                    {hcaptchaError ? (
                      <div className="error-message">{hcaptchaError}</div>
                    ) : (
                      <HCaptcha
                        ref={captchaRef}
                        sitekey="caca3a8a-c728-4fcc-841c-795674a87c92"
                        onLoad={handleLoad}
                        onVerify={handleVerify}
                        onExpire={handleExpire}
                        onError={handleError}
                      />
                    )}
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <button id="submit" className="theme-btn" type="submit" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Get Started"}
                      </button>
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group alert-notification">
                      <div id="alert-message" className="alert-msg">{alertMessage}</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="contact-experience">
              <ul>
                <li>
                  <h1>
                    18+ <span>Years</span>
                  </h1>
                  <p>Field Experience</p>
                </li>
                <li>
                  <h1>
                    150+ <span>Projects</span>
                  </h1>
                  <p>Done Around World</p>
                </li>
                <li>
                  <h1>99%</h1>
                  <p>Client Satisfaction</p>
                </li>
                <li>
                  <h1>
                    2020 <span>Year</span>
                  </h1>
                  <p>Established On</p>
                </li>
                <li>
                  <h1>
                    2 <span>Mins</span>
                  </h1>
                  <p>Response Time</p>
                </li>
              </ul>
            </div>

            <div className="contact-infos">
              <div className="contact-infos-inner">
                <div className="contact-info">
                  <img src={supportIcon} alt="Support" />
                  <h3>Contact Info</h3>
                  <p>
                    <a href="tel:+918985025794" target="_blank" rel="noopener noreferrer">+91 8985025794</a> <br />
                    <a href="mailto:contact@nighwantech.com" target="_blank" rel="noopener noreferrer">contact@nighwantech.com</a>
                  </p>
                </div>
                <div className="contact-office-info contact-info">
                  <img src={mapIcon} alt="Map" />
                  <h3>Visit our office</h3>
                  <p>
                    Hyderabad, TS <br />
                    Gaya, BH
                  </p>
                </div>
                <ul className="contact-social-links">
                  <li>
                    <a href="https://www.facebook.com/Nighwantech" target="_blank" rel="noopener noreferrer">
                      <i className="iconoir-facebook"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/nighwantech" target="_blank" rel="noopener noreferrer">
                      <i className="iconoir-x"></i>
                      X
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/nighwantech/" target="_blank" rel="noopener noreferrer">
                      <i className="iconoir-instagram"></i>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                      <i className="iconoir-linkedin"></i>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@Nighwantech" target="_blank" rel="noopener noreferrer">
                      <i className="iconoir-youtube"></i>
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded CSS */}
        <style jsx>{`
          .error-input {
            border-color: red !important;
            color: red !important;
          }

          .error-message {
            color: red;
            font-size: 0.875rem;
            margin-top: 0.25rem;
          }
        `}</style>
      </section>
    </ErrorBoundary>
  );
};

export default ContactArea;