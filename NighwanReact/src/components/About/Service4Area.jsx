import React from 'react';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS
import serviceIcon1 from '../../assets/imgs/service-icon-1.svg';
import serviceIcon7 from '../../assets/imgs/service-icon-7.svg';
import serviceIcon4 from '../../assets/imgs/service-icon-4.svg';
import hwdIcon4 from '../../assets/imgs/hwd-icon-4.svg';
import serviceIcon2 from '../../assets/imgs/service-icon-2.svg';
import serviceIcon3 from '../../assets/imgs/service-icon-3.svg';
import serviceIcon5 from '../../assets/imgs/service-icon-5.svg';
import serviceIcon6 from '../../assets/imgs/service-icon-6.svg';  
import serviceIcon8 from '../../assets/imgs/service-icon-8.svg';
import serviceIcon9 from '../../assets/imgs/service-icon-9.svg';    
import { Link } from 'react-router-dom';

const Service4Area = () => {

  const services = [
    { icon: serviceIcon1, title: "Lean Consultancy", description: "Optimizing operations to reduce waste and improve efficiency.", link: "lean" },
    { icon: serviceIcon2, title: "Branding", description: "Crafting unique identities that resonate with audiences.", link: "Branding" },
    { icon: serviceIcon3, title: "ERP Development", description: "Custom ERP solutions for seamless business management.", link:"ERP" },
    { icon: serviceIcon4, title: "AI/ML Solutions", description: "Leveraging AI/ML for intelligent automation and insights.", link:"aim" },
    { icon: serviceIcon5, title: "Web/Mobile App Development", description: "Building intuitive, scalable, and responsive digital experiences.", link:"Web" },
    { icon: hwdIcon4, title: "Data Analytics", description: "Transforming data into actionable insights for decision-making.", link:"Data" },
    { icon: serviceIcon7, title: "IoT Solutions", description: "Connecting devices for smarter, automated business operations.", link:"Iot" },
    { icon: serviceIcon8, title: " Digital Marketing ", description: "Crafting strategies to drive engagement and growth online.", link:"Digital" },
    { icon: serviceIcon9, title: "IT Support & Maintenance", description: "Ensuring seamless system performance with expert support.", link:"IT" },  
    { icon: serviceIcon6, title: "DevOps Services", description: "Streamlining development and operations for faster deployment.", link:"Devops" }, 
  ];

  return (
    <section className="service-area">
      <div className="custom-container">
        <div className="service-section-header section-header d-flex align-items-end justify-content-between">
          <div className="left">
            <h5 className="section-subtitle">WHAT WE’RE OFFERING</h5>
            <h1 className="section-title">Dealing in all professional <br /> IT services.</h1>
          </div>
          <p>
            One fundamental aspect of IT services is infrastructure management. This involves the design, 
            implementation, and maintenance of the hardware, software, networks, and servers.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, key) => (
            <Link key={key} to={service.link == "lean" ? "/lean" : `/service-details/${service.link}`} >
            <div  className="service-card simple-shadow">
              {service.badge && (
                <span className="service-badge">{service.badge}</span>
              )}
              <img src={service.icon} alt="Service Icon" className="service-icon" />
                <Link href={`/service-details/${service.link}`}><h3>{service.title}</h3></Link>
              <p>{service.description}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service4Area;