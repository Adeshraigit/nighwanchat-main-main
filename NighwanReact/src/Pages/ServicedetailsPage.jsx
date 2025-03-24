import React from 'react'
import HeroServiceWrap from '../components/Servicedetails/HeroServiceWrap';
import NewReleaseHeroImgArea from '../components/Servicedetails/NewReleaseHeroImgArea.jsx';
import AboutService7Area from '../components/Servicedetails/AboutService7Area';
import AboutService3Area from '../components/Servicedetails/AboutService3Area';
import TestimonialArea from '../components/Home/TestimonialArea';
import ContactArea from '../components/Home/ContactArea';
import { Helmet } from "react-helmet-async";
import { useParams } from 'react-router-dom';

const ServicedetailsPage = () => {

  const params = useParams();
  const { type } = params;   
   
  const metaData = {
    "Branding": {
      title: "Branding Services | Build a Strong Digital Identity | Nighwan Technology",
      description:
        "Enhance your brand identity with Nighwan Technology's expert branding services, including logo design, brand strategy, UI/UX design, and digital branding solutions.",
      keywords:
        "branding services, digital branding, logo design, brand identity, UI/UX design, corporate branding, visual identity, marketing strategy",
    },
    "ERP": {
      title: "ERP Development | Custom ERP Software Solutions | Nighwan Technology",
      description:
        "Streamline your business operations with Nighwan Technology's custom ERP development solutions, offering automation, analytics, and enterprise integration.",
      keywords:
        "ERP development, enterprise software, business automation, cloud ERP, custom ERP solutions, enterprise resource planning, SaaS ERP",
    },
    "aim": {
      title: "AI & ML Solutions | Transforming Businesses with AI | Nighwan Technology",
      description:
        "Leverage AI and ML to enhance business decision-making, automation, and predictive analytics with Nighwan Technology’s AI-driven solutions.",
      keywords:
        "AI solutions, machine learning, artificial intelligence, predictive analytics, AI automation, deep learning, AI software development",
    },
    "Web": {
      title: "Web & Mobile App Development | Custom Software Solutions | Nighwan Technology",
      description:
        "Get high-performance web and mobile applications tailored to your business needs with Nighwan Technology’s expert development team.",
      keywords:
        "web development, mobile app development, iOS app development, Android development, custom software solutions, progressive web apps, app development company",
    },
    "Iot": {
      title: "IoT Solutions | Smart & Connected Devices | Nighwan Technology",
      description:
        "Transform your business with IoT solutions from Nighwan Technology. Connect devices, automate processes, and leverage real-time data analytics.",
      keywords:
        "IoT solutions, Internet of Things, connected devices, industrial IoT, smart automation, IoT development, edge computing",
    },
    "Digital": {
      title: "Digital Marketing | SEO, PPC & Social Media | Nighwan Technology",
      description:
        "Boost your online presence with Nighwan Technology’s digital marketing services, including SEO, PPC, content marketing, and social media strategies.",
      keywords:
        "digital marketing, SEO services, PPC advertising, social media marketing, online marketing, content marketing, growth hacking, brand awareness",
    },
    "Data": {
      title: "Data Analytics | AI-Powered Business Insights | Nighwan Technology",
      description:
        "Turn raw data into actionable business insights with Nighwan Technology’s AI-powered data analytics and visualization services.",
      keywords:
        "data analytics, business intelligence, big data, AI analytics, predictive analytics, data visualization, real-time analytics, data science",
    },
    "Devops": {
      title: "DevOps Services | CI/CD & Cloud Infrastructure | Nighwan Technology",
      description:
        "Accelerate software delivery with Nighwan Technology’s DevOps services, offering CI/CD, cloud automation, and infrastructure management.",
      keywords:
        "DevOps services, CI/CD pipelines, cloud automation, software deployment, Kubernetes, Docker, infrastructure as code, DevSecOps",
    },
    "IT": {
      title: "IT Support & Maintenance | Reliable IT Services | Nighwan Technology",
      description:
        "Ensure business continuity with Nighwan Technology’s IT support and maintenance services, including troubleshooting, security updates, and cloud support.",
      keywords:
        "IT support, IT maintenance, technical support, managed IT services, cybersecurity support, cloud IT services, IT infrastructure maintenance",
    },
  };
  
  const meta = metaData[type] || {
    title: "Nighwan Technology | Innovative Digital Solutions",
    description:
      "Explore Nighwan Technology's cutting-edge digital solutions, including AI, IoT, ERP, and mobile app development.",
    keywords: "technology solutions, AI, IoT, ERP, digital transformation, software development",
  };


  return (
    <>
    <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
          </Helmet>
        <HeroServiceWrap type={type} />
        <NewReleaseHeroImgArea type={type} />
        <AboutService7Area type={type} />
        {/* <Service4Area /> */}
        <AboutService3Area type={type} />
        {/* <Feature3Area/> */}
        <TestimonialArea/>
        <ContactArea/>
    </>
  )
}

export default ServicedetailsPage;