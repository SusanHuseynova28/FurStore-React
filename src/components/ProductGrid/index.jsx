import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Pillow',
      image: 'https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-1_768x.jpg?v=1703662419',
    },
    {
      id: 2,
      name: 'Armchair',
      image: 'https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-2_768x.jpg?v=1703662419',
    },
    {
      id: 3,
      name: 'Side Table',
      image: 'https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-3_768x.jpg?v=1703662759',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative group overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-white text-lg">{product.name}</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:text-white hover:bg-[#0a5d5d]">
                <span className="text-xl"><FaArrowRight /></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
