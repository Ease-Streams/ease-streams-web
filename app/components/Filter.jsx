"use client";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const Filter = (props) => {
  const { showFilter, setShowFilter } = props;
  return (
    <>
      <div
        className={`${
          showFilter ? "flex flex-col" : "hidden lg:flex flex-col"
        } ${
          showFilter ? " fixed top-[50px] left-0 w-full h-full p-3" : " "
        }   w-ful min-w-[220px] bg-white z-10 overflow-auto`}>
        <div className="flex flex-col w-full lg:max-w-[220px] h-full">
          <div className="flex justify-between items-center">
            <h2 className="lg:hidden text-xl font-semibold">Filter</h2>
            <button onClick={() => setShowFilter(false)} className="lg:hidden">
              <IoIosCloseCircleOutline size={20} className="text-gray-500" />
            </button>
          </div>
          <div className="flex-grow-[.9]  max-h-[85%]">
            <div
              id="accordion-color"
              data-accordion="collapse"
              data-active-classes="bg-w-100 dark:bg-gray-800 text-gray-900 dark:text-white">
              <div id="accordion-color-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium  text-gray-500  gap-3"
                  data-accordion-target="#accordion-color-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-color-body-1">
                  <span>What is Flowbite?</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                <div
                  id="accordion-color-body-1"
                  className="hidden"
                  aria-labelledby="accordion-color-heading-1">
                  <div className="p-5 pt-0">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div
                        className="flex items-center mb-4 mt-2 w-full"
                        key={index}>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 text-sm  text-gray-900 dark:text-gray-300">
                          Default checkbox
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <button className=" p-2 text-white font-semibold bg-[#03A7E8]  lg:hidden">
            Show Results
          </button>
        </div>
      </div>
    </>
  );
};
