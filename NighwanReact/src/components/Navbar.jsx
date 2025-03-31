// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/css/nighlogo.svg';
// import '../assets/css/style.css';
// import '../assets/css/responsive.css';
// import '../assets/css/line.css';
// import hwdIcon2 from '../assets/imgs/hwd-icon-2.svg';
// import hwdIcon4 from '../assets/imgs/hwd-icon-4.svg';
// // import portfolio1 from '../assets/imgs/portfolio-mega-menu-1.jpg';
// import portfolio2 from '../assets/imgs/nav/navbarAI.png'; 
// import portfolio1 from '../assets/imgs/nav/erp.png';
// import portfolio3 from '../assets/imgs/nav/ecommerce.png';    
// import portfolio4 from '../assets/imgs/nav/Iot.png';
// import hrms from '../assets/imgs/hrms.png';
// import serviceIcon1 from '../assets/imgs/service-icon-1.svg';
// import serviceIcon7 from '../assets/imgs/service-icon-7.svg';
// import serviceIcon4 from '../assets/imgs/service-icon-4.svg';

// // Define CSS styles as JavaScript objects
// const styles = {
//   mobileStyles: `
//     @media only screen and (max-width: 576px) {
//       .mega-menu-social {
//         display: flex !important;
//         flex-direction: row !important;
//         justify-content: center !important;
//         width: 100% !important;
//         margin-bottom: 15px !important;
//       }

//       .mega-menu-social li {
//         margin: 0 10px !important;
//       }
//     }
//   `,
//   smallDeviceStyles: `
//     @media only screen and (min-width: 577px) and (max-width: 767px) {
//       .mega-menu-social {
//         display: flex !important;
//         flex-direction: row !important;
//         justify-content: center !important;
//         width: 100% !important;
//         margin-bottom: 15px !important;
//       }

//       .mega-menu-social li {
//         margin: 0 10px !important;
//       }
//     }
//   `,
//   dropdownStyles: `
//     .mega-menu-service-cards .content h2 a {
//       color: black !important; /* Change orange text to black */
//     }
//     .mega-menu-links ul li a {
//       font-size: 1em !important; /* Increase font size for grey "Services" texts */
//     }
//   `,
// };

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
//     <>
//       <style>
//         {styles.mobileStyles}
//         {styles.smallDeviceStyles}
//         {styles.dropdownStyles}
//       </style>
//       <header className="header-area">
//         <div className="custom-container">
//           <div className="custom-row align-items-center justify-content-between">
//             <div className="header-left d-flex align-items-center">
//               <Link to="/" className="logo">
//                 <img src={logo} alt="Logo" />
//               </Link>

//               <div className="header-left-right">
//                 <Link to="/contact" className="theme-btn">
//                   Contact Us
//                 </Link>
//                 <span className="menu-bar" onClick={toggleMenu}>
//                   <i className="las la-bars"></i>
//                 </span>
//               </div>

//               <nav className={`navbar-wrapper ${isMenuOpen ? 'active' : ''}`}>
//                 <span className="close-menu-bar" onClick={toggleMenu}>
//                   <i className="las la-times"></i>
//                 </span>
//                 <ul>
//                   <li>
//                     <Link onClick={handleMenuItemClick} to="/">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link onClick={handleMenuItemClick} to="/our-roots">
//                       Our Roots
//                     </Link>
//                   </li>
//                   <li>
//                     <Link onClick={handleMenuItemClick} to="/lean">
//                       Lean Consultancy
//                     </Link>
//                   </li>

//                   <li
//                     className={`mega-menu-item ${isServicesDropdownOpen ? 'active' : ''}`}
//                     {...(!isMobile ? { onMouseEnter: handleServicesDropdown, onMouseLeave: closeDropdowns } : {})}
//                   >
//                     <div>
//                       <Link to="/service" onClick={isMobile ? handleMenuItemClick : null}>Services</Link>
//                       <span
//                         className="dropdown-menu-item-icon"
//                         onClick={toggleServicesDropdown}
//                       >
//                         <i className="las la-angle-down"></i>
//                       </span>
//                     </div>
//                     {isServicesDropdownOpen && (
//                       <div className="mega-menu">
//                         <div className="mega-menu-inner" onMouseLeave={closeDropdowns}>
//                           <div className="custom-container d-flex">
//                             <div className="left">
//                               <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
//                                 <div className="mega-menu-service-cards align-items-start">
//                                   <div className="mega-menu-service-card">
//                                     <span className="icon">
//                                       <img src={serviceIcon1} alt="Service" />
//                                     </span>
//                                     <div className="content">
//                                       <h2>
//                                         <Link to="/lean" onClick={handleMenuItemClick}>Lean Consultancy</Link>
//                                       </h2>
//                                     </div>
//                                   </div>
//                                   <div className="mega-menu-service-card">
//                                     <span className="icon">
//                                       <img src={serviceIcon4} alt="Service" />
//                                     </span>
//                                     <div className="content">
//                                       <h2>
//                                         <Link to="/service-details/aim" onClick={handleMenuItemClick}>AI/ML Solutions
//                                         </Link>
//                                       </h2>
//                                     </div>
//                                   </div>
//                                   <div className="mega-menu-service-card">
//                                     <span className="icon">
//                                       <img src={hwdIcon4} alt="Service" />
//                                     </span>
//                                     <div className="content">
//                                       <h2>
//                                         <Link to="/service-details/Data" onClick={handleMenuItemClick}>Data Analytics</Link>
//                                       </h2>
//                                     </div>
//                                   </div>
//                                   <div className="mega-menu-service-card">
//                                     <span className="icon">
//                                       <img src={serviceIcon7} alt="Service" />
//                                     </span>
//                                     <div className="content">
//                                       <h2>
//                                         <Link to="/service-details/Iot" onClick={handleMenuItemClick}>IoT Solutions
//                                         </Link>
//                                       </h2>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="mega-menu-links d-flex">
//                                   <div className="mega-menu-link">
//                                     <h3>Services</h3>
//                                     <ul>
//                                       <li>
//                                         <Link to="/lean" onClick={handleMenuItemClick}>
//                                           Lean Consultancy
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="/service-details/Branding" onClick={handleMenuItemClick}>
//                                           Branding
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="/service-details/ERP" onClick={handleMenuItemClick}>
//                                           ERP Development
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="/service-details/aim" onClick={handleMenuItemClick}>
//                                           AI/ML Solutions
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="/service-details/Web" onClick={handleMenuItemClick}>
//                                           Web / Mobile App
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                   <div className="mega-menu-link">
//                                     <h3>&nbsp;</h3>
//                                     <ul>
//                                       <li>
//                                         <Link to="/service-details/Iot" onClick={handleMenuItemClick}>
//                                           IoT Solutions
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="/service-details/Digital" onClick={handleMenuItemClick}>
//                                           Digital Marketing
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="/service-details/Data" onClick={handleMenuItemClick}>
//                                           Data Analytics
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="/service-details/Devops" onClick={handleMenuItemClick}>
//                                           DevOps Services
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link to="/service-details/IT" onClick={handleMenuItemClick}>
//                                           IT Support & Maintenance
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="mega-menu-footer d-flex align-items-center justify-content-between w-full">
//                                 <ul className="mega-menu-social d-flex align-items-center">
//                                   <li>
//                                     <a href="https://www.facebook.com/Nighwantech" target="_blank" rel="noopener noreferrer">
//                                       <i className="iconoir-facebook"></i>
//                                     </a>
//                                   </li>
//                                   <li>
//                                     <a href="https://x.com/nighwantech" target="_blank" rel="noopener noreferrer">
//                                       <i className="iconoir-x"></i>
//                                     </a>
//                                   </li>
//                                   <li>
//                                     <a href="https://www.instagram.com/nighwantech/" target="_blank" rel="noopener noreferrer">
//                                       <i className="iconoir-instagram"></i>
//                                     </a>
//                                   </li>
//                                   <li>
//                                     <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer">
//                                       <i className="iconoir-linkedin"></i>
//                                     </a>
//                                   </li>
//                                   <li>
//                                     <a href="https://www.youtube.com/@Nighwantech" target="_blank" rel="noopener noreferrer">
//                                       <i className="iconoir-youtube"></i>
//                                     </a>
//                                   </li>
//                                 </ul>
//                                 <p>
//                                   <span style={{ fontSize: '0.8em' }}>Looking for new career?</span>{' '}
//                                   <Link to="/career" onClick={handleMenuItemClick}>We're hiring</Link>
//                                 </p>
//                               </div>
//                             </div>
//                             <div className="right">
//                               <div className="mega-menu-ads">
//                                 <img src={hrms} alt="iPad" />
//                                 <h2>Our product hits</h2>
//                                 <p>
//                                   Our new best IT product of the <br />year 2023.
//                                 </p>
//                                 <Link to="/products" onClick={handleMenuItemClick}>View more</Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </li>
//                   <li
//                     className={`mega-menu-item ${isPortfolioDropdownOpen ? 'active' : ''}`}
//                     {...(!isMobile ? { onMouseEnter: handlePortfolioDropdown, onMouseLeave: closeDropdowns } : {})}
//                   >
//                     <div>
//                       <Link to="/products" onClick={isMobile ? handleMenuItemClick : null}>Product</Link>
//                       <span
//                         className="dropdown-menu-item-icon"
//                         onClick={togglePortfolioDropdown}
//                       >
//                         <i className="las la-angle-down"></i>
//                       </span>
//                     </div>
//                     {isPortfolioDropdownOpen && (
//                       <div className="mega-menu mega-menu-portfolio">
//                         <div className="mega-menu-inner" onMouseLeave={closeDropdowns}>
//                           <div className="custom-container d-flex">
//                             <div className="left">
//                               <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
//                                 <div className="mega-menu-portfolio-card">
//                                   <div className="img-box">
//                                     <img src={portfolio1} alt="Portfolio" />
//                                   </div>
//                                   <div className="content-box">
//                                     <h3>
//                                       <Link to="/product-detail/erp" onClick={handleMenuItemClick}>
//                                         Nighwan ERP – AI-Powered Business Management
//                                       </Link>
//                                     </h3>
//                                     <p>
//                                       A custom-built ERP system designed for businesses <br />that need an integrated and intelligent management solution.
//                                     </p>
//                                   </div>
//                                 </div>
//                                 <div className="mega-menu-portfolio-card">
//                                   <div className="img-box">
//                                     <img src={portfolio2} alt="Portfolio" />
//                                   </div>
//                                   <div className="content-box">
//                                     <h3>
//                                       <Link to="/product-detail/ai" onClick={handleMenuItemClick}>
//                                         LeanPro – AI-Based Sales & Demand Forecasting
//                                       </Link>
//                                     </h3>
//                                     <p>
//                                       An advanced AI/ML-driven predictive analytics tool designed for manufacturers and retailers to optimize inventory and sales.<br />
//                                     </p>
//                                   </div>
//                                 </div>
//                                 <div className="mega-menu-portfolio-card">
//                                   <div className="img-box">
//                                     <img src={portfolio3} alt="Portfolio" />
//                                   </div>
//                                   <div className="content-box">
//                                     <h3>
//                                       <Link to="/product-detail/b2b" onClick={handleMenuItemClick}>
//                                         Nighwan B2B – Multi-Vendor E-Commerce Platform
//                                       </Link>
//                                     </h3>
//                                     <p>
//                                       A next-gen B2B e-commerce platform that helps businesses list, sell, and manage their products seamlessly. <br />
//                                     </p>
//                                   </div>
//                                 </div>
//                                 <div className="mega-menu-portfolio-card">
//                                   <div className="img-box">
//                                     <img src={portfolio4} alt="Portfolio" />
//                                   </div>
//                                   <div className="content-box">
//                                     <h3>
//                                       <Link to="/product-detail/Iot" onClick={handleMenuItemClick}>
//                                         IoTGuard – Predictive Maintenance System
//                                       </Link>
//                                     </h3>
//                                     <p>
//                                       A smart IoT solution that enables businesses to monitor and maintain equipment health in real-time. <br />
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="mega-menu-footer d-flex align-items-center justify-content-between w-full">
//                                 <ul className="mega-menu-social d-flex align-items-center">
//                                   <li>
//                                     <a href="https://www.facebook.com/Nighwantech" target="_blank" rel="noopener noreferrer">
//                                       <i className="iconoir-facebook"></i>
//                                     </a>
//                                   </li>
//                                   <li>
//                                     <a href="https://x.com/nighwantech" target="_blank" rel="noopener noreferrer">
//                                       <i className="iconoir-x"></i>
//                                     </a>
//                                   </li>
//                                   <li>
//                                     <a href="https://www.instagram.com/nighwantech/" target="_blank" rel="noopener noreferrer">
//                                       <i className="iconoir-instagram"></i>
//                                     </a>
//                                   </li>
//                                   <li>
//                                     <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer">
//                                       <i className="iconoir-linkedin"></i>
//                                     </a>
//                                   </li>
//                                   <li>
//                                     <a href="https://www.youtube.com/@Nighwantech" target="_blank" rel="noopener noreferrer">
//                                       <i className="iconoir-youtube"></i>
//                                     </a>
//                                   </li>
//                                 </ul>
//                                 <p>
//                                   <Link to="/products" onClick={handleMenuItemClick}>
//                                     View Product <i className="iconoir-arrow-up-right"></i>
//                                   </Link>
//                                 </p>
//                               </div>
//                             </div>
//                             <div className="right">
//                               <div className="mega-menu-ads">
//                                 <img src={hrms} alt="iPad" />
//                                 <h2>HRMS with
//                                 Job Portal</h2>
//                                 <p>
//                                   Download HRMS in your mobile for <br />your daily usage.
//                                 </p>
//                                 <Link to="/products" onClick={handleMenuItemClick}>View more</Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </li>
//                   <li>
//                     <Link onClick={handleMenuItemClick} to="/career">
//                       Career
//                     </Link>
//                   </li>
//                   <li>
//                     <Link onClick={handleMenuItemClick} to="/blog">
//                       Blogs
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//             <div className="header-right">
//               <div className="header-contact-info d-flex align-items-center">
//                 <div className="phone-number">
//                   <a href="tel:+91 8985025794">
//                     Call Us <i className="iconoir-arrow-up-right"></i>
//                   </a>
//                   <a href="tel:+91 8985025794">
//                   +91 8985025794
//                   </a>
//                 </div>
//                 <Link to="/contact" className="theme-btn">
//                   Contact Us
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);

