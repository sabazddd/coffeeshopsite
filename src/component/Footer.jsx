import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <Link to="/" className="logo">Coffee<span>World</span></Link>
        </div>
        <div className="footer__col">
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <ul className="socials">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page"><i className="ri-facebook-fill"></i></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page"><i className="ri-twitter-fill"></i></a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Pinterest page"><i className="ri-pinterest-line"></i></a></li>
            <li><a href="tel:+1234567890" aria-label="Call us"><i className="ri-phone-fill"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
