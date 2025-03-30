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
import portfolio4 from '../assets/imgs/nav/Iot.png';
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
                                        <Link to="/service-details/Data" onClick={handleMenuItemClick}>Data Analytics</Link>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="mega-menu-service-card">
                                    <span className="icon">
                                      <img src={serviceIcon7} alt="Service" />
                                    </span>
                                    <div className="content">
                                      <h2>
                                        <Link to="/service-details/Iot" onClick={handleMenuItemClick}>IoT Solutions
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
                                    <a href="https://www.facebook.com/Nighwantech" target="_blank" rel="noopener noreferrer">
                                      <i className="iconoir-facebook"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://x.com/nighwantech" target="_blank" rel="noopener noreferrer">
                                      <i className="iconoir-x"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.instagram.com/nighwantech/" target="_blank" rel="noopener noreferrer">
                                      <i className="iconoir-instagram"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                                      <i className="iconoir-linkedin"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.youtube.com/@Nighwantech" target="_blank" rel="noopener noreferrer">
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
                                      <Link to="/product-detail/Iot" onClick={handleMenuItemClick}>
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
                                    <a href="https://www.facebook.com/Nighwantech" target="_blank" rel="noopener noreferrer">
                                      <i className="iconoir-facebook"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://x.com/nighwantech" target="_blank" rel="noopener noreferrer">
                                      <i className="iconoir-x"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.instagram.com/nighwantech/" target="_blank" rel="noopener noreferrer">
                                      <i className="iconoir-instagram"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                                      <i className="iconoir-linkedin"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.youtube.com/@Nighwantech" target="_blank" rel="noopener noreferrer">
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

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/css/nighlogo.svg';


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isPortfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
//   const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);

//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleMenuItemClick = () => {
//     if (isMobile) {
//       setIsMenuOpen(false);
//       setPortfolioDropdownOpen(false);
//       setServicesDropdownOpen(false);
//     }
//   };

//   const handlePortfolioDropdown = () => {
//     if (!isMobile) setPortfolioDropdownOpen(true);
//   };

//   const handleServicesDropdown = () => {
//     if (!isMobile) setServicesDropdownOpen(true);
//   };

//   const closeDropdowns = () => {
//     if (!isMobile) {
//       setPortfolioDropdownOpen(false);
//       setServicesDropdownOpen(false);
//     }
//   };

//   const togglePortfolioDropdown = (e) => {
//     e.stopPropagation();
//     setPortfolioDropdownOpen(prev => !prev);
//   };

//   const toggleServicesDropdown = (e) => {
//     e.stopPropagation();
//     setServicesDropdownOpen(prev => !prev);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-md z-50">
//       <div className="container mx-auto px-4 flex items-center justify-between py-4">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <Link to="/" className="flex items-center">
//             <img src={logo} alt="Logo" className="h-10" />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <Link
//             to="/"
//             className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
//             onClick={handleMenuItemClick}
//           >
//             Home
//           </Link>
//           <Link
//             to="/our-roots"
//             className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
//             onClick={handleMenuItemClick}
//           >
//             Our Roots
//           </Link>
//           <Link
//             to="/lean"
//             className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
//             onClick={handleMenuItemClick}
//           >
//             Lean Consultancy
//           </Link>

//           {/* Services Dropdown */}
//           {/* <div className="relative">
//             <button
//               className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
//               onMouseEnter={handleServicesDropdown}
//               onMouseLeave={closeDropdowns}
//               onClick={toggleServicesDropdown}
//             >
//               <Link
//             to="/lean"
//             className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
//             onClick={handleMenuItemClick}
//           >
//             Services
//           </Link>
              
//               <svg
//                 className="ml-2 h-3 w-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {isServicesDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                 <div className="p-4 space-y-4">
//                   <div className="space-y-2">
//                     <h3 className="text-gray-800 font-medium">Services</h3>
//                     <Link
//                       to="/lean"
//                       className="block text-gray-600 hover:text-blue-600 text-sm"
//                       onClick={handleMenuItemClick}
//                     >
//                       Lean Consultancy
//                     </Link>
//                     <Link
//                       to="/service-details/Branding"
//                       className="block text-gray-600 hover:text-blue-600 text-sm"
//                       onClick={handleMenuItemClick}
//                     >
//                       Branding
//                     </Link>
//                     <Link
//                       to="/service-details/ERP"
//                       className="block text-gray-600 hover:text-blue-600 text-sm"
//                       onClick={handleMenuItemClick}
//                     >
//                       ERP Development
//                     </Link>
//                     <Link
//                       to="/service-details/aim"
//                       className="block text-gray-600 hover:text-blue-600 text-sm"
//                       onClick={handleMenuItemClick}
//                     >
//                       AI/ML Solutions
//                     </Link>
//                     <Link
//                       to="/service-details/Web"
//                       className="block text-gray-600 hover:text-blue-600 text-sm"
//                       onClick={handleMenuItemClick}
//                     >
//                       Web / Mobile App
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div> */}
//           {/* Services Mega Menu */}
// <div className="relative">
//   <button
//     className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
//     onMouseEnter={handleServicesDropdown}
//     onMouseLeave={closeDropdowns}
//     onClick={toggleServicesDropdown}
//   >
//     Services
//     <svg
//       className="ml-2 h-3 w-3"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//     </svg>
//   </button>

