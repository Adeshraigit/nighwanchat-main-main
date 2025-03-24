import serviceAbout from "../../assets/imgs/Service4.png"; 

const HeroService = () => {
    return (
      <section className="hero-service-wrap hero-section-wrap">
        <div style={{ paddingTop: '100px'}} className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-section-content text-center">
              <h5 className="section-subtitle">Our Services</h5>
              <h1 className="section-title fade-in">
              Empowering Businesses with <br />
              Smart & Scalable Solutions
              </h1>
              <p>
                At Nighwan Technology, we are committed to providing exceptional solutions and <br />
                unwavering support to meet your every need.
              </p>
            </div>
  
            <div className="hero-service-about">
              <img src={serviceAbout} alt="Service About" />
              <div className="hero-service-about-body">
                <p>
                At Nighwan Technology, we provide innovative, AI-driven solutions that enhance efficiency, reduce costs, and drive sustainable growth. Our Lean Consultancy services help businesses eliminate waste and optimize operations, while our custom ERP development, AI/ML solutions, and IoT integrations enable seamless automation and intelligent decision-making. We specialize in branding, web & mobile app development, data analytics, digital marketing, and IT support, ensuring a comprehensive digital transformation. With DevOps services for faster deployment, we help businesses stay agile, competitive, and future-ready.
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> End-to-End Digital Solutions
                  </li>
                  <li>
                    <i className="las la-check"></i> Scalable & Agile Approach
                  </li>
                  <li>
                    <i className="las la-check"></i> Technology-Driven Excellence
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroService;
  