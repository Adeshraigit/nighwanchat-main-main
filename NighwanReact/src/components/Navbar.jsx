import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/css/nighlogo.svg';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/line.css';
import hwdIcon2 from '../assets/imgs/hwd-icon-2.svg';
import hwdIcon4 from '../assets/imgs/hwd-icon-4.svg';
// import portfolio1 from '../assets/imgs/portfolio-mega-menu-1.jpg';
import portfolio2 from '../assets/imgs/nav/navbarAI.png'; 
import portfolio1 from '../assets/imgs/nav/erp.png';
import portfolio3 from '../assets/imgs/nav/ecommerce.png';    
import portfolio4 from '../assets/imgs/nav/iot.png';
import hrms from '../assets/imgs/hrms.png';
import serviceIcon1 from '../assets/imgs/service-icon-1.svg';
import serviceIcon7 from '../assets/imgs/service-icon-7.svg';
import serviceIcon4 from '../assets/imgs/service-icon-4.svg';

// Define CSS styles as JavaScript objects
const styles = {
  mobileStyles: `
    @media only screen and (max-width: 576px) {
      .mega-menu-social {
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        width: 100% !important;
        margin-bottom: 15px !important;
      }

      .mega-menu-social li {
        margin: 0 10px !important;
      }
    }
  `,
  smallDeviceStyles: `
    @media only screen and (min-width: 577px) and (max-width: 767px) {
      .mega-menu-social {
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        width: 100% !important;
        margin-bottom: 15px !important;
      }

      .mega-menu-social li {
        margin: 0 10px !important;
      }
    }
  `,
  dropdownStyles: `
    .mega-menu-service-cards .content h2 a {
      color: black !important; /* Change orange text to black */
    }
    .mega-menu-links ul li a {
      font-size: 1em !important; /* Increase font size for grey "Services" texts */
    }
  `,
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
      setPortfolioDropdownOpen(false);
      setServicesDropdownOpen(false);
    }
  };

  const handlePortfolioDropdown = () => {
    if (!isMobile) setPortfolioDropdownOpen(true);
  };

  const handleServicesDropdown = () => {
    if (!isMobile) setServicesDropdownOpen(true);
  };

  const closeDropdowns = () => {
    if (!isMobile) {
      setPortfolioDropdownOpen(false);
      setServicesDropdownOpen(false);
    }
  };

  const togglePortfolioDropdown = (e) => {
    e.stopPropagation();
    setPortfolioDropdownOpen(prev => !prev);
  };

  const toggleServicesDropdown = (e) => {
    e.stopPropagation();
    setServicesDropdownOpen(prev => !prev);
  };

  return (
    <>
      <style>
        {styles.mobileStyles}
        {styles.smallDeviceStyles}
        {styles.dropdownStyles}
      </style>
      <header className="header-area">
        <div className="custom-container">
          <div className="custom-row align-items-center justify-content-between">
            <div className="header-left d-flex align-items-center">
              <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
              </Link>

              <div className="header-left-right">
                <Link to="/contact" className="theme-btn">
                  Contact Us
                </Link>
                <span className="menu-bar" onClick={toggleMenu}>
                  <i className="las la-bars"></i>
                </span>
              </div>

              <nav className={`navbar-wrapper ${isMenuOpen ? 'active' : ''}`}>
                <span className="close-menu-bar" onClick={toggleMenu}>
                  <i className="las la-times"></i>
                </span>
                <ul>
                  <li>
                    <Link onClick={handleMenuItemClick} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenuItemClick} to="/our-roots">
                      Our Roots
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenuItemClick} to="/lean">
                      Lean Consultancy
                    </Link>
                  </li>

                  <li
                    className={`mega-menu-item ${isServicesDropdownOpen ? 'active' : ''}`}
                    {...(!isMobile ? { onMouseEnter: handleServicesDropdown, onMouseLeave: closeDropdowns } : {})}
                  >
                    <div>
                      <Link to="/service" onClick={isMobile ? handleMenuItemClick : null}>Services</Link>
                      <span
                        className="dropdown-menu-item-icon"
                        onClick={toggleServicesDropdown}
                      >
                        <i className="las la-angle-down"></i>
                      </span>
                    </div>
                    {isServicesDropdownOpen && (
                      <div className="mega-menu">
                        <div className="mega-menu-inner" onMouseLeave={closeDropdowns}>
                          <div className="custom-container d-flex">
                            <div className="left">
                              <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                <div className="mega-menu-service-cards align-items-start">
                                  <div className="mega-menu-service-card">
                                    <span className="icon">
                                      <img src={serviceIcon1} alt="Service" />
                                    </span>
                                    <div className="content">
                                      <h2>
                                        <Link to="/lean" onClick={handleMenuItemClick}>Lean Consultancy</Link>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="mega-menu-service-card">
                                    <span className="icon">
                                      <img src={serviceIcon4} alt="Service" />
                                    </span>
                                    <div className="content">
                                      <h2>
                                        <Link to="/service-details/aim" onClick={handleMenuItemClick}>AI/ML Solutions
                                        </Link>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="mega-menu-service-card">
                                    <span className="icon">
                                      <img src={hwdIcon4} alt="Service" />
                                    </span>
                                    <div className="content">
                                      <h2>
                                        <Link to="/service-details/data" onClick={handleMenuItemClick}>Data Analytics</Link>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="mega-menu-service-card">
                                    <span className="icon">
                                      <img src={serviceIcon7} alt="Service" />
                                    </span>
                                    <div className="content">
                                      <h2>
                                        <Link to="/service-details/iot" onClick={handleMenuItemClick}>IoT Solutions
                                        </Link>
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="mega-menu-links d-flex">
                                  <div className="mega-menu-link">
                                    <h3>Services</h3>
                                    <ul>
                                      <li>
                                        <Link to="/lean" onClick={handleMenuItemClick}>
                                          Lean Consultancy
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/service-details/Branding" onClick={handleMenuItemClick}>
                                          Branding
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/service-details/ERP" onClick={handleMenuItemClick}>
                                          ERP Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/service-details/aim" onClick={handleMenuItemClick}>
                                          AI/ML Solutions
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/service-details/Web" onClick={handleMenuItemClick}>
                                          Web / Mobile App
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mega-menu-link">
                                    <h3>&nbsp;</h3>
                                    <ul>
                                      <li>
                                        <Link to="/service-details/Iot" onClick={handleMenuItemClick}>
                                          IoT Solutions
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/service-details/Digital" onClick={handleMenuItemClick}>
                                          Digital Marketing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/service-details/Data" onClick={handleMenuItemClick}>
                                          Data Analytics
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/service-details/Devops" onClick={handleMenuItemClick}>
                                          DevOps Services
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/service-details/IT" onClick={handleMenuItemClick}>
                                          IT Support & Maintenance
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="mega-menu-footer d-flex align-items-center justify-content-between w-full">
                                <ul className="mega-menu-social d-flex align-items-center">
                                  <li>
                                    <a href="https://www.facebook.com/Nighwantech">
                                      <i className="iconoir-facebook"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://x.com/nighwantech">
                                      <i className="iconoir-x"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.instagram.com/nighwantech/">
                                      <i className="iconoir-instagram"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/">
                                      <i className="iconoir-linkedin"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.youtube.com/@Nighwantech">
                                      <i className="iconoir-youtube"></i>
                                    </a>
                                  </li>
                                </ul>
                                <p>
                                  <span style={{ fontSize: '0.8em' }}>Looking for new career?</span>{' '}
                                  <Link to="/career" onClick={handleMenuItemClick}>We're hiring</Link>
                                </p>
                              </div>
                            </div>
                            <div className="right">
                              <div className="mega-menu-ads">
                                <img src={hrms} alt="iPad" />
                                <h2>Our product hits</h2>
                                <p>
                                  Our new best IT product of the <br />year 2023.
                                </p>
                                <Link to="/products" onClick={handleMenuItemClick}>View more</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li
                    className={`mega-menu-item ${isPortfolioDropdownOpen ? 'active' : ''}`}
                    {...(!isMobile ? { onMouseEnter: handlePortfolioDropdown, onMouseLeave: closeDropdowns } : {})}
                  >
                    <div>
                      <Link to="/products" onClick={isMobile ? handleMenuItemClick : null}>Product</Link>
                      <span
                        className="dropdown-menu-item-icon"
                        onClick={togglePortfolioDropdown}
                      >
                        <i className="las la-angle-down"></i>
                      </span>
                    </div>
                    {isPortfolioDropdownOpen && (
                      <div className="mega-menu mega-menu-portfolio">
                        <div className="mega-menu-inner" onMouseLeave={closeDropdowns}>
                          <div className="custom-container d-flex">
                            <div className="left">
                              <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                <div className="mega-menu-portfolio-card">
                                  <div className="img-box">
                                    <img src={portfolio1} alt="Portfolio" />
                                  </div>
                                  <div className="content-box">
                                    <h3>
                                      <Link to="/product-detail/erp" onClick={handleMenuItemClick}>
                                        Nighwan ERP – AI-Powered Business Management
                                      </Link>
                                    </h3>
                                    <p>
                                      A custom-built ERP system designed for businesses <br />that need an integrated and intelligent management solution.
                                    </p>
                                  </div>
                                </div>
                                <div className="mega-menu-portfolio-card">
                                  <div className="img-box">
                                    <img src={portfolio2} alt="Portfolio" />
                                  </div>
                                  <div className="content-box">
                                    <h3>
                                      <Link to="/product-detail/ai" onClick={handleMenuItemClick}>
                                        LeanPro – AI-Based Sales & Demand Forecasting
                                      </Link>
                                    </h3>
                                    <p>
                                      An advanced AI/ML-driven predictive analytics tool designed for manufacturers and retailers to optimize inventory and sales.<br />
                                    </p>
                                  </div>
                                </div>
                                <div className="mega-menu-portfolio-card">
                                  <div className="img-box">
                                    <img src={portfolio3} alt="Portfolio" />
                                  </div>
                                  <div className="content-box">
                                    <h3>
                                      <Link to="/product-detail/b2b" onClick={handleMenuItemClick}>
                                        Nighwan B2B – Multi-Vendor E-Commerce Platform
                                      </Link>
                                    </h3>
                                    <p>
                                      A next-gen B2B e-commerce platform that helps businesses list, sell, and manage their products seamlessly. <br />
                                    </p>
                                  </div>
                                </div>
                                <div className="mega-menu-portfolio-card">
                                  <div className="img-box">
                                    <img src={portfolio4} alt="Portfolio" />
                                  </div>
                                  <div className="content-box">
                                    <h3>
                                      <Link to="/product-detail/iot" onClick={handleMenuItemClick}>
                                        IoTGuard – Predictive Maintenance System
                                      </Link>
                                    </h3>
                                    <p>
                                      A smart IoT solution that enables businesses to monitor and maintain equipment health in real-time. <br />
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="mega-menu-footer d-flex align-items-center justify-content-between w-full">
                                <ul className="mega-menu-social d-flex align-items-center">
                                  <li>
                                    <a href="https://www.facebook.com/Nighwantech">
                                      <i className="iconoir-facebook"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://x.com/nighwantech">
                                      <i className="iconoir-x"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.instagram.com/nighwantech/">
                                      <i className="iconoir-instagram"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/">
                                      <i className="iconoir-linkedin"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.youtube.com/@Nighwantech">
                                      <i className="iconoir-youtube"></i>
                                    </a>
                                  </li>
                                </ul>
                                <p>
                                  <Link to="/products" onClick={handleMenuItemClick}>
                                    View Product <i className="iconoir-arrow-up-right"></i>
                                  </Link>
                                </p>
                              </div>
                            </div>
                            <div className="right">
                              <div className="mega-menu-ads">
                                <img src={hrms} alt="iPad" />
                                <h2>HRMS with
                                Job Portal</h2>
                                <p>
                                  Download HRMS in your mobile for <br />your daily usage.
                                </p>
                                <Link to="/products" onClick={handleMenuItemClick}>View more</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link onClick={handleMenuItemClick} to="/career">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenuItemClick} to="/blog">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right">
              <div className="header-contact-info d-flex align-items-center">
                <div className="phone-number">
                  <a href="tel:+91 8985025794">
                    Call Us <i className="iconoir-arrow-up-right"></i>
                  </a>
                  <a href="tel:+91 8985025794">
                  +91 8985025794
                  </a>
                </div>
                <Link to="/contact" className="theme-btn">
                  Contact Us
                </Link>
            </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

    