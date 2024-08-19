import React, { useState } from 'react';
import './Exploremenu.css';
import { menu_list } from '../../assets/assets';

const Exploremenu = ({ category, setCategory }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(prev => prev === item ? null : item); // Toggle selection
    setCategory(prev => prev === item.menu_name ? "All" : item.menu_name);
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Explore our menu and discover a world of flavors! From mouthwatering classics to bold new creations, each dish is crafted to satisfy your cravings and elevate your dining experience. Dive in and find your next favorite meal. Unlock a culinary adventure with our menu! Whether you're in the mood for comforting classics or something new and exciting, each dish is designed to delight your taste buds. Explore now and let your cravings lead the way!
      </p>
      <div className="explore-menu-list">
        {menu_list.length > 0 ? (
          menu_list.map((item, index) => (
            <div 
              key={index} 
              className="explore-menu-list-item" 
              onClick={() => handleItemClick(item)}
            >
              <img 
                className={activeItem === item ? "active" : ""} 
                src={item.menu_image} 
                alt={item.menu_name} 
              />
              <p>{item.menu_name}</p>
            </div>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
