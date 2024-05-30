export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "create next app",
};
import { Filter } from "@/components/Filter";
import { ProductCard } from "@/components/ProductCard";
import Breadcrumb from "@/components/globals/BreadCrumb";
import { AdBanner } from "@/components/home/AdBanner";
import "flowbite";

export default function Home() {
  return (
    <menu className="justify-center flex">
      <div className="w-full  flex flex-col gap-6 p-2">
        <div className="p-2 pb-4 flex flex-col gap-6 w-full flex-grow bg-white">
          <div className="lg:pl-5">
            <Breadcrumb />
          </div>
          <div className="flex w-full gap-4">
            <div className="lg:flex hidden w-ful min-w-[220px]">
              <Filter />
            </div>
            <div className="flex flex-col  w-full gap-4">
              <h1 className="text-2xl font-bold">Speakers</h1>
              <hr />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
                {Array.from({ length: 12 }).map((_, index) => (
                  <ProductCard key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex  p-2 flex-start max-w-[200px]">
        <div className="flex flex-col gap-2 px-2">
          <AdBanner />
          <AdBanner />
        </div>
      </div>
    </menu>
  );
}
