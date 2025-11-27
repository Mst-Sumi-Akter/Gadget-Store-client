"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
    "https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?fm=jpg&q=60&w=3000",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-[500px]"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center text-center text-white relative"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 px-6 max-w-2xl">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                  Welcome to Gadget Store
                </h1>
                <p className="text-lg sm:text-xl mb-6">
                  Explore the best laptops and gadgets available for you.
                </p>
                <button className="
                  px-8 py-3 rounded font-semibold
                  bg-gradient-to-r from-[#F59092] via-[#EF475F] to-[#8C3A96]
                  shadow-lg text-white transition transform hover:scale-105 hover:shadow-xl
                ">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
