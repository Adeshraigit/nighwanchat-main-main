import React from 'react';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS
import { Space } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-service-wrap hero-section-wrap hero-about-wrap">
      <div style={{ paddingTop: '100px', paddingBottom: '100px'}} className="hero-section-content-wrap">
        <div className="custom-container">
          <div className="hero-portfolio-body">
            <div className="hero-section-content text-center">
              <h5 className="section-subtitle">NIGHWAN TECHNOLOGY</h5>
              <h1 className="section-title fade-in">
              Revolutionizing the Future with Nighwan Technology
              </h1>
              <p>
              Experience the transformative power of innovation with our seamless and dynamic technology solutions designed to revolutionize the way businesses operate. We integrate AI/ML, Lean Technology, and IT innovation to create intelligent, efficient, and future-ready systems that drive growth and efficiency.
              </p>
            </div>

            <div className="hero-company-boxes">
              <div className="hero-company-box simple-shadow">
                <h1>150+</h1>
                <h3>Projects</h3>
              </div>
              <div className="hero-company-box simple-shadow">
                <h1>99%</h1>
                <h3>Client Satisfaction</h3>
              </div>
              <div className="hero-company-box simple-shadow">
                <h1>200 +</h1>
                <h3>Our Customer</h3>
              </div>
              <div className="hero-company-box simple-shadow">
                <h1>2020</h1>
                <h3>&nbsp;&nbsp;Since</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;