import React from 'react';
import blogDetailsImg2 from '../assets/imgs/blog-details-2.jpg';
import aimlImg from '../assets/imgs/bT/aiml.png'; 
import erpImg from '../assets/imgs/bT/erp.png';
import hrmsImg from '../assets/imgs/bT/tms.png';    
import aimlImgbM from '../assets/imgs/bM/aiml.png'; 
import erpImgbM from '../assets/imgs/bM/erp.png';
import hrmsImgbM from '../assets/imgs/bM/hrms.png';  
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import newsImg6 from '../assets/imgs/news-6.jpg';
import newsImg7 from '../assets/imgs/news-7.jpg';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {
  const { type } = useParams();

  const Blogs = {
    aiml: {
      title: "How AI and Lean Manufacturing Are Revolutionizing the Indian Industry",
      imgHero: aimlImg,
      p1: "Discover how Artificial Intelligence (AI) and Lean Manufacturing are reshaping the Indian industry...",
      p2: "The Indian manufacturing sector is undergoing a massive transformation...",
      p3: "What is Lean Manufacturing?",
      p4: "Lean Manufacturing is a systematic approach that focuses on minimizing waste...",
      imgMain: aimlImgbM,
      p5: "Role of AI in Lean Manufacturing",
      p6: "AI plays a crucial role in modern manufacturing by enabling:",
      p7: "- Predictive Maintenance – Preventing machine failures before they occur.",
      p8: "- Smart Automation – Reducing human intervention and increasing precision.",
      p9: "- Supply Chain Optimization – Ensuring a seamless flow of raw materials and finished goods.",
      p10: "- Data-Driven Decision Making – Leveraging AI-driven insights for better production planning.",
      p11: "Benefits of AI and Lean Manufacturing in India",
      p12: "- Cost Reduction: AI helps identify inefficiencies, leading to lower operational costs.",
      p13: "- Enhanced Productivity: AI-driven automation speeds up production processes.",
      p14: "- Better Quality Control: AI algorithms detect defects in real-time.",
      p15: "- Sustainability: Lean practices reduce waste, supporting environmental goals.",
      p16: "Adopting AI and Lean Manufacturing is no longer an option but a necessity...",
      meta: {
        description: "Discover how AI and Lean Manufacturing are transforming the Indian industry...",
        keywords: [
          "AI in manufacturing",
          "lean manufacturing India",
          "AI-powered production",
          "smart automation",
        ],
        author: "Nighwan Technology"
      }
    },
    erp: {
      title: "Why Your Business Needs an Integrated ERP System in 2025",
      imgHero: erpImg,
      p1: "Is your business ready for 2025? Discover why an integrated ERP system is essential...",
      p2: "With digital transformation accelerating across industries...",
      p3: "What is an ERP System?",
      p4: "An ERP system integrates various business processes...",
      imgMain: erpImgbM,  
      p5: "Key Benefits of an Integrated ERP System",
      p6: "ERP plays a crucial role in modern business...",
      p7: "- Real-Time Data Access: Make informed decisions with up-to-date insights.",
      p8: "- Improved Efficiency: Automates repetitive tasks, saving time and effort.",
      p9: "- Scalability: Supports business growth by adapting to evolving needs.",
      p10: "- Regulatory Compliance: Ensures adherence to legal and financial regulations.",
      p11: "Why Businesses Need ERP in 2025",
      p12: "- AI-Powered Automation: AI-driven ERP solutions enhance productivity.",
      p13: "- Cloud-Based Systems: Accessible from anywhere...",
      p14: "- Data Security: Protects sensitive business information...",
      p15: "- Customizable Solutions: Tailored to meet the unique needs...",
      p16: "Nighwan Technology’s advanced ERP solutions help businesses integrate processes...",
      meta: {
        description: "Future-proof your business with an AI-powered ERP system...",
        keywords: [
          "ERP solutions 2025",
          "AI-powered ERP",
          "cloud ERP",
          "business automation"
        ],
        author: "Nighwan Technology"
      }
    },
    hrms: {
      "title": "Transforming Workforce Management with AI-Powered HRMS Solutions",
      "imgHero": hrmsImg,
      "p1": "HR management is evolving with AI-powered HRMS solutions! Learn how automated payroll, smart recruitment tools, real-time attendance tracking, and AI-driven performance analytics are transforming workforce management. Discover why businesses need AI HRMS in 2025 and how Nighwan Technology can help enhance your HR operations.",
      "p2": "In the age of digital transformation, businesses are turning to AI-powered Human Resource Management Systems (HRMS) to streamline workforce management, improve employee engagement, and enhance HR efficiency.",
      "p3": "What is an AI-Powered HRMS?",
      "p4": "An HRMS is an all-in-one platform that automates HR functions such as payroll, recruitment, attendance tracking, and performance management using Artificial Intelligence.",
      "imgMain": hrmsImgbM,
      "p5": "Benefits of AI-Driven HRMS",
      "p6": "AI plays a crucial role in modern manufacturing by enabling:",
      "p7": "- Automated Payroll Processing: Reduces errors and ensures timely salary disbursement.",
      "p8": "- Smart Recruitment Tools: AI filters top talent, reducing hiring time.",
      "p9": "- Real-Time Attendance Tracking: Uses biometric and facial recognition technology.",
      "p10": "- Performance Analytics: AI assesses employee performance and suggests improvements.",
      "p11": "Why Your Business Needs HRMS in 2025",
      "p12": "- Remote Workforce Management: Essential for hybrid work environments.",
      "p13": "- Data Security & Compliance: Ensures adherence to labor laws and data protection regulations.",
      "p14": "- Employee Engagement & Retention: AI-driven insights enhance job satisfaction.",
      "p15": "- Customizable Solutions: Tailored to meet the unique needs of different industries.",
      "p16": "Nighwan Technology’s AI-powered HRMS solutions help businesses manage their workforce more effectively, boosting productivity and employee satisfaction. Upgrade your HR management with us today!",
      "meta": {
        "description": "Enhance workforce management with AI-powered HRMS solutions. Learn how AI-driven payroll, smart recruitment, and real-time attendance tracking improve HR efficiency.",
        "keywords": [
          "HRMS software",
          "AI in HR management",
          "workforce automation",
          "AI-powered HRMS",
          "smart recruitment tools",
          "employee engagement software",
          "HR tech solutions",
          "HRMS India"
        ],
        "author": "Nighwan Technology"
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>{Blogs[type]?.title} | Nighwan Technology</title>
        <meta name="description" content={Blogs[type]?.meta?.description} />
        <meta name="keywords" content={Blogs[type]?.meta?.keywords?.join(", ")} />
        <meta name="author" content={Blogs[type]?.meta?.author} />
      </Helmet>

      <section className="blog-details-header-area">
        <div className="custom-container">
          <div className="blog-details-header-content-body d-flex align-items-center">
            <div className="section-header">
              <h5 className="section-subtitle">Blog</h5>
              <h1 className="section-title fade-in">{Blogs[type]?.title}</h1>
            </div>
            <div className="img-box">
              <img src={Blogs[type]?.imgHero} alt="Blog" />
            </div>
          </div>
        </div>
      </section>

      <section className="blog-details-area">
        <div className="custom-container">
          <div className="blog-details-body">
            <div className="blog-details-inner">
              <div className="blog-details-introduction">
                <h2>Blurb</h2>
                <p>{Blogs[type]?.p1}</p>
                <h2>Introduction</h2>
                <p>{Blogs[type]?.p2}</p>
                <h3>{Blogs[type]?.p3}</h3>
                <p>{Blogs[type]?.p4}</p>
                <img src={Blogs[type]?.imgMain} alt="Blog details" />
                <h3>{Blogs[type]?.p5}</h3>
                <p>{Blogs[type]?.p6}</p>
                <ul>
                  <li>{Blogs[type]?.p7}</li>
                  <li>{Blogs[type]?.p8}</li>
                  <li>{Blogs[type]?.p9}</li>
                  <li>{Blogs[type]?.p10}</li>
                </ul>
                <h3>{Blogs[type]?.p11}</h3>
                <ul>
                  <li>{Blogs[type]?.p12}</li>
                  <li>{Blogs[type]?.p13}</li>
                  <li>{Blogs[type]?.p14}</li>
                  <li>{Blogs[type]?.p15}</li>
                </ul>
                <h3>Conclusion</h3>
                <p>{Blogs[type]?.p16}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-area">
        <div className="custom-container">
          <div className="section-header d-flex align-items-end justify-content-between">
            <div className="left">
              <h5 className="section-subtitle">OUR LATEST BLOGS</h5>
              <h1 className="section-title">Read more blogs of our company</h1>
              <p>Are you busy reading out IT fires instead of focusing on your core business</p>
            </div>
          </div>

          <div className="news-items d-flex align-items-start">
            <div className="news-item card-h1">
              <div className="news-img-box">
                <img src={newsImg6} alt="News" />
              </div>
              <div className="news-item-body">
                <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
                <h1 className="section-title">
                  <a href="/blogs/erp">New EU battery law could mean EOL for low-cost smartphones</a>
                </h1>
                <a href="/blogs/erp" className="theme-btn">
                  <i className="icon-right iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>

            <div className="news-item card-h1">
              <div className="news-img-box">
                <img src={newsImg7} alt="News" />
              </div>
              <div className="news-item-body">
                <h5 className="section-subtitle">CLOUD COMPUTING</h5>
                <h1 className="section-title">
                  <a href="/blogs/hrms">FTC reported to be investigating OpenAI...</a>
                </h1>
                <a href="/blogs/hrms" className="theme-btn">
                  <i className="icon-right iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
