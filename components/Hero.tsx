import background from "@/public/background.png";
import Image from "next/image";

export default function Hero() {
  return (
    <Image
      className="relative bg-cover bg-center text-center text-white py-[2rem] w-[100%] h-[421px]"
      // style={{ backgroundImage: `url(${background})` }}
      src={background}
      alt="PBEEX Background Image"
    />
  );
}
