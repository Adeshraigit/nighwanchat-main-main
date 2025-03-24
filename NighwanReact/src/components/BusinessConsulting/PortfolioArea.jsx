import React from 'react';
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
                  <a href="#">
                    Work <br />
                    consulting.
                  </a>
                </h2>
                <p>We have a best team for your consulting service.</p>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>
            <div className="portfolio-card portfolio-card-2 card-h">
              <div className="portfolio-body">
                <h2>
                  <a href="#">
                    Take a <br />
                    architecture <br />
                    photography
                  </a>
                </h2>
                <p>We have best photographers in our digital studio.</p>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
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
                  <a href="#">
                    Take a <br />
                    architecture <br />
                    photography
                  </a>
                </h2>
                <p>We have a best team for your branding studio.</p>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
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
                  <a href="#">
                    Work <br />
                    consulting.
                  </a>
                </h2>
                <p>
                  We have a best team for <br />
                  your consulting service.
                </p>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
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
                  <a href="#">
                    Game <br />
                    branding.
                  </a>
                </h2>
                <p>
                  Our best team for bring <br />
                  your market to new era.
                </p>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>
            <div className="portfolio-card portfolio-card-2 card-h">
              <div className="portfolio-body">
                <h2>
                  <a href="#">
                    Take a <br />
                    architecture
                  </a>
                </h2>
                <p>Explore your ideas with us to improve.</p>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
              <div className="portfolio-img">
                <img src={portfolio6} alt="Portfolio" />
              </div>
            </div>

            <div className="portfolio-social-card">
              <ul className="d-flex align-items-center">
                <li>
                  <a href="#">
                    <i className="iconoir-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="iconoir-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="iconoir-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="iconoir-linkedin"></i>
                  </a>
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