// //   return (
// //     <nav className="bg-white dark:bg-gray-900 shadow border-b border-gray-200 dark:border-gray-700 z-50 relative">
// //       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <div className="flex-shrink-0 flex items-center">
// //             <Link to="/" className="flex items-center gap-2">
// //               <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
// //               <span className="text-xl font-bold text-gray-900 dark:text-white">Flowbite</span>
// //             </Link>
// //           </div>

// //           {/* Desktop Nav */}
// //           <div className="hidden md:flex md:space-x-8 items-center">
// //             <Link to="/" className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">Home</Link>
// //             <button
// //               onClick={() => setDropdownOpen(!dropdownOpen)}
// //               className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 flex items-center"
// //             >
// //               Company
// //               <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 10 6">
// //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
// //               </svg>
// //             </button>
// //             <Link to="/marketplace" className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">Marketplace</Link>
// //             <Link to="/resources" className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">Resources</Link>
// //             <Link to="/contact" className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">Contact</Link>
// //           </div>

// //           {/* Mobile toggle */}
// //           <div className="md:hidden flex items-center">
// //             <button
// //               onClick={() => setMenuOpen(!menuOpen)}
// //               className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white focus:outline-none"
// //             >
// //               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
// //                 <path
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
// //                 />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {menuOpen && (
// //         <div className="md:hidden px-4 pt-2 pb-4 space-y-1">
// //           <Link to="/" className="block py-2 text-gray-900 dark:text-white hover:text-blue-600">Home</Link>
// //           <button
// //             onClick={() => setDropdownOpen(!dropdownOpen)}
// //             className="block w-full text-left py-2 text-gray-900 dark:text-white hover:text-blue-600"
// //           >
// //             Company
// //           </button>
// //           <Link to="/marketplace" className="block py-2 text-gray-900 dark:text-white hover:text-blue-600">Marketplace</Link>
// //           <Link to="/resources" className="block py-2 text-gray-900 dark:text-white hover:text-blue-600">Resources</Link>
// //           <Link to="/contact" className="block py-2 text-gray-900 dark:text-white hover:text-blue-600">Contact</Link>
// //         </div>
// //       )}

