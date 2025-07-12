"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import clsx from "clsx";

const logos = [
  "Google",
  "Slack",
  "Amazon",
  "Spotify",
  "LinkedIn",
  "Walmart",
  "YouTube",
];

export default function BandsSection() {
  const [activeIndex, setActiveIndex] = useState(3); 

  return (
    <div className="bg-black py-10">
      <h2 className="text-center text-lg md:text-xl font-bold mb-6">
        Take care of more than 100K customers
      </h2>

      <div className="relative">
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          onSlideChange={(swiper) => {
            const realIndex = swiper.realIndex % logos.length;
            setActiveIndex(realIndex < 0 ? logos.length - 1 : realIndex);
          }}
          modules={[FreeMode]}
          className="w-full max-w-7xl mx-auto"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div
                className={clsx(
                  "flex flex-col items-center transition-all duration-500",
                  index === activeIndex
                    ? "text-white scale-110 font-bold"
                    : "text-gray-400 scale-95"
                )}
              >
                <span className="text-lg md:text-xl">{logo}</span>

                {/* Underline Animation */}
                <div
                  className={clsx(
                    "h-[2px] mt-2 bg-white transition-all duration-500 origin-center",
                    index === activeIndex ? "w-full scale-x-100" : "w-0 scale-x-0"
                  )}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
