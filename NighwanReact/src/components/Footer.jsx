// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/style.css'; // Import your custom CSS
// import '../assets/css/responsive.css'; // Import your responsive CSS

// const Footer = () => {
//   return (
//     <>
//       <footer style={{ paddingTop: '30px', paddingBottom: '10px' }} className="footer-area">
//         {/* <img src={bgShape} alt="Shape" className="animation-slide-right bg-shape" /> */}
//         {/* ===== Footer Bottom Section ===== */}
//         {/* Desktop Version – remains unchanged */}
//         <div className="footer-bottom desktop-footer">
//           <div className="custom-container">
//             <div className="custom-row">
//               <div style={{ paddingTop: '0px', paddingBottom: '0px', marginTop: '0px' }} className="footer-all-links-wrap justify-content-between d-flex">
//                 <div className="footer-links">
//                   <h5>Services</h5>
//                   <ul>
//                     <li><Link to="/lean">Lean Consultancy</Link></li>
//                     <li><Link to="/service-details/ERP">ERP Development</Link></li>
//                     <li>
//                       <Link to="/service-details">
//                       AI/ML Solutions
//                       </Link>
//                     </li>
//                     <li><Link to="/service-details/Data">Data Analytics
//                     </Link></li>
//                     <li><Link to="/service-details/Web">Web / Mobile</Link></li>
//                     <li><Link to="/service-details/Branding">Branding</Link></li>
//                   </ul>
//                 </div>
//                 <div className="footer-links">
//                   <h5>Company</h5>
//                   <ul>
//                     <li><Link to="/lean">Lean Consultancy</Link></li>
//                     <li><Link to="/our-roots">Our Roots</Link></li>
//                     <li><Link to="/service">Services</Link></li>
//                     <li><Link to="/products">Product</Link></li>
//                     <li><Link to="/career">Careers</Link></li>
//                     <li><Link to="/blog">Blog</Link></li>
//                   </ul>
//                 </div>
//                 <div className="footer-links">
//                   <h5>Product</h5>
//                   <ul>
//                     <li><Link to="/product-detail/iot">Iot - Enabled Predictive Maintenance</Link></li>
//                     <li><Link to="/product-detail/ai">AI-Powered Sales Forecasting</Link></li>
//                     <li><Link to="/product-detail/tms">Transport Management System</Link></li>
//                     <li><Link to="/product-detail/b2b">B2B E-Commerce Platform</Link></li>
//                     <li><Link to="/product-detail/erp">ERP System</Link></li>
//                     <li><Link to="/product-detail/hrms">HRMS</Link></li>
//                   </ul>
//                 </div>
//               </div>
//               <div style={{ marginTop: '0px' , paddingTop: '0px', paddingBottom: '0px'  }}  className="footer-contact-info">
//                 <div className="footer-contact-info-item">
//                   <h4>Phone</h4>
//                   <p>
//                     <Link to="tel:+918985025794" target="_blank" rel="noopener noreferrer">+91 8985025794</Link> <br />
//                     <Link to="tel:+918092225777" target="_blank" rel="noopener noreferrer">+91 8092225777</Link>
//                   </p>
//                 </div>
//                 <div className="footer-contact-info-item">
//                   <h4>Mail</h4>
//                   <p>
//                     <Link to="mailto:contact@nighwantech.com" target="_blank" rel="noopener noreferrer">contact@nighwantech.com</Link> <br />
//                     <Link to="mailto:info@nighwantech.com" target="_blank" rel="noopener noreferrer">info@nighwantech.com</Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Version – rearranged into two groups */}
//         <div className="footer-bottom mobile-footer">
//           <div className="custom-container">
//             <div className="custom-row">
//               {/* Group A: Services & Company side by side */}
//               <div className="footer-column group-a">
//                 <div className="footer-links">
//                   <h5>Services</h5>
//                   <ul>
//                     <li><Link to="/lean">Lean Consultancy</Link></li>
//                     <li><Link to="/service-details/ERP">ERP Development</Link></li>
//                     <li>
//                       <Link to="/service-details/aim">
//                       AI/ML Solutions
//                       </Link>
//                     </li>
//                     <li><Link to="/service-details/Data">Data Analytics
//                     </Link></li>
//                     <li><Link to="/service-details/Web">Web / Mobile</Link></li>
//                     <li><Link to="/service-details/Branding">Branding</Link></li>
//                   </ul>
//                 </div>
//                 <div className="footer-links">
//                   <h5>Company</h5>
//                   <ul>
//                     <li><Link to="/lean">Lean Consultancy</Link></li>
//                     <li><Link to="<Linkbout">Our Roots</Link></li>
//                     <li><Link to="/service">Services</Link></li>
//                     <li><Link to="/product">Product</Link></li>
//                     <li><Link to="/career">Careers</Link></li>
//                     <li><Link to="/blog">Blog</Link></li>
//                   </ul>
//                 </div>
//               </div>
//               {/* Group B: Product & Contact Info side by side */}
//               <div className="footer-column group-b">
//                 <div className="footer-links">
//                   <h5>Product</h5>
//                   <ul>
//                     <li><Link to="/product-detail/iot">Iot - Enabled Predictive Maintenance</Link></li>
//                     <li><Link to="/product-detail/ai">AI-Powered Sales Forecasting</Link></li>
//                     <li><Link to="/product-detail/tms">Transport Management System</Link></li>
//                     <li><Link to="/product-detail/b2b">B2B E-Commerce Platform</Link></li>
//                     <li><Link to="/product-detail/erp">ERP System</Link></li>
//                     <li><Link to="/product-detail/hrms">HRMS</Link></li>
//                   </ul>
//                 </div>
//                 <div className="footer-contact-info">
//                   <div className="footer-contact-info-item contact-phone">
//                     <h4>Phone</h4>
//                     <p>
//                       <Link to="tel:+918985025794" target="_blank" rel="noopener noreferrer">+91 8985025794</Link> <br />
//                       <Link to="tel:+918985025794" target="_blank" rel="noopener noreferrer">+91 8985025794</Link>
//                     </p>
//                   </div>
//                   <div className="footer-contact-info-item contact-mail">
//                     <h4>Mail</h4>
//                     <p>
//                       <Link to="mailto:contact@nighwantech.com" target="_blank" rel="noopener noreferrer">contact@nighwantech.com</Link> <br />
//                       <Link to="mailto:contact@nighwantech.com" target="_blank" rel="noopener noreferrer">contact@nighwantech.com</Link>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===== Copyright Area ===== */}
//         <div style={{ padding: '10px' }} className="copyright-area">
//           <div className="custom-container">
//             <div className="custom-row d-flex align-items-center justify-content-between">
//               <ul className="social-links d-flex align-items-center">
//                 <li>
//                   <Link to="https://www.facebook.com/Nighwantech" target="_blank" rel="noopener noreferrer">
//                     <i className="iconoir-facebook"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="https://x.com/nighwantech" target="_blank" rel="noopener noreferrer">
//                     <i className="iconoir-x"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="https://www.instagram.com/nighwantech/" target="_blank" rel="noopener noreferrer">
//                     <i className="iconoir-instagram"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer">
//                     <i className="iconoir-linkedin"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="https://www.youtube.com/@Nighwantech" target="_blank" rel="noopener noreferrer">
//                     <i className="iconoir-youtube"></i>
//                   </Link>
//                 </li>
//               </ul>
//               <p>
//                 &copy; 2025 All rights reserved by{' '}
//                 <Link to="https://nighwantech.com/" target="_blank" rel="noopener noreferrer">Nighwan Technology</Link>
//               </p>
//               <p>
//                 <Link to="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</Link> |
//                 <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* ===== Inline CSS to Control Versions & Mobile Adjustments ===== */}
//       <style>{`
//         /* Desktop version visible by default */
//         .desktop-footer { display: block; }
//         .mobile-footer { display: none; }

