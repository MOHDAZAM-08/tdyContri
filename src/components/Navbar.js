import React, { useState } from 'react';
import '../App.css';
import navlogo from "../img/logo.png"
import {
  Link
} from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">

      <div className={`container ${isOpen ? 'open' : ''}`}>
        <div className='Navlogo'>
          <img src={navlogo} alt="" style={{ width: "100%" }} />
        </div>
        <button className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu} />
        <div className={`backdrop ${isOpen ? 'open' : ''}`} />
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <nav>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/AboutPage" className="link">
              About
            </Link>
            <Link to="#" className="link">
              Services
            </Link>
            <Link to="/ProjectPage" className="link">
              Projects
            </Link>
            <Link to="#" className="link">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
