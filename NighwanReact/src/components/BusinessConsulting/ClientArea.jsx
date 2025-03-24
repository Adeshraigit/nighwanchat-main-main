import React from 'react';
import youtubeLogo from '../../assets/imgs/youtube-2.svg'; // Adjust the path to your assets
import webflowLogo from '../../assets/imgs/webflow-2.svg';
import upworkLogo from '../../assets/imgs/upwork.svg';
import shopifyLogo from '../../assets/imgs/shopify-2.svg';
import netflixLogo from '../../assets/imgs/netflix.svg';
import zoomLogo from '../../assets/imgs/zoom.svg';
import forbesLogo from '../../assets/imgs/forbes.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const ClientArea = () => {
  return (
    <section className="client-area client-area-2">
      <div className="custom-container">
        <p>Slack is used by over 60,000+ companies across the world</p>
        <div className="clients clients-marquee d-flex align-items-center">
          <div className="client-logo simple-shadow">
            <img src={youtubeLogo} alt="Client" />
          </div>
          <div className="client-logo simple-shadow">
            <img src={webflowLogo} alt="Client" />
          </div>
          <div className="client-logo simple-shadow">
            <img src={upworkLogo} alt="Client" />
          </div>
          <div className="client-logo simple-shadow">
            <img src={shopifyLogo} alt="Client" />
          </div>
          <div className="client-logo simple-shadow">
            <img src={netflixLogo} alt="Client" />
          </div>
          <div className="client-logo simple-shadow">
            <img src={zoomLogo} alt="Client" />
          </div>
          <div className="client-logo simple-shadow">
            <img src={forbesLogo} alt="Client" />
          </div>
          <div className="client-logo simple-shadow">
            <img src={shopifyLogo} alt="Client" />
          </div>
          <div className="client-logo simple-shadow">
            <img src={netflixLogo} alt="Client" />
          </div>
          <div className="client-logo simple-shadow">
            <img src={zoomLogo} alt="Client" />
          </div>
          <div className="client-logo simple-shadow">
            <img src={forbesLogo} alt="Client" />
          </div>
          <div className="client-logo" style={{ minWidth: 0 }}></div>
        </div>
      </div>
    </section>
  );
};

export default ClientArea;