import React from 'react';
import bgShape5 from '../../assets/imgs/bg-shape-5.svg'; // Adjust the path to your assets
import bgShape6 from '../../assets/imgs/bg-shape-6.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS 

const HeroSection = () => {
  return (
    <section className="hero-section-wrap hero-home2">
      <div style={{ paddingTop: '100px' }} className="hero-section-content-wrap">
        <img className="bg-shape slide-left" src={bgShape6} alt="Shape" />
        <img className="bg-shape2 slide-right" src={bgShape5} alt="Shape" />
        <div className="custom-container">
          <div className="hero-section-content text-center">
            <h5 className="section-subtitle">LEAN CONSULTANCY</h5>
            <h1 className="section-title fade-in">
            Accelerated Growth with Lean Expertise
            </h1>
            <p>
            Empowering businesses with modern strategies and data-driven insights, we help organizations achieve efficiency, agility, and sustainable success.
            </p>
          </div>
        </div>
      </div>
    </section>
 
  );
};

export default HeroSection;