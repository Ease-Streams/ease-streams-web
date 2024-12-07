import Image from "next/image";
import Link from "next/link";
import { MdOutlineStarPurple500 } from "react-icons/md";
export const ProductDescription = ({ data }) => {
  return (
    <div className="flex flex-col flex-grow">
      {/* <div className="bg-[#0A7205] font-semibold text-xs text-white px-1 p-[2px] flex items-center gap-1 max-w-max rounded">
        4.8 <MdOutlineStarPurple500 />
      </div> */}

      <div className="flex flex-col gap-4 p-4">
        {data?.specification.length > 0 && (
          <>
            <h1 className="text-2xl text-gray-800 font-bold">{data?.title}</h1>
            <div className="relative overflow-x-auto flex flex-col gap-4 text-sm">
              {data?.specification?.map((item, index) => (
                <div className="" key={index}>
                  <span className="font-semibold text-base">{item?.title}</span>
                  <table
                    className="p-2 mt-2 w-full"
                    suppressHydrationWarning={true}>
                    <tbody>
                      {item?.specifications?.map((element, index) => (
                        <tr key={index}>
                          <td className="border-dashed border-[1px] border-gray-400 p-2 bg-gray-100 w-[40%]">
                            {element.key}
                          </td>
                          <td className="border-dashed border-[1px] border-gray-400 p-2 w-[60%]">
                            {element.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </>
        )}
        {data?.topDescription && (
          <>
            <h2 className="text-xl font-semibold ">Product Description</h2>
            <p
              className="text-gray-700 text-sm"
              dangerouslySetInnerHTML={{ __html: data?.topDescription }}></p>
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
                      unoptimized={true}
                      src={`${process.env.PAYLOAD_CMS_IMG_SERVER}${element.image.url}`}
                      alt={element.image.alt}
                      height={100}
                      width={100}
                    />
                  </div>
                  <span className="font-semibold">{element?.title}</span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
