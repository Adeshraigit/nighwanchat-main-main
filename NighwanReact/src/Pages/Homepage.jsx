import React from 'react'
import HeroEmpowerment from "../components/Home/HeroEmpowerment";  
import ClientArea from "../components/Home/ClientArea";
import HowWeDo from "../components/Home/HowWeDo";  
import CaseStudioArea from "../components/Home/CaseStudioArea";  
import AboutArea from '../components/Home/AboutArea';
import TestimonialArea from '../components/Home/TestimonialArea';
import ProjectArea from '../components/Home/ProjectArea';
import NewsArea from '../components/Home/NewsArea';
import FeatureArea from '../components/Home/FeatureArea'; 
import ContactArea from '../components/Home/ContactArea';   
import Service4Area from '../components/About/Service4Area';

const Homepage = () => {
  return (
    <>
      <HeroEmpowerment />
      <ClientArea/>
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