//         /* On mobile, show mobile version and adjust styles */
//         @media (max-width: 768px) {
//           .desktop-footer { display: none; }
//           .mobile-footer { display: block; }

//           /* Adjust subscribe form input and button widths */
//           .subscribe-form .subscribe-box {
//             flex-wrap: nowrap;
//           }
//           .subscribe-form .subscribe-box input[type="email"] {
//             width: 70% !important;
//             box-sizing: border-box;
//           }
//           .subscribe-form .subscribe-box button {
//             width: 30% !important;
//           }

//           /* Ensure client logos wrap and display fully */
//           .footer-clients {
//             flex-wrap: wrap;
//             justify-content: center;
//           }
//           .footer-client-img {
//             flex: 1 1 45%;
//             max-width: 45%;
//             text-align: center;
//             margin: 5px 0;
//           }
//           .footer-client-img img {
//             max-width: 100%;
//             height: auto;
//           }

//           /* Nudge social media icons & trademark text upward */
//           .copyright-area {
//             margin-top: -10px;
//           }

//           /* Mobile styling for rearranged footer bottom */
//           .mobile-footer .custom-row {
//             display: flex;
//             flex-direction: column;
//             gap: 20px;
//           }
//           .mobile-footer .footer-column {
//             display: flex;
//             flex-direction: column;
//             gap: 20px;
//             width: 100%;
//           }
//           .mobile-footer .group-a {
//             display: flex;
//             flex-direction: row;
//             width: 100%;
//           }
//           .mobile-footer .group-a .footer-links {
//             width: 50%;
//             padding-right: 10px; /* Add padding to avoid collision */
//           }
//           .mobile-footer .group-b {
//             display: flex;
//             flex-direction: column;
//             width: 100%;
//           }
//           .mobile-footer .group-b .footer-links {
//             width: 100%;
//             padding-right: 10px; /* Add padding to avoid collision */
//           }
//           .mobile-footer .group-b .footer-contact-info {
//             display: flex;
//             flex-direction: row;
//             width: 100%;
//           }
//           .mobile-footer .footer-contact-info-item {
//             width: 50%;
//             padding: 0 10px; /* Add padding to avoid collision */
//           }
//           .mobile-footer .footer-contact-info-item p {
//             margin: 0; /* Remove default margin */
//           }
//           .mobile-footer .contact-mail {
//             margin-top: -20px; /* Move the mail section up to align with phone */
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Footer;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-[#121212] text-white pt-8 pb-4">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Top Section: Links & Contact in a grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Services */}
//           <div>
//             <h5 className="mb-2">Services</h5>
//             <ul className="space-y-1 text-sm">
//               <li>
//                 <Link to="/lean" className="text-white" data-discover="true">
//                   Lean Consultancy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service-details/ERP" className="text-white" data-discover="true">
//                   ERP Development
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service-details/aiml" className="text-white" data-discover="true">
//                   AI/ML Solutions
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service-details/data" className="text-white" data-discover="true">
//                   Data Analytics
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service-details/web" className="text-white" data-discover="true">
//                   Web / Mobile
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service-details/branding" className="text-white" data-discover="true">
//                   Branding
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h5 className="text-xl font-bold mb-2">Company</h5>
//             <ul className="space-y-1 text-sm">
//               <li>
//                 <Link to="/lean" className="text-white" data-discover="true">
//                   Lean Consultancy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/our-roots" className="text-white" data-discover="true">
//                   Our Roots
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service" className="text-white" data-discover="true">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products" className="text-white" data-discover="true">
//                   Product
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/career" className="text-white" data-discover="true">
//                   Careers
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/blog" className="text-white" data-discover="true">
//                   Blog
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Product */}
//           <div>
//             <h5 className="text-xl font-bold mb-2">Product</h5>
//             <ul className="space-y-1 text-sm">
//               <li>
//                 <Link to="/product-detail/iot" className="text-white" data-discover="true">
//                   IoT - Enabled Predictive Maintenance
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/product-detail/ai" className="text-white" data-discover="true">
//                   AI-Powered Sales Forecasting
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/product-detail/tms" className="text-white" data-discover="true">
//                   Transport Management System
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/product-detail/b2b" className="text-white" data-discover="true">
//                   B2B E-Commerce Platform
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/product-detail/erp" className="text-white" data-discover="true">
//                   ERP System
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/product-detail/hrms" className="text-white" data-discover="true">
//                   HRMS
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <div className="mb-4">
//               <h4 className="text-lg font-semibold mb-2">Phone</h4>
//               <p className="text-sm">
//                 <a
//                   href="tel:+918985025794"
//                   className="text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   +91 8985025794
//                 </a>
//                 <br />
//                 <a
//                   href="tel:+918092225777"
//                   className="text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   +91 8092225777
//                 </a>
//               </p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Mail</h4>
//               <p className="text-sm">
//                 <a
//                   href="mailto:contact@nighwantech.com"
//                   className="text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   contact@nighwantech.com
//                 </a>
//                 <br />
//                 <a
//                   href="mailto:info@nighwantech.com"
//                   className="text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   info@nighwantech.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section: Social & Copyright */}
//         <div className="border-t border-gray-700 mt-8 pt-4">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             {/* Social Icons with extra spacing */}
//             <ul className="flex space-x-6">
//               <li>
//                 <a
//                   href="https://www.facebook.com/Nighwantech"
//                   className="text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="iconoir-facebook"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://x.com/nighwantech"
//                   className="text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="iconoir-x"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.instagram.com/nighwantech/"
//                   className="text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="iconoir-instagram"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/"
//                   className="text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="iconoir-linkedin"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.youtube.com/@Nighwantech"
//                   className="text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="iconoir-youtube"></i>
//                 </a>
//               </li>
//             </ul>

