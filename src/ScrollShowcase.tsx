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
          <img src="/images/watch1.png" alt="Watch SE" className="product" />
          <div className="text">
            <h1>Stay one beat ahead.</h1>
            <p>Get meaningful insights about your health with Apple Watch SE.</p>
          </div>
        </div>
      </section>

      <section className="scroll-section">
        <div className="sticky-container">
          <img src="/images/watch2.png" alt="Watch Series 11" className="product" />
          <div className="text">
            <h1>The ultimate watch for a healthy life.</h1>
            <p>Powerful new chip, precision design, and advanced fitness tracking.</p>
          </div>
        </div>
      </section>

      <section className="scroll-section">
        <div className="sticky-container">
          <img src="/images/watch3.png" alt="Apple Watch Family" className="product" />
          <div className="text">
            <h1>For your kids, for your family.</h1>
            <p>Stay connected, safe, and active, no matter where you are.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollShowcase;
