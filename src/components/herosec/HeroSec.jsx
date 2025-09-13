
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroSec.css";

export default function HeroSec() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate hero section fade-in
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    )

      // Animate heading
      .fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5" // overlap with previous animation
      )

      // Animate paragraph
      .fromTo(
        paraRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )

      // Animate button
      .fromTo(
        buttonRef.current,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" },
        "-=0.3"
      );
  }, []);

  return (
    <div className="hero-wrapper" ref={heroRef}>
      <div className="herodiv-bgimg">
        <div className="herodiv-text">
          <h1 ref={headingRef}>
            Affordable <span className="SPANDIV">UI</span>/UX Design, Web <br />
            <span className="SPANDIV">Develop</span>
            ment &<span className="SPANDIV"> AI</span> Solutions
          </h1>
          <p ref={paraRef}>
            DevK System delivers powerful websites, clean UI/UX, <br />
            and AI solutions that scale — without breaking your <br /> budget.
          </p>
          <div>
            <button ref={buttonRef}>Let's Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
}
