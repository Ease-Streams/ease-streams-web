// src/app/components/SubCategory/ProductSections.jsx
"use client";

import { useEffect, useRef } from "react";
import { ProductCard } from "@/app/components/ProductCard";

const ProductSections = ({ productList }) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          document
            .querySelector(
              `button.category-section-list:nth-child(${index + 1})`
            )
            ?.classList.add("bg-[#03A7E8]");
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full gap-5">
      {productList.map((item, index) => (
        <section
          id={`section_${index}`}
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="flex flex-col min-h-[80vh]">
          <div className="w-full">
            <details className="group rounded-md">
              <summary className="cursor-pointer font-medium text-lg flex items-center justify-between">
                <div className="flex justify-between w-full mr-2 pb-6 lg:px-4 items-center">
                  <h2 className="text-xl lg:text-3xl font-bold max-w-max text-[#03A7E8]">
                    {item?.title}
                  </h2>
                  <small className="text-xs lg:text-md text-[#1A70CD] pb-2 border-b-2 border-[#1A70CD]">
                    {item?.subTitle}
                  </small>
                </div>
                {item?.content && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 relative top-[-10px] transform group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                )}
              </summary>
              {item?.content && (
                <div className="text-sm lg:text-md px-4 pt-0 pb-4 text-gray-700">
                  {item?.content}
                </div>
              )}
            </details>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 mx-auto">
            {item?.products.map((product, index) => (
              <ProductCard
                key={index}
                data={product}
                PAYLOAD_CMS_IMG_SERVER={process.env.PAYLOAD_CMS_IMG_SERVER}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductSections;
