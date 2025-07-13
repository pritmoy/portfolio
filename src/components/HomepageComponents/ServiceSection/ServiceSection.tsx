'use client';

import MainContainer from "@/components/shared/Container/MainContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  MousePointerClick,
  ShoppingCart,
  MailCheck,
  Code2,
  TrendingUp,
  ServerCog,
  BarChart3,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Meta & Google Ads Optimize",
    icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "GA4 & Conversion API Tracking Setup",
    icon: <BarChart3 className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Browser & Server Integration",
    icon: <ServerCog className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "Website Custom Event Tracking",
    icon: <MousePointerClick className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Ecommerce SEO",
    icon: <ShoppingCart className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "CRO Optimization",
    icon: <Code2 className="w-10 h-10 text-red-500" />,
  },
  {
    title: "Cold email outreach with automation",
    icon: <MailCheck className="w-10 h-10 text-cyan-500" />,
  },
];

const ServiceSection = () => {
  return (
    <div className="w-full px-3">
      <MainContainer>
        <div className="py-5 grid grid-cols-1 md:grid-cols-2 items-center md:w-10/12 w-full mx-auto gap-5">
          <div className="text-[32px] font-semibold text-center md:text-left">
            <h6>Expertise Service!</h6>
            <h6>Let’s check it out.</h6>
          </div>
          <div>
            <p className="font-light text-[14px] italic text-gray-600">
              We turn your marketing ideas into impactful digital campaigns and
              web experiences that engage and convert. With a team of seasoned
              digital marketing experts, we ensure your brand stands out, solves
              problems, and connects with the right audience — effectively and
              creatively.
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        > 
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 rounded bg-gray-800 text-white h-32 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300">
                {item.icon}
                <h6 className="font-medium text-[16px] mt-4">{item.title}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MainContainer>
    </div>
  );
};

export default ServiceSection;
