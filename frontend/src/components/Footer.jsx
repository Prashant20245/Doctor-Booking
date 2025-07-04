import React from "react";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt=""></img>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            CureConnect is your trusted platform for booking doctor appointments
            with ease. We connect patients with verified healthcare
            professionals, making access to quality medical care simple, fast,
            and secure.
          </p>
        </div>
        {/* Midddle Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+8848484848</li>
            <li>xyx@gmail.com</li>
          </ul>
        </div>
        {/* Copyright Text */}
        <div>
          <p className="py-5 text-sm text-center">
            Copyright © 2025 ABC- All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
