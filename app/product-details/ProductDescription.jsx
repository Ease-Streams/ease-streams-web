"use client";

import { PayloadLexicalReactRenderer } from "@atelier-disko/payload-lexical-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineStarPurple500 } from "react-icons/md";
export const ProductDescription = ({ data }) => {
  return (
    <div className="flex flex-col flex-grow">
      <h1 className="text-2xl text-gray-800 font-bold">{data?.title}</h1>
      <div className="bg-[#0A7205] font-semibold text-xs text-white px-1 p-[2px] flex items-center gap-1 max-w-max rounded">
        4.8 <MdOutlineStarPurple500 />
      </div>

      <div className="flex flex-col gap-4 p-4">
        {data?.productDescription && (
          <div className="revert-tw">
            <PayloadLexicalReactRenderer content={data?.productDescription} />
          </div>
        )}
        {data?.specification.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-2">
              Product Specifications
            </h2>
            <div className="relative overflow-x-auto">
              <table className="p-2" suppressHydrationWarning={true}>
                <tbody>
                  {data?.specification?.map((element, index) => (
                    <tr key={index}>
                      <td className="border-dashed border-[1px] border-gray-400 p-2 bg-gray-100">
                        {element.key}
                      </td>
                      <td className="border-dashed border-[1px] border-gray-400 p-2">
                        {element.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        {data?.description && (
          <>
            <h2 className="text-xl font-semibold ">Product Description</h2>
            <p className="text-gray-700 text-sm">{data?.description}</p>
          </>
        )}
        {data?.brandsRef?.length && (
          <>
            <h2 className="text-xl font-semibold ">Brands</h2>
            <div className="flex flex-wrap gap-2 text-center">
              {data?.brandsRef?.map((element, index) => (
                <a href={`/brand/${element?.title.toLowerCase()}`} key={index}>
                  <div className="bg-gray-100 p-2 flex flex-col rounded-md gap-1">
                    <Image
                      src={element.image.url}
                      alt={element.image.alt}
                      height={50}
                      width={50}
                    />
                  </div>
                  <span className="font-semibold">{element?.title}</span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex justify-end gap-2 ">
        <button className="mt-4 w-full whitespace-nowrap max-w-[110px] bg-yellow-500 text-xs font-semibold hover:bg-yellow-600 text-white p-3  rounded-md">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};