//             {/* Copyright */}
//             <div className="text-sm text-center md:text-right">
//               <p>
//                 © 2025 All rights reserved by{' '}
//                 <a
//                   href="https://nighwantech.com/"
//                   className="text-white"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Nighwan Technology
//                 </a>
//               </p>
//               <p>
//                 <Link
//                   to="/terms-and-conditions"
//                   className="text-white"
//                   data-discover="true"
//                 >
//                   Terms and Conditions
//                 </Link>
//                 <span className="mx-2">|</span>
//                 <Link
//                   to="/privacy-policy"
//                   className="text-white"
//                   data-discover="true"
//                 >
//                   Privacy Policy
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="bg-[#121212] text-white pt-10 pb-6 leading-relaxed"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section: Links & Contact in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          
          {/* Services */}
          <div>
            <h5 className="text-xl font-bold mb-3">Services</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/lean" className="text-white" data-discover="true">
                  Lean Consultancy
                </Link>
              </li>
              <li>
                <Link to="/service-details/ERP" className="text-white" data-discover="true">
                  ERP Development
                </Link>
              </li>
              <li>
                <Link to="/service-details/aiml" className="text-white" data-discover="true">
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link to="/service-details/data" className="text-white" data-discover="true">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/service-details/web" className="text-white" data-discover="true">
                  Web / Mobile
                </Link>
              </li>
              <li>
                <Link to="/service-details/branding" className="text-white" data-discover="true">
                  Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-xl font-bold mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/lean" className="text-white" data-discover="true">
                  Lean Consultancy
                </Link>
              </li>
              <li>
                <Link to="/our-roots" className="text-white" data-discover="true">
                  Our Roots
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-white" data-discover="true">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white" data-discover="true">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-white" data-discover="true">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white" data-discover="true">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h5 className="text-xl font-bold mb-3">Product</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/product-detail/iot" className="text-white" data-discover="true">
                  IoT - Enabled Predictive Maintenance
                </Link>
              </li>
              <li>
                <Link to="/product-detail/ai" className="text-white" data-discover="true">
                  AI-Powered Sales Forecasting
                </Link>
              </li>
              <li>
                <Link to="/product-detail/tms" className="text-white" data-discover="true">
                  Transport Management System
                </Link>
              </li>
              <li>
                <Link to="/product-detail/b2b" className="text-white" data-discover="true">
                  B2B E-Commerce Platform
                </Link>
              </li>
              <li>
                <Link to="/product-detail/erp" className="text-white" data-discover="true">
                  ERP System
                </Link>
              </li>
              <li>
                <Link to="/product-detail/hrms" className="text-white" data-discover="true">
                  HRMS
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Phone</h4>
              <p className="text-sm space-y-2">
                <span>
                  <a
                    href="tel:+918985025794"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 8985025794
                  </a>
                </span>
                <br />
                <span>
                  <a
                    href="tel:+918092225777"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 8092225777
                  </a>
                </span>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Mail</h4>
              <p className="text-sm space-y-2">
                <span>
                  <a
                    href="mailto:contact@nighwantech.com"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    contact@nighwantech.com
                  </a>
                </span>
                <br />
                <span>
                  <a
                    href="mailto:info@nighwantech.com"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    info@nighwantech.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://www.facebook.com/Nighwantech"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="iconoir-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/nighwantech"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="iconoir-x"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nighwantech/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="iconoir-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="iconoir-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Nighwantech"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="iconoir-youtube"></i>
                </a>
              </li>
            </ul>

            {/* Copyright */}
            <div className="text-sm text-center md:text-right space-y-1">
              <p>
                © 2025 All rights reserved by{' '}
                <a
                  href="https://nighwantech.com/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nighwan Technology
                </a>
              </p>
              <p>
                <Link to="/terms-and-conditions" className="text-white" data-discover="true">
                  Terms and Conditions
                </Link>
                <span className="mx-2">|</span>
                <Link to="/privacy-policy" className="text-white" data-discover="true">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
