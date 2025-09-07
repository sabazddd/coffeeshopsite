
import React from 'react';

import DiscoverImg1 from '../assets/discover-1.jpg';
import DiscoverImg2 from '../assets/discover-2.jpg';
import DiscoverImg3 from '../assets/discover-3.jpg';

function Discover({ onBuy }) {
  const items = [
    {
      id: 6,
      name: 'hazelnut latte',
      desc: "Dive into a coffee lover's paradise...",
      price: 6.99,
      oldPrice: 9.99,
      img: DiscoverImg1,
    },
    {
      id: 7,
      name: 'Double espresso',
      desc: 'It energizes your day...',
      price: 5.99,
      oldPrice: 8.99,
      img: DiscoverImg2,
    },
    {
      id: 8,
      name: 'Turkish coffee',
      desc: 'A different and special taste...',
      price: 5.49,
      oldPrice: 10.49,
      img: DiscoverImg3,
    },
  ];

  return (
    <section className="section__container discover__container" id="categories">
      <h2 className="section__header">Most Selling Coffee</h2>
      <p className="section__description">
        Discover our coffee favorites! These are loved by everyone and top picks for their flavors.
      </p>
      <div className="discover__grid">
        {items.map(item => (
          <div className="discover__card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="discover__card__content">
              <h4>{item.name}</h4>
              <p className="section__description">{item.desc}</p>
              <h3>
                ${item.price.toFixed(2)}
                <span>
                  <s> ${item.oldPrice.toFixed(2)}</s>
                </span>
              </h3>
              <div className="discover__card__btn">
                <button className="btn" onClick={() => onBuy(item)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Discover };
export default Discover;
