import Image from "next/image";
import Link from "next/link";

export const CategoryCard = () => {
  return (
    <Link
      href={"/"}
      className="rounded-full h-[120px] min-w-[120px] lg:h-[150px] lg:min-w-[150px] justify-center items-center border-[2px] shadow-sm bg-white border-green-300 flex flex-col p-2">
      <div className="w-[70px] lg:w-[80px]">
        <Image
          width={100}
          height={100}
          alt="Picture of the author"
          className="mx-auto object-contain"
          src={
            "https://yellow-pages-bahrain-stage.s3.me-south-1.amazonaws.com/resizedimage/300/uae/images/productimages/defaultimages/noimageproducts/metal-seated-ball-valve-en-din-3516-3540.webp"
          }></Image>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-700 font-semibold">Plumbing</p>
      </div>
    </Link>
  );
};
