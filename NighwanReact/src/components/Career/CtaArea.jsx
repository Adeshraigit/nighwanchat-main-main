import React from 'react';
import bgShape11 from '../../assets/imgs/bg-shape-11.svg'; // Adjust the path to your assets
import smallImg1 from '../../assets/imgs/small-img-1.png';
import smallImg2 from '../../assets/imgs/small-img-2.png';
import smallImg3 from '../../assets/imgs/small-img-3.png';
import smallImg4 from '../../assets/imgs/small-img-4.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const CtaArea = () => {
  return (
    <section className="cta-area cta-style-3">
      <div className="custom-container">
        <div className="cta-body text-center">
          <img
            src={bgShape11}
            alt="Shape"
            className="animation-slide-left bg-shape"
          />
          <div className="our-expert-team-box">
            <div className="our-expert-team-box-inner d-flex align-items-center">
              <div className="imgs d-flex align-items-center">
                <img src={smallImg4} alt="team" />
                <img src={smallImg3} alt="team" />
                <img src={smallImg2} alt="team" />
                <img src={smallImg1} alt="team" />
              </div>
            </div>
          </div>
          <h2>Need any further assistance?</h2>
          <p>Feel free to reach out for any inquiries or assistance.</p>
          <a href="contact.html" className="theme-btn">
            Book an appointment now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaArea;