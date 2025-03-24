import React from 'react';
import { Link } from 'react-router-dom';
import bgShape9 from '../../assets/imgs/bg-shape-9.svg'; // Adjust the path to your assets
import portfolio1 from '../../assets/imgs/portfolio-1.jpg';
import portfolio2 from '../../assets/imgs/portfolio-2.jpg';
import portfolio3 from '../../assets/imgs/portfolio-3.jpg';
import portfolio4 from '../../assets/imgs/portfolio-4.jpg';
import portfolio5 from '../../assets/imgs/portfolio-5.jpg';
import portfolio6 from '../../assets/imgs/portfolio-6.jpg';
import smallImg1 from '../../assets/imgs/small-img-1.png';
import smallImg2 from '../../assets/imgs/small-img-2.png';
import smallImg3 from '../../assets/imgs/small-img-3.png';
import smallImg4 from '../../assets/imgs/small-img-4.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const PortfolioArea = () => {
  return (
    <section className="portoflio-area">
      <img src={bgShape9} alt="Shape" className="bg-shape" />
      <div className="custom-container">
        <div className="section-header d-flex align-items-end justify-content-between">
          <div className="left">
            <h5 className="section-subtitle">PORTFOLIO</h5>
            <h1 className="section-title">
              Explore more about our <br /> business
            </h1>
          </div>
          <p>
            Where we proudly present a collection of our finest accomplishments and success stories.
            Each project represents a collaborative journey with our clients, dedication, and a
            commitment to excellence.
          </p>
        </div>

        <div className="portfolio-lists d-flex w-full gap-24">
          <div className="portfolio-col">
            <div className="portfolio-card portfolio-card-1 card-h">
              <div className="portfolio-img">
                <img src={portfolio1} alt="Portfolio" />
              </div>
              <div className="portfolio-body">
                <h2>
                  <Link to="/portfolio">HRMS with Job Portal</Link>
                </h2>
                <p>AI-powered recruitment and workforce management</p>
                <Link to="/portfolio" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </Link>
              </div>
            </div>
            <div className="portfolio-card portfolio-card-2 card-h">
              <div className="portfolio-body">
                <h2>
                  <Link to="/portfolio">TMS (Transport Management System)</Link>
                </h2>
                <p>Smart logistics and route optimization</p>
                <Link to="/portfolio" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src={portfolio2} alt="Portfolio" />
              </div>
            </div>
          </div>

          <div className="portfolio-col">
            <div className="portfolio-card portfolio-card-2 card-h">
              <div className="portfolio-body">
                <h2>
                  <Link to="/portfolio">B2B E-Commerce Platform</Link>
                </h2>
                <p>Multi-vendor marketplace solution</p>
                <Link to="/portfolio" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src={portfolio3} alt="Portfolio" />
              </div>
            </div>
            <div className="portfolio-card portfolio-card-1 card-h">
              <div className="portfolio-img">
                <img src={portfolio4} alt="Portfolio" />
              </div>
              <div className="portfolio-body">
                <h2>
                  <Link to="/portfolio">IoTGuard System</Link>
                </h2>
                <p>Predictive maintenance solution</p>
                <Link to="/portfolio" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="portfolio-col">
            <div className="portfolio-card portfolio-card-1 card-h">
              <div className="portfolio-img">
                <img src={portfolio5} alt="Portfolio" />
              </div>
              <div className="portfolio-body">
                <h2>
                  <Link to="/portfolio">Data Analytics Platform</Link>
                </h2>
                <p>Business intelligence and insights</p>
                <Link to="/portfolio" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </Link>
              </div>
            </div>
            <div className="portfolio-card portfolio-card-2 card-h">
              <div className="portfolio-body">
                <h2>
                  <Link to="/portfolio">Industry Solutions</Link>
                </h2>
                <p>Tailored technology for specific sectors</p>
                <Link to="/portfolio" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src={portfolio6} alt="Portfolio" />
              </div>
            </div>

            <div className="portfolio-social-card">
              <ul className="d-flex align-items-center">
                <li>
                  <Link to="/dribbble">
                    <i className="iconoir-dribbble"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/twitter">
                    <i className="iconoir-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/instagram">
                    <i className="iconoir-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/linkedin">
                    <i className="iconoir-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio-footer d-flex align-items-center justify-content-between w-full">
          <div className="our-expert-team-box d-flex align-items-center">
            <div className="our-expert-team-box-inner d-flex align-items-center">
              <div className="imgs d-flex align-items-center">
                <img src={smallImg4} alt="team" />
                <img src={smallImg3} alt="team" />
                <img src={smallImg2} alt="team" />
                <img src={smallImg1} alt="team" />
              </div>
              <p>Slack is used by over 60,000+ companies across the world</p>
            </div>
          </div>

          <div className="slide-btn" id="slide-btn">
            <div id="slide-ball"></div>
            <h4>Slide to book an appointment</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioArea;