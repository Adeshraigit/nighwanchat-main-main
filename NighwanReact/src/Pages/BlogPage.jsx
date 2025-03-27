import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import ContactArea from '../components/Home/ContactArea';
import { Helmet } from 'react-helmet';
import aimlImgbM from '../assets/imgs/bM/aiml.png'; 
import erpImgbM from '../assets/imgs/bM/erp.png';
import hrmsImgbM from '../assets/imgs/bM/hrms.png'; 

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Blog | Nighwan Technology Pvt. Ltd.</title>
        <meta name="description" content="Stay updated with the latest insights on AI, digital transformation, ERP systems, lean manufacturing, and IT solutions through Nighwan Technology's blog." />
        <meta name="keywords" content="AI trends, digital transformation, ERP solutions, IT consulting, software development, technology blog, lean manufacturing insights" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Blog Section */}
      <section className="hero-service-wrap hero-section-wrap hero-blog-wrap">
        <div style={{ paddingTop: '100px' }} className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Blog</h5>
                <h2 className="section-title fade-in">
                  Explore our blog for expert knowledge and inspiration
                </h2>
                <p>
                  Stay connected with us by subscribing to our blog updates. By doing so, <br />
                  you'll receive notifications whenever we publish new articles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
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
      {/* <FeatureArea /> */}
      <ContactArea />
    </>
  );
};

export default BlogPage;