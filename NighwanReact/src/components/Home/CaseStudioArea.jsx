import React, { useState } from 'react';
import serviceIcon1 from '../../assets/imgs/service-icon-1.svg'; // Adjust the path to your icons
import tmsSvg from '../../assets/imgs/tms.svg';
import dataSvg from '../../assets/imgs/hwd-icon-4.svg';
import hrmsIcon from '../../assets/imgs/hrmsIcon.png';   
import dataBig from '../../assets/imgs/dataBig.png';
import hrmsBig from '../../assets/imgs/hrmsBig.png';
import tmsBig from '../../assets/imgs/tmsBig.png';
import ecommerceBig from '../../assets/imgs/ecommerceBig.png';
import data from '../../assets/imgs/data.png';
import hrms from '../../assets/imgs/hrms.png';
import tms from '../../assets/imgs/tms.png';
import ecommerce from '../../assets/imgs/ecom.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS
import ecomSvg from '../../assets/imgs/ecom.svg';

const CaseStudioArea = () => {
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
                    <a className="case-studio-cat">Web Design</a>
                    <img src={hrmsBig} alt="hrms" />
                  </div>
                  <div className="case-studio-img-card simple-shadow">
                    <a className="case-studio-cat">Mobile Design</a>
                    <img src={hrms} alt="hrms" />
                  </div>
                </div>
                <div className="right">
                  <div className="case-studio-contents service-card card-h">
                    <img src={hrmsIcon} alt="ICON" />
                    <h3>HRMS with Job Portal</h3>
                    <p>
                    AI-powered recruitment, workforce management, and payroll in one centralized platform.
                    </p>
                    <a href="/product-detail/hrms" className="theme-btn">
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
                    <a className="case-studio-cat">Web Design</a>
                    <img src={tmsBig} alt="tms" />
                  </div>
                  <div className="case-studio-img-card simple-shadow">
                    <a  className="case-studio-cat">Mobile View</a>
                    <img src={tms} alt="tms" />
                  </div>
                </div>
                <div className="right">
                  <div className="case-studio-contents service-card card-h">
                    <img src={tmsSvg} alt="ICON" />
                    <h3>TMS (Transport Management System)</h3>
                    <p>
                    Smart logistics management with real-time tracking and route optimization.
                    </p>
                    <a href="/product-detail/tms" className="theme-btn">
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
                    <a  className="case-studio-cat">Web Design</a>
                    <img src={ecommerceBig} alt="ecommerce" />
                  </div>
                  <div className="case-studio-img-card simple-shadow">
                    <a className="case-studio-cat">Mobile Design</a>
                    <img src={ecommerce} alt="ecommerce" />
                  </div>
                </div>
                <div className="right">
                  <div className="case-studio-contents service-card card-h">
                    <img src={ecomSvg} alt="ICON" />
                    <h3>E-Commerce Platform</h3>
                    <p>
                    Vendor-friendly features, sales forecasting, and secure payment gateways for seamless transactions.
                    </p>
                    <a href="product-detail/b2b" className="theme-btn">
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
                    <a className="case-studio-cat">Web Design</a>
                    <img src={dataBig} alt="data" />
                  </div>
                  <div className="case-studio-img-card simple-shadow">
                    <a className="case-studio-cat">Mobile Design</a>
                    <img src={data} alt="data" />
                  </div>
                </div>
                <div className="right">
                  <div className="case-studio-contents service-card card-h">
                    <img src={dataSvg} alt="ICON" />
                    <h3>Data Analytics Platform</h3>
                    <p>
                    Comprehensive analytics dashboards, predictive modeling, and insights for data-driven decisions.
                    </p>
                    <a href="/product-detail/data" className="theme-btn">
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

export default CaseStudioArea;