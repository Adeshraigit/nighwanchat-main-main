import React from 'react';

// ContactLocationBox Component
const ContactLocationBox = ({ number, city, address }) => {
  return (
    <div className="contact-location-box">
      <div className="number">{number}</div>
      <div className="content">
        <h3>{city}</h3>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default ContactLocationBox;      