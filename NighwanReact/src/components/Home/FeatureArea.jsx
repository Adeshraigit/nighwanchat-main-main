import React from 'react';
import { Link } from 'react-router-dom';
import featureImg1 from '../../assets/imgs/feature-img-1.png'; // Adjust the path to your assets
import featureImg2 from '../../assets/imgs/feature-img-2.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const FeatureArea = () => {
  return (
    <section className="feature-area">
      <div className="custom-container">
        <div className="custom-row align-items-center">
          <div className="feature-left d-flex">
            <div className="feature-img-card">
              <h3>
                Start your <br />
                project from <br />
                your pocket.
              </h3>
              <img src={featureImg1} alt="Feature" />
            </div>
            <div className="feature-img-card">
              <h3>
                Available on <br />
                all responsive <br />
                devices.
              </h3>
              <img src={featureImg2} alt="Feature" />
            </div>
          </div>

          <div className="feature-right">
            <div className="feature-content">
              <h5 className="section-subtitle">FEATURED PRODUCT</h5>
              <h2 className="section-title">Seamless productivity with our new app</h2>
              <p>
                Download Slack and experience a new era of organization and accomplishment.
              </p>
              <ul>
                <li>
                  <i className="las la-check"></i> PPD Development
                </li>
                <li>
                  <i className="las la-check"></i> Easy to Use
                </li>
              </ul>
              <div className="btns-group">
                <Link to="/app-store" className="theme-simple-btn">
                  <i className="lab la-apple"></i>
                  Get it on App Store
                </Link>
                <Link to="/play-store" className="theme-simple-btn">
                  <i className="lab la-google-play"></i>
                  Get it on Play Store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;