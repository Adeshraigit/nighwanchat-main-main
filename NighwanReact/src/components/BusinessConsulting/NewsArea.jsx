import React from 'react';
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
            <h1 className="section-title">Read more about daily insights</h1>
            <p>
              In a fast-paced world where information shapes, our daily news service is your
              informed about the latest developments
            </p>
          </div>

          <a href="blog.html" className="theme-btn">
            Learn More <i className="iconoir-arrow-up-right"></i>
          </a>
        </div>

        <div className="news2-lists d-flex">
          <div className="news2-card card-h">
            <img src={blog1} alt="Blog" />
            <div className="news2-card-body">
              <div className="meta">
                <span className="date">Sep 16, 2022</span>
                <a href="/blog-detail" className="category">
                  #Travel
                </a>
              </div>
              <h2>
                <a href="/blog-detail">
                  Stock markets opened on a mixed note today, with tech stocks
                </a>
              </h2>
              <p>
                Our journey is guided by a clear vision - is to be at the forefront of transformative
                solutions that shape to the industries and enrich lives. This vision is deeply rooted
                in our core values: excellence, innovation, integrity, and collaboration.
              </p>
              <a href="/blog-detail" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="news2-card card-h">
            <img src={blog2} alt="Blog" />
            <div className="news2-card-body">
              <div className="meta">
                <span className="date">Sep 16, 2022</span>
                <a href="/blog-detail" className="category">
                  #Gaming
                </a>
              </div>
              <h2>
                <a href="/blog-detail">
                  Automotive industry is witnessing a shift towards electric vehicles
                </a>
              </h2>
              <p>
                Our journey is guided by a clear vision - is to be at the forefront of transformative
                solutions that shape to the industries and enrich lives. This vision is deeply rooted
                in our core values: excellence, innovation, integrity, and collaboration.
              </p>
              <a href="/blog-detail" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="news2-card card-h">
            <img src={blog3} alt="Blog" />
            <span className="news-ribbon">New</span>
            <div className="news2-card-body">
              <div className="meta">
                <span className="date">Sep 16, 2022</span>
                <a href="/blog-detail" className="category">
                  #Technology
                </a>
              </div>
              <h2>
                <a href="/blog-detail">
                  The healthcare sector is adapting to new remote patient monitoring
                </a>
              </h2>
              <p>
                Our journey is guided by a clear vision - is to be at the forefront of transformative
                solutions that shape to the industries and enrich lives. This vision is deeply rooted
                in our core values: excellence, innovation, integrity, and collaboration.
              </p>
              <a href="/blog-detail" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="news2-sticky news2-card d-flex card-h">
          <img src={bgShapeBlogSticky} alt="Shape" className="bg-shape" />
          <img src={blog4} alt="Blog" />
          <div className="news2-card-body">
            <div className="meta">
              <span className="date">Sep 16, 2022</span>
              <a href="#" className="category">
                #Technology
              </a>
            </div>
            <h2>
              <a href="#">
                Bluebase launches a new X Tap to Pay on smartphone for international and domestic
                business
              </a>
            </h2>
            <p>
              Our journey is guided by a clear vision - is to be at the forefront of transformative
              solutions that shape to the industries and enrich lives. This vision is deeply rooted
              in our core values: excellence, innovation, integrity, and collaboration.
            </p>
            <a href="#" className="theme-btn">
              <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArea;