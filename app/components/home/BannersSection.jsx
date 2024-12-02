const BannersSection = ({ data }) => (
  <div className="banners-section flex flex-col gap-4">
    {data?.title && (
      <div className="flex gap-3 items-center">
        <h2 className="text-lg font-bold text-gray-700">{data?.title}</h2>
        <div className="flex-grow bg-gray-300 h-[2px]"></div>
      </div>
    )}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.banners.map((banner, index) => (
        <a key={index} href={banner.urlLink}>
          <img src={banner.bannerImage.url} alt="Banner" className="w-full" />
        </a>
      ))}
    </div>
  </div>
);

export default BannersSection;
