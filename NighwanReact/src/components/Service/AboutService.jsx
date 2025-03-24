import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import bgShape3 from '../../assets/imgs/bg-shape-3.svg'; // Updated image import path
import aboutService7 from '../../assets/imgs/about-service-7.jpg'; // Updated image import path

const AboutService = () => {
  return (
    <section className="about-service3-area about-service3-style-2">
      <img
        src={bgShape3}
        alt="Shape"
        className="animation-slide-right bg-shape"
      />
      <div className="custom-container">
        <div className="custom-row align-items-center">
          <div className="img-box">
            <img src={aboutService7} alt="About" />
          </div>

          <div className="content-box">
            <h5 className="section-subtitle">Why Development Matters</h5>
            <h1 className="section-title">Empowering Innovation Through Developers</h1>
            <p>
            Developers, also known as coders or programmers, are the architects of digital transformation. Their expertise fuels the technology we use daily, turning ideas into powerful, scalable, and intelligent solutions that drive business success.
            </p>
            <ul>
              <li>
                <i className="las la-check"></i> PPD Development – Precision and Efficiency
              </li>
              <li>
                <i className="las la-check"></i> Seamless and User-Friendly Experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;