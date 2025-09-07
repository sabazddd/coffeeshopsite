
import React from 'react';

import banner1 from '../assets/banner-1.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png';

function Banner() {
  return (
    <section className="section__container banner__container" id="special">
      <div className="banner__card">
        <img src={banner1} alt="Most Popular Coffee" />
        <div className="text-banner">
          <h4>MOST POPULAR COFFEE</h4>
        </div>
      </div>
      
      <div className="banner__card">
        <img src={banner2} alt="More Fun More Taste" />
        <div className="text-banner">
          <h4>MORE FUN MORE TASTE</h4>
        </div>
      </div>
      <div className="banner__card">
        <img src={banner3} alt="Fresh & Chili" />
        <div className="text-banner">
          <h4>FRESH & CHILI</h4>
        </div>
      </div>
    </section>
  );
}

export { Banner };
export default Banner;
