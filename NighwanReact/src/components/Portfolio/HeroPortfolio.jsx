import React from 'react';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const HeroPortfolio = () => {
  return (
    <section className="hero-service-wrap hero-section-wrap hero-portfolio-wrap">
      <div style={{ paddingTop: '100px'}} className="hero-section-content-wrap">
        <div className="custom-container">
          <div className="hero-portfolio-body">
            <div className="hero-section-content text-center">
              <h5 className="section-subtitle">Our Products</h5>
              <h1 className="section-title fade-in">
                We are doing world class <br /> projects in your way
              </h1>
              <p>
                Our projects are born from a passion for innovation that knows no bounds. We see
                challenges as opportunities to push the envelope and explore new frontiers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortfolio;