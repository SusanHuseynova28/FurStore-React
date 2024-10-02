import React from "react";

const ProductShowcase = () => {
  return (
    <div className="flex flex-col lg:flex-row  p-12 items-center justify-center">
      <div className=" relative flex items-center justify-center">
        <img
          src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-4_1080x.jpg?v=1703662421"
          alt="Hanging Lamp"
          className="w-[600px] h-auto object-contain"
        />
        <div className="absolute inset-0 flex flex-col items-center top-36 left-10 text-center">
          <h2 className="text-3xl lg:text-4xl  text-black mb-2 lg:mb-4">
            Hanging Lamp
          </h2>
          <p className="text-sm  text-gray-600 mb-4 lg:mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod torus tempor incididunt.
          </p>
          <button className="bg-[#0a5d5d] text-white py-2 lg:py-4 px-4 lg:px-6  hover:bg-teal-700">
            Shop Now
          </button>
        </div>
      </div>

      <div className="lg:w-1/3 grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-8 flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-black mb-4">Plants</h3>
          <p className="text-gray-600 text-center mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod torus tempor incididunt.
          </p>
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-6_768x.jpg?v=1703662419"
            alt="Plants"
            className="w-50 h-40 object-contain"
          />
        </div>

        <div className="p-8 flex flex-col items-center justify-center">
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-5_768x.jpg?v=1703662419"
            alt="Clockwatcher"
            className="w-50 h-40 object-contain mb-4"
          />
          <h3 className="text-xl font-bold text-black mb-4">Clockwatcher</h3>
          <p className="text-gray-600 text-center mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod torus tempor incididunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
