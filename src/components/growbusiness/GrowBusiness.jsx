import React, { useEffect } from 'react';
import './GrowBusiness.css';
import ceo from '../img/CEO.png';
import ceo1 from '../img/ceo1.png';

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function GrowBusiness() {
  useEffect(() => {
    AOS.init({
      duration: 1200,   // animation duration (ms)
      once: true,       // animation runs only once
    });
  }, []);

  return (
   <div className='grow-main-div'>
     <div className='grow-first-div'>
        {/* Left image */}
        <div className='ceoimg' data-aos="fade-right">
            <img src={ceo} alt="CEO" />
        </div>

        <div className='grow-sec-div'>    
            {/* Text */}
            <div className='grow-text' data-aos="fade-up">
                <h1>We are Grow <br />My <span className='grow-spandiv'> Business</span></h1>
                <p>When you work with us, you get an awesome <br />
                team of website experts, strategic thinkers, and <br />
                problem solvers. All focused on helping you get <br />
                the results you’re looking for.</p>
                <p>Our team listens to you, are super easy to work <br />with, and have the experience, expertise and 
                <br /> processes to make it all happens.</p>
                <p>We get to know you and your business, so <br />
                together we can create a website strategy that <br />
                focuses on delivering the real results your <br />
                business needs.</p>
                <div className='grow-btn' data-aos="zoom-in">
                  <button>Meet the team</button>
                </div>
            </div>

            {/* Right image */}
            <div className='ceo1img' data-aos="fade-left">
                <img src={ceo1} alt="CEO Partner" />
            </div>
        </div>
     </div>
   </div>
  )
}