import React from "react";
// import data
import { footer } from "../data";
// import components
import Copyright from "./Copyright";

const Footer = () => {
  // destructure footer data
  const { logo, links, legal, newsletter, form } = footer;
  return (
    <footer className="pt-[142px] pb-[60px]" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
          {/* logo */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* list 1 */}
          <div>
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3">
              {links.map((item, index) => {
                // destructure item
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      className="font-medium hover:text-accent transition"
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* list 2 */}
          <div>
            <div className="text-2xl uppercase font-medium mb-6">Legal</div>
            <ul className="flex flex-col gap-y-3">
              {legal.map((item, index) => {
                // destructure item
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      className="font-medium hover:text-accent transition"
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* newsletter */}
          <div>
            <div className="text-2xl uppercase font-medium mb-6">
              {newsletter.title}
            </div>
            <div className="text-xl text-light mb-[18px]">
              {newsletter.subtitle}
            </div>
            <span className="text-sm text-light">{form.smallText}</span>
          </div>
        </div>
        <hr
          className="mt-10 mb-5"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
        />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
