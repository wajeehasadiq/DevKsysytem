import React from 'react'
import './Footer.css'
import { FaInstagram, FaWhatsapp, FaTiktok, FaLinkedin } from "react-icons/fa";
import nav from '../img/dev logo.png'
export default function Footer() {
  return (
    <div>
         <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section (Logo + Paragraph + Socials) */}
        <div className="footer-section">
          <div className="footer-top">
            <div className="footer-logo">
              <img src={nav} alt="logo" />
            </div>
            <p>
              Devk System ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaTiktok /></a>
          
          </div>
        </div>
 <div className="middle">
        {/* Middle Section (Business) */}
        <div className="footer-section">
          <h3>Business</h3>
          <p>Web Development</p>
          <p>UI & UX Designing</p>
          <p>AI Integration</p>
        </div>

        {/* Right Section (Information) */}
        <div className="footer-section">
          <h3>Information</h3>
          <p>devksystem@gmail.com</p>
          <p>Location: Mia Khel bazar</p>
          <p>92 3139614220</p>
        </div>
        </div>
      </div>
   {/* Sticky LinkedIn Icon */}
      <a href="#" className="sticky-linkedin">
        <FaLinkedin />
      </a>
    </footer>

    </div>
  )
}
