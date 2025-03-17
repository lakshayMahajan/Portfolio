import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <a href="#" className="navbar-logo">LM.</a>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>
    </div>
  );
}

export default Navbar;
