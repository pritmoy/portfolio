"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaStar, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Guy Hawkins",
    role: "Web Designer",
    image: "/avatar1.jpg",
    quote:
      "There are many variations of passages of Lorem Ipsum available, majority have into the find end to suffered.",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    role: "Web Designer",
    image: "/avatar2.jpg",
    quote:
      "There are many variations of passages of Lorem Ipsum available, majority have into the find end to suffered.",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    role: "Web Designer",
    image: "/avatar1.jpg",
    quote:
      "There are many variations of passages of Lorem Ipsum available, majority have into the find end to suffered.",
  },
  {
    id: 4,
    name: "Guy Hawkins",
    role: "Web Designer",
    image: "/avatar2.jpg",
    quote:
      "There are many variations of passages of Lorem Ipsum available, majority have into the find end to suffered.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#f9faff] dark:bg-[#0f172a] text-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm text-blue-500 font-semibold mb-2 uppercase">
          Customer Reviews
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-10">
          What’s Our Customer Say
        </h2>

        <Swiper
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white dark:bg-slate-800 text-left rounded-xl p-6 shadow-md relative h-full">
                <div className="flex justify-start mb-4 text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    width={500} height={500}
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-black dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <FaQuoteRight className="absolute bottom-4 right-4 text-blue-100 dark:text-blue-900 text-6xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
