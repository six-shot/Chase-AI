import Image from "next/image";
import heromask from "../../public/svgs/hero-mask.svg";
export default function Home() {
  return (
    <div className="relative">
      <div className="relative h-[426px]  flex justify-center items-center">
        <Image
          src={heromask}
          alt="hero-mask"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex justify-center z-[10]"
        />
      </div>

    </div>
  );
}
