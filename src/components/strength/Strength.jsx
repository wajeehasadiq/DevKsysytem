// import React from 'react'
// import './Strength.css'
// import img1 from '../img/img1.png'
// import img2 from '../img/img2.png'
// import img3 from '../img/img3.png'
// export default function Strength() {
//   return (
//     <div>
//         <div className='strength-heading'><h1><span className='strength-span'>Our strength?</span> Making <br /> everything easier for you</h1></div>


//         <div className='strength-text'>
//             <div className='text-one'>
//                <h1>Web Development</h1>
//           <p>Custom websites & web apps, from <br /> front to backend.</p>
//             </div>
//             <div className='text-two'>
//                   <h1>UI/UX Design</h1>
//           <p>Beautiful, clean & functional UI/UX <br /> for better experiences.</p>
//             </div>
//             <div className='text-three'>
//         <h1>AI Integration</h1>
//         <p>Smart automation & AI-powered <br /> solutions for your business.</p>
//             </div>
//         </div>


//         <div className='strength-images'>
//             <div className='strenght1'>
//                 <img src={img1} alt="" />
//             </div>
//             <div className='strenght2'>
//                 <div>
//                     <img src={img2} alt="" />
//                 </div>
//                 <div>
//                     <img src={img3} alt="" />
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Strength.css";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Strength() {
  const textRef = useRef([]);
  const imageRef = useRef([]);

  useEffect(() => {
    // TEXT ANIMATION
    gsap.fromTo(
      textRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: textRef.current[0],
          start: "top 85%", // When it comes into view
          toggleActions: "play none none reverse",
        },
      }
    );

    // IMAGE ANIMATION
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: imageRef.current[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div>
      {/* Heading */}
      <div className="strength-heading">
        <h1>
          <span className="strength-span">Our strength?</span> Making <br /> everything easier for you
        </h1>
      </div>

      {/* TEXT SECTION */}
      <div className="strength-text">
        <div
          className="text-one"
          ref={(el) => (textRef.current[0] = el)}
        >
          <h1>Web Development</h1>
          <p>Custom websites & web apps, from <br /> front to backend.</p>
        </div>

        <div
          className="text-two"
          ref={(el) => (textRef.current[1] = el)}
        >
          <h1>UI/UX Design</h1>
          <p>Beautiful, clean & functional UI/UX <br /> for better experiences.</p>
        </div>

        <div
          className="text-three"
          ref={(el) => (textRef.current[2] = el)}
        >
          <h1>AI Integration</h1>
          <p>Smart automation & AI-powered <br /> solutions for your business.</p>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="strength-images">
        <div className="strenght1" ref={(el) => (imageRef.current[0] = el)}>
          <img src={img1} alt="Strength 1" />
        </div>
        <div className="strenght2" ref={(el) => (imageRef.current[1] = el)}>
          <div>
            <img src={img2} alt="Strength 2" />
          </div>
          <div>
            <img src={img3} alt="Strength 3" />
          </div>
        </div>
      </div>
    </div>
  );
}
