import React from 'react'
import HeroService from '../components/Service/Hero';
import Service4Area from '../components/About/Service4Area';
import CaseStudies from '../components/Home/CaseStudioArea';
import AboutArea from '../components/Service/About';
import AboutServiceArea from "../components/About/AboutServiceArea";
import ContactArea from '../components/Home/ContactArea';   
import { Helmet } from "react-helmet";

function ServicePage() {
  return (
    <>
    <Helmet>  <title>Our Services | Nighwan Technology Pvt. Ltd.</title>  <meta name="description" content="Explore our wide range of IT services, including ERP development, AI-powered analytics, cloud computing, IT consulting, and lean manufacturingsolutions." />  <meta name="keywords" content="IT services, AI analytics, ERP solutions, software development, cloud computing, digital transformation, enterprise solutions, lean manufacturing technology" /></Helmet>
    <HeroService/>
    <Service4Area/>
    <CaseStudies/>
    <AboutArea/>
    <AboutServiceArea/>
    <ContactArea/>
    </>
  )
}

export default ServicePage;