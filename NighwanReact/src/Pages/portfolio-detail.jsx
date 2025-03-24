import React from 'react';
import HeroSection from '../components/portfoliodetail/Hero';
import ContactArea from '../components/Home/ContactArea';
import BlogDetails from '../components/portfoliodetail/BlogDetails';
import ProjectArea from '../components/Home/ProjectArea';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

function Portfoliodetail() {
  const { type } = useParams();  
  
  const metaData = {
    "erp": {
      title: "ERP System | Scalable Enterprise Resource Planning | Nighwan Technology",
      description:
        "Optimize business workflows with Nighwan Technology’s ERP system, offering cloud-based automation for finance, HR, inventory, and supply chain management.",
      keywords:
        "ERP system, enterprise resource planning, cloud ERP, business automation, supply chain optimization, HR and payroll software, financial management ERP",
    },
    "ai": {
      title: "AI-Powered Sales Forecasting | Advanced Predictive Analytics | Nighwan Technology",
      description:
        "Boost sales accuracy with AI-driven predictive analytics. Nighwan Technology’s sales forecasting solution helps businesses make smarter, data-driven decisions.",
      keywords:
        "AI sales forecasting, predictive analytics, demand forecasting, revenue prediction, sales intelligence, machine learning sales insights, AI business growth",
    },
    "b2b": {
      title: "B2B E-Commerce Platform | Scalable Multi-Vendor Marketplace | Nighwan Technology",
      description:
        "Power B2B trade with Nighwan Technology’s e-commerce platform, offering seamless vendor onboarding, bulk ordering, and secure transactions for businesses.",
      keywords:
        "B2B e-commerce, wholesale marketplace, enterprise e-commerce, vendor management, digital commerce solutions, automated order processing",
    },
    "iot": {
      title: "IoT Predictive Maintenance | Smart Asset Monitoring | Nighwan Technology",
      description:
        "Reduce downtime with IoT-enabled predictive maintenance solutions. Monitor assets in real-time and improve operational efficiency with AI-driven insights.",
      keywords:
        "IoT predictive maintenance, smart asset management, industrial IoT, real-time monitoring, AI maintenance solutions, predictive analytics for manufacturing",
    },
    "hrms": {
      title: "HRMS with Job Portal | Comprehensive Workforce Management | Nighwan Technology",
      description:
        "Manage recruitment, payroll, and employee engagement with Nighwan Technology’s HRMS. Integrated job portal for seamless hiring and workforce management.",
      keywords:
        "HRMS software, job portal, human resource management, payroll management, employee engagement, recruitment software, workforce management",
    },
    "tms": {
      title: "Transport Management System | Logistics & Fleet Optimization | Nighwan Technology",
      description:
        "Optimize logistics with Nighwan Technology’s transport management system. Real-time fleet tracking, route optimization, and automated logistics operations.",
      keywords:
        "transport management system, logistics software, fleet tracking, route optimization, supply chain automation, TMS software, logistics analytics",
    },
    "data": {
      title: "Data Analytics & Digital Twin Technology | AI-Powered Insights | Nighwan Technology",
      description:
        "Leverage AI-powered data analytics and digital twin technology to optimize business processes, reduce downtime, and enhance decision-making.",
      keywords:
        "data analytics, digital twin technology, AI-driven insights, predictive modeling, business intelligence, real-time analytics, AI-powered decision-making",
    },
    "devops": {
      title: "DevOps & Cloud Solutions | CI/CD & Cloud Automation | Nighwan Technology",
      description:
        "Accelerate software deployment with Nighwan Technology’s DevOps and cloud solutions. CI/CD pipelines, Kubernetes, and cloud automation for seamless IT operations.",
      keywords:
        "DevOps solutions, cloud automation, CI/CD pipelines, Kubernetes services, cloud migration, IT infrastructure, DevSecOps, cloud-native development",
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
      <HeroSection type={type} />
      <BlogDetails type={type} />
      <ProjectArea />
      <ContactArea />
    </>
  );
}

export default Portfoliodetail;
