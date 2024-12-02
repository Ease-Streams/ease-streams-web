// src/app/components/SubCategory/SubCategoryList.jsx
"use client";

import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";

const SubCategoryList = ({ productList }) => {
  const [activeSection, setActiveSection] = useState(0);

  const handleScrollToSection = (index) => {
    document
      .getElementById(`section_${index}`)
      ?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(index);
  };

  return (
    <nav className="w-full flex flex-col gap-3 lg:max-w-[280px] xl:max-w-[350px] text-sm sticky top-32 z-10">
      {productList.length > 0 &&
        productList.map((item, index) => (
          <button
            key={index}
            className={`text-left p-3 rounded-md flex items-center justify-between font-medium category-section-list  shadow-md ${
              activeSection === index
                ? "bg-[#03A7E8] text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => handleScrollToSection(index)}>
            {item?.title}
            <FaLongArrowAltRight className="w-4 h-4" />
          </button>
        ))}
    </nav>
  );
};

export default SubCategoryList;