// //       {/* Mega Menu */}
// //       {dropdownOpen && (
// //         <div className="absolute left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600 shadow z-40">
// //           <div className="max-w-screen-xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-900 dark:text-white">
// //             {[
// //               ['Online Stores', 'Tools for building ecommerce websites.'],
// //               ['Segmentation', 'Segment your audience by behavior.'],
// //               ['Marketing CRM', 'Manage customer relationships.'],
// //               ['Audience Management', 'Organize contacts easily.'],
// //               ['Creative Tools', 'Design tools for content.'],
// //               ['Marketing Automation', 'Automate email & workflows.'],
// //             ].map(([title, description], idx) => (
// //               <Link key={idx} to="/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
// //                 <div className="font-semibold">{title}</div>
// //                 <div className="text-sm text-gray-500 dark:text-gray-400">{description}</div>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;


import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/css/nighlogo.svg"
import "../assets/css/style.css"
import "../assets/css/responsive.css"
import "../assets/css/line.css"
import hwdIcon4 from "../assets/imgs/hwd-icon-4.svg"
import portfolio2 from "../assets/imgs/nav/navbarAI.png"
import portfolio1 from "../assets/imgs/nav/erp.png"
import portfolio3 from "../assets/imgs/nav/ecommerce.png"
import portfolio4 from "../assets/imgs/nav/iot.png"
import hrms from "../assets/imgs/hrms.png"
import serviceIcon1 from "../assets/imgs/service-icon-1.svg"
import serviceIcon7 from "../assets/imgs/service-icon-7.svg"
import serviceIcon4 from "../assets/imgs/service-icon-4.svg"

// Define CSS styles as JavaScript objects
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 8rem",
    height: "80px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
    zIndex: 1000,
    maxWidth: "1440px",
    margin: "0 auto",
    width: "100%",
    overflow: "visible", // Change from hidden to visible
    "@media (max-width: 1200px)": {
      padding: "0 2rem",
    },
    "@media (max-width: 768px)": {
      padding: "0 1rem",
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    height: "60px",
    padding: "5px 0",
    marginRight: "20px", // Add this to create space between logo and nav
    minWidth: "90px", // Ensure minimum width for the logo container
  },
  logo: {
    display: "block",
    height: "100%",
    width: "auto",
  },
  logoImage: {
    height: "100%",
    width: "auto",
    maxHeight: "50px",
    objectFit: "contain",
  },
  navCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "25px",
    margin: 0,
    padding: 0,
    alignItems: "center", // Add this to align items vertically
  },
  navItem: {
    position: "relative",
  },
  navLink: {
    color: "#333",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "500",
    padding: "10px 0",
    cursor: "pointer",
    transition: "color 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    whiteSpace: "nowrap", // Add this to prevent line breaks
  },
  dropdownIcon: {
    fontSize: "12px",
    display: "inline-flex",
    alignItems: "center",
    transition: "transform 0.3s ease",
    marginLeft: "2px",
  },
  dropdownIconActive: {
    fontSize: "12px",
    display: "inline-flex",
    alignItems: "center",
    transform: "rotate(180deg)",
    transition: "transform 0.3s ease",
    marginLeft: "2px",
  },
  divider: {
    height: "30px",
    width: "1px",
    backgroundColor: "#ddd",
    margin: "0 15px",
    display: "block",
  },
  callUsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2px",
   
    "@media (max-width: 1024px)": {
      display: "none", // Hide on tablet and mobile
    },
  },
  callUs: {
    display: "flex",
    alignItems: "center",
    color: "#333",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",

  },
  phoneNumber: {
    fontSize: "12px",
    color: "#666",
    textDecoration: "none",
   
  },
  contactButton: {
    backgroundColor: "#0066cc",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "10px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  hamburger: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    marginLeft: "15px",
  },
  mobileMenu: {
    position: "fixed",
    top: 0,
    right: "-100%",
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    zIndex: 2000,
    transition: "transform 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    overflowY: "auto",
    transform: "translateX(100%)",
  },
  mobileMenuVisible: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    zIndex: 2000,
    transition: "transform 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    overflowY: "auto",
    transform: "translateX(0)",
  },
  mobileMenuHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  },
  mobileNavList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  mobileNavItem: {
    margin: "1rem 0",
  },
  mobileNavLink: {
    color: "#333",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "12px 0",
    display: "block",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#0066cc",
    },
  },
  mobileDropdownButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    background: "none",
    border: "none",
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    padding: "10px 0",
    cursor: "pointer",
  },
  mobileDropdownContent: {
    marginLeft: "1rem",
    marginTop: "0.5rem",
    display: "none",
    opacity: 0,
    height: 0,
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  mobileDropdownContentVisible: {
    marginLeft: "1rem",
    marginTop: "0.5rem",
    display: "block",
    opacity: 1,
    height: "auto",
    overflow: "visible",
    transition: "all 0.3s ease",
  },
  // Dropdown menu styles
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    borderRadius: "8px",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease",
    width: "250px",
    zIndex: 1000,
    marginTop: "10px",
    pointerEvents: "none",
  },
  dropdownMenuVisible: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    borderRadius: "8px",
    opacity: 1,
    visibility: "visible",
    transition: "all 0.3s ease",
    width: "250px",
    zIndex: 1000,
    marginTop: "10px",
    pointerEvents: "auto",
  },
  // Services mega menu styles
  servicesMegaMenu: {
    position: "fixed",
    top: "80px",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "2rem 0",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease",
    width: "100vw",
    height: "auto",
    maxHeight: "500px",
    zIndex: 999,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
  },
  servicesMegaMenuVisible: {
    position: "fixed",
    top: "80px",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "2rem 0",
    opacity: 1,
    visibility: "visible",
    transition: "all 0.3s ease",
    width: "100vw",
    height: "auto",
    maxHeight: "500px",
    zIndex: 999,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
  },
  // Products mega menu styles
  productsMegaMenu: {
    position: "fixed",
    top: "80px",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "2rem 0",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease",
    width: "100vw",
    height: "auto",
    maxHeight: "500px",
    zIndex: 999,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
  },
  productsMegaMenuVisible: {
    position: "fixed",
    top: "80px",
    left: 0,
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "2rem 0",
    opacity: 1,
    visibility: "visible",
    transition: "all 0.3s ease",
    width: "100vw",
    height: "auto",
    maxHeight: "500px",
    zIndex: 999,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
  },
  megaMenuInner: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  megaMenuContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    width: "100%",
  },
  menuContent: {
    display: "flex",
    gap: "2rem",
    marginBottom: "2rem",
  },
  productCard: {
    display: "flex",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    marginBottom: "1rem",
    width: "100%",
    height: "120px",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    },
  },
  productImageContainer: {
    width: "180px",
    height: "120px",
    flexShrink: 0,
  },
  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  productContent: {
    padding: "1rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  productTitle: {
    margin: "0 0 0.5rem 0",
    fontSize: "12px",
    fontWeight: "600",
    color: "#333",
  },
  productDescription: {
    margin: 0,
    color: "#666",
    fontSize: "10px",
    lineHeight: "1.4",
  },
  productContainer: {
    display: "flex",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "flex-start",
  },
  productList: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  productRow: {
    display: "flex",
    gap: "1.5rem",
    width: "100%",
  },
  serviceCards: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "0.75rem",
    width: "400px",
  },
  serviceHeading: {
    fontSize: "1.1em",
    fontWeight: "600",
    color: "#333",
    marginBottom: "1rem",
    paddingBottom: "0.5rem",
    borderBottom: "2px solid #eee",
  },
  serviceCard: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    height: "70px",
    "&:hover": {
      backgroundColor: "#e9ecef",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  },
  cardIcon: {
    width: "32px",
    height: "32px",
    flexShrink: 0,
  },
  cardIconImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  cardContent: {
    flex: 1,
    minWidth: 0,
  },
  cardTitle: {
    margin: 0,
    fontSize: "0.95em",
    fontWeight: "500",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#333",
  },
  serviceColumns: {
    display: "flex",
    gap: "4rem",
    flex: 1,
  },
  serviceColumn: {
    flex: 1,
  },
  serviceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  serviceItem: {
    padding: "0.75rem 0",
    color: "#333",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#007bff",
    },
  },
  megaMenuLinks: {
    display: "flex",
    gap: "2rem",
    marginLeft: "2rem",
  },
  megaMenuLink: {
    flex: 1,
    maxWidth: "250px",
  },
  megaMenuLinkTitle: {
    margin: "0 0 1rem 0",
    fontSize: "1.1em",
    fontWeight: "600",
    color: "#333",
    borderBottom: "2px solid #eee",
    paddingBottom: "0.5rem",
  },
  megaMenuLinkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    columnCount: 2,
    columnGap: "1.5rem",
  },
  megaMenuLinkItem: {
    marginBottom: "0.5rem",
    breakInside: "avoid-column",
  },
  megaMenuLinkAnchor: {
    color: "#666",
    textDecoration: "none",
    fontSize: "1em",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#0066cc",
    },
  },
  megaMenuFooter: {
    borderTop: "1px solid #eee",
    paddingTop: "0.5rem",
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  megaMenuSocial: {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  megaMenuSocialItem: {
    margin: 0,
  },
  megaMenuSocialLink: {
    color: "#666",
    fontSize: "1.2em",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#007bff",
    },
  },
  megaMenuAds: {
    width: "280px",
    backgroundColor: "#f8f9fa",
    padding: "1.5rem",
    borderRadius: "12px",
    textAlign: "center",
  },
  megaMenuAdsImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  megaMenuAdsTitle: {
    margin: "0 0 0.75rem 0",
    fontSize: "1.2em",
    fontWeight: "600",
    color: "#333",
  },
  megaMenuAdsText: {
    margin: "0 0 1rem 0",
    color: "#666",
    fontSize: "0.9em",
    lineHeight: "1.5",
    maxWidth: "220px",
    // margin: "0 auto 1.25rem",
  },
  megaMenuAdsLink: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    backgroundColor: "#0066cc",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#0052a3",
    },
  },
  // Portfolio card styles
  portfolioCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    height: "100%",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    },
  },
  portfolioImageContainer: {
    height: "140px",
    overflow: "hidden",
  },
  portfolioImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  portfolioContent: {
    padding: "1rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  portfolioTitle: {
    margin: "0 0 0.5rem 0",
    fontSize: "1em",
    fontWeight: "600",
    color: "#333",
  },
  portfolioDescription: {
    margin: 0,
    color: "#666",
    fontSize: "0.85em",
    lineHeight: "1.4",
    display: "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  portfolioGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
    width: "100%",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPortfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)

      // Apply responsive styles directly
      if (window.innerWidth < 1024) {
        document.querySelectorAll(".call-info").forEach((el) => {
          el.style.display = "none"
        })
      } else {
        document.querySelectorAll(".call-info").forEach((el) => {
          el.style.display = "flex"
        })
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    if (isMobile) {
      setIsMenuOpen(false)
      setPortfolioDropdownOpen(false)
      setServicesDropdownOpen(false)
    }
  }

  const handlePortfolioDropdown = () => {
    if (!isMobile) {
      setPortfolioDropdownOpen(true)
      setServicesDropdownOpen(false)
      document.body.style.overflow = "hidden"
    }
  }

  const handleServicesDropdown = () => {
    if (!isMobile) {
      setServicesDropdownOpen(true)
      setPortfolioDropdownOpen(false)
      document.body.style.overflow = "hidden"
    }
  }

  const closeDropdowns = () => {
    if (!isMobile) {
      setPortfolioDropdownOpen(false)
      setServicesDropdownOpen(false)
      document.body.style.overflow = "auto"
    }
  }

  const togglePortfolioDropdown = (e) => {
    e.stopPropagation()
    setPortfolioDropdownOpen(!isPortfolioDropdownOpen)
    if (isServicesDropdownOpen) {
      setServicesDropdownOpen(false)
    }
  }

  const toggleServicesDropdown = (e) => {
    e.stopPropagation()
    setServicesDropdownOpen(!isServicesDropdownOpen)
    if (isPortfolioDropdownOpen) {
      setPortfolioDropdownOpen(false)
    }
  }

  // Update styles based on mobile state
  const responsiveStyles = {
    navCenter: {
      ...styles.navCenter,
      display: isMobile ? "none" : "flex",
    },
    hamburger: {
      ...styles.hamburger,
      display: isMobile ? "block" : "none",
    },
    divider: {
      ...styles.divider,
      display: isMobile ? "none" : "block",
    },
    callUs: {
      ...styles.callUs,
      display: isMobile ? "none" : "flex",
    },
  }

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logo}>
          <img src={logo || "/placeholder.svg"} alt="Logo" style={styles.logoImage} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav style={responsiveStyles.navCenter}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link onClick={handleMenuItemClick} to="/" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link onClick={handleMenuItemClick} to="/our-roots" style={styles.navLink}>
              Our Roots
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link onClick={handleMenuItemClick} to="/lean" style={styles.navLink}>
              Lean Consultancy
            </Link>
          </li>
          <li style={styles.navItem} onMouseEnter={handleServicesDropdown} onMouseLeave={closeDropdowns}>
            <Link to="/service" onClick={isMobile ? handleMenuItemClick : null} style={styles.navLink}>
              Services
              <span
                style={isServicesDropdownOpen ? styles.dropdownIconActive : styles.dropdownIcon}
                onClick={toggleServicesDropdown}
              >
                <i className={`las ${isServicesDropdownOpen ? "la-angle-up" : "la-angle-down"}`}></i>
              </span>
            </Link>
            <div style={isServicesDropdownOpen ? styles.servicesMegaMenuVisible : styles.servicesMegaMenu}>
              <div style={styles.megaMenuInner}>
                <div style={styles.megaMenuContainer}>
                  <div style={styles.menuContent}>
                    <div>
                      <div style={styles.serviceCards}>
                        <div style={styles.serviceCard}>
                          <span style={styles.cardIcon}>
                            <img src={serviceIcon1 || "/placeholder.svg"} alt="Service" style={styles.cardIconImage} />
                          </span>
                          <div style={styles.cardContent}>
                            <h2 style={styles.cardTitle}>Lean Consultancy</h2>
                          </div>
                        </div>
                        <div style={styles.serviceCard}>
                          <span style={styles.cardIcon}>
                            <img src={serviceIcon4 || "/placeholder.svg"} alt="Service" style={styles.cardIconImage} />
                          </span>
                          <div style={styles.cardContent}>
                            <h2 style={styles.cardTitle}>AI/ML Solutions</h2>
                          </div>
                        </div>
                        <div style={styles.serviceCard}>
                          <span style={styles.cardIcon}>
                            <img src={hwdIcon4 || "/placeholder.svg"} alt="Service" style={styles.cardIconImage} />
                          </span>
                          <div style={styles.cardContent}>
                            <h2 style={styles.cardTitle}>Data Analytics</h2>
                          </div>
                        </div>
                        <div style={styles.serviceCard}>
                          <span style={styles.cardIcon}>
                            <img src={serviceIcon7 || "/placeholder.svg"} alt="Service" style={styles.cardIconImage} />
                          </span>
                          <div style={styles.cardContent}>
                            <h2 style={styles.cardTitle}>IoT Solutions</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={styles.serviceColumns}>
                      <div style={styles.serviceColumn}>
                        <h3 style={styles.serviceHeading}>Services</h3>

                        <ul style={styles.serviceList}>
                          <li style={styles.serviceItem}>Lean Consultancy</li>
                          <li style={styles.serviceItem}>Branding</li>
                          <li style={styles.serviceItem}>ERP Development</li>
                          <li style={styles.serviceItem}>AI/ML Solutions</li>
                          <li style={styles.serviceItem}>Web / Mobile App</li>
                        </ul>
                      </div>
                      <div style={styles.serviceColumn}>
                        <ul style={styles.serviceList}>
                          <li style={styles.serviceItem}>IoT Solutions</li>
                          <li style={styles.serviceItem}>Digital Marketing</li>
                          <li style={styles.serviceItem}>Data Analytics</li>
                          <li style={styles.serviceItem}>DevOps Services</li>
                          <li style={styles.serviceItem}>IT Support & Maintenance</li>
                        </ul>
                      </div>
                    </div>
                    <div style={styles.megaMenuAds}>
                      <img src={hrms || "/placeholder.svg"} alt="iPad" style={styles.megaMenuAdsImage} />
                      <h2 style={styles.megaMenuAdsTitle}>Our product hits</h2>
                      <p style={styles.megaMenuAdsText}>
                        Our new best IT product of the <br />
                        year 2023.
                      </p>
                      <Link to="/products" onClick={handleMenuItemClick} style={styles.megaMenuAdsLink}>
                        View more
                      </Link>
                    </div>
                  </div>
                  <div style={styles.megaMenuFooter}>
                    <ul style={styles.megaMenuSocial}>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.facebook.com/Nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-facebook"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://x.com/nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-x"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.instagram.com/nighwantech/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-instagram"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-linkedin"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.youtube.com/@Nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-youtube"></i>
                        </a>
                      </li>
                    </ul>
                    <p>
                      <span style={{ fontSize: "0.8em" }}>Looking for new career?</span>{" "}
                      <Link to="/career" onClick={handleMenuItemClick}>
                        We're hiring
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={styles.navItem} onMouseEnter={handlePortfolioDropdown} onMouseLeave={closeDropdowns}>
            <Link to="/products" onClick={isMobile ? handleMenuItemClick : null} style={styles.navLink}>
              Product
              <span
                style={isPortfolioDropdownOpen ? styles.dropdownIconActive : styles.dropdownIcon}
                onClick={togglePortfolioDropdown}
              >
                <i className={`las ${isPortfolioDropdownOpen ? "la-angle-up" : "la-angle-down"}`}></i>
              </span>
            </Link>
            <div style={isPortfolioDropdownOpen ? styles.productsMegaMenuVisible : styles.productsMegaMenu}>
              <div style={styles.megaMenuInner}>
                <div style={styles.megaMenuContainer}>
                  <div style={styles.menuContent}>
                    <div style={styles.productContainer}>
                      <div style={styles.productList}>
                        <div style={styles.productRow}>
                          <div style={styles.productCard}>
                            <div style={styles.productImageContainer}>
                              <img src={portfolio1 || "/placeholder.svg"} alt="Portfolio" style={styles.productImage} />
                            </div>
                            <div style={styles.productContent}>
                              <h3 style={styles.productTitle}>Nighwan ERP – AI-Powered Business Management</h3>
                              <p style={styles.productDescription}>
                                A custom-built ERP system designed for businesses that need an integrated and
                                intelligent management solution.
                              </p>
                            </div>
                          </div>
                          <div style={styles.productCard}>
                            <div style={styles.productImageContainer}>
                              <img src={portfolio2 || "/placeholder.svg"} alt="Portfolio" style={styles.productImage} />
                            </div>
                            <div style={styles.productContent}>
                              <h3 style={styles.productTitle}>LeanPro – AI-Based Sales & Demand Forecasting</h3>
                              <p style={styles.productDescription}>
                                An advanced AI/ML-driven predictive analytics tool designed for manufacturers and
                                retailers to optimize inventory and sales.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div style={styles.productRow}>
                          <div style={styles.productCard}>
                            <div style={styles.productImageContainer}>
                              <img src={portfolio3 || "/placeholder.svg"} alt="Portfolio" style={styles.productImage} />
                            </div>
                            <div style={styles.productContent}>
                              <h3 style={styles.productTitle}>Nighwan B2B – Multi-Vendor E-Commerce Platform</h3>
                              <p style={styles.productDescription}>
                                A next-gen B2B e-commerce platform that helps businesses list, sell, and manage their
                                products seamlessly.
                              </p>
                            </div>
                          </div>
                          <div style={styles.productCard}>
                            <div style={styles.productImageContainer}>
                              <img src={portfolio4 || "/placeholder.svg"} alt="Portfolio" style={styles.productImage} />
                            </div>
                            <div style={styles.productContent}>
                              <h3 style={styles.productTitle}>IoTGuard – Predictive Maintenance System</h3>
                              <p style={styles.productDescription}>
                                A smart IoT solution that enables businesses to monitor and maintain equipment health in
                                real-time.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={styles.megaMenuAds}>
                        <img src={hrms || "/placeholder.svg"} alt="iPad" style={styles.megaMenuAdsImage} />
                        <h2 style={styles.megaMenuAdsTitle}>HRMS with Job Portal</h2>
                        <p style={styles.megaMenuAdsText}>
                          Download HRMS in your mobile <br />
                          for your daily usage.
                        </p>
                        <Link to="/products" onClick={handleMenuItemClick} style={styles.megaMenuAdsLink}>
                          View more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div style={styles.megaMenuFooter}>
                    <ul style={styles.megaMenuSocial}>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.facebook.com/Nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-facebook"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://x.com/nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-x"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.instagram.com/nighwantech/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-instagram"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
                          <i className="iconoir-linkedin"></i>
                        </a>
                      </li>
                      <li style={styles.megaMenuSocialItem}>
                        <a
                          href="https://www.youtube.com/@Nighwantech"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.megaMenuSocialLink}
                        >
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
              </div>
            </div>
          </li>
          <li style={styles.navItem}>
            <Link onClick={handleMenuItemClick} to="/career" style={styles.navLink}>
              Career
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link onClick={handleMenuItemClick} to="/blog" style={styles.navLink}>
              Blogs
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right Side */}
      <div style={styles.navRight}>
        <div style={responsiveStyles.divider}></div>
        <div style={styles.callUsContainer} className="call-info">
          <a href="tel:+91 8294767697" style={styles.callUs}>
            Call Us <i className="iconoir-arrow-up-right"></i>
          </a>
          <a href="tel:+91 8294767697" style={styles.phoneNumber}>
            +91 8294767697
          </a>
        </div>
        <Link to="/contact" className="theme-btn">
          Contact Us
        </Link>
        {isMobile && (
          <button style={responsiveStyles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div style={isMenuOpen ? styles.mobileMenuVisible : styles.mobileMenu}>
        <div style={styles.mobileMenuHeader}>
          <div style={styles.logoContainer}>
            <Link to="/" style={styles.logo}>
              <img src={logo || "/placeholder.svg"} alt="Logo" style={styles.logoImage} />
            </Link>
          </div>
          <button style={styles.closeButton} onClick={toggleMenu}>
            ✕
          </button>
        </div>
        <ul style={styles.mobileNavList}>
          <li style={styles.mobileNavItem}>
            <Link to="/" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
              Home
            </Link>
          </li>
          <li style={styles.mobileNavItem}>
            <Link to="/our-roots" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
              Our Roots
            </Link>
          </li>
          <li style={styles.mobileNavItem}>
            <Link to="/lean" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
              Lean Consultancy
            </Link>
          </li>
          <li style={styles.mobileNavItem}>
            <button style={styles.mobileDropdownButton} onClick={toggleServicesDropdown}>
              Services
              <span>{isServicesDropdownOpen ? "▲" : "▼"}</span>
            </button>
            <div style={isServicesDropdownOpen ? styles.mobileDropdownContentVisible : styles.mobileDropdownContent}>
              <Link to="/lean" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                Lean Consultancy
              </Link>
              <Link to="/service-details/Branding" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                Branding
              </Link>
              <Link to="/service-details/ERP" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                ERP Development
              </Link>
              <Link to="/service-details/aim" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                AI/ML Solutions
              </Link>
              <Link to="/service-details/Web" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                Web / Mobile App
              </Link>
              <Link to="/service-details/Iot" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                IoT Solutions
              </Link>
              <Link to="/service-details/Digital" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                Digital Marketing
              </Link>
              <Link to="/service-details/Data" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                Data Analytics
              </Link>
              <Link to="/service-details/Devops" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                DevOps Services
              </Link>
              <Link to="/service-details/IT" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                IT Support & Maintenance
              </Link>
            </div>
          </li>
          <li style={styles.mobileNavItem}>
            <button style={styles.mobileDropdownButton} onClick={togglePortfolioDropdown}>
              Products
              <span>{isPortfolioDropdownOpen ? "▲" : "▼"}</span>
            </button>
            <div style={isPortfolioDropdownOpen ? styles.mobileDropdownContentVisible : styles.mobileDropdownContent}>
              <Link to="/product-detail/erp" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                Nighwan ERP
              </Link>
              <Link to="/product-detail/ai" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                LeanPro
              </Link>
              <Link to="/product-detail/b2b" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                Nighwan B2B
              </Link>
              <Link to="/product-detail/iot" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
                IoTGuard
              </Link>
            </div>
          </li>
          <li style={styles.mobileNavItem}>
            <Link to="/career" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
              Career
            </Link>
          </li>
          <li style={styles.mobileNavItem}>
            <Link to="/blog" style={styles.mobileNavLink} onClick={handleMenuItemClick}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
