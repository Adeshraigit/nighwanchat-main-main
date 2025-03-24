import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import bgShape3 from '../../assets/imgs/bg-shape-3.svg'; // Updated image import path
import aboutService7 from '../../assets/imgs/about-service-7.jpg'; // Updated image import path
import brand from "../../assets/imgs/sM/brand.png";
import erp from "../../assets/imgs/sM/erp.png";
import ai from "../../assets/imgs/sM/AI ML.png";
import data from "../../assets/imgs/sM/data.png";
import digi from "../../assets/imgs/sM/digital.png";    
import iot from "../../assets/imgs/sM/iot.png"; 
import it from "../../assets/imgs/sM/it support.png"; 
import dev from "../../assets/imgs/sM/iot (2).png";
import web from "../../assets/imgs/sM/Mobile Web.png";

const AboutService3Area = ({type}) => {

  const services = {
    "Branding" : {
      name : "Why Choose Us?",
      one : "Tailored branding strategies for your business",
      two : "Research-driven brand positioning",
      three : "Seamless integration across digital and physical platforms",
      img : brand
    },
    "ERP" : {
      name : "Benefits of Our ERP Solutions",
      one : "Increased operational efficiency",
      two : "Customizable to meet your business needs",
      three : "Scalable solutions for growing businesses",
      img : erp
    },
    "aim" : {
      name : "Why Choose AI for Your Business?",
      one : "Increased efficiency & automation",
      two : "Smarter, data-driven decision-making",
      three : "Competitive advantage in your industry",
      img : ai
    },
    "Web" : {
      name : "Why Choose Us?",
      one : "Scalable and secure solutions",
      two : "UI/UX design that enhances user engagement",
      three : "Cutting-edge technologies & frameworks",
      img : web
    },
    "Data" : {
      name : "Benefits of Data Analytics",
      two : "Improved efficiency and cost savings",
      three : "Better customer targeting and retention",
      img : data
    },
    "Iot" : {
      name : "Why Choose IoT for Your Business?",
      one : "Enhanced efficiency and automation",
      two : "Real-time monitoring and control",
      three : " Reduced operational costs",
      img : iot
    },
    "Digital" : {
      name : "Why Choose Us?",
      one : "Data-driven & ROI-focused strategies",
      two : "Targeted marketing for maximum impact",
      three : "Expertise in multiple industries",
      img : digi
    },
    "IT" : {
      name : "Why Choose Us?",
      one : "Reliable & responsive support",
      two : "Secure & optimized IT infrastructure",
      three : "Preventative maintenance for long-term performance",
      img : it
    },
    "Devops" : {
      name : "Our DevOps Services",
      one : "Faster software release cycles",
      two : "Improved system reliability & security",
      three : "Scalable & automated workflows",
      img : dev
    },
  }

  return (
    <section className="about-service3-area about-service3-style-2">
      <img
        src={bgShape3}
        alt="Shape"
        className="animation-slide-right bg-shape"
      />
      <div className="custom-container">
        <div className="custom-row align-items-center">
          <div className="img-box">
            <img src={services[`${type}`].img} alt="About" />
          </div>

          <div className="content-box">
            {/* <h5 className="section-subtitle">Why Development Matters</h5> */}
            <h1 className="section-title">{services[`${type}`].name}</h1>
            {/* <p>
            Developers, also known as coders or programmers, are the architects of digital transformation. Their expertise fuels the technology we use daily, turning ideas into powerful, scalable, and intelligent solutions that drive business success.
            </p> */}
            <ul>
              <li>
                <i className="las la-check"></i> {services["Branding"].one}
              </li>
              <li>
                <i className="las la-check"></i> {services["Branding"].two}
              </li>
              <li>
                <i className="las la-check"></i> {services["Branding"].three}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService3Area;