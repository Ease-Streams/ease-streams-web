"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function RightDrawerSendEnquiry({ productData }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [supplier, setSupplier] = useState("");
  useEffect(() => {
    window.addEventListener("selectedSupplier", (event) => {
      setSupplier(event.detail);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form data, such as sending it to an API
    const formData = {
      name,
      company,
      email,
      message,
    };
    console.log("Form Submitted:", formData);

    // You can also reset the form fields if needed
    setName("");
    setCompany("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      id="drawer-send-enquiry"
      className="fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform translate-x-full bg-white md:w-full lg:w-[40%] dark:bg-gray-800"
      tabIndex="-1"
      aria-labelledby="drawer-right-label">
      <button
        type="button"
        data-drawer-hide="drawer-send-enquiry"
        aria-controls="drawer-send-enquiry"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="enquiryForm">
        <h2 className="text-2xl font-bold mb-4 text-gray-500">Send Enquiry</h2>
        <hr />
        <br />
        <div className="flex flex-col items-center">
          <Image
            unoptimized={true}
            src={productData.productimages[0].image?.url}
            alt={productData.productimages[0].image?.alt}
            height={100}
            width={100}
            className="object-contain"
          />
          <p className="font-semibold text-gray-500">{productData.title}</p>
          <p className="font-semibold">{supplier.title}</p>
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default RightDrawerSendEnquiry;
