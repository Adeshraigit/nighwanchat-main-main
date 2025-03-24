import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import bgShape1 from '../../assets/imgs/bg-shape-1.svg'; // Updated image import path

const Feature3Area = () => {
  return (
    <section className="feature3-area feature3-style-2">
      {/* Uncomment this if you want to use the background shape */}
      <img src={bgShape1} alt="Shape" className="bg-shape" />
      <div className="custom-container">
        <div className="feature3-body">
          <div className="section-header">
            <h5 className="section-subtitle">FEATURES</h5>
            <h1 className="section-title">
              Boosting your
              business using
              our team
            </h1>
          </div>

          <div className="feature3-lists">
            <div className="feature-box">
              <i className="icon-box las la-check"></i>
              <h3>Requirements Gathering</h3>
              <p>
                The development process starts with gathering and analyzing the requirements from
                stakeholders, including clients, end-users, and business analysts requirements from
                stakeholders,
              </p>
            </div>
            <div className="feature-box">
              <i className="icon-box las la-check"></i>
              <h3>Devops Interoperability</h3>
              <p>
                In today's interconnected world, software often needs to integrate with other systems
                and platforms. Developing software with interoperability in mind ensures.
              </p>
            </div>
            <div className="feature-box">
              <i className="icon-box las la-check"></i>
              <h3>Data Integration</h3>
              <p>
                Software applications should be designed and developed with scalability in mind. As
                user bases grow and data increases, the software should be able to handle.
              </p>
            </div>
            <div className="feature-box">
              <i className="icon-box las la-check"></i>
              <h3>Analytics Performance</h3>
              <p>
                The development process starts with gathering and analyzing the requirements from
                stakeholders, including clients, end and business analysts. As user bases grow and
                data increases
              </p>
            </div>
            <div className="feature-box">
              <i className="icon-box las la-check"></i>
              <h3>Data Integration</h3>
              <p>
                Software applications should be designed and developed with scalability in mind. As
                user bases grow and data increases, the software should be able to handle.
              </p>
            </div>
            <div className="feature-box">
              <i className="icon-box las la-check"></i>
              <h3>Analytics Performance</h3>
              <p>
                The development process starts with gathering and analyzing the requirements from
                stakeholders, including clients, end and business analysts. As user bases grow and
                data increases
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3Area;