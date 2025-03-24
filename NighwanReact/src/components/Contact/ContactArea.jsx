import React from 'react';
import map from "../../assets/imgs/map.svg";

const Contact = ({ locations, supportEmail, phoneNumber }) => {
  return (
    <section className="contact-area2">
      <div className="custom-container">
        <div className="contact-inner">
          <div className="contact-map-wrap">
            <h4>Connect Us</h4>

            <div id="map">
              {locations.map((location, index) => (
                <div className="map-location-item" key={index}>
                  <div className="map-location-item-inner">
                    <img src={location.flagImage} alt="Flag" />
                    <div className="content">
                      <h3>{location.city}</h3>
                      <p>{location.address}</p>
                    </div>
                  </div>
                  <span className="circle"></span>
                </div>
              ))}
              <img src={map} alt="Map" />
            </div>
          </div>

          <div className="contact-inner-info-box d-flex align-items-center">
            <div className="contact-info-box simple-shadow">
              <div className="icon">
                <i className="las la-headset"></i>
              </div>
              <h4>Support</h4>
              <p>Contact our fast support team</p>
              <h6>
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
              </h6>
            </div>

            <div className="contact-info-box simple-shadow">
              <div className="icon">
                <i className="las la-phone"></i>
              </div>
              <h4>Phone</h4>
              <p>Mon-Fri from 9am to 6pm.</p>
              <h6>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;