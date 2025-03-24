import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import '../assets/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
       <Helmet>
        <title>404 - Nighwan Technology Pvt. Ltd.</title>
         <meta name="description" content="This is Portfolio page" />
        <meta name="robots" content="index, follow" />
        </Helmet>
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="fs-3">Oops! Page not found.</p>
        <p className="lead">
          The page youre looking for doesnt exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;