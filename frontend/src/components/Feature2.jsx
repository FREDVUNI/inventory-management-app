import React from "react";
// import data
import { features } from "../data";

const Feature2 = () => {
  // destructure features
  const { feature2 } = features;
  // destructure feature2
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;
  return (
    <section className="section" id="features">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          {/* image */}
          <div className="flex-1 order-2 lg:order-1" data-aos="fade-right">
            <img src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 order-1 lg:order-2" data-aos="fade-left">
            <div className="pretitle">{pretitle}</div>
            <h2 className="title">{title}</h2>
            <p className="lead">{subtitle}</p>
            <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink} <img src={btnIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
