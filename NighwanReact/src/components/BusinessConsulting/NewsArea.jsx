import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../assets/imgs/blog-1.jpg'; // Adjust the path to your assets
import blog2 from '../../assets/imgs/blog-2.jpg';
import blog3 from '../../assets/imgs/blog-3.jpg';
import blog4 from '../../assets/imgs/blog-4.jpg';
import bgShapeBlogSticky from '../../assets/imgs/bg-shape-blog-sticky.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const NewsArea = () => {
  return (
    <section className="news2-area">
      <div className="custom-container">
        <div className="section-header d-flex align-items-center justify-content-between">
          <div className="left">
            <h5 className="section-subtitle">DAILY NEWS</h5>
            <h2 className="section-title">Read more about daily insights</h2>
            <p>
              In a fast-paced world where information shapes, our daily news service is your
              informed about the latest developments
            </p>
          </div>

          <Link to="/blog" className="theme-btn">
            Learn More <i className="iconoir-arrow-up-right"></i>
          </Link>
        </div>

        <div className="news2-lists d-flex">
          <div className="news2-card card-h">
            <img src={blog1} alt="Blog" />
            <div className="news2-card-body">
              <div className="meta">
                <span className="date">Sep 16, 2022</span>
                <Link to="/blog-detail" className="category">
                  #Travel
                </Link>
              </div>
              <h2>
                <Link to="/blog-detail">
                  Stock markets opened on a mixed note today, with tech stocks
                </Link>
              </h2>
              <p>
                Our journey is guided by a clear vision - is to be at the forefront of transformative
                solutions that shape to the industries and enrich lives. This vision is deeply rooted
                in our core values: excellence, innovation, integrity, and collaboration.
              </p>
              <Link to="/blog-detail" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </Link>
            </div>
          </div>
          <div className="news2-card card-h">
            <img src={blog2} alt="Blog" />
            <div className="news2-card-body">
              <div className="meta">
                <span className="date">Sep 16, 2022</span>
                <Link to="/blog-detail" className="category">
                  #Gaming
                </Link>
              </div>
              <h2>
                <Link to="/blog-detail">
                  Automotive industry is witnessing a shift towards electric vehicles
                </Link>
              </h2>
              <p>
                Our journey is guided by a clear vision - is to be at the forefront of transformative
                solutions that shape to the industries and enrich lives. This vision is deeply rooted
                in our core values: excellence, innovation, integrity, and collaboration.
              </p>
              <Link to="/blog-detail" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </Link>
            </div>
          </div>
          <div className="news2-card card-h">
            <img src={blog3} alt="Blog" />
            <span className="news-ribbon">New</span>
            <div className="news2-card-body">
              <div className="meta">
                <span className="date">Sep 16, 2022</span>
                <Link to="/blog-detail" className="category">
                  #Technology
                </Link>
              </div>
              <h2>
                <Link to="/blog-detail">
                  The healthcare sector is adapting to new remote patient monitoring
                </Link>
              </h2>
              <p>
                Our journey is guided by a clear vision - is to be at the forefront of transformative
                solutions that shape to the industries and enrich lives. This vision is deeply rooted
                in our core values: excellence, innovation, integrity, and collaboration.
              </p>
              <Link to="/blog-detail" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="news2-sticky news2-card d-flex card-h">
          <img src={bgShapeBlogSticky} alt="Shape" className="bg-shape" />
          <img src={blog4} alt="Blog" />
          <div className="news2-card-body">
            <div className="meta">
              <span className="date">Sep 16, 2022</span>
              <Link to="#" className="category">
                #Technology
              </Link>
            </div>
            <h2>
              <Link to="#">
                Bluebase launches a new X Tap to Pay on smartphone for international and domestic
                business
              </Link>
            </h2>
            <p>
              Our journey is guided by a clear vision - is to be at the forefront of transformative
              solutions that shape to the industries and enrich lives. This vision is deeply rooted
              in our core values: excellence, innovation, integrity, and collaboration.
            </p>
            <Link to="#" className="theme-btn">
              <i className="iconoir-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArea;