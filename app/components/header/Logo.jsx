import Image from "next/image";

const Logo = () => {
  return (
    <a href={"/"}>
      <img
        alt="Easetreams logo"
        src="/images/ease-logo.svg"
        className="hidden lg:flex max-w-[200px]"
        height={45}
        width={200}
      />
      <img
        alt="Easetreams logo"
        src="/images/ease-logo-short.webp"
        className="lg:hidden max-w-[30px] relative top-[3px]"
        height={30}
        width={30}
      />
    </a>
  );
};

export default Logo;
