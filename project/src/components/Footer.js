// components/Footer.js
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="support">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Contact Customer Service</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div className="about">
          <h4>About</h4>
          <ul>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
        <div className="partners">
          <h4>Partners</h4>
          <ul>
            <li><a href="#">List your property</a></li>
          </ul>
        </div>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
