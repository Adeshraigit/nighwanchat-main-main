import React from 'react'
import HeroPortfolio from '../components/Portfolio/HeroPortfolio'
import PortfolioArea from '../components/Portfolio/PortfolioArea'
import ContactArea from '../components/Home/ContactArea'
import { Helmet } from "react-helmet";  

const PortfolioPage = () => {
  return (
    <>
    <Helmet>  <title>Our Products | Nighwan Technology Pvt. Ltd.</title>  <meta name="description" content="Discover Nighwan Technology's cutting-edge products, including AI-driven ERP systems, HRMS solutions, transport management software, and e-commerce platforms." />  <meta name="keywords" content="business software, AI-driven ERP, HRMS solutions, transport management system, e-commerce solutions, SaaS products, enterprise software" /></Helmet>
    <HeroPortfolio/>
    <PortfolioArea/>
    <ContactArea/>
    </>
  )
}

export default PortfolioPage