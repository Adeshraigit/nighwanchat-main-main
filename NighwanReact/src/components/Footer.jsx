// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer
//       className="bg-[#121212] text-white py-10"
//       style={{ fontFamily: 'DM Sans, sans-serif' }}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Main content with columns */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
//           {/* Services Column */}
//           <div className="mb-6 lg:mb-0">
//             <h5 className="text-lg font-semibold mb-4">Services</h5>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link to="/lean" className="text-white hover:text-gray-300 transition duration-300">
//                   Lean Consultancy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service-details/ERP" className="text-white hover:text-gray-300 transition duration-300">
//                   ERP Development
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service-details/aiml" className="text-white hover:text-gray-300 transition duration-300">
//                   AI/ML Solutions
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service-details/data" className="text-white hover:text-gray-300 transition duration-300">
//                   Data Analytics
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service-details/web" className="text-white hover:text-gray-300 transition duration-300">
//                   Web / Mobile
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service-details/branding" className="text-white hover:text-gray-300 transition duration-300">
//                   Branding
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Company Column */}
//           <div className="mb-6 lg:mb-0">
//             <h5 className="text-lg font-semibold mb-4">Company</h5>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link to="/lean" className="text-white hover:text-gray-300 transition duration-300">
//                   Lean Consultancy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/our-roots" className="text-white hover:text-gray-300 transition duration-300">
//                   Our Roots
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service" className="text-white hover:text-gray-300 transition duration-300">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products" className="text-white hover:text-gray-300 transition duration-300">
//                   Product
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/career" className="text-white hover:text-gray-300 transition duration-300">
//                   Careers
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/blog" className="text-white hover:text-gray-300 transition duration-300">
//                   Blog
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Product Column */}
//           <div className="mb-6 lg:mb-0">
//             <h5 className="text-lg font-semibold mb-4">Product</h5>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link to="/product-detail/iot" className="text-white hover:text-gray-300 transition duration-300">
//                   IoT - Enabled Predictive Maintenance
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/product-detail/ai" className="text-white hover:text-gray-300 transition duration-300">
//                   AI-Powered Sales Forecasting
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/product-detail/tms" className="text-white hover:text-gray-300 transition duration-300">
//                   Transport Management System
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/product-detail/b2b" className="text-white hover:text-gray-300 transition duration-300">
//                   B2B E-Commerce Platform
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/product-detail/erp" className="text-white hover:text-gray-300 transition duration-300">
//                   ERP System
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/product-detail/hrms" className="text-white hover:text-gray-300 transition duration-300">
//                   HRMS
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Column with divider on large screens */}
//           <div className="lg:border-l lg:border-gray-700 lg:pl-8">
//             <div className="mb-6">
//               <h5 className="text-lg font-semibold mb-3">Phone</h5>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <a
//                     href="tel:+918985025794"
//                     className="text-white hover:text-gray-300 transition duration-300"
//                   >
//                     +91 8985025794
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="tel:+918092225777"
//                     className="text-white hover:text-gray-300 transition duration-300"
//                   >
//                     +91 8092225777
//                   </a>
//                 </li>
//               </ul>
//             </div>
            
//             <div>
//               <h5 className="text-lg font-semibold mb-3">Mail</h5>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <a
//                     href="mailto:contact@nighwantech.com"
//                     className="text-white hover:text-gray-300 transition duration-300"
//                   >
//                     contact@nighwantech.com
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="mailto:info@nighwantech.com"
//                     className="text-white hover:text-gray-300 transition duration-300"
//                   >
//                     info@nighwantech.com
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Horizontal divider */}
//         <div className="border-t border-gray-700 mb-6"></div>

//         {/* Bottom section with social icons and copyright */}
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           {/* Social Icons */}
//           <div className="flex space-x-4 mb-4 md:mb-0">
//             <a
//               href="https://www.facebook.com/Nighwantech"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="text-white"
//             >
//               <i className="iconoir-facebook text-lg"></i>
//             </a>
//             <a
//               href="https://x.com/nighwantech"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="X"
//               className="text-white"
//             >
//               <i className="iconoir-x text-lg"></i>
//             </a>
//             <a
//               href="https://www.instagram.com/nighwantech/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="text-white"
//             >
//               <i className="iconoir-instagram text-lg"></i>
//             </a>
//             <a
//               href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-white"
//             >
//               <i className="iconoir-linkedin text-lg"></i>
//             </a>
//             <a
//               href="https://www.youtube.com/@Nighwantech"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="text-white"
//             >
//               <i className="iconoir-youtube text-lg"></i>
//             </a>
//           </div>