//   {isServicesDropdownOpen && (
//     <div
//       className="absolute left-0 mt-2 w-full max-w-6xl bg-white border border-gray-200 rounded-md shadow-lg z-50"
//       onMouseLeave={closeDropdowns}
//     >
//       <div className="flex flex-col md:flex-row p-6 gap-6">
//         {/* Left Grid with Icons */}
//         <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
//           <Link to="/lean" onClick={handleMenuItemClick} className="flex items-center p-4 rounded-md bg-gray-50 hover:bg-gray-100 transition">
//             <div className="text-orange-500 text-xl mr-3">
//               <i className="fas fa-project-diagram"></i>
//             </div>
//             <span className="text-sm font-medium">Lean Consultancy</span>
//           </Link>
//           <Link to="/service-details/aim" onClick={handleMenuItemClick} className="flex items-center p-4 rounded-md bg-gray-50 hover:bg-gray-100 transition">
//             <div className="text-orange-500 text-xl mr-3">
//               <i className="fas fa-robot"></i>
//             </div>
//             <span className="text-sm font-medium">AI/ML Solutions</span>
//           </Link>
//           <Link to="/service-details/analytics" onClick={handleMenuItemClick} className="flex items-center p-4 rounded-md bg-gray-50 hover:bg-gray-100 transition">
//             <div className="text-orange-500 text-xl mr-3">
//               <i className="fas fa-chart-bar"></i>
//             </div>
//             <span className="text-sm font-medium">Data Analytics</span>
//           </Link>
//           <Link to="/service-details/iot" onClick={handleMenuItemClick} className="flex items-center p-4 rounded-md bg-gray-50 hover:bg-gray-100 transition">
//             <div className="text-orange-500 text-xl mr-3">
//               <i className="fas fa-microchip"></i>
//             </div>
//             <span className="text-sm font-medium">IoT Solutions</span>
//           </Link>
//         </div>

//         {/* Right Column List */}
//         <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 text-sm text-gray-700">
//           <div className="space-y-2">
//             <h4 className="font-semibold text-gray-900 mb-1">Services</h4>
//             <Link to="/lean" onClick={handleMenuItemClick} className="hover:text-blue-600 block">Lean Consultancy</Link>
//             <Link to="/service-details/Branding" onClick={handleMenuItemClick} className="hover:text-blue-600 block">Branding</Link>
//             <Link to="/service-details/ERP" onClick={handleMenuItemClick} className="hover:text-blue-600 block">ERP Development</Link>
//             <Link to="/service-details/aim" onClick={handleMenuItemClick} className="hover:text-blue-600 block">AI/ML Solutions</Link>
//             <Link to="/service-details/Web" onClick={handleMenuItemClick} className="hover:text-blue-600 block">Web / Mobile App</Link>
//           </div>
//           <div className="space-y-2 mt-6 md:mt-7">
//             <Link to="/service-details/iot" onClick={handleMenuItemClick} className="hover:text-blue-600 block">IoT Solutions</Link>
//             <Link to="/service-details/marketing" onClick={handleMenuItemClick} className="hover:text-blue-600 block">Digital Marketing</Link>
//             <Link to="/service-details/analytics" onClick={handleMenuItemClick} className="hover:text-blue-600 block">Data Analytics</Link>
//             <Link to="/service-details/devops" onClick={handleMenuItemClick} className="hover:text-blue-600 block">DevOps Services</Link>
//             <Link to="/service-details/support" onClick={handleMenuItemClick} className="hover:text-blue-600 block">IT Support & Maintenance</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )}
// </div>


//           {/* Product Dropdown */}
//           <div className="relative">
//             <button
//               className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
//               onMouseEnter={handlePortfolioDropdown}
//               onMouseLeave={closeDropdowns}
//               onClick={togglePortfolioDropdown}
//             >
//               <Link
//             to="/lean"
//             className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
//             onClick={handleMenuItemClick}
//           >
//             Product
//           </Link> 
//               <svg
//                 className="ml-2 h-3 w-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {isPortfolioDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                 <div className="p-4 space-y-4">
//                   <div className="space-y-2">
//                     <h3 className="text-gray-800 font-medium">Products</h3>
//                     <Link
//                       to="/product-detail/erp"
//                       className="block text-gray-600 hover:text-blue-600 text-sm"
//                       onClick={handleMenuItemClick}
//                     >
//                       Nighwan ERP – AI-Powered Business Management
//                     </Link>
//                     <Link
//                       to="/product-detail/ai"
//                       className="block text-gray-600 hover:text-blue-600 text-sm"
//                       onClick={handleMenuItemClick}
//                     >
//                       LeanPro – AI-Based Sales & Demand Forecasting
//                     </Link>
//                     <Link
//                       to="/product-detail/b2b"
//                       className="block text-gray-600 hover:text-blue-600 text-sm"
//                       onClick={handleMenuItemClick}
//                     >
//                       Nighwan B2B – Multi-Vendor E-Commerce Platform
//                     </Link>
//                     <Link
//                       to="/product-detail/Iot"
//                       className="block text-gray-600 hover:text-blue-600 text-sm"
//                       onClick={handleMenuItemClick}
//                     >
//                       IoTGuard – Predictive Maintenance System
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <Link
//             to="/career"
//             className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
//             onClick={handleMenuItemClick}
//           >
//             Career
//           </Link>
//           <Link
//             to="/blog"
//             className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
//             onClick={handleMenuItemClick}
//           >
//             Blogs
//           </Link>
//         </nav>

//         {/* Contact Section */}
//         <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-end pr-2">
//           <div className="flex flex-col items-start text-right">
//             <span className="text-orange-500 font-medium whitespace-nowrap">
//               Call Us
//               <svg
//                 className="inline ml-1 h-3 w-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </span>
//             <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
//               +91 8985025794
//             </span>
//           </div>
//           <Link
//             to="/contact"
//             className="bg-orange-500 text-white hover:bg-orange-700 px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap ml-2 md:ml-4"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
