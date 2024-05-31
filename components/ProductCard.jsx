import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export const ProductCard = () => {
  return (
    <Link
      href={"/"}
      className="bg-white rounded-lg shadow-md p-4 border border-gray-200 flex flex-col w-full">
      <img
        src="https://c8n.tradeling.com/img/plain/pim/rs:auto:1600::0/f:webp/q:75/up/65377b6fb63df7e431a1d927/03b49acb6a828504ddf90b75133932a3.jpg"
        alt="Samsung TV"
        height={100}
        width={100}
        className="w-full h-auto mb-4 max-w-[140px] m-aut"
      />
      <div></div>
      <h2 className="text-sm font-medium text-gray-800">
        Samsung 55 Inch Class Crystal UHD 4K Smart TV
      </h2>
      <p className="text-gray-600 text-xs">Model XYZ123</p>

      <div className="mt-4 text-sm">
        <p className="font-semibold text-green-600">AED 1,375.50</p>
      </div>
      <div className="flex justify-between gap-2">
        <button className="mt-4 w-full border-green-500 text-green-600 hover:text-white text-xs font-semibold max-w-[30px] flex items-center justify-center border-[2px] hover:bg-green-600  p-1 py-2 rounded-md">
          <FaWhatsapp size={15} />
        </button>
        <button className="mt-4 w-full whitespace-nowrap bg-blue-500 text-xs font-semibold hover:bg-blue-600 text-white px-2 p-1 py-2 rounded-md">
          Send Enquiry
        </button>
        {/* <button className="mt-4 w-full bg-[#52BA47] text-xs font-semibold hover:bg-green-500 text-white p-1 py-2 rounded-md">
                Buy Now
              </button> */}
      </div>
    </Link>
  );
};
