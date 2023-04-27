import React from "react";
import { footer } from "../data";
import Copyright from "./Copyright";

const Footer = () => {
  const { logo, links, legal, contact } = footer;
  return (
    <footer className="pt-[142px] pb-[60px]" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3">
              {links.map((item, index) => {
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
          <div>
            <div className="text-2xl uppercase font-medium mb-6">Legal</div>
            <ul className="flex flex-col gap-y-3">
              {legal.map((item, index) => {
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
          <div>
            <div className="text-2xl uppercase font-medium mb-6">
              {contact.title}
            </div>
            <div className="text-xlmb-[18px]">
              {contact.subtitle}
            </div>
            <p className="mb-4 mt-4">Reach out</p>
            <p className="text-sm">Email: {contact.email}</p>
            <p className="text-sm">Phone: {contact.phone}</p>
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
