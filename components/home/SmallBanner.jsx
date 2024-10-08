"use client";

import Link from "next/link";
import { useState } from "react";

const SmallBanner = (props) => {
  const { data } = props;
  const title = data?.title;
  const banners = data?.data;
  return (
    <>
      <div className="flex flex-col gap-3">
        {title && (
          <div className="flex gap-3 items-center">
            <h2 className="text-lg font-bold text-gray-700">{title}</h2>
            <div className="flex-grow bg-gray-300 h-[2px]"></div>
          </div>
        )}
        {banners && banners?.length > 0 && (
          <div
            id="default-carousel"
            className="relative w-full max-h-[200px] lg:max-h-[300px] z-0"
            data-carousel="slide">
            <div className="relative h-[150px] overflow-hidden rounded-lg ">
              {banners.map((item, index) => (
                <div
                  key={index}
                  className="hidden duration-1000 ease-in-out"
                  data-carousel-item>
                  <Link
                    title={item.image.alt}
                    href={item.urlLink ? item.urlLink : "#"}>
                    <img
                      height={300}
                      width={1400}
                      loading="eager"
                      src={item.image.url}
                      className="absolute block w-full h-full aspect-auto"
                      alt={item.image.alt}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {banners &&
                banners?.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"></button>
                ))}
            </div>
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SmallBanner;
