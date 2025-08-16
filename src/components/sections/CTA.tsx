"use client";
import Image from "next/image";
import cta from "../../../public/svgs/cta.svg";

export default function CTA() {
  return (
    <div className="pt-[100px]">
      <div className="relative">
        <div className="flex justify-center items-center mb-[96px]">
          {" "}
          <div className=" w-full max-w-[1280px] h-[4px] line-bg" />
        </div>

        <div className="flex flex-col gap-3 justify-center items-center px-4 sm:px-0">
          <div className="w-[269px] h-[43px] rounded-[22px] button-gradient relative">
            <div className="w-full h-full rounded-[22px] bg-black absolute top-[1px] left-[2px] flex items-center">
              <h6 className="gradient-text ml-4 font-[family-name:var(--font-inter)] font-semibold text-sm sm:text-base">
                WHAT YOU STILL WAITING FOR
              </h6>
            </div>
          </div>
          <h5 className="text-2xl sm:text-3xl lg:text-[44px] font-[family-name:var(--font-inter)] text-[#ffffff] font-medium text-center">
            Grow Now with Chase AI
          </h5>
          <p className="font-[family-name:var(--font-inter)] text-[#E6ECFFB2] text-center font-bold text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-none">
            Unlock AI-driven trading to optimize decisions, enhance
            <br className="hidden lg:block" />
            efficiency, and accelerate your trading growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-3 w-full sm:w-auto">
            <button className="w-full sm:w-auto cursor-pointer bg-[#2934FF] shadow-[0px_8px_40px_0px_rgba(17,0,255,0.5),_0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white px-[18px] h-[45px] rounded-[10px] font-medium font-[family-name:var(--font-inter)] border border-[#fff3]">
              Get Started Now
            </button>
            <button className="w-full sm:w-auto cursor-pointer bg-[#031457] shadow-[0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white px-[18px] h-[45px] rounded-[10px] font-[family-name:var(--font-inter)] ">
              Enter Dapp
            </button>
          </div>
        </div>
        <div className=" -mt-[200px] flex justify-center">
          <Image
            src={cta}
            alt="cta"
            className="w-full max-w-[600px] lg:max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
