"use client";

import { useEffect, useState } from "react";

const ProductImageList = ({ productimages, PAYLOAD_CMS_IMG_SERVER }) => {
  const [mainImage, setMainImage] = useState("/images/placeholder.webp");
  useEffect(() => {
    if (productimages) {
      setMainImage(productimages[0]?.image?.url);
    }
  }, []);
  return (
    <div className="flex flex-col items-center gap-2 w-full lg:max-w-[25%] xl:max-w-[30%] lg:sticky lg:top-[22%]">
      <img
        src={
          !mainImage
            ? productimages &&
              `${PAYLOAD_CMS_IMG_SERVER}${productimages[0]?.image?.url}`
            : mainImage
        }
        alt={productimages && productimages[0]?.image?.alt}
        height={400}
        width={400}
        className="w-full h-auto mb-4 max-w-[400px] m-auto transition  ease-out group-hover:scale-110 border-2 border-gray-200"
      />
      <div className="flex gap-2 flex-wrap items-center">
        {productimages &&
          productimages?.map((image, index) => (
            <button
              className="border border-gray-200 rounded-lg p-1 flex justify-center items-center"
              key={index}
              onClick={() => setMainImage(image?.image?.url)}>
              <img
                src={image?.image?.url}
                alt={image?.image?.alt}
                height={35}
                width={35}
                className="w-full h-auto  max-w-[35px] m-auto transition  ease-out group-hover:scale-110"
              />
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProductImageList;
