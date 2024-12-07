import { FaWhatsapp } from "react-icons/fa6";

export const ProductCard = (props) => {
  const { gridView, data, PAYLOAD_CMS_IMG_SERVER } = props;
  // console.log(data, "data");
  return (
    <div className="w-full flex my-2 max-w-[170px]">
      <a
        title={data?.title}
        href={`/${data?.slug}`}
        className={`bg-white group rounded-lg shadow-sm border overflow-hidden hover:shadow-xl border-gray-200 flex  flex-col w-full`}>
        <div className="">
          <img
            src={`${
              data?.productImages?.length > 0
                ? `${process.env.PAYLOAD_CMS_IMG_SERVER}${data?.productImages[0]?.image?.url}`
                : "/placeholder.webp"
            }`}
            alt={
              data?.productImages?.length > 0 &&
              data?.productImages[0]?.image?.alt
            }
            height={100}
            width={100}
            className="w-full h-auto m-auto transition  ease-out group-hover:scale-110"
          />
        </div>
        <div className="bg-gray-100 p-4 flex-grow">
          <h2 className="text-sm lg:text-md   text-[#29698F] font-semibold h-10">
            {data?.title.length > 20
              ? data?.title.substring(0, 20) + "..."
              : data?.title}
          </h2>
          <p className="text-gray-500 text-xs"> {data?.itemCode}</p>
          {/* <div className="mt-4 text-sm">
          <p className="font-semibold text-gray-800">AED 1,375.50</p>
        </div> */}
          <div className="flex justify-between gap-2 max-w-max">
            <button className="mt-4 w-full border-green-500 text-green-600 hover:text-white text-xs font-semibold max-w-[30px] flex items-center justify-center border-[2px] hover:bg-green-600  p-2 rounded-md">
              <FaWhatsapp size={15} />
            </button>
            <button className="mt-4 w-full whitespace-nowrap bg-[#03A7E8] text-xs font-semibold hover:bg-[#2f9dc8] text-white px-3 p-1 py-2 rounded-md">
              Send Enquiry
            </button>
            {/* <button className="mt-4 w-full bg-[#52BA47] text-xs font-semibold hover:bg-green-500 text-white p-1 py-2 rounded-md">
                Buy Now
              </button> */}
          </div>
        </div>
      </a>
    </div>
  );
};
