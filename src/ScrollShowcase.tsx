import React, { useEffect } from "react";
import "./ScrollShowcase.css";

const ScrollShowcase: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-wrapper">
      <section className="scroll-section">
        <div className="sticky-container">
          <img src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="PVC Panels" className="product" />
          <div className="text">
            <h1>Premium PVC Panels</h1>
            <p>Durable, waterproof, and easy to install. Transform any space with our high-quality PVC paneling solutions.</p>
          </div>
        </div>
      </section>

      <section className="scroll-section">
        <div className="sticky-container">
          <img src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Charcoal Panels" className="product" />
          <div className="text">
            <h1>Elegant Charcoal Finish</h1>
            <p>Modern sophistication meets timeless design. Create stunning interiors with our charcoal panel collection.</p>
          </div>
        </div>
      </section>

      <section className="scroll-section">
        <div className="sticky-container">
          <img src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Marble Panels" className="product" />
          <div className="text">
            <h1>Luxurious Marble Aesthetic</h1>
            <p>Bring the elegance of natural marble to your space. Premium finishes for discerning homeowners.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollShowcase;
