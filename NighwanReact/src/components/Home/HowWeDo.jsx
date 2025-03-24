import React from 'react';
import bgShape1 from '../../assets/imgs/bg-shape-1.svg'; // Adjust the path to your images
import hwdIcon1 from '../../assets/imgs/hwd-icon-1.svg';
import hwdIcon2 from '../../assets/imgs/hwd-icon-2.svg';
import hwdIcon3 from '../../assets/imgs/hwd-icon-3.svg';
import hwdIcon4 from '../../assets/imgs/hwd-icon-4.svg';
import hwdIcon5 from '../../assets/imgs/hwd-icon-5.svg';
import hwdIcon6 from '../../assets/imgs/hwd-icon-6.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS
import { Link } from 'react-router-dom';  

const HowWeDo = () => {
  return (
    <section className="how-we-do-area">
      <div className="custom-container">
        <div className="custom-row">
          <img src={bgShape1} alt="Shape" className="animation-slide-left how-we-do-bg" />
          <div className="how-we-do-left-content">
            <div className="top">
              <h5 className="section-subtitle">Our Model</h5>
              <h1 className="section-title">How do we work?</h1>
              <p>Transforming Ideas into Impactful Solutions.</p>
            </div>
            <Link href="/about" className="theme-btn">
              Learn More
              <i className="iconoir-arrow-up-right"></i>
            </Link>
          </div>
          <div className="how-we-do-right-content">
            <div className="how-we-do-items d-flex align-items-center justify-content-center">
              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>
                <div className="how-we-do-icon">
                  <img src={hwdIcon1} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Understand</h4>
                  <p>Learn</p>
                </div>
              </div>

              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>
                <div className="how-we-do-icon">
                  <img src={hwdIcon2} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Analyze</h4>
                  <p>Examine</p>
                </div>
              </div>

              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>
                <div className="how-we-do-icon">
                  <img src={hwdIcon3} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Innovate</h4>
                  <p>Create</p>
                </div>
              </div>
            </div>

            <div className="how-we-do-items d-flex align-items-center justify-content-center">
              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>
                <div className="how-we-do-icon">
                  <img src={hwdIcon4} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Implement</h4>
                  <p>Apply</p>
                </div>
              </div>

              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>
                <div className="how-we-do-icon">
                  <img src={hwdIcon5} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Optimize</h4>
                  <p>Improve</p>
                </div>
              </div>
            </div>

            <div className="how-we-do-items d-flex align-items-center justify-content-center">
              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>
                <div className="how-we-do-icon">
                  <img src={hwdIcon6} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Evolve</h4>
                  <p>Adapt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;