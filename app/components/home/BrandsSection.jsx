const BrandsSection = ({ data }) => (
  <div className="brands-section flex flex-col gap-4">
    {data?.title && (
      <div className="flex gap-3 items-center">
        <h2 className="text-base lg:text-lg font-bold text-gray-700">
          {data?.title}
        </h2>
        <div className="flex-grow bg-gray-300 h-[2px]"></div>
      </div>
    )}
    <div className="flex overflow-auto gap-12 pt-2 items-center">
      {data?.brandRefs.map((brand, index) => (
        <a
          title={brand?.title}
          href={brand.slug}
          key={index}
          className="flex w-full max-w-[120px]">
          <img
            className="w-[120px] object-contain m-auto"
            src={
              brand?.image?.url
                ? `${process.env.PAYLOAD_CMS_IMG_SERVER}${brand?.image?.url}`
                : "images/placeholder.webps"
            }
            alt={brand?.image?.alt}
          />
        </a>
      ))}
    </div>
  </div>
);

export default BrandsSection;
