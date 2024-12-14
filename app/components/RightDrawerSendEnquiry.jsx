"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function RightDrawerSendEnquiry({
  supplier,
  setSupplier,
  productData,
  PAYLOAD_CMS_IMG_SERVER,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    if (supplier.length > 0) {
      setIsOpen(true);
    }
  }, [supplier]);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const removeSupplier = (id) => {
    const newSuppliers = supplier.filter((item) => item.id !== id);
    setSupplier(newSuppliers);
    if (newSuppliers.length < 1) {
      setIsOpen(!isOpen);
    }
  };

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
        className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Open Drawer
      </button>

      <div
        id="drawer-send-enquiry"
        className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform bg-white md:w-full lg:w-[40%] dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
        tabIndex="-1"
      >
        <button
          onClick={toggleDrawer}
          type="button"
          aria-controls="drawer-send-enquiry"
          className="absolute top-2.5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg p-2 dark:hover:bg-gray-600"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center gap-2">
              <Image
                unoptimized
                src={
                  supplier?.logo
                    ? `${PAYLOAD_CMS_IMG_SERVER}${supplier?.productImages[0].image?.url}`
                    : "/placeholder.webp"
                }
                alt={
                  productData?.productImages?.length > 0
                    ? `${productData?.productImages[0].image?.alt}`
                    : "Product Image Placeholder"
                }
                height={100}
                width={100}
                className="object-contain rounded-full border-2 h-20 w-20"
              />
              <p className="font-semibold text-gray-500">
                {productData?.title}
              </p>
              <div className="flex gap-2 overflow-auto">
                {supplier?.map((supplier, index) => (
                  <div className="flex flex-col items-center gap-2" key={index}>
                    <Image
                      unoptimized
                      src={
                        supplier?.logo
                          ? `${PAYLOAD_CMS_IMG_SERVER}${supplier?.logo?.url}`
                          : "/placeholder.webp"
                      }
                      alt={
                        supplier?.logo > 0
                          ? `${supplier?.logo?.alt}`
                          : "Product Image Placeholder"
                      }
                      height={100}
                      width={100}
                      className="object-contain h-14 w-14 rounded-full border-2"
                    />
                    <div className="flex gap-1 rounded-full border-2 justify-center items-center">
                      <small className="font-semibold text-xs ml-1">
                        {supplier?.title
                          .substring(0, 5)
                          .toUpperCase()
                          .replace(" ", "") || "No supplier selected"}
                      </small>
                      <button
                        onClick={() => removeSupplier(supplier?.id)}
                        className="h-5 w-5 bg-slate-300 flex justify-center pb-[3px] items-center rounded-full text-black"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <form className="space-y-4 p-2" onSubmit={handleSubmit}>
            <div className="flex w-full justify-between gap-5">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
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
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
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
            <div className="flex w-full justify-between gap-5">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
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
              <div className="w-full">
              <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Mobile
                </label>
              <input
                type="numeric"
                inputMode="numeric"
                pattern="[0-9]*"
                id="mobile"
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500"
                placeholder="050*********"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RightDrawerSendEnquiry;
