import React from 'react';
import { Link } from 'react-router-dom';
import bgShape1 from '../../assets/imgs/bg-shape-1.svg'; // Adjust the path to your assets
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const HeroCareer = () => {
  return (
    <section className="hero-service-wrap hero-section-wrap hero-career-wrap">
      <div className="hero-section-content-wrap">
        <img
          src={bgShape1}
          alt="Shape"
          className="animation-slide-left bg-shape"
        />
        <div className="custom-container">
          <div className="hero-portfolio-body">
            <div className="hero-section-content text-center">
              <h5 className="section-subtitle">Career</h5>
              <h2 className="section-title fade-in">You have great opportunities</h2>
              <p>
                If you are a talented and ambitious individual looking to make a mark in your career,
                we invite you to explore our career opportunities.
              </p>
              <Link to="/contact" className="theme-btn">
                Book an appointment now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCareer;