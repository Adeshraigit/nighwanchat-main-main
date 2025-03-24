import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import ai1 from '../../assets/imgs/sS/aiml.png';
import ai2 from '../../assets/imgs/sS/ai ml.png';    
import iot1 from '../../assets/imgs/sS/iot.png';
import iot2 from '../../assets/imgs/sS/iot1.png';
import dev1 from '../../assets/imgs/sS/devops.png';
import dev2 from '../../assets/imgs/sS/devops1.png';
import erp1 from '../../assets/imgs/sS/erp.png';
import erp2 from '../../assets/imgs/sS/erp 1.png';
import data1 from '../../assets/imgs/sS/data.png';
import data2 from '../../assets/imgs/sS/data 1.png';
import digi1 from '../../assets/imgs/sS/digital.png';
import digi2 from '../../assets/imgs/sS/digital1.png';
import it1 from '../../assets/imgs/sS/it su.png';
import it2 from '../../assets/imgs/sS/it supr.png';
import web1 from '../../assets/imgs/sS/web mob-1.png';
import web2 from '../../assets/imgs/sS/web Mob.png';
import brand1 from '../../assets/imgs/sS/branding.png';    
import brand2 from '../../assets/imgs/sS/branding 2.png';

const AboutService7Area = ({type}) => {

  const services = {
    "Branding" : {
      name : "Our Branding Services",
      one : "🎨 Logo & Visual Identity Design – Stand out with a professional and distinctive look.",
      two : "📢 Brand Messaging & Positioning – Create a compelling brand story that connects with your audience.",
      three : "📱 Social Media & Digital Branding – Strengthen your online presence with consistent branding.",
      img1 : brand1,
      img : brand2
    },
    "ERP" : {
      name : "Key ERP Features",
      one : "✅ Inventory & Supply Chain Management – Track and manage stock in real-time.",
      two : "✅ HR & Payroll Automation – Simplify employee management and payroll processing.",
      three : "✅ Financial & Sales Reporting – Gain insights with smart analytics and forecasting.",
      img1 : erp1,
      img : erp2
    },
    "aim" : {
      name : "AI/ML Services We Offer",
      one : "🤖 Predictive Analytics – Forecast trends and optimize processes",
      two : "📊 Chatbots & AI Customer Support – Automate customer interactions.",
      three : "🔍 Image Recognition & Computer Vision – Enhance security and automation.",
      img1 : ai1,
      img :  ai2
    },
    "Web" : {
      name : "Our Development Services",
      one : "🌐 Web Development – Custom websites & web applications.",
      two : "📱 Mobile App Development – iOS, Android & Cross-platform solutions.",
      three : "🔗 Progressive Web Apps (PWA) – Faster, lightweight, and responsive apps.",
      img1 : web1,
      img : web2
    },
    "Data" : {
      name : "Our Data Analytics Services",
      one : "📊 Business Intelligence Dashboards – Get real-time data visualization.",
      two : "📈 Big Data & Predictive Analytics – Identify trends and future opportunities.",
      three : "🔍 Customer Behavior & Market Insights – Improve marketing & sales strategies.",
      img1 : data1,
      img : data2
    },
    "Iot" : {
      name : "Our IoT Services",
      one : "📡 Smart Manufacturing & Predictive Maintenance – Reduce downtime & optimize production.",
      two : "🏠 IoT-Based Home & Office Automation – Intelligent control of appliances & security.",
      three : "🚛 Fleet & Asset Tracking Solutions – Real-time GPS tracking & monitoring..",
      img1 : iot1,
      img : iot2
    },
    "Digital" : {
      name : "Our Digital Marketing Services",
      one : "🔍 SEO & Content Marketing – Improve search rankings & visibility.",
      two : "📱 Social Media Management – Engage your audience effectively.",
      three : "🎯 Paid Advertising (PPC & Social Ads) – Generate high-quality leads.",
      img1 : digi1,
      img : digi2
    },
    "IT" : {
      name : "Our IT Support Services",
      one : "🛠 24/7 System Monitoring & Troubleshooting",
      two : "🔄 Software Updates & Security Patching",
      three : "🔒 Data Backup & Disaster Recovery",
      img1 : it1,
      img : it2
    },
    "Devops" : {
      name : "Our DevOps Services",
      one : "⚙ CI/CD Pipeline Implementation – Automate build & deployment processes.",
      two : "📦 Containerization & Microservices – Improve scalability with Docker & Kubernetes.",
      three : "🚀 Cloud Infrastructure Management – Secure & optimize cloud-based operations.",
      img1 : dev1,
      img : dev2
    },
  }

  return (
    <section className="about-service7-area">
      <div className="custom-container">
        <div className="about-service7-body d-flex align-items-center">
          <div className="about-service7-content">
            <div className="section-header">
              {/* <h5 className="section-subtitle"></h5> */}
              <h1 className="section-title">
              {services[type].name}</h1>
              {/* <p>Development is the cornerstone of innovation.</p> */}
            </div>
            <p>
             {services[type].one}
            </p>
            <p>
            {services[type].two}
            </p>
            <p>
            {services[type].three}  
            </p>
          </div>
          <div className="about-service7-img-box d-flex">
            <img src={services[type].img1} alt="Service Details" />
            <img src={services[type].img} alt="Service Details" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService7Area;