import React from 'react';
import icon1 from '../../assets/imgs/icon1.svg';
import smallImg1 from '../../assets/imgs/small-img-1.png';
import smallImg2 from '../../assets/imgs/small-img-2.png';
import smallImg3 from '../../assets/imgs/small-img-3.png';
import smallImg4 from '../../assets/imgs/small-img-4.png';
import icon2 from '../../assets/imgs/icon2.svg';
import NighwanTechHome from '../../assets/imgs/NighwanTechHome.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS
import { Link } from 'react-router-dom';

const HeroEmpowerment = () => {
  return (
    <section className="hero-empowerment-area">
      <div className="custom-container">
        <div className="custom-row align-items-center">
          <div className="hero-empowerment-left-content">
            <h5 className="section-subtitle">EMPOWERMENT</h5>
            <h2 className="section-title fade-in">Welcome to Nighwan Technology
            Innovative AI & ML Solutions for a Smarter Tomorrow.</h2>
            <p>We integrate Artificial Intelligence, Machine Learning, and Lean Manufacturing expertise to optimize operations, reduce costs, and drive growth for businesses across industries.</p>
            <div className="btns-group d-flex">
              <Link href="/service" className="theme-btn">Explore More</Link>
              <Link href="/lean" className="theme-btn2">
                Get in Touch <i className="iconoir-arrow-up-right"></i>
              </Link>
            </div>
          </div>

          <div className="hero-empowerment-right-content">
            <div className="top-content">
              <img className="desktop fade-in" src={NighwanTechHome} alt="NighwanTechHome" />
              <img className="mobile" src={NighwanTechHome} alt="Empowerment" />

              <div className="experience-box simple-shadow bounce-in">
                <div className="experience-body d-flex align-items-center">
                  <img src={icon1} alt="Icon" />
                  <div className="experience-content d-flex align-items-center">
                    <h1>+4</h1>
                    <p>
                      Years
                      <span>Experience</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-content d-flex">
              <Link href="#" className="our-expert-team-box simple-shadow bounce-in delay-2">
                <div className="our-expert-team-box-inner d-flex align-items-center">
                  <div className="imgs imgs1 d-flex align-items-center">
                    <img src={smallImg4} alt="team" />
                    <img src={smallImg3} alt="team" />
                    <img src={smallImg2} alt="team" />
                    <img src={smallImg1} alt="team" />
                  </div>
                  <p>
                    Meet
                    <span>Our Experts</span>
                  </p>
                </div>
              </Link>

              <div className="google-reviews-box simple-shadow bounce-in delay-3">
                <div className="left">
                  <span>Verified by</span>
                  <img src={icon2} alt="Google" />
                </div>
                <div className="right">
                  <div className="stars d-flex align-items-center">
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                  </div>
                  <p>
                    250
                    <span> Reviews</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEmpowerment;