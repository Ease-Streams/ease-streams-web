import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/ease-logo.svg"
        className="hidden lg:flex"
        height={200}
        width={200}></Image>
      <Image
        src="/images/ease-logo-short.svg"
        className="lg:hidden max-w-[40px]"
        height={70}
        width={70}></Image>
    </div>
  );
};

export default Logo;
