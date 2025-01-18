import Image from "next/image";

const Logo = () => {
   return (
      <Image
         height={120}
         width={120}
         alt="logo"
         src={"/next.svg"}
      />);
}

export default Logo;