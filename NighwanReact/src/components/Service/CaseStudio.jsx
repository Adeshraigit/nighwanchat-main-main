import React, { useState } from 'react';
import caseStudio1 from '../../assets/imgs/case-studio-1-1.jpg'; // Adjust the path to your images
import caseStudio2 from '../../assets/imgs/case-studio-2-2.jpg';
import caseStudio3 from '../../assets/imgs/case-studio-3.jpg';
import caseStudio4 from '../../assets/imgs/case-studio-4.jpg';
import caseStudio5 from '../../assets/imgs/case-studio-5.jpg';
import caseStudio6 from '../../assets/imgs/case-studio-6.jpg';
import caseStudio7 from '../../assets/imgs/case-studio-7.jpg';
import caseStudio8 from '../../assets/imgs/case-studio-8.jpg';
import caseStudio9 from '../../assets/imgs/case-studio-9.jpg';
import caseStudio10 from '../../assets/imgs/case-studio-10.jpg';
import serviceIcon1 from '../../assets/imgs/service-icon-1.svg'; // Adjust the path to your icons
import serviceIcon2 from '../../assets/imgs/service-icon-2.svg';
import serviceIcon3 from '../../assets/imgs/service-icon-3.svg';
import serviceIcon4 from '../../assets/imgs/service-icon-4.svg';
import serviceIcon5 from '../../assets/imgs/service-icon-5.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState('development');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="case-studio-area">
      <div className="custom-container">
        <div className="case-studio-header text-center">
          <h5 className="section-subtitle">Detailing Our Products</h5>
          <h1 className="section-title">Powerful AI-Driven Solutions to Meet Your Needs</h1>
        </div>

        <div className="case-studio">
          <ul className="nav nav-pills case-studio-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'development' ? 'active' : ''}`}
                onClick={() => handleTabClick('development')}
              >
                HRMS with Job Portal
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'woo_commerce' ? 'active' : ''}`}
                onClick={() => handleTabClick('woo_commerce')}
              >
                TMS (Transport Management System)
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'crm_solutions' ? 'active' : ''}`}
                onClick={() => handleTabClick('crm_solutions')}
              >
                E-Commerce Platform
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'web_designing' ? 'active' : ''}`}
                onClick={() => handleTabClick('web_designing')}
              >
                Data Analytics Platform
              </button>
            </li>
            {/* <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'it_support' ? 'active' : ''}`}
                onClick={() => handleTabClick('it_support')}
              >
                Industry-Specific Solutions
              </button>
            </li> */}
          </ul>

          <div className="tab-content case-studio-tab-content">
            {/* Development Tab */}
            <div
              className={`tab-pane fade ${activeTab === 'development' ? 'show active' : ''}`}
              id="development"
              role="tabpanel"
              aria-labelledby="development-tab"
            >
              <div className="case-studio-body d-flex">
                <div className="left d-flex flex-1">
                  <div className="case-studio-img-card simple-shadow">
                    <a href="/portfolio" className="case-studio-cat">Web Development</a>
                    <img src={caseStudio1} alt="Case Studio" />
                  </div>
                  <div className="case-studio-img-card simple-shadow">
                    <a href="/portfolio" className="case-studio-cat">Mobile Development</a>
                    <img src={caseStudio2} alt="Case Studio" />
                  </div>
                </div>
                <div className="right">
                  <div className="case-studio-contents service-card card-h">
                    <img src={serviceIcon1} alt="ICON" />
                    <h3>HRMS with Job Portal</h3>
                    <p>
                    AI-powered recruitment, workforce management, and payroll in one centralized platform.
                    </p>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Woo Commerce Tab */}
            <div
              className={`tab-pane fade ${activeTab === 'woo_commerce' ? 'show active' : ''}`}
              id="woo_commerce"
              role="tabpanel"
              aria-labelledby="woo_commerce-tab"
            >
              <div className="case-studio-body d-flex">
                <div className="left d-flex flex-1">
                  <div className="case-studio-img-card simple-shadow">
                    <a href="/portfolio" className="case-studio-cat">electro.</a>
                    <img src={caseStudio3} alt="Case Studio" />
                  </div>
                  <div className="case-studio-img-card simple-shadow">
                    <a href="/portfolio" className="case-studio-cat">Visit Site Now</a>
                    <img src={caseStudio4} alt="Case Studio" />
                  </div>
                </div>
                <div className="right">
                  <div className="case-studio-contents service-card card-h">
                    <img src={serviceIcon2} alt="ICON" />
                    <h3>TMS (Transport Management System)</h3>
                    <p>
                    Smart logistics management with real-time tracking and route optimization.
                    </p>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CRM Solutions Tab */}
            <div
              className={`tab-pane fade ${activeTab === 'crm_solutions' ? 'show active' : ''}`}
              id="crm_solutions"
              role="tabpanel"
              aria-labelledby="crm_solutions-tab"
            >
              <div className="case-studio-body d-flex">
                <div className="left d-flex flex-1">
                  <div className="case-studio-img-card simple-shadow">
                    <a href="/portfolio" className="case-studio-cat">CRM Solutions</a>
                    <img src={caseStudio5} alt="Case Studio" />
                  </div>
                  <div className="case-studio-img-card simple-shadow">
                    <a href="/portfolio" className="case-studio-cat">Mobile Development</a>
                    <img src={caseStudio6} alt="Case Studio" />
                  </div>
                </div>
                <div className="right">
                  <div className="case-studio-contents service-card card-h">
                    <img src={serviceIcon3} alt="ICON" />
                    <h3>E-Commerce Platform</h3>
                    <p>
                    Vendor-friendly features, sales forecasting, and secure payment gateways for seamless transactions.
                    </p>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Designing Tab */}
            <div
              className={`tab-pane fade ${activeTab === 'web_designing' ? 'show active' : ''}`}
              id="web_designing"
              role="tabpanel"
              aria-labelledby="web_designing-tab"
            >
              <div className="case-studio-body d-flex">
                <div className="left d-flex flex-1">
                  <div className="case-studio-img-card simple-shadow">
                    <a href="/portfolio" className="case-studio-cat">Web Designing</a>
                    <img src={caseStudio7} alt="Case Studio" />
                  </div>
                  <div className="case-studio-img-card simple-shadow">
                    <a href="/portfolio" className="case-studio-cat">Mobile Development</a>
                    <img src={caseStudio8} alt="Case Studio" />
                  </div>
                </div>
                <div className="right">
                  <div className="case-studio-contents service-card card-h">
                    <img src={serviceIcon4} alt="ICON" />
                    <h3>Data Analytics Platform</h3>
                    <p>
                    Comprehensive analytics dashboards, predictive modeling, and insights for data-driven decisions.
                    </p>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* IT Support Tab */}
            <div
              className={`tab-pane fade ${activeTab === 'it_support' ? 'show active' : ''}`}
              id="it_support"
              role="tabpanel"
              aria-labelledby="it_support-tab"
            >
              <div className="case-studio-body d-flex">
                <div className="left d-flex flex-1">
                  <div className="case-studio-img-card simple-shadow">
                    <a href="/portfolio" className="case-studio-cat">IT Support</a>
                    <img src={caseStudio9} alt="Case Studio" />
                  </div>
                  <div className="case-studio-img-card simple-shadow">
                    <a href="/portfolio" className="case-studio-cat">Mobile Development</a>
                    <img src={caseStudio10} alt="Case Studio" />
                  </div>
                </div>
                <div className="right">
                  <div className="case-studio-contents service-card card-h">
                    <img src={serviceIcon5} alt="ICON" />
                    <h3>Industry-Specific Solutions</h3>
                    <p>
                    Tailored technology for restaurants, events, and more.
                    </p>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;