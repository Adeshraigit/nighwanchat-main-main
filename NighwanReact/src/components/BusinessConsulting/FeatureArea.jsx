import React from 'react';
import bgShapeFeature from '../../assets/imgs/bg-shape-feature.svg'; // Adjust the path to your assets
import hwdIcon1 from '../../assets/imgs/hwd-icon-1.svg';
import hwdIcon2 from '../../assets/imgs/hwd-icon-2.svg';
import hwdIcon4 from '../../assets/imgs/hwd-icon-4.svg';
import hwdIcon6 from '../../assets/imgs/hwd-icon-6.svg';
import iphone13 from '../../assets/imgs/lean.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const FeatureArea = () => {
  return (
    <section className="feature2-area">
      <img src={bgShapeFeature} alt="Shape" className="bg-shape" />
      <div className="custom-container">
        <div className="custom-row">
          <div className="feature2-content">
            <div className="feature2-header">
              <h5 className="section-subtitle">LEAN CONSULTING EXCELLENCE</h5>
              <h1 className="section-title">
                Build a solution that <br />
                drives efficiency and growth.
              </h1>
            </div>

            <div className="feature2-content-body d-flex flex-wrap">
              <div className="feature2-card">
                <span className="icon">
                  <img src={hwdIcon1} alt="Icon" />
                </span>
                <h3>Smart Optimization</h3>
                <p>
                Leveraging AI-driven insights to streamline processes and eliminate inefficiencies. Enhancing productivity through automated decision-making and intelligent workflows.
                </p>
              </div>
              <div className="feature2-card">
                <span className="icon">
                  <img src={hwdIcon4} alt="Icon" />
                </span>
                <h3>AI-Powered Analytics</h3>
                <p>
                Utilizing machine learning to analyze production data for better forecasting and resource allocation. Data-driven insights to optimize efficiency and minimize waste.
                </p>
              </div>
              <div className="feature2-card">
                <span className="icon">
                  <img src={hwdIcon6} alt="Icon" />
                </span>
                <h3>Performance Tracking</h3>
                <p>
                Developing AI-enhanced KPIs and real-time monitoring tools to track manufacturing efficiency. Continuous improvement through real-time analytics and automated reporting.
                </p>
              </div>
              <div className="feature2-card">
                <span className="icon">
                  <img src={hwdIcon2} alt="Icon" />
                </span>
                <h3>Process Automation</h3>
                <p>
                Integrating AI and IoT for automated quality control and predictive maintenance. Smart automation solutions to enhance lean manufacturing operations.
                </p>
              </div>
            </div>
          </div>

          <div className="feature2-img-box">
            <div className="feature2-img-box-inner">
              <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                <div className="mac-buttons d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="action-btn d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <img src={iphone13} alt="Iphone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;