//           {/* Copyright and Policy Links */}
//           <div className="text-sm text-center md:text-right">
//             <p className="mb-2">
//               © 2025 All rights reserved by Nighwan Technology
//             </p>
//             <p>
//               <Link to="/terms-and-conditions" className="text-white hover:text-gray-300 transition duration-300">
//                 Terms and Conditions
//               </Link>
//               <span className="mx-2">|</span>
//               <Link to="/privacy-policy" className="text-white hover:text-gray-300 transition duration-300">
//                 Privacy Policy
//               </Link>
//             </p>
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
      className="bg-[#121212] text-white py-16"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main content with columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Services Column */}
          <div className="mb-8 lg:mb-0">
            <h5 className="text-lg font-semibold mb-6">Services</h5>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/lean" className="text-white hover:text-gray-300 transition duration-300">
                  Lean Consultancy
                </Link>
              </li>
              <li>
                <Link to="/service-details/ERP" className="text-white hover:text-gray-300 transition duration-300">
                  ERP Development
                </Link>
              </li>
              <li>
                <Link to="/service-details/aiml" className="text-white hover:text-gray-300 transition duration-300">
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link to="/service-details/data" className="text-white hover:text-gray-300 transition duration-300">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/service-details/web" className="text-white hover:text-gray-300 transition duration-300">
                  Web / Mobile
                </Link>
              </li>
              <li>
                <Link to="/service-details/branding" className="text-white hover:text-gray-300 transition duration-300">
                  Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="mb-8 lg:mb-0">
            <h5 className="text-lg font-semibold mb-6">Company</h5>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/lean" className="text-white hover:text-gray-300 transition duration-300">
                  Lean Consultancy
                </Link>
              </li>
              <li>
                <Link to="/our-roots" className="text-white hover:text-gray-300 transition duration-300">
                  Our Roots
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-white hover:text-gray-300 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white hover:text-gray-300 transition duration-300">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-white hover:text-gray-300 transition duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white hover:text-gray-300 transition duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Column */}
          <div className="mb-8 lg:mb-0">
            <h5 className="text-lg font-semibold mb-6">Product</h5>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/product-detail/iot" className="text-white hover:text-gray-300 transition duration-300">
                  IoT - Enabled Predictive Maintenance
                </Link>
              </li>
              <li>
                <Link to="/product-detail/ai" className="text-white hover:text-gray-300 transition duration-300">
                  AI-Powered Sales Forecasting
                </Link>
              </li>
              <li>
                <Link to="/product-detail/tms" className="text-white hover:text-gray-300 transition duration-300">
                  Transport Management System
                </Link>
              </li>
              <li>
                <Link to="/product-detail/b2b" className="text-white hover:text-gray-300 transition duration-300">
                  B2B E-Commerce Platform
                </Link>
              </li>
              <li>
                <Link to="/product-detail/erp" className="text-white hover:text-gray-300 transition duration-300">
                  ERP System
                </Link>
              </li>
              <li>
                <Link to="/product-detail/hrms" className="text-white hover:text-gray-300 transition duration-300">
                  HRMS
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column with divider on large screens */}
          <div className="lg:border-l lg:border-gray-700 lg:pl-10">
            <div className="mb-8">
              <h5 className="text-lg font-semibold mb-4">Phone</h5>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="tel:+918985025794"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    +91 8985025794
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918092225777"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    +91 8092225777
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Mail</h5>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="mailto:contact@nighwantech.com"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    contact@nighwantech.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@nighwantech.com"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    info@nighwantech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal divider */}
        <div className="border-t border-gray-700 mb-12"></div>

        {/* Bottom section with social icons and copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Social Icons */}
          <div className="flex space-x-8">
            <a
              href="https://www.facebook.com/Nighwantech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white"
            >
              <i className="iconoir-facebook text-lg"></i>
            </a>
            <a
              href="https://x.com/nighwantech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-white"
            >
              <i className="iconoir-x text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/nighwantech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white"
            >
              <i className="iconoir-instagram text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white"
            >
              <i className="iconoir-linkedin text-lg"></i>
            </a>
            <a
              href="https://www.youtube.com/@Nighwantech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white"
            >
              <i className="iconoir-youtube text-lg"></i>
            </a>
          </div>

          {/* Copyright and Policy Links */}
          <div className="text-sm text-center md:text-right">
            <p className="mb-4">
              © 2025 All rights reserved by Nighwan Technology
            </p>
            <p>
              <Link to="/terms-and-conditions" className="text-white hover:text-gray-300 transition duration-300">
                Terms and Conditions
              </Link>
              <span className="mx-6">|</span>
              <Link to="/privacy-policy" className="text-white hover:text-gray-300 transition duration-300">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
