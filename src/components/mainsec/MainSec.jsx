// import React from 'react'
// import './MainSec.css'
// import foodimg from '../img/foodimh.png'
// import upimg from '../img/updownimg.png'
// export default function MainSec() {
//   return (
//   <div>
//       <div className='bgcolor'>
//       <div className='mainsec-text'><h1>Projects <span className='span-text'>That </span>Speak for Thems<span  className='span-text'>elves</span></h1>
//       <p>Here’s a glimpse of how we’ve helped businesses transform their <br /> online presence</p></div>
//     </div>


//   <div className="mainsec-bgimg">
//   <div className="mainsec-content">
//     <div className="mainsec1-img">
//       <img src={foodimg} alt="Food" />
//     </div>
//     <div className="mainsec-img">
//       <img src={upimg} alt="Up" />
//     </div>
//   </div>
// </div>



// <div className='text-divparent'>
//   <h1>We <span className='head-span'>are</span> the website <span className='head-span'>growth partners</span> <br />
// you've been <span  className='head-span'>looking</span> for</h1>
// <p>If you are battling outdated, inefficient or simply unmanageable websites, our tailored <br />
// solutions ensure your online presence is not only visually dynamic and user-friendly but <br />
// also easy for you or your team to manage</p>
// </div>
//   </div>
//   )
// }
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MainSec.css";
import foodimg from "../img/foodimh.png";
import upimg from "../img/updownimg.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function MainSec() {
  const imagesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      imagesRef.current,
      {
        opacity: 0,
        y: 120,
        scale: 0.85,
        rotate: 5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.3, // Animate one image after the other
        scrollTrigger: {
          trigger: imagesRef.current[0], // Trigger when first image enters
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div>
      {/* Top Heading */}
      <div className="bgcolor">
        <div className="mainsec-text">
          <h1>
            Projects <span className="span-text">That </span>Speak for Thems
            <span className="span-text">elves</span>
          </h1>
          <p>
            Here’s a glimpse of how we’ve helped businesses transform their <br />
            online presence
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mainsec-bgimg">
        <div className="mainsec-content">
          <div className="mainsec1-img">
            <img
              ref={(el) => (imagesRef.current[0] = el)}
              src={foodimg}
              alt="Food"
            />
          </div>
          <div className="mainsec-img">
            <img
              ref={(el) => (imagesRef.current[1] = el)}
              src={upimg}
              alt="Up"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text Section */}
      <div className="text-divparent">
        <h1>
          We <span className="head-span">are</span> the website{" "}
          <span className="head-span">growth partners</span> <br />
          you've been <span className="head-span">looking</span> for
        </h1>
        <p>
          If you are battling outdated, inefficient or simply unmanageable
          websites, our tailored <br />
          solutions ensure your online presence is not only visually dynamic and
          user-friendly but <br />
          also easy for you or your team to manage
        </p>
      </div>
    </div>
  );
}

