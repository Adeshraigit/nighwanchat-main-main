import React from 'react';
import Contact from '../components/Contact/ContactArea';
import ContactLocationArea from '../components/Contact/ContactLocationArea';
import ContactArea from '../components/Home/ContactArea';
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const locations = [
    {
      flagImage: "assets/imgs/flag.png",
      city: "New York, USA",
      address: "720/5, Starc Street, North View, New York",
    },
    {
      flagImage: "assets/imgs/flag.png",
      city: "New York, USA",
      address: "720/5, Starc Street, North View, New York",
    },
    {
      flagImage: "assets/imgs/flag.png",
      city: "New York, USA",
      address: "720/5, Starc Street, North View, New York",
    },
    {
      flagImage: "assets/imgs/flag.png",
      city: "New York, USA",
      address: "720/5, Starc Street, North View, New York",
    },
    {
      flagImage: "assets/imgs/flag.png",
      city: "New York, USA",
      address: "720/5, Starc Street, North View, New York",
    },
  ];

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>  {/* Prevent horizontal scrolling */}
     <Helmet>  <title>Contact Us | Nighwan Technology Pvt. Ltd.</title>  <meta name="description" content="Get in touch with Nighwan Technology Pvt. Ltd. for ITsolutions, software development, and business transformation consultancy." />  <meta name="keywords" content="contact Nighwan Technology, IT solutions inquiry, business technology consultation, software development contact, support and services" /></Helmet>
      <section className="hero-service-wrap hero-section-wrap hero-portfolio-wrap" style={{ width: '100%', boxSizing: 'border-box' }}>
        <div className="hero-section-content-wrap" style={{ width: '100%' }}>
          <div className="custom-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Contact Us</h5>
                <h1 className="section-title fade-in">We are always open to talk</h1>
                <p>We have offices and teams all around the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ensure these components don't overflow */}
      <div style={{ width: '100%', boxSizing: 'border-box' }}>
        <Contact 
          locations={locations}
          supportEmail="contact@nighwantech.com"
          phoneNumber="+91 8092225777"
        />
        <ContactLocationArea />
        <ContactArea />
      </div>
    </div>
  );
}

export default ContactPage;
