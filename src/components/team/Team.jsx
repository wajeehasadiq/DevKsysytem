// import React from 'react'
// import './Team.css'
// import team1 from '../img/team1 (1).png'
// import team2 from '../img/team1 (2).png'
// import team3 from '../img/team1 (3).png'
// export default function Team() {
//   return (
//     <div className='team-main-div'>
//         <div className='team-text'>
//         <h1><span className='team-span'>Meet</span> the Team</h1>
//         <p>At DevK System, we’re a passionate crew of tech creatives — 
//             <br />small in size, big in results.</p>
//         </div>


//         <div className='ourteam'>
// <div>
//     <img src={team1} alt="" />
//     <h1>Developer</h1>
//     <p>Builds backend/frontend for all <br /> platforms</p>
// </div>
// <div>
//     <img src={team2} alt="" />
//     <h1>Designer</h1>
//     <p>Creates clean UI/UX for user <br /> engagement</p>
// </div>
// <div>
//     <img src={team3} alt="" />
//     <h1>AI Specialist</h1>
//     <p>Adds smart chatbots and <br /> automation</p>
// </div>




//         </div>
//         </div>
//   )
// }

import React, { useEffect, useRef } from "react";
import "./Team.css";
import team1 from "../img/team1 (1).png";
import team2 from "../img/team1 (2).png";
import team3 from "../img/team1 (3).png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const teamRef = useRef([]);

  useEffect(() => {
    // Animate team cards similar to Cards.jsx
    gsap.fromTo(
      teamRef.current,
      {
        opacity: 0,
        y: 100,
        rotateY: 30, // Same 3D rotation
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
          trigger: teamRef.current[0], // Trigger when the first card enters view
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="team-main-div">
      <div className="team-text">
        <h1>
          <span className="team-span">Meet</span> the Team
        </h1>
        <p>
          At DevK System, we’re a passionate crew of tech creatives —
          <br />small in size, big in results.
        </p>
      </div>

      <div className="ourteam">
        <div ref={(el) => (teamRef.current[0] = el)}>
          <img src={team1} alt="Developer" />
          <h1>Developer</h1>
          <p>
            Builds backend/frontend for all <br /> platforms
          </p>
        </div>

        <div ref={(el) => (teamRef.current[1] = el)}>
          <img src={team2} alt="Designer" />
          <h1>Designer</h1>
          <p>
            Creates clean UI/UX for user <br /> engagement
          </p>
        </div>

        <div ref={(el) => (teamRef.current[2] = el)}>
          <img src={team3} alt="AI Specialist" />
          <h1>AI Specialist</h1>
          <p>
            Adds smart chatbots and <br /> automation
          </p>
        </div>
      </div>
    </div>
  );
}
