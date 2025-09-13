import React from 'react'
import './GrowBusiness.css'
import ceo from '../img/CEO.png'
import ceo1 from '../img/ceo1.png'
export default function GrowBusiness() {
  return (
   <div className='grow-main-div'>
     <div className='grow-first-div'>
        <div className='ceoimg'>
            <img src={ceo} alt="" />
        </div>
    <div className='grow-sec-div'>    
        <div className='grow-text'>
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
<div className='grow-btn'><button>Meet the team</button></div>
        </div>

        <div className='ceo1img'>
            <img src={ceo1} alt="" />
        </div>
        </div>
    </div>
   </div>
  )
}
