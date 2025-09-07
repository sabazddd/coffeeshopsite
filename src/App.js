import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Header from './component/Header';
import Popular from './component/Popular';
import Discover from './component/Discover';
import Banner from './component/Banner';
import Subscribe from './component/Subscribe';
import Footer from './component/Footer';
import CartPage from './component/CartPage';
import ContactUs from './component/ContactUs';

export default function App() {
  const [cart, setCart] = useState([
   
  ]);
  
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('coffee-world-theme') || 'light';
  });

  const handleBuy = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleRemove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('coffee-world-theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <Navbar cart={cart.reduce((a, c) => a + c.quantity, 0)} toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={
          <>
            <Header onBuy={handleBuy} />
            <Popular onBuy={handleBuy} />
            <Discover onBuy={handleBuy} />
            <Banner />
            <Subscribe />
            <Footer />
          </>
        } />
        <Route path="/home" element={<Header onBuy={handleBuy} />} />
        <Route path="/menu" element={<Popular onBuy={handleBuy} />} />
        <Route path="/categories" element={<Discover onBuy={handleBuy} />} />
        <Route path="/cart" element={<CartPage initialItems={cart} handleRemove={handleRemove} />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
