
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Experience.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once when scrolling
    });
  }, []);

  return (
    <div className="experience-bgcolor">
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
      >
        We have experience and expertise from working with over <br />
        400+ businesses on their website strategy
      </h1>

      <div
        className="experience-btn"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <button>We would love to work with you too!</button>
      </div>
    </div>
  );
}
