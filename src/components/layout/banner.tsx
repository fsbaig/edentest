"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 pb-2 sm:pb-4">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 bg-white rounded-full hover:bg-gray-400 transition-all duration-300" />
    ),
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[800px] overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="/banner1.webp"
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/banner2.webp"
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/banner3.webp"
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
  