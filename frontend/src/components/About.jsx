import React from "react";
import { about } from "../data";

const About = () => {
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = about;
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          <div className="flex-1" data-aos="fade-right">
            <div className="pretitle">{pretitle}</div>
            <h2 className="title">{title}</h2>
            <p className="lead">{subtitle}</p>
            <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink} <img src={btnIcon} alt="" />
            </button>
          </div>
          <div className="flex-1" data-aos="fade-left">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
