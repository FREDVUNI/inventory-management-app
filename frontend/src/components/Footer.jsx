import React from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { images } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/">Landing page</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">Referral Program</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">Design</Link>
            </li>
            <li>
              <Link to="/">Themes</Link>
            </li>
            <li>
              <Link to="/">Illustrations</Link>
            </li>
            <li>
              <Link to="/">UI Kit</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">License</Link>
            </li>
            <li>
              <Link to="/">Changelog</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            src={images.Logo}
            alt="logo"
            className="brightness-0 invert mx-auto md:mx-0"
          />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
            Discover the power of efficient inventory management
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <Link to="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link tp="/">
                <AiFillYoutube className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiFillInstagram className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link>
                <FaFacebook className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link>
                <BsTelegram className="w-6 h-auto" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <p className="font-bold text-dark-light">
            Copyright © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
