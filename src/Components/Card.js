import React from "react";

const Card = ({ key, title, price, images }) => {
  console.log(key, title);
  return (
    <div className="flex flex-col m-5 md:w-52 w-40 p-4 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
      <img className="w-full h-32 md:h-40 object-cover rounded-t-lg" src={images[0]} alt={title} />
      <div className="p-2">
        <h1 className="font-semibold text-gray-800 text-sm md:text-md mb-1">{title}</h1>
        <h2 className="text-gray-600 text-xs md:text-sm">{price} Rs</h2>
      </div>
    </div>
  );
};

export default Card;
