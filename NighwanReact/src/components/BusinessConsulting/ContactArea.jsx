import React from 'react';
import flag from '../../assets/imgs/flag.png'; // Adjust the path to your assets
import mapImg from '../../assets/imgs/map.svg';
import supportIcon from '../../assets/imgs/support-icon.svg';
import mapIcon from '../../assets/imgs/map-icon.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const ContactArea = () => {
  return (
    <section className="contact-area">
        <div className="custom-container">
          <div className="custom-row">
            {/* <div className="contact-form-wrap">
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
                        placeholder={errors.first_name ? " Name is required." : "Your Name"}
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
            </div> */}

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
                    2020+ <span>Year</span>
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
                    +91 8985025794 <br />
                    contact@nighwantech.com
                  </p>
                </div>
                <div className="contact-office-info contact-info">
                  <img src={mapIcon} alt="Map" />
                  <h3>Visit our office</h3>
                  <p>
                    Gulmohar Park,
                    <br />
                    Hyderabad,
                    <br />
                    TN, 500019
                  </p>
                </div>
                <ul className="contact-social-links">
                  <li>
                    <a href="https://www.facebook.com/Nighwantech">
                      <i className="iconoir-facebook"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/nighwantech">
                      <i className="iconoir-x"></i>
                      X
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/nighwantech/">
                      <i className="iconoir-instagram"></i>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/">
                      <i className="iconoir-linkedin"></i>
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@Nighwantech">
                      <i className="iconoir-youtube"></i>
                      Youtube
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
  );
};

export default ContactArea;