import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row text-sm bg-gray-900 text-white">
      <div className="flex-1 p-10 space-y-6 md:space-y-0 md:flex md:space-x-6">
        <div className="p-2">
          <h1 className="font-semibold text-gray-400 text-xs uppercase">About</h1>
          <ul className="mt-2 space-y-1">
            <li className="hover:underline">Contact Us</li>
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Flipkart Stories</li>
            <li className="hover:underline">Press</li>
            <li className="hover:underline">Corporate Information</li>
          </ul>
        </div>
        <div className="p-2">
          <h1 className="font-semibold text-gray-400 text-xs uppercase">Group Companies</h1>
          <ul className="mt-2 space-y-1">
            <li className="hover:underline">Contact Us</li>
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Flipkart Stories</li>
            <li className="hover:underline">Press</li>
            <li className="hover:underline">Corporate Information</li>
          </ul>
        </div>
        <div className="p-2">
          <h1 className="font-semibold text-gray-400 text-xs uppercase">Help</h1>
          <ul className="mt-2 space-y-1">
            <li className="hover:underline">Contact Us</li>
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Flipkart Stories</li>
            <li className="hover:underline">Press</li>
            <li className="hover:underline">Corporate Information</li>
          </ul>
        </div>
        <div className="p-2">
          <h1 className="font-semibold text-gray-400 text-xs uppercase">Consumer Policy</h1>
          <ul className="mt-2 space-y-1">
            <li className="hover:underline">Contact Us</li>
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Flipkart Stories</li>
            <li className="hover:underline">Press</li>
            <li className="hover:underline">Corporate Information</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around md:justify-end bg-gray-800 p-10 text-white">
        <div className="p-2 md:w-2/12 w-5/12">
          <h1 className="font-semibold text-gray-400 text-xs uppercase">Mail Us</h1>
          <div className="mt-2 text-gray-300 text-sm">
            Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block, Koramangala Industrial Layout, Bangalore KA IN 560034.
          </div>
          <div className="mt-4">
            <h1 className="font-semibold text-gray-400 text-xs uppercase">Social</h1>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="p-2 md:w-2/12 w-5/12">
          <h1 className="font-semibold text-gray-400 text-xs uppercase">Registered Office</h1>
          <div className="mt-2 text-gray-300 text-sm">
            Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block, Koramangala Industrial Layout, Bangalore KA IN 560034.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
