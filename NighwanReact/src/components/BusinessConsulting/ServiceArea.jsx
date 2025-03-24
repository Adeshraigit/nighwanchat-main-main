import React from 'react';
import bgShape7 from '../../assets/imgs/bg-shape-7.svg'; // Adjust the path to your assets
import service1 from '../../assets/imgs/⁠Process Optimization.png';  
import service2 from '../../assets/imgs/Waste Reduction.png';
import service3 from '../../assets/imgs/Value Streamlining.png';
import service4 from '../../assets/imgs/Kaizen Implementation.png';
import service5 from '../../assets/imgs/Lean Automation.png';
import service6 from '../../assets/imgs/Performance Analytics.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const ServiceArea = () => {
  return (
    <section className="service2-area">
      <img className="bg-shape" src={bgShape7} alt="Shape" />
      <div className="custom-container">
        <div className="custom-row">
          <div className="service2-header d-flex align-items-center justify-content-between w-full">
            <div className="left">
              <h5 className="section-subtitle">Our Lean Consultancy Services</h5>
              {/* <h1 className="section-title"></h1> */}
              <p>
              We deliver best-in-class lean solutions to optimize efficiency. Our consulting process starts with a comprehensive assessment of your existing operations, workflows, and inefficiencies, identifying key areas for improvement and waste reduction to drive sustainable growth.
              </p>
            </div>

            <a href="/service" className="theme-btn">
              Learn More <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
        </div>

        <div className="service2-items d-flex w-full">
          <div className="service2-card card-h">
            <img src={service1} alt="Service" />
            <h2>Process Optimization</h2>
            <p>
             Streamlining workflows for <br/> maximum efficiency and productivity.
            </p>
             
          </div>
          <div className="service2-card card-h">
            <img src={service2} alt="Service" />
            <h2>Waste Reduction</h2>
            <p>
            Eliminating unnecessary processes <br/> to enhance resource utilization.
            </p>
             
          </div>
          <div className="service2-card card-h">
            <img src={service3} alt="Service" />
            <h2>Value Streamlining</h2>
            <p>
            Enhancing value delivery with <br/> minimal operational bottlenecks.
            </p>
             
          </div>
          <div className="service2-card card-h">
            <img src={service4} alt="Service" />
            <h2>Kaizen Implementation</h2>
            <p>
            Driving continuous improvement <br/> through small, impactful changes.
            </p>
             
          </div>
        </div>

        <div className="d-flex gap-24 service2-bottom-2-col">
          <div className="service3-card d-flex flex-1 card-h">
            <img src={service5} alt="Service" />
            <div className="service3-body">
              <div className="service3-content">
                <h3>Lean Automation</h3>
                <p>
                Integrating smart systems for optimized process efficiency.
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Customized Growth
                  </li>
                  <li>
                    <i className="las la-check"></i> Market Penetration
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="service3-card d-flex flex-1 card-h">
            <img src={service6} alt="Service" />
            <div className="service3-body">
              <div className="service3-content">
                <h3>Performance Analytics</h3>
                <p>
                Data-driven insights to boost operational decision-making.
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Industry Insights
                  </li>
                  <li>
                    <i className="las la-check"></i> Optimize Resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;