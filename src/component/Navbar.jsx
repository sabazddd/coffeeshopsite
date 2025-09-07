import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ cart, toggleTheme, theme }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [breakfastOpen, setBreakfastOpen] = useState(false);



  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#home" className="logo">Coffee<span>World</span></a>
        </div>
        <div className="nav__menu__btn" onClick={() => setOpen(o => !o)}>
          <i className={open ? 'ri-close-line' : 'ri-menu-3-line'}></i>
        </div>
      </div>

      <ul className={`nav__links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
  <li><Link to="/home">Home</Link></li>

  <li className="has-submenu">
    <div className="menu-item" onClick={(e) => {
      e.stopPropagation();
      setSubmenuOpen(prev => !prev);
    }}>
      <Link to="/menu">Menu</Link>
      <span className={`arrow ${submenuOpen ? 'open' : ''}`}>▼</span>
    </div>
    <ul className={`submenu ${submenuOpen ? 'open' : ''}`}>
      <li className="has-submenu">
        <div className="menu-item" onClick={(e) => {
          e.stopPropagation();
          setBreakfastOpen(prev => !prev);
        }}>
          <Link to="/menu/breakfast">Breakfast</Link>
          <span className={`arrow ${breakfastOpen ? 'open' : ''}`}>▼</span>
        </div>
        <ul className={`submenu ${breakfastOpen ? 'open' : ''}`}>
          <li><Link to="/menu/breakfast/pancakes">Pancakes</Link></li>
          <li><Link to="/menu/breakfast/eggs">Eggs</Link></li>
          <li><Link to="/menu/breakfast/coffee">Coffee</Link></li>
        </ul>
      </li>
      <li><Link to="/menu/lunch">Lunch</Link></li>
      <li><Link to="/menu/dinner">Dinner</Link></li>
    </ul>
  </li>

  <li><Link to="/categories">Categories</Link></li>
  <li><Link to="/contact">Contact Us</Link></li>
</ul>


      <div className="nav__btns">
        <button
          className="btn"
          aria-label="Cart"
          onClick={() => navigate('/cart')}
        >
          <i className="ri-shopping-cart-line"></i>
          {cart > 0 && <span className="badge">{cart}</span>}
        </button>
        <button className="btn" aria-label="Notifications">
          <i className="ri-notification-3-fill"></i>
        </button>
        <button className="btn" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}

export { Navbar };
export default Navbar;
