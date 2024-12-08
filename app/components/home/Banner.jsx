export const Banner = (props) => {
  const { data } = props;
  const banners = data?.banners || data || [];
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full max-h-[230px] lg:max-h-[300px] z-0"
        data-carousel="slide">
        <div className="relative w-full h-[180px] lg:h-[300px] overflow-hidden rounded-md">
          {banners &&
            banners?.map((item, index) => (
              <div
                key={index}
                className="hidden duration-[500] ease-in-out"
                data-carousel-item>
                <a
                  title={item.alt || ""}
                  href={item.urlLink ? item.urlLink : "#"}>
                  <img
                    height={300}
                    width={1400}
                    loading="eager"
                    src={`${process.env.PAYLOAD_CMS_IMG_SERVER}${item.image.url}`}
                    className="absolute block w-full h-full aspect-auto"
                    alt={item.image.alt}
                  />
                </a>
              </div>
            ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-3 rtl:space-x-reverse mt-2">
          {banners?.map((item, index) => (
            <button
              key={index}
              type="button"
              className="w-3 h-3 rounded-full mt-2"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};
