// export default ProjectArea; 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AI from "../../assets/imgs/AI-Powered Sales Forecasting.png"
import ERP from "../../assets/imgs/ERP System.png"  
import B2B from "../../assets/imgs/B2B E-Commerce Platform.png"
import IOT from "../../assets/imgs/IoT-Enabled Predictive Maintenance.png"
import HRMS from "../../assets/imgs/HRMS with Job Portal.png" 
import TMS from "../../assets/imgs/Transport Management System.png"

const projects = [
  { img: ERP, title: "ERP System" },
  { img: AI, title: "AI-Powered Sales Forecasting" },
  { img: B2B, title: "B2B E-Commerce Platform", className: "black-text" },
  { img: IOT, title: "IoT-Enabled Predictive Maintenance" },
  { img: HRMS, title: "HRMS with Job Portal" },
  { img: TMS, title: "Transport Management System", className: "black-text" },
];

const ProjectArea = () => {
  return (
    <section className="project-area">
      <div className="custom-container">
        <div className="custom-row justify-content-between">
          <div className="project-left-details">
            <h5 className="section-subtitle">PRODUCTS</h5>
            <h1 className="section-title">
              Showcase of
              <br />
              our recognized
              <br />
              work
            </h1>
            <p>
              Our collaborative approach ensures that we truly understand our clients' unique
              requirements and challenges.
            </p>
            <ul>
              <li>
                <i className="las la-check"></i> Managed Services and Products
              </li>
              <li>
                <i className="las la-check"></i> Flexibility and Adaptability
              </li>
              <li>
                <i className="las la-check"></i> Competitive Advantage
              </li>
            </ul>
          </div>

          <div className="project-right-slider">
            <div className="project-right-slider-inner">
              <Swiper
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
                loop={false}
                spaceBetween={30}
                slidesPerView={1} // Initially 1 slide visible
                breakpoints={{
                  768: { slidesPerView: 3 }, // Shows 3 slides at a time on larger screens
                }}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="project-item">
                      <div className="project-item-inner">
                        <h2 className={project.className || ''}>
                          <a style={{ color: 'black' }}  href="/products">
                            {project.title}
                          </a>
                        </h2>
                        <img src={project.img} alt={`Project ${index + 1}`} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination (Sliding Bar) */}
              <div className="swiper-pagination" style={{ marginTop: '20px' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>
        {`
          .black-text {
            color: black !important;
          }

          .swiper-pagination {
            margin-top: 20px;
          }
        `}
      </style>
    </section>
  );
};

export default ProjectArea;