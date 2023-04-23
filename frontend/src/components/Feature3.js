import React from 'react';
// import data
import { features } from '../data';

const Feature3 = () => {
  // destructure features
  const { feature3 } = features;
  // destructure feature3
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature3;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='title'>{title}</h2>
            <p className='lead'>{subtitle}</p>
            <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
              {btnLink} <img src={btnIcon} alt='' />
            </button>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
