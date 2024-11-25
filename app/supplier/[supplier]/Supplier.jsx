"use client";

import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { BiMap } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import SmallBanner from "../../components/home/SmallBanner";

export const Supplier = () => {
  return (
    <div className="justify-center flex text-gray-700">
      <menu className="w-full lg:min-w-[75%] lg:max-w-[75%]  flex-grow min-[1537px]:min-w-[70%] min-[1537px]:max-w-[70%] flex flex-col gap-6">
        <div className="flex w-full justify-center items-center flex-col gap-3 bg-gray-100 py-3  px-2">
          <Image
            alt="Supplier logo"
            src="/images/ease-logo.svg"
            className="h-[100px] w-[100px] md:h-[120px] p-2 md:w-[120px] lg:h-[150px] lg:w-[150px] object-contain  border-[2px] border-gray-200 rounded-full"
            height={300}
            width={300}></Image>
          <h1 className="text-3xl font-bold ">Easestreams.com</h1>
          <p className="text-sm md:text-md font-semibold ">
            Humanitarian Charity Building, Amman Street, Al Qusais Industrial
            Area 5
          </p>

          <div className="flex gap-3 flex-wrap justify-center">
            <div className=" flex gap-2 items-center p-1 px-3 rounded-md font-semibold border-[1px] border-gray-300">
              <FiPhone /> Phone
            </div>
            <div className=" flex gap-2 items-center p-1 px-3 rounded-md font-semibold border-[1px] border-gray-300">
              <CgWebsite /> Website
            </div>
            <div className=" flex gap-2 items-center p-1 px-3 rounded-md font-semibold border-[1px] border-gray-300">
              <BiMap /> Map
            </div>
            <div className=" flex gap-2 items-center p-1 px-3 rounded-md font-semibold border-[1px] border-gray-300">
              <HiOutlineMailOpen /> Email
            </div>
            <div className=" flex gap-2 items-center p-1 px-3 rounded-md font-semibold border-[1px] border-gray-300">
              <FaWhatsapp /> Whatsapp
            </div>
          </div>
        </div>
        <div className="mb-2">
          <SmallBanner />
        </div>
        <div className="flex flex-col gap-3 p-2">
          <div className="flex flex-col gap-2 text-left">
            <h2 className="text-xl font-bold">About Us</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            nulla aliquid nihil quidem. Beatae error ea quod possimus voluptas.
            Ipsam, provident recusandae sint deserunt eveniet ipsa similique
            voluptatem incidunt? Ipsam. Sequi quo exercitationem saepe incidunt
            tempore laboriosam nihil porro, sit corrupti asperiores dignissimos
            provident eaque. Non sed dolorum qui. Laudantium rem sint velit
            similique reiciendis perspiciatis natus aperiam dolores. Nam?
            Mollitia in labore, possimus qui, officiis doloribus voluptates
            perferendis et magnam enim excepturi accusamus, iure quibusdam!
            Porro accusantium iste repudiandae sapiente dolores perferendis
            ratione repellat eum laboriosam, culpa tempore modi.
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Management</h2>
            <div className="grid  border  border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-4 bg-white dark:bg-gray-800">
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Very easy this was to integrate
                  </h3>
                  <p className="my-4">
                    If you care for your time, I hands down would go with this.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>Bonnie Green</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">
                      Developer at Open AI
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Solid foundation for any project
                  </h3>
                  <p className="my-4">
                    Designing with Figma components that can be easily
                    translated to the utility classes of Tailwind CSS is a huge
                    timesaver!
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>Roberta Casas</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Lead designer at Dropbox
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Mindblowing workflow
                  </h3>
                  <p className="my-4">
                    Aesthetically, the well designed components are beautiful
                    and will undoubtedly level up your next application.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>Jese Leos</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Software Engineer at Facebook
                    </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Efficient Collaborating
                  </h3>
                  <p className="my-4">
                    You have many examples that can be used to create a fast
                    prototype for your team.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>Joseph McFall</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CTO at Google
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <h2 className="text-xl font-bold">Images</h2>
            <div className="flex gap-2 flex-wrap items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  src="https://c8n.tradeling.com/img/plain/pim/rs:auto:1600::0/f:webp/q:75/up/65377b6fb63df7e431a1d927/03b49acb6a828504ddf90b75133932a3.jpg"
                  alt="Samsung TV"
                  height={200}
                  width={200}
                  className="w-full h-auto mb-4 max-w-[200px] m-auto border-[1px] border-gray-200 p-1"
                />
              ))}
            </div>
            <hr />
            <h2 className="text-xl font-bold">Videos</h2>
            <div className="flex gap-2 flex-wrap items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  src="https://c8n.tradeling.com/img/plain/pim/rs:auto:1600::0/f:webp/q:75/up/65377b6fb63df7e431a1d927/03b49acb6a828504ddf90b75133932a3.jpg"
                  alt="Samsung TV"
                  height={200}
                  width={200}
                  className="w-full h-auto mb-4 max-w-[200px] m-auto border-[1px] border-gray-200 p-1"
                />
              ))}
            </div>
          </div>
        </div>
      </menu>
    </div>
  );
};
