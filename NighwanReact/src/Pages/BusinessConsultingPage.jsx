import React from 'react'
import HeroSection from '../components/BusinessConsulting/HeroSection'
// import ClientArea from '../components/BusinessConsulting/ClientArea'
import ServiceArea from '../components/BusinessConsulting/ServiceArea'
import AboutArea from '../components/BusinessConsulting/AboutArea'
import FeatureArea from '../components/BusinessConsulting/FeatureArea'
import TestimonialArea from '../components/Home/TestimonialArea'
import ContactArea from '../components/Home/ContactArea'
import { Helmet } from "react-helmet";

const BusinessConsulting = () => {
  return (
    <>
    <Helmet>
        <meta name="robots" content="index, follow" />
        <title>Lean Consultancy Services | Nighwan Technology Pvt. Ltd.</title>  <meta name="description" content="Optimize your business efficiency with Nighwan Technology's Lean Consultancy services, helping organizations implement lean manufacturing and reduce waste." />  <meta name="keywords" content="lean manufacturing, business process optimization, lean consultancy, process improvement, waste reduction, manufacturing efficiency, lean technology" />
        </Helmet>
    <HeroSection/>
    {/* <ClientArea/> */}
    <ServiceArea/>
    <AboutArea/>
    <FeatureArea/>
    {/* Hide */}
    {/* <NewsArea/> */}
    {/* <PortfolioArea/> */}
    {/* Hide */}
    {/* <OurTeamArea/> */}
    {/* <TestimonialArea/> */}
    <TestimonialArea/>
    <ContactArea/>
    </>
  )
}

export default BusinessConsulting