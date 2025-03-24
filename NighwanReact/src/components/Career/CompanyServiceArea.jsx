import React from 'react';
import heroCareerAbout from '../../assets/imgs/career top.png'; // Adjust the path to your assets
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const CompanyServiceArea = () => {
  return (
    <section className="company-service-area career-service-area">
      <div className="custom-container">
        <div className="hero-service-about">
          <img src={heroCareerAbout} alt="Service About" />
          <div className="hero-service-about-body">
            <p>
            At Nighwan Technology, we are a team of top talents, experts, and visionaries dedicated to innovation and excellence. With a commitment to quality, we deliver world-class solutions from concept to execution, ensuring precision at every step. Our collaborative environment fosters growth, adaptability, and success.
            </p>
            <ul>
              <li>
                <i className="las la-check"></i>Innovative Solutions
              </li>
              <li>
                <i className="las la-check"></i> Flexible & Adaptive Culture
              </li>
              <li>
                <i className="las la-check"></i> Competitive Edge
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyServiceArea;