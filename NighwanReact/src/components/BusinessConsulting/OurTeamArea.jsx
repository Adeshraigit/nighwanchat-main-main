import React from 'react';
import team1 from '../../assets/imgs/team-1.jpg'; // Adjust the path to your assets
import team2 from '../../assets/imgs/team-2.jpg';
import team3 from '../../assets/imgs/team-3.jpg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const OurTeamArea = () => {
  return (
    <section className="our-team-area">
      <div className="custom-container">
        <div className="section-header d-flex align-items-end justify-content-between w-full">
          <div className="left">
            <h5 className="section-subtitle">OUR TEAM</h5>
            <h1 className="section-title">
              Our team consists of
              <br /> world class experts
            </h1>
          </div>
          <p>
            We are proud to introduce you to the talented individuals who make up our consultancy's
            backbone, each contributing their unique skills and wealth of experience to drive
            transformative results.
          </p>
        </div>

        <div className="our-teams-list">
          <div className="our-team-box d-flex" id="first-box">
            <div className="img-box">
              <img src={team2} alt="Team" />
            </div>
            <div className="our-team-body card-h">
              <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                <div className="mac-buttons d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="action-btn d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="our-team-body-inner">
                <div className="our-team-personal-details">
                  <h3 className="name">
                    <span className="icon">
                      <i className="las la-user"></i>
                    </span>{' '}
                    Henderson Mario
                  </h3>
                  <h3 className="web-design">
                    <span className="icon">
                      <i className="las la-vector-square"></i>
                    </span>{' '}
                    Web Designer
                  </h3>
                  <h3 className="location">
                    <span className="icon">
                      <i className="las la-map-marker"></i>
                    </span>{' '}
                    Melbourne, AUS
                  </h3>
                  <h3 className="experience">
                    <span className="icon">
                      <i className="lar la-star"></i>
                    </span>{' '}
                    7 Years Experience
                  </h3>
                </div>
                <div className="our-team-bio">
                  <p>
                    In the ever-evolving landscape of business, a robust and well-defined strategy is
                    the compass that guides your journey to success. At Strategic Business Solutions,
                    we specialize in crafting business strategies that go beyond mere plans. They are
                    blueprints for growth, innovation, and enduring prosperity.
                  </p>
                </div>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="our-team-box our-team-box2 d-flex">
            <div className="img-box">
              <img src={team1} alt="Team" />
            </div>
            <div className="our-team-body card-h">
              <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                <div className="mac-buttons d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="action-btn d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="our-team-body-inner">
                <div className="our-team-personal-details">
                  <h3 className="name">
                    <span className="icon">
                      <i className="las la-user"></i>
                    </span>{' '}
                    Annie Coral
                  </h3>
                  <h3 className="web-design">
                    <span className="icon">
                      <i className="las la-vector-square"></i>
                    </span>{' '}
                    Business Analyst
                  </h3>
                  <h3 className="location">
                    <span className="icon">
                      <i className="las la-map-marker"></i>
                    </span>{' '}
                    San Francisco, USA
                  </h3>
                  <h3 className="experience">
                    <span className="icon">
                      <i className="lar la-star"></i>
                    </span>{' '}
                    5 Years Experience
                  </h3>
                </div>
                <div className="our-team-bio">
                  <p>
                    In the ever-evolving landscape of business, a robust and well-defined strategy is
                    the compass that guides your journey to success. At Strategic Business Solutions,
                    we specialize in crafting business strategies that go beyond mere plans. They are
                    blueprints for growth, innovation, and enduring prosperity.
                  </p>
                </div>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="our-team-box our-team-box3 d-flex">
            <div className="img-box">
              <img src={team3} alt="Team" />
            </div>
            <div className="our-team-body card-h">
              <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                <div className="mac-buttons d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="action-btn d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="our-team-body-inner">
                <div className="our-team-personal-details">
                  <h3 className="name">
                    <span className="icon">
                      <i className="las la-user"></i>
                    </span>{' '}
                    Elsa Hermione
                  </h3>
                  <h3 className="web-design">
                    <span className="icon">
                      <i className="las la-vector-square"></i>
                    </span>{' '}
                    Senior Developer
                  </h3>
                  <h3 className="location">
                    <span className="icon">
                      <i className="las la-map-marker"></i>
                    </span>{' '}
                    Edinburgh, UK
                  </h3>
                  <h3 className="experience">
                    <span className="icon">
                      <i className="lar la-star"></i>
                    </span>{' '}
                    3 Years Experience
                  </h3>
                </div>
                <div className="our-team-bio">
                  <p>
                    In the ever-evolving landscape of business, a robust and well-defined strategy is
                    the compass that guides your journey to success. At Strategic Business Solutions,
                    we specialize in crafting business strategies that go beyond mere plans. They are
                    blueprints for growth, innovation, and enduring prosperity.
                  </p>
                </div>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamArea;