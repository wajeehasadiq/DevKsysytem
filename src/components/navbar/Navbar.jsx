
import React, { useState } from "react";
import devlogo from '../img/dev logo.png'
import './Navbar.css'
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
   <nav className="navbar">
      {/* Logo */}
      <div className="logo">
         <img src={devlogo} alt="Logo" />
      </div>

      {/* Center: Links + Search */}
     <div className={`nav-center ${menuOpen ? "active" : ""}`}>

        <ul className="nav-links">
          <li>
            <a href="#">Services </a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About </a>
          </li>
        </ul>
        {/* Search box */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* Right side */}
      <div className="nav-right">
        <span className="contact-text">Contact us</span>
        <button className="book-btn">Book a Call</button>
      </div>

      {/* Toggle button for mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>

    </div>
  )
}
