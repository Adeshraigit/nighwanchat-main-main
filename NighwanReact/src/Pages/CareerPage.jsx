import React from 'react';
import CompanyServiceArea from '../components/Career/CompanyServiceArea';
import CareerArea from '../components/Career/CareerArea';
import AboutServiceArea from "../components/About/AboutServiceArea";
import ContactArea from '../components/Home/ContactArea';
import { Helmet } from "react-helmet";

const CareerPage = () => {
  return (
    <>
    <Helmet>  <title>Careers | Join Nighwan Technology Pvt. Ltd.</title>  <meta name="description" content="Join the team at Nighwan Technology Pvt. Ltd. Explore job openings, career opportunities, and internships in software development, AI, and IT consulting." />  <meta name="keywords" content="IT jobs, software developer jobs, career opportunities, AI jobs, tech company hiring, career in digital transformation, software engineering careers" /></Helmet>
      <CompanyServiceArea/>
      <CareerArea/>
      <AboutServiceArea/>
      <ContactArea/>
    </>
  )
}

export default CareerPage