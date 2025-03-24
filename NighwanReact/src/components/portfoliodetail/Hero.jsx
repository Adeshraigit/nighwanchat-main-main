import ai from "../../assets/imgs/pB/AI.png"
import erp from "../../assets/imgs/pB/ERP System.png"     
import data from "../../assets/imgs/pB/data.png"
import dev from "../../assets/imgs/pB/Devop.png"  
import ecom from "../../assets/imgs/pB/Ecommerce.png"  
import tms from "../../assets/imgs/pB/Transport.png"
import hrms from "../../assets/imgs/pB/hrms Job.png"  
import iot from "../../assets/imgs/pB/IOT.png"
const HeroSection = ({type}) => {

  const products = {
    "erp" : {
      one: "ERP System – Intelligent Business Management",
      two: "A custom-built ERP solution tailored for businesses looking to integrate and automate their operations.",
      img : erp   
    },
    "ai": {
    one: "AI-Powered Sales Forecasting",
    two: "Advanced AI/ML-driven sales prediction software for demand-driven manufacturing and retail businesses.",
    img : ai
  },
  "b2b": {
    one: "B2B E-Commerce Platform",
    two: "A feature-rich online marketplace where multiple vendors can list, sell, and manage their products seamlessly.",
    img : ecom
    },
    "iot" : {
      one : "IoT-Enabled Predictive Maintenance",
      two : "A smart IoT solution that helps industries monitor equipment health and predict failures before they",
      img : iot
    },  
    "hrms" : {
      one : "HRMS with Job Portal",
      two : "A comprehensive Human Resource Management System integrated with a job portal to streamline HR operations and talent acquisition.",
      img : hrms
    },
    "tms" : {
      one : "Transport Management System",
      two : "A smart logistics and transportation management solution for fleet tracking and route optimization.", 
      img : tms
    },
    "data" : {
      one : "Data Analytics & Digital Twin Technology",
      two : "A powerful data analytics platform integrated with digital twin technology for real-time business insights.",
      img : data
    }, 
    "devops" : {
      one : "DevOps & Cloud Solutions",
      two : "A fully automated DevOps platform to streamline software development and deployment.",
      img : dev 
    }
  }

    return (
      <>
      <section className="hero-service-wrap hero-section-wrap hero-overview-wrap">
        <div style={{ paddingTop: '100px'}} className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Portfolio</h5>
                <h1 className="section-title fade-in">
                 {products[type].one}
                </h1>
                <p>
                 {products[type].two} 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new-release-hero-img-area">
      <div className="custom-container">
        <div className="new-release-img-box">
          <img src={products[type].img} alt="Portfolio Details" />
        </div>
      </div>
    </section>
    </>
    );
  };
  
  export default HeroSection;
  
  