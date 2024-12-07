"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function RightDrawerSendEnquiry({ productData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [supplier, setSupplier] = useState("");

  useEffect(() => {
    const handleSupplierSelection = (event) => {
      setSupplier(event.detail);
      setIsOpen(!isOpen);
    };

    window.addEventListener("selectedSupplier", handleSupplierSelection);

    return () => {
      window.removeEventListener("selectedSupplier", handleSupplierSelection);
    };
  }, []);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, company, email, message };

    // Reset form
    setName("");
    setCompany("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md">
        Open Drawer
      </button>

      <div
        id="drawer-send-enquiry"
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform bg-white md:w-full lg:w-[40%] dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
        tabIndex="-1">
        <button
          onClick={toggleDrawer}
          type="button"
          aria-controls="drawer-send-enquiry"
          className="absolute top-2.5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg p-2 dark:hover:bg-gray-600">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="enquiryForm">
          <h2 className="text-2xl font-bold mb-4 text-gray-500">
            Send Enquiry
          </h2>
          <hr />
          <br />
          <div className="flex flex-col items-center">
            <Image
              unoptimized
              src={
                productData?.productImages?.length > 0
                  ? `${productData?.productImages[0].image?.url}`
                  : "/placeholder.webp"
              }
              alt={
                productData?.productImages?.length > 0
                  ? `${productData?.productImages[0].image?.alt}`
                  : "Product Image Placeholder"
              }
              height={100}
              width={100}
              className="object-contain"
            />
            <p className="font-semibold text-gray-500">{productData?.title}</p>
            <p className="font-semibold">
              {supplier?.title || "No supplier selected"}
            </p>
          </div>
          <br />
          <form className="space-y-4 p-2" onSubmit={handleSubmit}>
            <div className="flex w-full justify-between gap-5">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RightDrawerSendEnquiry;
