import React from 'react';
import { Link } from 'react-router-dom';
import aimlImgbM from '../../assets/imgs/bM/aiml.png'; 
import erpImgbM from '../../assets/imgs/bM/erp.png';
import hrmsImgbM from '../../assets/imgs/bM/hrms.png'; 
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const NewsArea = () => {
  return (
    <section className="news-area">
            <div className="custom-container">
              {/* Sticky News */}
              <Link to="/blogs/aiml"  >
              <div className="sticky-news d-flex card-h" style={{ marginBottom: '5px' }}>
                <div className="news-img-box">
                  <img src={aimlImgbM} alt="News" />
                </div>
                <div className="news-content">
                  {/* <h5 className="section-subtitle">MOBILE DEVELOPMENT</h5> */}
                  <h2 className="section-title">
                  How AI and Lean Manufacturing Are Revolutionizing the Indian Industry
                  </h2>
                  <p>
                  Discover how Artificial Intelligence (AI) and Lean Manufacturing are reshaping the Indian industry
                  </p>
                  <Link to="/blogs/aiml" className="theme-btn">
                    <i className="iconoir-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
              </Link>
    
              {/* News Items */}
              <div className="news-items align-items-start">
                {/* News Item 1 */}
                <Link to="/blogs/erp"  >
                <div className="news-item card-h" style={{ marginBottom: '5px' }}>
                  <div className="news-img-box">
                    <img src={erpImgbM} alt="News" />
                  </div>
                  <div className="news-item-body">
                    {/* <h5 className="section-subtitle">WEB DEVELOPMENT</h5> */}
                    <h2 className="section-title">
                      <Link to="/blogs/erp">
                      Why Your Business Needs an Integrated ERP System in 2025
                      </Link>
                    </h2>
                    <p>
                    Is your business ready for 2025? Discover why an integrated ERP system is essential
                    </p>
                    <Link to="/blogs/erp" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
                </Link>
    
                {/* News Item 2 */}
                <Link to="/blogs/hrms" >
                <div className="news-item card-h">
                  <div className="news-img-box">
                    <img src={hrmsImgbM} alt="News" />
                  </div>
                  <div className="news-item-body">
                    {/* <h5 className="section-subtitle">WEB DEVELOPMENT</h5> */}
                    <h2 className="section-title">   
                    <Link to={"/blogs/hrms"}>
                    Transforming Workforce Management with AI-Powered HRMS Solutions
                    </Link>  
                    </h2>
                    <p>
                    HR management is evolving with AI-powered HRMS solutions! Learn how automated payroll, smart recruitment tools, real-time attendance tracking, and more can transform HR operations.
                    </p>
                    <Link to="/blogs/hrms" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </section>
  );
};

export default NewsArea;