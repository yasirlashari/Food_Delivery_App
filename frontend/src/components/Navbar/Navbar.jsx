import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  const handleMenuClick = (menuItem, path) => {
    setMenu(menuItem);
    navigate(path);  // Navigate to the corresponding path
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className='navbar-menu'>
        <li 
          onClick={() => handleMenuClick("home", "/")} 
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li 
          onClick={() => handleMenuClick("menu", "/menu")} 
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li 
          onClick={() => handleMenuClick("mobile-app", "/mobile-app")} 
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </li>
        <li 
          onClick={() => handleMenuClick("contact-us", "/contact-us")} 
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
