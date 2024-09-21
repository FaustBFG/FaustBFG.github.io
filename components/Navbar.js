// components/Navbar.js
import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">My Account</a></li>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Log out</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
