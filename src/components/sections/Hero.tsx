"use client";
import Image from "next/image";
import profileimg from "../../../public/img/profile img.png";
import profileimg1 from "../../../public/img/profile img1.png";
import profileimg2 from "../../../public/img/profile img2.png";
import profileimg3 from "../../../public/img/profile img4.png";

export default function Hero() {
  return (
    <div className="pt-[68px] relative z-[10] w-full h-full ">
      <div className="relative b">
      {/* <div className="w-[500px] h-[400px] bg-gra p-[1px]">
        <div  className="bg-rad w-full h-full"></div>
      </div> */}
    
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center gap-6 pt-[95px] px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col sm:flex-row gap-2.5 items-center text-center sm:text-left">
            <div className="flex items-center mb-4 sm:mb-0">
              <Image
                src={profileimg}
                alt="profile-img"
                className="relative z-[4] w-12 h-12 sm:w-auto sm:h-auto"
              />
              <Image
                src={profileimg1}
                alt="profile-img"
                className="relative -ml-1 z-[3] w-12 h-12 sm:w-auto sm:h-auto"
              />
              <Image
                src={profileimg2}
                alt="profile-img"
                className="relative -ml-1 z-[2] w-12 h-12 sm:w-auto sm:h-auto"
              />
              <Image
                src={profileimg3}
                alt="profile-img"
                className="relative -ml-1 z-[1] w-12 h-12 sm:w-auto sm:h-auto"
              />
            </div>
            <p className="text-[#e6ecffb3] font-[family-name:var(--font-inter)] text-sm sm:text-base">
              Join <span className="text-[#ffff]">15,725+</span> other loving
              customers
            </p>
          </div>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium font-[family-name:var(--font-poppins)] text-center leading-tight lg:leading-[70.4px] px-4">
            Trade smarter with <br className="hidden sm:block" /> AI-enhanced
            trading <br className="hidden sm:block" /> tool
          </h1>
          <p className="text-[#e6ecffb3] text-center font-normal font-[family-name:var(--font-inter)] text-sm sm:text-base lg:text-lg px-4 max-w-2xl lg:max-w-none">
            Master crypto derivatives trading with AI-powered insights,
            perpetual <br className="hidden lg:block" /> contracts, and advanced
            trading features.
          </p>
          <div className="flex flex-row gap-4 items-center w-full sm:w-auto px-4 sm:px-0 justify-center ">
            <button className=" cursor-pointer bg-[#2934FF] shadow-[0px_8px_40px_0px_rgba(17,0,255,0.5),_0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white  md:px-[18px] px-[12px] h-[45px] rounded-[10px] font-medium font-[family-name:var(--font-inter)] border border-[#fff3]">
              Whitepaper
            </button>
            <button className=" cursor-pointer bg-[#2934FF] shadow-[0px_8px_40px_0px_rgba(17,0,255,0.5),_0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white  md:px-[18px] px-[12px] h-[45px] rounded-[10px] font-medium font-[family-name:var(--font-inter)] border border-[#fff3]">
              Enter Dapp
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
