import Image from "next/image";

const Logo = () => {
  return (
    <a href={"/"}>
      <Image
        alt="Easetreams logo"
        src="/images/ease-logo.svg"
        className="hidden lg:flex max-w-[200px]"
        height={45}
        width={200}
        ckas></Image>
      <Image
        alt="Easetreams logo"
        src="/images/ease-logo-short.svg"
        className="lg:hidden max-w-[40px]"
        height={70}
        width={70}></Image>
    </a>
  );
};

export default Logo;
