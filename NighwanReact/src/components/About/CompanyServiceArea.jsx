import React from 'react';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS
import about from "../../assets/imgs/NighwanTech Startup.png"

const CompanyServiceArea = () => {
  return (
    <section style={{ paddingTop: '10px', paddingBottom: '100px' }} className="company-service-area">
      <div className="custom-container">
        <div className="hero-service-about">
          <div className="section-header d-flex align-items-center justify-content-between w-full">
            <div className="left">
              <h5 className="section-subtitle">OUR STORY</h5>
              <h2 className="section-title">What makes our company stand out?
              </h2>
              <p>Get in touch today and start your transformation!</p>
            </div>
            <a href="/contact" className="theme-btn">
              Contact Us
            </a>
          </div>

          {/* Updated image path */}
          <img src={about} alt="Service About" />
          <div className="hero-service-about-body">
            <p>
            We provide next-generation technology solutions powered by AI/ML, Lean Technology, and IT innovation, enabling businesses to achieve intelligent automation, operational efficiency, and seamless digital transformation.
            <br/> <br/>
            Recognized by DPIIT, Government of India, we have been awarded a ₹10 lakh seed fund by the Bihar Industrial Department for the development of our Lean Technology-based ERP system. Our commitment goes beyond just delivering solutions—we ensure continuous support, optimization, and growth to empower your business for the future.</p>
            <ul>
              <li>
                <i className="las la-check"></i> AI-Driven Automation
              </li>
              <li>
                <i className="las la-check"></i> Lean-Optimized ERP
              </li>
              <li>
                <i className="las la-check"></i> Seamless Digital Integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyServiceArea;