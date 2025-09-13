// import React from 'react'
// import './Cards.css'
// import cardimg1 from '../img/Rectangle 426.png'
// import cardimg2 from '../img/card1 (3).png'
// import cardimg3 from '../img/Rectangle 446.png'
// export default function Cards() {
//   return (
//     <div className='cards-bgcolor'>
//         <div className='cards-mainspan'><h1>Smart <span className='cards-span'>&</span>
//          Affordable <span className='cards-span'>Digital</span> Solutions</h1>
//          <p>We provide UI/UX Design, Web Development, and AI Solutions to help your business grow — at a <br />
//              fraction of the cost.</p></div>


//              <div className='card-images'>
//                 <div className='img1'>
//                     <img src={cardimg1} alt="" />
//                     <h1>Web Development</h1>
//                     <p>Custom websites & web apps, from <br /> front to backend.</p>
//                 </div>
//                 <div  className='img1'>
//                     <img src={cardimg2} alt="" />
//                     <h1> UI/UX Design</h1>
//                     <p>Custom websites & web apps, from <br /> front to backend.</p>
//                 </div>
//                 <div  className='img1'>
//                     <img src={cardimg3} alt="" />
//                     <h1> AI Integration</h1>
//                     <p>Custom websites & web apps, from <br /> front to backend.</p>
//                 </div>
//              </div>
//     </div>
//   )
// }
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Cards.css";
import cardimg1 from "../img/Rectangle 426.png";
import cardimg2 from "../img/card1 (3).png";
import cardimg3 from "../img/Rectangle 446.png";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function Cards() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate cards on scroll
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 100,
        rotateY: 30, // Slight 3D rotation
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="cards-bgcolor">
      {/* Heading */}
      <div className="cards-mainspan">
        <h1>
          Smart <span className="cards-span">&</span> Affordable{" "}
          <span className="cards-span">Digital</span> Solutions
        </h1>
        <p>
          We provide UI/UX Design, Web Development, and AI Solutions to help
          your business grow — at a <br />
          fraction of the cost.
        </p>
      </div>

      {/* Cards */}
      <div className="card-images">
        <div
          className="img1"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <img src={cardimg1} alt="Web Development" />
          <h1>Web Development</h1>
          <p>
            Custom websites & web apps, from <br /> front to backend.
          </p>
        </div>

        <div
          className="img1"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <img src={cardimg2} alt="UI/UX Design" />
          <h1>UI/UX Design</h1>
          <p>
            Beautiful, clean & functional UI/UX <br /> for better experiences.
          </p>
        </div>

        <div
          className="img1"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <img src={cardimg3} alt="AI Integration" />
          <h1>AI Integration</h1>
          <p>
            Smart automation & AI-powered <br /> solutions for your business.
          </p>
        </div>
      </div>
    </div>
  );
}
