import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import client1 from '../../assets/imgs/1.png';   
import client2 from '../../assets/imgs/2.png';   
import client3 from '../../assets/imgs/3.png';   
import client4 from '../../assets/imgs/4.png';   
import client5 from '../../assets/imgs/5.png';   
import client6 from '../../assets/imgs/6.png';   
import client7 from '../../assets/imgs/7.png';
import client8 from '../../assets/imgs/8.png';
import client9 from '../../assets/imgs/9.png';
import client10 from '../../assets/imgs/10.png';
import client11 from '../../assets/imgs/11.png';  
import client12 from '../../assets/imgs/12.png';  
import '../../assets/css/style.css';

const ClientArea = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const partners = container.querySelector('.partner-track');
    if (!partners) return;

    // Clone partners
    const clone = partners.cloneNode(true);
    partners.style.marginRight = '30px'; // Add the same gap as between the cards

    container.appendChild(clone);

    // Animation
    gsap.to(container.children, {
      xPercent: -100,
      repeat: -1,
      duration: 30,
      ease: "none",
      delay: 0
    });

    // Pause on hover
    container.addEventListener('mouseenter', () => {
      gsap.to(container.children, { timeScale: 0 });
    });

    container.addEventListener('mouseleave', () => {
      gsap.to(container.children, { timeScale: 1 });
    });

    return () => {
      gsap.killTweensOf(container.children);
    };
  }, []);

  const partners = [
    { img: client1, alt: "Partner 1" },
    { img: client2, alt: "Partner 2" },
    { img: client3, alt: "Partner 3" },
    { img: client4, alt: "Partner 4" },
    { img: client5, alt: "Partner 5" },
    { img: client6, alt: "Partner 6" },
    { img: client7, alt: "Partner 7" },
    { img: client8, alt: "Partner 8" },
    { img: client9, alt: "Partner 9" },
    { img: client10, alt: "Partner 10" },
    { img: client11, alt: "Partner 11" },
    { img: client12, alt: "Partner 12" },
  ];

  return (
    <section className="partner-section">
      <div className="partner-container">
        <div className="partner-scroll" ref={containerRef} style={{ display: 'flex', overflow: 'hidden' }}>
          <div className="partner-track" style={{ display: 'flex', gap: '30px', padding: '20px 0' }}>
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="partner-card"
                style={{
                  flex: '0 0 auto',
                  padding: '20px',
                  background: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '180px',
                  height: '100px'
                }}
              >
                <img 
                  src={partner.img || "/placeholder.svg"} 
                  alt={partner.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientArea;