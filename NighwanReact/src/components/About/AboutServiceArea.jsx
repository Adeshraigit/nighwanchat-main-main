import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import why from '../../assets/imgs/why.png';  

const AboutServiceArea = () => {
  return (
    <section className="about-service3-area">
      <div className="custom-container">
        <div className="custom-row align-items-center">
          <div className="img-box">
            <img src={why} alt="About" />
          </div>

          <div className="content-box">
            <h1>
            Why Our Services Stand Out 
            from the Rest?
            </h1>
            <p>
            At Nighwan Technology, we customize our solutions to fit your unique needs, ensuring precision, efficiency, and long-term value. Unlike a one-size-fits-all approach, we focus on sustainable growth, streamlined workflows, and optimized performance through our PPD (Process-Driven Development) methodology.
            </p>
            <p>
            With quick response times and proactive support, we ensure seamless operations, minimal disruptions, and continuous business success.
            </p>
            <ul>
              <li>
                <i className="las la-check"></i> PPD Development
              </li>
              <li>
                <i className="las la-check"></i> Quick Response
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServiceArea;