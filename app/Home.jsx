"use client";

import React from "react";
// import { Banner } from "@/components/home/Banner";
// import { ProductShowcase } from "@/components/home/ProductShowcase";
import { ProductShowcase } from "./components/home/ProductShowcase";
import { Banner } from "./components/home/Banner";
import { AdBanner } from "./components/home/AdBanner";
// import { AdBanner } from "@/components/home/AdBanner";

const HomePage = (props) => {
  const { data, homeBanner } = props;

  return (
    <menu className="justify-center flex">
      <div className=" hidden lg:flex  p-2 flex-start">
        <div className="flex flex-col gap-2  px-2">
          <AdBanner />
          <AdBanner />
        </div>
      </div>
      <div className="w-full lg:min-w-[75%] lg:max-w-[75%]  min-[1537px]:min-w-[70%] min-[1537px]:max-w-[70%] flex flex-col gap-6 p-2">
        {homeBanner && <Banner data={homeBanner} />}
        {data?.map((item, index) => (
          <ProductShowcase data={item} key={index} />
        ))}
      </div>
      <div className=" hidden lg:flex  p-2 flex-start">
        <div className="flex flex-col gap-2 px-2">
          <AdBanner />
          <AdBanner />
        </div>
      </div>
    </menu>
  );
};

export default HomePage;
