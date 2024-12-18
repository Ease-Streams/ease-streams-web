"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi"; // For Chevron Icon

const Menu = ({ allCategories, PAYLOAD_CMS_IMG_SERVER }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex justify-center items-center bg-white shadow-lg text-gray-700">
      {/* Top Header */}
      <div
        className="lg:flex justify-center items-center text-sm font-semibold w-full relative"
        ref={dropdownRef}
      >
        {/* Button for Categories */}
        <button
          className="flex items-center gap-2 px-6 py-2 rounded-md  transition-all duration-200"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          All Categories
          <FiChevronDown
            className={`transition-transform duration-200 ${
              dropdownVisible ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {dropdownVisible && (
          <div className="absolute top-full mx-1 max-w-[300px]  bg-white shadow-lg rounded-lg flex w-full  z-20 border overflow-hidden animate-fade-in">
            <ul className="w-full">
              {allCategories.map((category) => (
                <li
                  key={category.id}
                  className=" px-5 hover:bg-blue-100  cursor-pointer text-gray-700 flex w-full"
                >
                  <a
                    className="flex gap-2 items-center"
                    href={category.slug}
                    title={category.title}
                  >
                    <Image
                      className="object-contain w-[40px] h-[40px] rounded-full"
                      height={40}
                      width={40}
                      src={
                        category?.categoryImage.length > 0
                          ? `${PAYLOAD_CMS_IMG_SERVER}${category?.categoryImage[0]?.image.url}`
                          : `/images/placeholder.webp`
                      }
                    />{" "}
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
