import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/css/swiper-bundle.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import { Helmet } from 'react-helmet';    
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
    <title>Nighwan Technology Pvt. Ltd. | Digital Transformation & Software Development</title><meta name="description"content="Nighwan Technology Pvt. Ltd. is a leading software development and digital transformation company providing AI-driven IT solutions, ERP systems, web development, and lean manufacturing consultancy." />
    <meta name="keywords"content="digital transformation, software development, IT consulting, AI solutions, web development, enterprise software, ERP systems, SaaS solutions, lean manufacturing technology" />
    </Helmet>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>
);