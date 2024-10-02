import React, { useState, useEffect } from "react";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => setIsImageVisible(true), 500);

      setTimeout(() => setIsTextVisible(true), 1000);
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="App">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white  w-[800px] h-[500px] p-6 flex relative">
            <div
              className={`w-1/2 transform transition-all duration-1000 ease-in-out ${
                isImageVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <img
                src="https://vinova-furstore.myshopify.com/cdn/shop/files/newsletter_540x.jpg?v=1697185401"
                alt="newsletter offer"
                className="w-full h-full object-cover "
              />
            </div>

            <div
              className={`w-1/2 p-4 transform transition-all duration-1000 ease-in-out delay-500 ${
                isTextVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">NEWSLETTER</h2>
              <p className="mb-4 text-sm">
                Get 15% off your first purchase! Plus, be the first to know
                about sales, new product launches, and exclusive offers!
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-400 p-4 w-full mb-4 text-center"
              />
              <button className="bg-[#0a5d5d] text-white w-full py-4">
                Submit
              </button>
              <label className="flex items-center mt-4 text-sm">
                <input type="checkbox" className="mr-2" />
                Don't show this popup again
              </label>
            </div>
          </div>
          <button
            className="absolute top-5 right-5 text-white text-xl"
            onClick={() => setIsModalOpen(false)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
