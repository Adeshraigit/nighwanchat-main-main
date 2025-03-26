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
          <div className="sticky-news d-flex card-h" style={{ marginBottom: '5px' }}>
            <div className="news-img-box">
              <img src={aimlImgbM} alt="News" />
            </div>
            <div className="news-content">
              {/* <h5 className="section-subtitle">MOBILE DEVELOPMENT</h5> */}
              <h2 className="section-title">
                OpenAI launches new alignment division to tackle risks of superintelligent AI
              </h2>
              <p>
                The makers of AI have announced the company will be dedicating 20% of its compute
                processing power over the next four years
              </p>
              <ul>
                <li>
                  <i className="las la-check"></i> Collaboration Tools
                </li>
                <li>
                  <i className="las la-check"></i> Smart Reminders
                </li>
              </ul>
              <Link to="/blogs/aiml" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </Link>
            </div>
          </div>

          {/* News Items */}
          <div className="news-items align-items-start">
            {/* News Item 1 */}
            <div className="news-item card-h" style={{ marginBottom: '5px' }}>
              <div className="news-img-box">
                <img src={erpImgbM} alt="News" />
              </div>
              <div className="news-item-body">
                {/* <h5 className="section-subtitle">WEB DEVELOPMENT</h5> */}
                <h2 className="section-title">
                  <Link to="/blog-detail">
                    Bluebase launches Tap to Pay on smartphone for international and domestic
                    business
                  </Link>
                </h2>
                <p>
                  Small UK merchants, businesses, and other enterprises can now use Tap to Pay on
                  service to replace payment terminals at point of sale.
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Collaboration Tools
                  </li>
                  <li>
                    <i className="las la-check"></i> Smart Reminders
                  </li>
                  <li>
                    <i className="las la-check"></i> Requirement
                  </li>
                  <li>
                    <i className="las la-check"></i> Task Management
                  </li>
                </ul>
                <Link to="/blogs/erp" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="news-item card-h">
              <div className="news-img-box">
                <img src={hrmsImgbM} alt="News" />
              </div>
              <div className="news-item-body">
                {/* <h5 className="section-subtitle">WEB DEVELOPMENT</h5> */}
                <h2 className="section-title">
                  <Link to="/blog-detail">
                    Google Bard launches in EU, overcoming data privacy concerns in the region
                  </Link>
                </h2>
                <p>
                  Small UK merchants, businesses, and other enterprises can now use Tap to Pay on
                  service to replace payment terminals at point of sale.
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Collaboration Tools
                  </li>
                  <li>
                    <i className="las la-check"></i> Smart Reminders
                  </li>
                  <li>
                    <i className="las la-check"></i> Requirement
                  </li>
                </ul>
                <Link to="/blogs/hrms" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FeatureArea /> */}
      <ContactArea />
    </>
  );
};

export default BlogPage;