import React from 'react'
import HeroEmpowerment from "../components/Home/HeroEmpowerment";  
import ClientArea from "../components/Home/ClientArea";
import HowWeDo from "../components/Home/HowWeDo";  
import CaseStudioArea from "../components/Home/CaseStudioArea";  
import AboutArea from '../components/Home/AboutArea';
import TestimonialArea from '../components/Home/TestimonialArea';
import ProjectArea from '../components/Home/ProjectArea';
import NewsArea from '../components/Home/NewsArea';
// import FeatureArea from '../components/Home/FeatureArea'; 
import ContactArea from '../components/Home/ContactArea';   
import Service4Area from '../components/About/Service4Area';
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
  <title>Home</title>
  <meta name="description" content="Nighwan Technology Pvt. Ltd. is a leading software development and digital transformation company providing AI-driven IT solutions, ERP systems, web development, and lean manufacturing consultancy." />
  <meta name="keywords" content="digital transformation, software development, IT consulting, AI solutions, web development, enterprise software, ERP systems, SaaS solutions, lean manufacturing technology" />
</Helmet>
      <HeroEmpowerment />
      <div className='flex justify-center h-[10vh] w-[95vw] mt-5' >
      <ClientArea/>
      </div>
      <HowWeDo/>
      <Service4Area/>
      <CaseStudioArea/>
      <AboutArea/>
      <TestimonialArea/>
      <ProjectArea/>
      <NewsArea/>
      <ContactArea/>
    </>
  )
}

export default Homepage