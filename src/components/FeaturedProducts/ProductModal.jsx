import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-5xl w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
          <FiX />
        </button>

        <div className="flex">
          <div className="w-1/2 pr-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <div className="w-1/2 pl-8">
            <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
            <p className="text-yellow-500 text-xl mt-10">
              {"⭐".repeat(product.rating)}
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-4">
              {product.price}
            </p>

            {product.sku && (
              <p className="text-gray-600 text-md mt-10">
                <strong>SKU:</strong>{" "}
                <span className="text-gray-800">{product.sku}</span>
              </p>
            )}

            {product.category && (
              <p className="text-gray-600 text-md mt-10">
                <strong>Category:</strong>{" "}
                <span className="text-gray-800">{product.category}</span>
              </p>
            )}

            <div className="flex items-center mt-10">
              <span className="text-lg font-semibold mr-4">QUANTITY:</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-600"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-6 py-2 text-lg ">{quantity}</span>
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-600"
                  onClick={incrementQuantity}
                >
                  +
                </button>
                <button className="w-full bg-[#0a5d5d] text-white py-4 px-10  text-lg">
                  Add To Bag
                </button>
              </div>
            </div>

            <div className="flex space-x-4 mt-10">
              <button className="w-full border border-[#0a5d5d]  py-3 rounded-md text-lg">
                Buy It Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
