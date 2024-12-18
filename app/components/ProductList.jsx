"use cient";

import { Listing } from "./Listing";
import Breadcrumb from "./globals/Breadcrumb";
import SmallBanner from "./home/SmallBanner";

const ProductList = (props) => {
  const { title, data, breadcrumb } = props;
  return (
    <>
      <menu className="justify-center flex">
        <div className="w-full lg:min-w-[80%] lg:max-w-[80%]  min-[1537px]:min-w-[75%] min-[1537px]:max-w-[75%] flex flex-col  p-2">
          <div className="px-2 pb-4 flex flex-col gap-6 w-full flex-grow ">
            <div className="lg:pl-5 flex-col flex gap-2">
              <Breadcrumb data={breadcrumb} />
              <SmallBanner />
            </div>
            <Listing data={data} title={title} />
          </div>
        </div>
      </menu>
    </>
  );
};

export default ProductList;
