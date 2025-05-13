import Image from "next/image";
import heromask from "../../public/svgs/hero-mask.svg";
import profileimg from "../../public/img/profile img.png";
import profileimg1 from "../../public/img/profile img1.png";
import profileimg2 from "../../public/img/profile img2.png";
import profileimg3 from "../../public/img/profile img4.png";
import mask from "../../public/svgs/mask.svg";

export default function Home() {
  return (
    <div className="relative bg-red-500 hero-bg w-full">
      <Image src={mask} alt="mask" className="absolute top-[-400px] -left-[600px]" />

      <div className="absolute top-0 h-[426px] w-full flex justify-center items-center">
        <Image
          src={heromask}
          alt="hero-mask"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10]"
        />
      </div>


      <div className="flex flex-col items-center justify-center pt-[68px]">
        <div className="flex flex-col items-center gap-6 pt-[95px]">
          <div className="flex gap-2.5 items-center">
            <div className="flex items-center">
              <Image
                src={profileimg}
                alt="profile-img"
                className="relative z-[4]"
              />
              <Image
                src={profileimg1}
                alt="profile-img"
                className="relative -ml-1 z-[3]"
              />
              <Image
                src={profileimg2}
                alt="profile-img"
                className="relative -ml-1 z-[2]"
              />
              <Image
                src={profileimg3}
                alt="profile-img"
                className="relative -ml-1 z-[1]"
              />
            </div>
            <p className="text-[#e6ecffb3] font-[family-name:var(--font-inter)]">
              Join the waitlist <span className="text-[#ffff]">15,725+</span>{" "}
              other loving customers
            </p>
          </div>
          <h1 className="text-white text-[64px] font-medium font-[family-name:var(--font-poppins)] text-center leading-[70.4px]">
            Trade Smarter with <br /> AI-enhanced trading <br /> tool
          </h1>
          <p className="text-[#e6ecffb3] text-center text-[20px] font-normal font-[family-name:var(--font-inter)] ">
            Master crypto derivatives trading with AI-powered insights,
            perpetual <br /> contracts, and advanced trading features.
          </p>
          <div className="flex gap-4 items-center">
            <button className=" cursor-pointer bg-[#2934FF] shadow-[0px_8px_40px_0px_rgba(17,0,255,0.5),_0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white px-[18px] h-[45px] rounded-[10px] font-medium font-[family-name:var(--font-inter)] border border-[#fff3]">
              Whitepaper
            </button>
            <button className=" cursor-pointer bg-[#2934FF] shadow-[0px_8px_40px_0px_rgba(17,0,255,0.5),_0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white px-[18px] h-[45px] rounded-[10px] font-[family-name:var(--font-inter)] border border-[#fff3]">
              Enter Dapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
