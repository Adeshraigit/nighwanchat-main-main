import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path

const HeroServiceWrap = ({type}) => {

  const services = {
    "Branding" : {
      name : " Branding – Crafting Unique Identities",
      title : "Branding – Crafting Unique Identities", 
      content : "A strong brand is more than just a logo—it’s a promise to your customers. At Nighwan Technology Pvt. Ltd., we craft unique and memorable brand identities that establish credibility, engage audiences, and drive business growth."
    },
    "ERP" : {
      name : "ERP Development – Custom Business Solutions",
      title : "Transform Your Business with Smart ERP",
      content: "We develop custom ERP solutions that centralize business operations, improve productivity, and streamline workflows. Whether you need inventory management, HR automation, or sales reporting, we’ve got you covered."
    },
    "aim" : {
      name : "AI/ML Solutions – Intelligent Automation & Insights",
      title : "Power Your Business with AI & Machine Learning",
      content: "We harness the power of Artificial Intelligence & Machine Learning to automate operations, optimize decision-making, and unlock data-driven insights."
    },
    "Web" : {
      name : "Web & Mobile App Development",
      title : "Build Scalable Digital Experiences",
      content: "We create high-performance web and mobile apps that offer seamless user experiences, high responsiveness, and advanced functionality."
    },
    "Data" : {
      name : "Data Analytics – Turning Data into Decisions",
      title : "Unlock Actionable Insights from Your Data",
      content: "We transform raw data into meaningful insights to optimize business strategies, enhance decision-making, and drive growth."
    },
    "Iot" : {
      name : "IoT Solutions – Smart & Connected Systems",
      title : "Automate and Optimize with IoT",
      content: "We provide end-to-end IoT solutions that enhance automation, monitoring, and real-time data collection for smarter operations."
    },
    "Digital" : {
      name : "Digital Marketing – Engage & Grow Online",
      title : "Expand Your Reach with Digital Marketing",
      content: "We create custom digital marketing strategies to boost visibility, drive engagement, and increase conversions."
    },
    "IT" : {
      name : "IT Support & Maintenance",
      title : " Keep Your Systems Running Smoothly",
      content: "We offer proactive IT support & maintenance to ensure seamless system performance and prevent downtime."
    },
    "Devops" : {
      name : "DevOps Services – Faster Deployment, Better Efficiency",
      title : "Optimize Your Development Process with DevOps",
      content: "We streamline software development & operations for faster, more efficient deployment."
    },
  }

  return (
    <>
    <section className="hero-service-wrap hero-section-wrap hero-overview-wrap">
      <div style={{ paddingTop: '100px'}} className="hero-section-content-wrap">
        <div className="custom-container">
          <div className="hero-portfolio-body">
            <div className="hero-section-content text-center">
              <h5 className="section-subtitle">{services[`${type}`].name}</h5>
              <h1 className="section-title fade-in">
              {services[`${type}`].title}
              </h1>
              <p>
                {services[`${type}`].content}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default HeroServiceWrap;