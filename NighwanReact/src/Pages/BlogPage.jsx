import React from 'react';
import news1 from '../assets/imgs/news-1.jpg'; 
import news2 from '../assets/imgs/news-2.jpg';
import news3 from '../assets/imgs/news-3.jpg';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import ContactArea from '../components/Home/ContactArea';
import { Helmet } from 'react-helmet';

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
                <h1 className="section-title fade-in">
                  Explore our blog for expert knowledge and inspiration
                </h1>
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
              <img src={news1} alt="News" />
            </div>
            <div className="news-content">
              <h5 className="section-subtitle">MOBILE DEVELOPMENT</h5>
              <h1 className="section-title">
                OpenAI launches new alignment division to tackle risks of superintelligent AI
              </h1>
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
              <a href="/blogs/aiml" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* News Items */}
          <div className="news-items align-items-start">
            {/* News Item 1 */}
            <div className="news-item card-h" style={{ marginBottom: '5px' }}>
              <div className="news-img-box">
                <img src={news2} alt="News" />
              </div>
              <div className="news-item-body">
                <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
                <h1 className="section-title">
                  <a href="/blog-detail">
                    Bluebase launches Tap to Pay on smartphone for international and domestic
                    business
                  </a>
                </h1>
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
                <a href="/blogs/erp" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="news-item card-h">
              <div className="news-img-box">
                <img src={news3} alt="News" />
              </div>
              <div className="news-item-body">
                <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
                <h1 className="section-title">
                  <a href="/blog-detail">
                    Google Bard launches in EU, overcoming data privacy concerns in the region
                  </a>
                </h1>
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
                <a href="/blogs/hrms" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
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