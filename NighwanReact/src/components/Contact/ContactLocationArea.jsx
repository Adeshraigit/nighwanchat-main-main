import React from 'react';
import bgShape  from '../../assets/imgs/bg-shape-7.svg';

const ContactLocationArea = () => {
  return (
    <section className="contact-location-area">
      <img
        className="animation-slide-left bg-shape"
        src={bgShape}   
        alt="Shape"
      />
      <div className="custom-container">
        <div className="custom-row justify-content-between align-items-center">
          {/* Left Content */}
          <div className="contact-location-left-content">
            <div className="contact-location-left-body">
              <h5 className="section-subtitle">Locations</h5>
              <h1 className="section-title">
                Visit our Office <br />
                around the <br />
                India
              </h1>
              <p>
                Our location is strategically situated at the heart of City,
                making it an ideal destination for businesses and visitors alike.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="right">
            <div className="contact-locations-list">
              {/* Hardcoded Location Boxes */}
              <div className="contact-location-box">
                <div className="number">#1</div>
                <div className="content">
                  <h3>Gulmohar Park, Hyderabad,</h3>
                  <p>TN, 500019</p>
                </div>
              </div>
              <div className="contact-location-box">
                <div className="number">#2</div>
                <div className="content">
                  <h3>NIGHWAN, KURTHA, ARWAL,</h3>
                  <p> BIHAR 804421, IN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactLocationArea;