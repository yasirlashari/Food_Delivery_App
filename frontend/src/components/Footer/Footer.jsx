// components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets'; // Assuming your logo is stored here

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-left'>
        <img src={assets.logo} alt="Logo" className='footer-logo' />
        <p className='footer-description'>
          Discover our range of delicious dishes and enjoy the best dining experience with us.
        </p>
        <div className='footer-social'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={assets.facebook_icon} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={assets.twitter_icon} alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </a>
        </div>
      </div>
      
      <div className='footer-right'>
        <p>Contact: +923033742231</p>
        <p>Email: Yasirlashari131@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
