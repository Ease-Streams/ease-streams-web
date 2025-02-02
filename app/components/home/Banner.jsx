"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export const Banner = (props) => {
  const { data, PAYLOAD_CMS_IMG_SERVER } = props;
  const banners = data?.banners || data || [];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          // Fix for Swiper not finding refs on init
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          });
        }}
        className="rounded-md">
        {banners &&
          banners.map((item, index) => (
            <SwiperSlide key={index}>
              <a
                title={item.alt || ""}
                href={item.urlLink || "#"}
                className="block">
                <img
                  height={200}
                  width={1200}
                  src={`${PAYLOAD_CMS_IMG_SERVER}${
                    (item.image || item.bannerImage).url
                  }`}
                  alt={(item.image || item.bannerImage).alt || ""}
                  className="w-full h-auto object-fill rounded-md min-h-[100px] max-h-[200px]"
                  loading="eager"
                />
              </a>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100">
        <FaArrowLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100">
        <FaArrowRight />
      </button>
    </div>
  );
};
