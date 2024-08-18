import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="header-contents">
        <h2>Order Your Favourite Food</h2>
        <p>Craving something extraordinary? Treat yourself to the perfect bite with our classic pizza, bursting with fresh toppings, or experience the rich, aromatic delight of our spiced curry paired with warm, fluffy naan. Your next favorite meal is just a click away!</p>
        <button>View Menu</button>
      </div>
    </header>
  );
};

export default Header;
