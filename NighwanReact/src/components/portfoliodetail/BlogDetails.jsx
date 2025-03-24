import portfolioDetails2 from "../../assets/imgs/portfolio-details-2.jpg";
// import testimonial1 from "../../assets/imgs/testimonial-1.jpg";
// import portfolioDetails3 from "../../assets/imgs/portfolio-details-3.jpg";
import ai from "../../assets/imgs/pS/AI.png"
import erp from "../../assets/imgs/pS/erp.png"     
import data from "../../assets/imgs/pS/data.png"
import dev from "../../assets/imgs/pS/Devops.png"  
import ecom from "../../assets/imgs/pS/Ecommerce.png"  
import tms from "../../assets/imgs/pS/Transport.png"
import hrms from "../../assets/imgs/pS/hrms.png"  
import iot from "../../assets/imgs/pS/IOT.png"


const BlogDetails = ({type}) => {
  const products = {
    "erp" : {
      one: "In today's fast-paced and technologically advanced world, businesses rely heavily on Information Technology (IT) services to remain competitive, innovative, and efficient. From streamlining operations to enhancing customer experience, IT services play a crucial role in transforming businesses across all industries.",
      two: "One of the most impactful IT solutions available is an Enterprise Resource Planning (ERP) system. A custom-built ERP solution integrates and automates various business operations, allowing for seamless coordination and improved efficiency.",
      three: "IT services, particularly ERP systems, have evolved into an indispensable component of modern business success. From cloud computing and managed IT support to network security and data analytics, each service plays a crucial role in empowering businesses to thrive in a technology-driven world. Implementing a custom ERP solution enhances efficiency, drives growth, and ensures businesses remain agile in an ever-changing market.",
      img : erp
    },
    "ai": {
    one: "In today's competitive business landscape, leveraging artificial intelligence and machine learning has become essential for companies looking to optimize operations and maximize profitability. AI-powered sales forecasting helps businesses anticipate market demands with precision, leading to smarter decision-making and increased efficiency.",
    two: "One of the most impactful AI solutions available is advanced sales prediction software. By analyzing historical data, market trends, and customer behavior, this AI-driven tool enables businesses to predict demand accurately, automate inventory management, and enhance overall sales strategies.",
    three: "AI-powered sales forecasting has evolved into a critical component of modern business success. With real-time analytics, automated demand prediction, and intelligent reporting, businesses can reduce overstocking and understocking, improve profit margins, and make data-driven decisions that foster long-term growth.",
    img : ai
  },
  "b2b": {
    one: "In today's digital economy, businesses are increasingly turning to online platforms to streamline their supply chains and enhance market reach. A B2B e-commerce platform enables multiple vendors to list, sell, and manage their products seamlessly, fostering a dynamic and efficient marketplace.",
    two: "One of the most powerful digital solutions available is a feature-rich B2B e-commerce platform. With capabilities such as multi-vendor product listings, secure payment gateway integration, and an AI-based recommendation engine, businesses can optimize operations while improving the buyer experience.",
    three: "B2B e-commerce platforms have become essential for modern businesses, offering scalability, customization, and data-driven insights. By enabling lean supply chain management, tracking market trends, and providing advanced automation, these platforms empower businesses to thrive in an evolving digital landscape.",
    img : ecom
    },
    "iot" : {
      one : "In an era of smart manufacturing and industrial automation, businesses are leveraging IoT solutions to enhance operational efficiency and reduce maintenance costs. IoT-enabled predictive maintenance allows industries to monitor equipment health in real time and anticipate failures before they occur.",
      two : "One of the most transformative IoT applications is predictive maintenance. By integrating real-time equipment monitoring, AI-based predictive analytics, and automated maintenance scheduling, businesses can proactively address potential failures, ensuring seamless operations and extended equipment lifespan.",
      three : "IoT-enabled predictive maintenance has become a crucial asset for modern industries. By minimizing downtime, optimizing maintenance schedules, and leveraging AI-driven insights, businesses can improve operational efficiency, reduce costs, and enhance the reliability of critical infrastructure.",
      img : iot
    },  
    "hrms" : {
      one : "In the evolving business landscape, efficient human resource management is crucial for organizational success. A comprehensive HRMS integrated with a job portal streamlines HR operations, talent acquisition, and workforce management, ensuring a seamless employee lifecycle.",
      two : "One of the most innovative HR solutions is an HRMS with a built-in job portal. By combining employee management, payroll automation, attendance tracking, and AI-driven recruitment, businesses can enhance HR efficiency and improve hiring processes.",
      three : "HRMS solutions with job portals have become essential for modern businesses. With AI-powered candidate screening, performance tracking, and automated payroll processing, organizations can simplify HR operations, optimize workforce management, and attract top talent efficiently.",
      img : hrms
    },
    "tms" : {
      one : "In today's fast-paced logistics industry, businesses require smart solutions to streamline transportation and enhance operational efficiency. A Transport Management System (TMS) enables real-time fleet tracking, route optimization, and automated invoicing, ensuring seamless logistics management.",
      two : "One of the most effective logistics solutions is a TMS that integrates AI-driven route optimization, automated billing, and real-time vehicle tracking. By leveraging advanced technology, businesses can reduce transportation costs, improve delivery accuracy, and maintain complete visibility over their fleet operations.", 
      thre : "A Transport Management System has become a vital tool for modern logistics. With enhanced delivery efficiency, cost reduction, and AI-powered insights, businesses can optimize supply chain operations, ensure timely deliveries, and achieve greater control over transportation networks.",
      img : tms
    },
    "data" : {
      one : "In the data-driven era, businesses need advanced analytics solutions to gain real-time insights and optimize operations. A powerful data analytics platform integrated with digital twin technology enables organizations to simulate, monitor, and enhance business processes efficiently.",
      two : "One of the most innovative solutions is the combination of AI-driven business intelligence, predictive analytics, and digital twin simulations. This integration allows businesses to track KPIs, forecast trends, and optimize workflows based on real-time data.",
      three : "Data analytics and digital twin technology have become essential for modern enterprises. By providing actionable insights, improving decision-making, and leveraging AI-powered analytics, businesses can enhance operational efficiency and drive strategic growth.",
      img : data  
    }, 
    "devops" : {
      one : "In today's fast-paced digital landscape, businesses require agile and scalable solutions to streamline software development and deployment. A fully automated DevOps platform enables seamless collaboration, continuous integration, and efficient cloud management.",
      two : "One of the most transformative IT solutions is the combination of DevOps automation and cloud computing. With features such as CI/CD pipelines, cloud migration, and Kubernetes-based microservices, businesses can accelerate development cycles while ensuring scalability and reliability.",
      three : "DevOps and cloud solutions have become essential for modern enterprises. By enabling faster software development, improving infrastructure reliability, and enhancing security compliance, businesses can optimize their IT operations and drive innovation.",
      img : dev
    }
  }
    return (
      <section className="blog-details-area portfolio-details-area">
        <div className="custom-container">
          <div className="blog-details-body">
            <div className="blog-details-inner">
  
              <div className="blog-details-introduction">
                <h1>Introduction</h1>
                <p>
                 {products[`${type}`].one}
                </p>
                <p>
                 {products[`${type}`].two}
                </p>
                <img src={products[`${type}`].img} alt="portfolio details" />
                <h1> Conclusion
                </h1>
                <p>
                 {products[`${type}`].three}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogDetails;
  