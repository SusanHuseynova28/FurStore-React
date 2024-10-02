import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import React from "react";
import "../../styles/style.scss";

const FurnitureSlider = () => {
  return (
    <div className="relative bg-gray-100 h-screen">
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("Swiper dəyişdi")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="relative max-w-[1240px] mx-auto h-screen">
            <img
              src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-1_2048x.jpg?v=1703653285"
              alt="plant"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/3 left-5 md:left-10 text-left z-10 slide-in-left">
              <h1 className="text-2xl md:text-4xl w-[80%] md:w-[600px] text-black">
                IMMERSE YOURSELF IN OUR SPECTACULAR FURNITURE COLLECTION
              </h1>
              <p className="mt-4 text-sm md:text-lg text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button className="mt-8 bg-[#0a5d5d] text-white px-4 py-2 md:px-6 md:py-4">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative max-w-[1240px] mx-auto h-screen">
            <img
              src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-2_1296x.jpg?v=1703750459"
              alt="furniture"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center z-10">
              <h1 className="text-2xl md:text-4xl text-black">
                DISCOVER EXCEPTIONAL FURNITURE DESIGNS FOR EVERY STYLE
              </h1>
              <p className="mt-4 text-sm md:text-lg text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button className="mt-8 bg-[#0a5d5d] text-white px-4 py-2 md:px-6 md:py-4">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative max-w-[1240px] mx-auto h-screen">
            <img
              src="https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-3_1512x.jpg?v=1703750458"
              alt="furniture"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/3 right-5 md:right-10 text-right z-10 slide-in-right">
              <h1 className="text-2xl md:text-4xl w-[80%] md:w-[500px] text-black">
                ENHANCE YOUR SPACE WITH STYLE AND FUNCTION
              </h1>
              <p className="mt-4 text-sm md:text-lg text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button className="mt-8 bg-[#0a5d5d] text-white px-4 py-2 md:px-6 md:py-4">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FurnitureSlider;
