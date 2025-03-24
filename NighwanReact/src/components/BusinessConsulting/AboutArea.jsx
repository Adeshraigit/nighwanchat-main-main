import React, { useState } from "react";
import hwdIcon1 from "../../assets/imgs/hwd-icon-1.svg";
import hwdIcon2 from "../../assets/imgs/hwd-icon-2.svg";
import hwdIcon3 from "../../assets/imgs/hwd-icon-3.svg";
import hwdIcon4 from "../../assets/imgs/hwd-icon-4.svg";
import hwdIcon5 from "../../assets/imgs/hwd-icon-5.svg";
import hwdIcon6 from "../../assets/imgs/hwd-icon-6.svg";
import about2Tab1 from "../../assets/imgs/AI Opti.png";
import about2Tab2 from "../../assets/imgs/demand Forcasting.png";
import about2Tab3 from "../../assets/imgs/lean ecommerce.png";
import about2Tab4 from "../../assets/imgs/Preductive Maintance.png";
import about2Tab5 from "../../assets/imgs/Real Time Analatics.png";
import about2Tab6 from "../../assets/imgs/Custom ERP.png";
import about2Tab7 from "../../assets/imgs/Continuous Improvement.png";
import about2Tab8 from "../../assets/imgs/Supply Chain Efficiency.png";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const AboutArea = () => {
  const [activeTab, setActiveTab] = useState("business_strategy");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="about2-area">
      <div className="custom-container">
        <div className="about2-inner-box">
          <div className="about2-header">
            <h5 className="section-subtitle">SPECIALIZATION</h5>
            <h1 className="section-title">What Makes Nighwan Tech Unique?</h1>
            <div>
              Nighwan Technology Pvt. Ltd. is redefining lean manufacturing technology by integrating AI, ML, and data analytics into the core of its solutions. Unlike traditional ERP or manufacturing management systems, Nighwan Tech focuses on real-time data-driven decision-making, waste reduction, and process optimization tailored for the Indian market.
            </div>
          </div>

          {/* Tabs Navigation */}
          <ul style={{ marginTop: "20px" }} className="nav nav-tabs about2-tabs" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "business_strategy" ? "active" : ""}`}
                onClick={() => handleTabClick("business_strategy")}
              >
                <span className="icon">
                  <img src={hwdIcon1} alt="Icon" />
                </span>
                AI Optimization
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "market_analysis" ? "active" : ""}`}
                onClick={() => handleTabClick("market_analysis")}
              >
                <span className="icon">
                  <img src={hwdIcon4} alt="Icon" />
                </span>
                Demand Forecasting
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "process_optimization" ? "active" : ""}`}
                onClick={() => handleTabClick("process_optimization")}
              >
                <span className="icon">
                  <img src={hwdIcon6} alt="Icon" />
                </span>
                Lean E-Commerce
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "performance_improvement" ? "active" : ""}`}
                onClick={() => handleTabClick("performance_improvement")}
              >
                <span className="icon">
                  <img src={hwdIcon2} alt="Icon" />
                </span>
                Predictive Maintenance
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "real_time_analytics" ? "active" : ""}`}
                onClick={() => handleTabClick("real_time_analytics")}
              >
                <span className="icon">
                  <img src={hwdIcon3} alt="Icon" />
                </span>
                Real-Time Analytics
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "custom_erp" ? "active" : ""}`}
                onClick={() => handleTabClick("custom_erp")}
              >
                <span className="icon">
                  <img src={hwdIcon5} alt="Icon" />
                </span>
                Custom ERP
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "custom_imp" ? "active" : ""}`}
                onClick={() => handleTabClick("custom_imp")}
              >
                <span className="icon">
                  <img src={hwdIcon5} alt="Icon" />
                </span>
                Continuous Improvement
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "supply" ? "active" : ""}`}
                onClick={() => handleTabClick("supply")}
              >
                <span className="icon">
                  <img src={hwdIcon5} alt="Icon" />
                </span>
                Supply Chain Efficiency 
              </button>
            </li>
          </ul>

          {/* Tabs Content */}
          <div style={{ marginTop: "20px" }} className="tab-content about2-tab-content">
            {activeTab === "business_strategy" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab1} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon1} alt="Icon" />
                      </span>
                      Smarter, Faster, Leaner Operations
                    </h1>
                    <div className="content">
                      <p>
                      Harness the power of AI-driven optimization to streamline processes, enhance decision-making, and eliminate inefficiencies.  
                      </p>
                      <p>Our AI solutions analyze vast datasets in real time, providing actionable insights to improve production, resource allocation, and workflow automation.</p>
                      <p>By integrating machine learning and intelligent algorithms, we help businesses reduce costs, improve accuracy, and drive innovation. Whether it’s predictive analytics, automated reporting, or intelligent workflow management, our AI-driven approach ensures your business stays ahead in the lean transformation journey.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "market_analysis" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab2} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon4} alt="Icon" />
                      </span>
                      Predict Future Market Trends
                    </h1>
                    <div className="content">
                      <p>
                      Make smarter business decisions with advanced demand forecasting powered by AI and data analytics. 
                      </p>
                      <p>Our system evaluates historical sales data, market trends, and customer behavior to provide accurate demand predictions. This helps businesses optimize inventory, reduce overproduction, and align production with real-time demand.</p>
                      <p> By preventing stockouts and minimizing waste, our demand forecasting solutions ensure lean operations, cost savings, and improved supply chain efficiency. Stay ahead of market fluctuations and respond proactively to future demands.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "process_optimization" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab3} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon6} alt="Icon" />
                      </span>
                      Optimized Online Business Operations
                    </h1>
                    <div className="content">
                      <p>Transform your e-commerce business with lean principles that enhance efficiency and reduce operational waste.</p>
                      <p> Our lean e-commerce solutions focus on process automation, inventory optimization, and real-time analytics to ensure smooth and cost-effective operations. </p>
                      <p>We help businesses implement data-driven decision-making, streamline supply chains, and eliminate bottlenecks. Whether it’s managing vendors, automating order fulfillment, or optimizing digital storefronts, our solutions maximize profits, enhance customer satisfaction, and drive business growth in a competitive digital marketplace.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "performance_improvement" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab4} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon2} alt="Icon" />
                      </span>
                      Prevent Failures, Reduce Downtime
                    </h1>
                    <div className="content">
                      <p>
                      Say goodbye to unexpected breakdowns with predictive maintenance powered by AI and IoT. 
                      </p>
                      <p>Our system monitors equipment health in real time, analyzing data patterns to detect anomalies before failures occur. By predicting maintenance needs, businesses can reduce unplanned downtime, extend equipment lifespan, and optimize resource allocation. </p>
                      <p>Our lean approach to predictive maintenance ensures operational efficiency, cost savings, and continuous productivity, making it an essential strategy for manufacturing, logistics, and supply chain industries.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "real_time_analytics" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab5} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon3} alt="Icon" />
                      </span>
                      Data-Driven Lean Decisions
                    </h1>
                    <div className="content">
                      <p>
                      Gain instant insights into your business operations with real-time analytics. Our advanced data visualization tools and AI-driven dashboards provide key performance metrics, helping organizations make informed decisions quickly. 
                      </p>
                      <p>
                      With live tracking of inventory, production, and sales, businesses can eliminate inefficiencies, optimize resources, and improve overall performance.
                      </p>
                      <p>
                      Our lean-focused analytics solutions empower organizations to continuously monitor and adapt to changes, ensuring data-driven decision-making for sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "custom_erp" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab6} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon5} alt="Icon" />
                      </span>
                      Tailored Systems for Lean Management
                    </h1>
                    <div className="content">
                      <p>
                      Ditch generic ERP solutions and embrace a custom-built ERP designed for lean manufacturing and efficient operations. 
                      </p>
                      <p> Our ERP solutions integrate AI, automation, and real-time data to optimize workflow, inventory, and resource allocation. With seamless integration across all business functions, our lean ERP systems enhance productivity, reduce waste, and improve decision-making.</p>
                      <p>Whether you need a solution for manufacturing, supply chain, or e-commerce, our tailored ERP ensures greater flexibility, agility, and efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "custom_imp" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab7} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon5} alt="Icon" />
                      </span>
                      Achieve Operational Excellence
                    </h1>
                    <div className="content">
                      <p>
                      Adopt a culture of continuous improvement with our Kaizen-driven lean consulting services. We help businesses implement small, incremental changes that drive long-term efficiency and productivity.  
                      </p>
                      <p>Through data-driven analysis and process optimization, we identify bottlenecks, eliminate waste, and enhance overall performance.</p>
                      <p>Our continuous improvement strategies ensure that businesses remain agile, adaptable, and competitive, fostering an environment of innovation and sustainable growth. </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "supply" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab8} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon5} alt="Icon" />
                      </span>
                      Streamlined Logistics for Growth
                    </h1>
                    <div className="content">
                      <p>
                      Optimize your supply chain with lean-focused logistics strategies that reduce costs and enhance efficiency.
                      </p>
                      <p>Our solutions help businesses streamline inventory management, reduce lead times, and improve supplier coordination. Using AI-powered analytics and real-time tracking, we ensure seamless logistics operations, minimize disruptions, and enhance customer satisfaction.</p>
                      <p>Our lean supply chain solutions enhance flexibility, increase profitability, and create a more resilient supply network for long-term success.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;

