import React from 'react';
import serviceIcon1 from '../../assets/imgs/service-icon-1.svg'; // Adjust the path to your assets
import serviceIcon2 from '../../assets/imgs/service-icon-2.svg';
import serviceIcon3 from '../../assets/imgs/service-icon-3.svg';
import serviceIcon4 from '../../assets/imgs/service-icon-4.svg';
import serviceIcon5 from '../../assets/imgs/service-icon-5.svg';
import serviceIcon6 from '../../assets/imgs/service-icon-6.svg';
import hwdIcon4 from '../../assets/imgs/hwd-icon-4.svg';
import serviceIcon7 from '../../assets/imgs/service-icon-7.svg';
import serviceIcon8 from '../../assets/imgs/service-icon-8.svg';
import serviceIcon9 from '../../assets/imgs/service-icon-9.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const ServiceArea = () => {
  return (
    <section className="service-area service-black-area">
      <div className="custom-container">
        <div className="service-section-header section-header d-flex align-items-end justify-content-between">
          <div className="left">
            <h5 className="section-subtitle">WHAT WE’RE OFFERING</h5>
            <h1 className="section-title">
              Dealing in all professional <br />
              IT services.
            </h1>
          </div>
          <p>
            One fundamental aspect of IT services is infrastructure management. This involves the
            design, implementation, and maintenance of the hardware, software, networks, and servers.
          </p>
        </div>

        <div className="services-list">
          <div className="service-card simple-shadow">
            <img src={serviceIcon1} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Development</a>
            </h3>
            <p>Our development is pixel perfect in all ways.</p>
          </div>
          <div className="service-card simple-shadow">
            <img src={serviceIcon2} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Woo Commerce</a>
            </h3>
            <p>We have a best team for your shopping websites.</p>
          </div>
          <div className="service-card simple-shadow">
            <img src={serviceIcon3} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">CRM Solutions</a>
            </h3>
            <p>We enhance customer experiences for success.</p>
          </div>
          <div className="service-card simple-shadow">
            <img src={serviceIcon4} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Web Design</a>
            </h3>
            <p>We create vibrant, intuitive and minimalist web</p>
          </div>
          <div className="service-card simple-shadow">
            <img src={serviceIcon6} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Hardware Services</a>
            </h3>
            <p>We offers expert assistance for your IT issues.</p>
          </div>
          <div className="service-card simple-shadow">
            <img src={hwdIcon4} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Cloud Services</a>
            </h3>
            <p>we can provide all around the world.</p>
          </div>
          <div className="service-card simple-shadow">
            <img src={serviceIcon7} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Network Security</a>
            </h3>
            <p>We have a best team for your shopping websites.</p>
          </div>
          <div className="service-card simple-shadow">
            <img src={serviceIcon8} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Monitoring</a>
            </h3>
            <p>We enhance customer experiences for success.</p>
          </div>
          <div className="service-card simple-shadow">
            <img src={serviceIcon9} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Email Services</a>
            </h3>
            <p>We create vibrant, intuitive and minimalist web</p>
          </div>
          <div className="service-card simple-shadow">
            <span className="service-badge">Free!</span>
            <img src={serviceIcon5} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">IT Support</a>
            </h3>
            <p>We offers expert assistance for your IT issues.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;