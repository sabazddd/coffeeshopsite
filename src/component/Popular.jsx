import React from 'react';

import Popular1 from '../assets/popular-1.png';
import Popular2 from '../assets/popular-2.png';
import Popular3 from '../assets/popular-3.png';

function Popular({ onBuy }) {
  const items = [
    { id: 3, name: 'Iced Mocha', price: 5.49, img: Popular1 },
    { id: 4, name: 'Iced Matcha', price: 5.99, img: Popular2 },
    { id: 5, name: 'Chocolate Milkshake', price: 4.99, img: Popular3 },
  ];

  return (
    <section className="section__container popular__container" id="menu">
      <h2 className="section__header">Popular Coffee</h2>
      <div className="popular__grid">
        {items.map(item => (
          <div className="popular__card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="popular__card__content">
              <div className="popular-name-price"><h4>{item.name}</h4>
              <h3>${item.price.toFixed(2)}</h3></div>

              
              <button className="btn" onClick={() => onBuy(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Popular };
export default Popular;
