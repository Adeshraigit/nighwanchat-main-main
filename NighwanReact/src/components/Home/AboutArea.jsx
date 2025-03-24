import React from 'react';
import bgShape2 from '../../assets/imgs/bg-shape-2.svg';

const AboutArea = () => {
  return (
    <section className="about-area">
      <div className="custom-container">
        <div className="custom-row justify-content-between align-items-center">
          <div className="left-content">
            <h5 className="section-subtitle">CONSULTING EXCELLENCE</h5>
            <h1 className="section-title">Expert Guidance for Every Step.</h1>
            <p>
            Our team of AI and Lean experts works closely with you to develop customized strategies that align with your business goals. From identifying pain points to implementing cutting-edge solutions, we ensure a seamless journey toward operational excellence.
            </p>
            <ul>
              <li>
                <i className="icon-check las la-check"></i> AI-Powered Automation:Streamline your operations with intelligent automation.
              </li>
              <li>
                <i className="icon-check las la-check"></i> Data-Driven Insights: Make smarter decisions with predictive analytics.
              </li>
              <li>
                <i className="icon-check las la-check"></i> Scalable Solutions: Technology that grows with your business.
              </li>
            </ul>
          </div>

          <div className="right-content">
            <div className="about-timeline">
              <div className="about-timeline-item">
                <div className="about-timeline-item-inner">
                  <img src={bgShape2} alt="Shape" className="line-shape" />
                  <span className="number">01</span>
                  <h3>Discovery and Analysis</h3>
                  <p>Perform a analysis of the client's existing IT systems.</p>
                </div>
              </div>
              <div className="about-timeline-item">
                <div className="about-timeline-item-inner">
                  <img src="assets/imgs/bg-shape-2.svg" alt="Shape" className="line-shape" />
                  <span className="number">02</span>
                  <h3>Tailored Solutions</h3>
                  <p>Develop IT solutions based on the analysis phase.</p>
                </div>
              </div>
              <div className="about-timeline-item">
                <div className="about-timeline-item-inner">
                  <img src="assets/imgs/bg-shape-2.svg" alt="Shape" className="line-shape" />
                  <span className="number">03</span>
                  <h3>Deployment and Support</h3>
                  <p>Regularly communicate with our client to any concern.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;