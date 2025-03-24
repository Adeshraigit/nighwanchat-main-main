import React from "react";
import HeroSection from "../components/About/HeroSection";
import CompanyServiceArea from "../components/About/CompanyServiceArea";
import Service4Area from "../components/About/Service4Area";
import OurTeam from "../components/About/OurTeam";
import AboutServiceArea from "../components/About/AboutServiceArea";
import CtaArea from "../components/About/CtaArea";
import ContactArea from "../components/Home/ContactArea";
import { Helmet } from "react-helmet";  
import TestimonialArea from "../components/Home/TestimonialArea";

const AboutPage = () => {
    return (
        <>
        <Helmet>
        <meta name="robots" content="index, follow" />
        <title>Our Roots | About Us | Nighwan Technology Pvt. Ltd.</title>  <meta name="description" content="Discover the journey of Nighwan Technology Pvt. Ltd.and how we are revolutionizing industries with AI, lean manufacturing, and digital transformation solutions." />  <meta name="keywords" content="Nighwan Technology, about us, IT solutions provider, tech company, AI-driven development, enterprise technology, software company India, digital transformation" />
        </Helmet>
        <HeroSection />
        <CompanyServiceArea />
        <AboutServiceArea/>
        <TestimonialArea/>
        <ContactArea/>
        </>
    );
};

export default AboutPage;