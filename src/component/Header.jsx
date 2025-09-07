import React from 'react'
import header from "../assets/header.jpg"
function Header({ onBuy }) {
  const headerItem = {
    id: 100,
    name: 'Premium Coffee Blend',
    price: 12.99
  };

  return (
    <header className="home" id="home">
      <div className="header__image">
        <img src={header} alt="header" />
      </div>
      <div className="header__content">
        <h1>WELCOME TO OUR <span>Coffee</span> WORLD</h1>
        <p className="section__description">
          Immerse yourself in a world of aroma and flavor! Authentic, rich coffee that brings you both energy and calm with every sip.
        </p>
        <div className="header__btn">
          <button className="btn" onClick={() => onBuy(headerItem)}>Buy Now</button>
        </div>
        <ul className="socials">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page"><i className="ri-facebook-fill"></i></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page"><i className="ri-twitter-fill"></i></a></li>
          <li><a href="https://www.instagram.com/saba.zandi_?igsh=Z2VsenR2dzJrMzF1&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page"><i className="ri-instagram-line"></i></a></li>
          <li><a href="tel:+1234567890" aria-label="Call us"><i className="ri-phone-fill"></i></a></li>
        </ul>
      </div>
    </header>
  )
}

export { Header };
export default Header;
