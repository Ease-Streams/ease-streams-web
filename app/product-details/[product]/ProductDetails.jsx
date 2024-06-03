"use client";

import Breadcrumb from "@/components/globals/BreadCrumb";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineStarPurple500, MdVerified } from "react-icons/md";

const ProductDetails = (props) => {
  return (
    <div className="flex flex-col gap-4 w-full lg:max-w-[95%] min-[1537px]:max-w-[75%] m-auto p-5">
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
        <div className="flex flex-col items-center gap-2 w-full lg:max-w-[30%] border-r-[1px] border-r-gray-200 lg:sticky lg:top-[22%]">
          <img
            src="https://c8n.tradeling.com/img/plain/pim/rs:auto:1600::0/f:webp/q:75/up/65377b6fb63df7e431a1d927/03b49acb6a828504ddf90b75133932a3.jpg"
            alt="Samsung TV"
            height={350}
            width={350}
            className="w-full h-auto mb-4 max-w-[350px] m-auto transition  ease-out group-hover:scale-110"
          />
          <div className="flex gap-2 flex-wrap items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <button className="border border-gray-200 rounded-lg p-1">
                <img
                  src="https://c8n.tradeling.com/img/plain/pim/rs:auto:1600::0/f:webp/q:75/up/65377b6fb63df7e431a1d927/03b49acb6a828504ddf90b75133932a3.jpg"
                  alt="Samsung TV"
                  height={35}
                  width={35}
                  className="w-full h-auto mb-4 max-w-[35px] m-auto transition  ease-out group-hover:scale-110"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-3 w-full lg:max-w-[50%]">
          <h1 className="text-2xl text-gray-800 font-bold">
            Candes Florence 400rpm Silver Blue Anti Dust Ceiling Fan, Sweep:
            1200 mm
          </h1>
          <div className="bg-[#0A7205] font-semibold text-xs text-white px-1 p-[2px] flex items-center gap-1 max-w-max rounded">
            4.8 <MdOutlineStarPurple500 />
          </div>
          <div className="flex flex-col gap-4 p-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc list-inside mb-4 text-sm ml-3">
                <li>This Ceiling Fan has Style & Energy Efficiency.</li>
                <li>
                  Known for Speed, Wide & Broad Blades which are Aerodynamically
                  Balanced.
                </li>
                <li>Suitable for Homes, Offices & Commercial Spaces.</li>
              </ul>
              <h2 className="text-xl font-semibold mb-2">
                Product Specifications
              </h2>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full border-dotted text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Color
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      Laptop
                    </td>
                    <td class="px-6 py-4">$2999</td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      Laptop PC
                    </td>
                    <td class="px-6 py-4">$1999</td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      Accessories
                    </td>
                    <td class="px-6 py-4">$99</td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      Google Pixel Phone
                    </th>
                    <td class="px-6 py-4">Gray</td>
                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Phone</td>
                    <td class="px-6 py-4">$799</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      Apple Watch 5
                    </th>
                    <td class="px-6 py-4">Red</td>
                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      Wearables
                    </td>
                    <td class="px-6 py-4">$999</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="text-xl font-semibold ">Product Details</h2>
            <p className="text-gray-700 text-sm">
              This fan is perfect for any room in your home. It has a powerful
              motor that will quickly and easily move the air around the room.
              The fan is also very quiet, so you won't be disturbed by it. And
              the beautiful silver blue finish will look great in any room. The
              Candes Florence 400rpm Silver Blue Anti Dust Ceiling Fan is a
              high-quality product that is perfect for those who are looking for
              a powerful and efficient fan. This fan is powered by 70 watts and
              has an energy rating of 5 Star.
            </p>
          </div>
          <div className="flex justify-end gap-2 ">
            <button className="mt-4 w-full whitespace-nowrap max-w-max bg-yellow-500 text-xs font-semibold hover:bg-blue-600 text-white px-3 p-1 py-2 rounded-md">
              Add to Wishlist
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full lg:max-w-[22%] sticky top-[22%]">
          <h2 className="text-xl font-semibold mb-2">Suppliers</h2>
          <hr />
          <div className="flex flex-col border-[1px] border-gray-200 p-2 relative rounded-lg bg-gray-50">
            <MdVerified
              className="absolute right-[-5px] top-[-5px] text-green-500"
              size={25}
            />
            <div className="flex justify-around">
              <img
                height={60}
                width={60}
                className="w-full h-auto max-w-[60px] object-contain"
                src="/images/ease-logo.svg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-gray-700">
                  Lunad Digital Portal
                </p>
                <small className="text-xs text-gray-600">
                  Dubai, Al qusais industrial area
                </small>
              </div>
            </div>
            <div className="flex justify-end gap-2 ">
              <button className="mt-4 w-full border-green-500 max-w-max gap-1 text-green-600 hover:text-white text-xs font-semibold  flex items-center justify-center border-[2px] hover:bg-green-600  p-1 rounded-md">
                <FaWhatsapp size={15} /> Whatsapp
              </button>
              <button className="mt-4 w-full whitespace-nowrap max-w-max bg-blue-500 text-xs font-semibold hover:bg-blue-600 text-white px-2  rounded-md">
                Send Enquiry
              </button>
            </div>
          </div>
          <div className="flex flex-col border-[1px] border-gray-200 p-2 rounded-lg bg-gray-50">
            <div className="flex justify-around">
              <img
                height={55}
                width={55}
                className="w-full h-auto max-w-[55px] max-h-[50px] object-contain"
                src="/images/ease-logo.svg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-gray-700">
                  Lunad Digital Portal
                </p>
                <small className="text-xs text-gray-600">
                  Dubai, Al qusais industrial area
                </small>
              </div>
            </div>
            <div className="flex justify-end gap-2 ">
              <button className="mt-4 w-full border-green-500 max-w-max gap-1 text-green-600 hover:text-white text-xs font-semibold  flex items-center justify-center border-[2px] hover:bg-green-600  p-1 rounded-md">
                <FaWhatsapp size={15} /> Whatsapp
              </button>
              <button className="mt-4 w-full whitespace-nowrap max-w-max bg-blue-500 text-xs font-semibold hover:bg-blue-600 text-white px-2  rounded-md">
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
