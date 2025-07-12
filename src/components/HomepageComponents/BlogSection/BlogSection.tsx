"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import MainContainer from "@/components/shared/Container/MainContainer";
import Image from "next/image";
export default function BlogSection() {
  return (
    <div className="py-10 w-full px-3">
      <MainContainer>
        <h6 className="font-medium text-[44px] my-6 text-center">
          Stay up to Date with <br /> our News.
        </h6>
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="p-3 rounded bg-gray-700">
              <Image
                className="rounded"
                src="https://quomodothemes.website/html/fallow/assets/image/others/blog-3.png"
                alt="img"
                width={500}
                height={500}
              />
              <h6 className="font-medium text-[20px] mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                explicabo.
              </h6>
              <p>3 days age</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3 rounded bg-gray-700">
              <Image
                className="rounded"
                src="https://quomodothemes.website/html/fallow/assets/image/others/blog-3.png"
                alt="img"
                width={500}
                height={500}
              />
              <h6 className="font-medium text-[20px] mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                explicabo.
              </h6>
              <p>3 days age</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3 rounded bg-gray-700">
              <Image
                className="rounded"
                src="https://quomodothemes.website/html/fallow/assets/image/others/blog-3.png"
                alt="img"
                width={500}
                height={500}
              />
              <h6 className="font-medium text-[20px] mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                explicabo.
              </h6>
              <p>3 days age</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-3 rounded bg-gray-700">
              <Image
                className="rounded"
                src="https://quomodothemes.website/html/fallow/assets/image/others/blog-3.png"
                alt="img"
                width={500}
                height={500}
              />
              <h6 className="font-medium text-[20px] mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                explicabo.
              </h6>
              <p>3 days age</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </MainContainer>
    </div>
  );
}
