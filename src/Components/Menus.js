import React from "react";
import item1 from "../images/items.webp";
import item2 from "../images/items2.webp";
import item3 from "../images/items3.webp";
import item4 from "../images/items4.webp";
import dropdownIcon from "../images/dropdown-select.png";

const Menus = () => {
  return (
    <div className="flex md:w-6/12 w-full m-auto text-xs md:text-sm justify-around my-4 content-center items-center">
      <div className="relative group">
        <img src={item1} alt="Grocery" />
        <div className="flex items-center">
          <h1>Grocery</h1>
          <img src={dropdownIcon} className="w-3 h-3 ml-1"></img>
        </div>
        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded p-2 py-5 z-10 w-32 top-full ">
          <ul>
            <li className="mt-2 p-1 hover:bg-gray-200">Fresh Fruits</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Vegetables</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Dairy Products</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Bakery Items</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Snacks & Beverages</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Packaged Foods</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Household Supplies</li>
          </ul>
        </div>
      </div>
      <div className="relative group">
        <img src={item2} alt="Mobiles" />
        <div className="flex items-center">
          <h1>Mobiles</h1>
          <img src={dropdownIcon} className="w-3 h-3 ml-1"></img>
        </div>
        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded p-2 py-5 z-10 w-32 top-full">
          <ul>
            <li className="mt-2 p-1 hover:bg-gray-200">Smartphones</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Feature Phones</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Mobile Accessories</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Tablets</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Smart Watches</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Power Banks</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Mobile Cases</li>
          </ul>
        </div>
      </div>
      <div className="relative group">
        <img src={item3} alt="Fashion" />
        <div className="flex items-center">
          <h1>Electronic</h1>
          <img src={dropdownIcon} className="w-3 h-3 ml-1"></img>
        </div>
        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded p-2 py-5 z-10 w-32 top-full">
          <ul>
            <li className="mt-2 p-1 hover:bg-gray-200">Televisions</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Laptops</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Cameras</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Headphones</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Home Appliances</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Gaming Consoles</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Speakers</li>
          </ul>
        </div>
      </div>
      <div className="relative group">
        <img src={item4} alt="Grocery" />
        <div className="flex items-center">
          <h1>Grocery</h1>
          <img src={dropdownIcon} className="w-3 h-3 ml-1"></img>
        </div>
        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded p-2 py-5 z-10 w-32 top-full ">
          <ul>
            <li className="mt-2 p-1 hover:bg-gray-200">Fresh Fruits</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Vegetables</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Dairy Products</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Bakery Items</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Snacks & Beverages</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Packaged Foods</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Household Supplies</li>
          </ul>
        </div>
      </div>
      <div className="relative group">
        <img src={item2} alt="Mobiles" />
        <div className="flex items-center">
          <h1>Mobiles</h1>
          <img src={dropdownIcon} className="w-3 h-3 ml-1"></img>
        </div>
        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded p-2 py-5 z-10 w-32 top-full">
          <ul>
            <li className="mt-2 p-1 hover:bg-gray-200">Smartphones</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Feature Phones</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Mobile Accessories</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Tablets</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Smart Watches</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Power Banks</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Mobile Cases</li>
          </ul>
        </div>
      </div>
      <div className="relative group">
        <img src={item3} alt="Electronics" />
        <div className="flex items-center">
          <h1>Electronic</h1>
          <img src={dropdownIcon} className="w-3 h-3 ml-1"></img>
        </div>
        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded p-2 py-5 z-10 w-32 top-full">
          <ul>
            <li className="mt-2 p-1 hover:bg-gray-200">Televisions</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Laptops</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Cameras</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Headphones</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Home Appliances</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Gaming Consoles</li>
            <li className="mt-2 p-1 hover:bg-gray-200">Speakers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menus;
