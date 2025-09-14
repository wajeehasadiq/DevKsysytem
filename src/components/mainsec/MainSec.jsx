import React from "react";
import "./MainSec.css";
import foodimg from "../img/restimg.png";
import upimg from "../img/profitimg.png";
import collab from "../img/collavb.png"
import chinese from "../img/chinese.png"
import sir1 from "../img/sir1.png"
import sir2 from "../img/sir2.jpg"

export default function MainSec() {
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
            <img src={foodimg} alt="Food" />
          </div>
          <div className="mainsec-img">
            <img src={upimg} alt="Up" />
          </div>
        </div>
  <div className="new-imagess">
      <div className="newimg1">
        <img src={collab} alt="" />
      </div>
      <div  className="newimg1">
        <img src={chinese} alt="" />
      </div>
      </div>


      <div className="man-images">
        <div className="man1"><img src={sir1} alt="" /></div>
        <div className="man1"><img src={sir2} alt="" /></div>
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
