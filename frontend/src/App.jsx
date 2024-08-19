// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Exploremenu from './components/Exploremenu/Exploremenu';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/menu" element={<Exploremenu category="All" setCategory={() => {}} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
