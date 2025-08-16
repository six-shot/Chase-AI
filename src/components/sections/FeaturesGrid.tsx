"use client";
import Image from "next/image";
import star from "../../../public/svgs/star.png";
import check from "../../../public/svgs/check.svg";
import earn from "../../../public/svgs/earn.png";
import grid from "../../../public/svgs/grid.png";
import derivative from "../../../public/svgs/derivation.png";
import growth from "../../../public/svgs/growth.png";
import oneclick from "../../../public/svgs/oneclick.png";

export default function FeaturesGrid() {
  return (
    <div className="pb-[96px] pt-[44px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[25px] items-center relative z-[40]">
      {/* Platform for Every Skill Level */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 h-[397px] grid-card relative">
        <div className=" w-full grid-inner-card h-full absolute top-[1px] left-[1px]">
          <div className="p-4 sm:p-6 lg:p-8">
            <h4 className="text-[#ffffff] text-lg sm:text-xl lg:text-[24px] font-[family-name:var(--font-inter)] font-medium">
              A Platform for Every Skill Level
            </h4>
            <p className="text-[#E6ECFFB2] text-sm sm:text-base lg:text-[16px] font-[family-name:var(--font-inter)] font-normal mt-[18px]">
              Chase AI empowers both experts and beginners to trade
              effortlessly.
            </p>
            <div className="mt-7 flex flex-col items-start group">
              <div className="h-[68px] gap-[9px] bg-[#16171a44] rounded-[12px] border-[0.8px] border-[#232324] backdrop-blur-[5px] transition-all duration-300 group-hover:blur-[5px] group-hover:opacity-50 px-4 flex items-center">
                <div className="w-[32px] h-[32px] rounded-[4px] bg-[#3d404349] flex items-center">
                  <Image src={star} alt="star" />
                </div>
                <h5 className="text-base font-[family-name:var(--font-inter)] text-white font-medium">
                  Expert Traders
                </h5>
                <Image src={check} alt="check" />
              </div>
              <div className="ml-[27px] -mt-[20px]  h-[68px] bg-[#16171a44] rounded-[12px] border-[0.8px] border-[#232324] relative z-[20] backdrop-blur-[5px] transition-all duration-300 group-hover:scale-110">
                <div className="h-[68px] gap-[9px] bg-[#16171a44] rounded-[12px] border-[0.8px] border-[#232324] backdrop-blur-[5px] transition-all duration-300  px-4 flex items-center">
                  <div className="w-[32px] h-[32px] rounded-[4px] bg-[#3d4043] flex items-center">
                    <Image src={star} alt="star" />
                  </div>
                  <h5 className="text-base font-[family-name:var(--font-inter)] text-white font-medium">
                    Intermediate Traders
                  </h5>
                  <Image src={check} alt="check" />
                </div>
              </div>
              <div className="ml-[110px] -mt-[20px]  h-[68px] bg-[#16171a44] rounded-[12px] border-[0.8px] border-[#232324] relative z-[10] backdrop-blur-[5px] transition-all duration-300 group-hover:blur-[5px] group-hover:opacity-50">
                <div className="h-[68px] gap-[9px] bg-[#16171a44] rounded-[12px] border-[0.8px] border-[#232324] backdrop-blur-[5px] transition-all duration-300 group-hover:blur-[5px] group-hover:opacity-50 px-4 flex items-center">
                  <div className="w-[32px] h-[32px] rounded-[4px] bg-[#3d4043] flex items-center">
                    <Image src={star} alt="star" />
                  </div>
                  <h5 className="text-base font-[family-name:var(--font-inter)] text-white font-medium">
                    Novice Trader
                  </h5>
                  <Image src={check} alt="check" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elevate your Trading Strategy with AI */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 h-full grid-card relative">
        <div className=" w-full grid-inner-card h-full absolute top-[1px] ">
          <div className="p-4 sm:p-6 lg:p-8">
            <h4 className="text-[#ffffff] text-lg sm:text-xl lg:text-[24px] font-[family-name:var(--font-inter)] font-medium">
              Elevate your Trading Startegy with AI
            </h4>
            <p className="text-[#E6ECFFB2] text-sm sm:text-base lg:text-[16px] font-[family-name:var(--font-inter)] font-normal mt-[18px]">
              Insights provides instant access to public sentiment, evolving
              market patterns, and trends.
            </p>
            <div className="mt-[27px] flex flex-col sm:flex-row relative">
              <Image
                className="w-full sm:w-[200px] lg:w-[297px] object-contain"
                src={earn}
                alt="earn"
              />
              <Image
                className="w-full sm:w-[300px] lg:w-[432px] object-contain sm:-ml-[25px] lg:-ml-[50px] mt-4 sm:mt-[50px] lg:mt-[100px]"
                src={grid}
                alt="grid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The Complete Crypto Derivatives Solution */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 h-[397px] grid-card-2 relative">
        <div className=" w-full grid-inner-card h-full absolute top-[1px] left-[1px]">
          <div className="p-4 sm:p-6 lg:p-8">
            <h4 className="text-[#ffffff] text-lg sm:text-xl lg:text-[24px] font-[family-name:var(--font-inter)] font-medium">
              The Complete Crypto Derivatives Solution
            </h4>
            <p className="text-[#E6ECFFB2] text-sm sm:text-base lg:text-[16px] font-[family-name:var(--font-inter)] font-normal mt-[18px]">
              Chase AI is a decentralized, self-custodial platform that
              simplifies derivatives trading with seamless AI automation.
            </p>
            <div className="mt-[27px] flex flex-col sm:flex-row relative">
              <Image
                className="w-full sm:w-[200px] lg:w-[298px] h-auto lg:h-[312px] object-contain"
                src={derivative}
                alt="derivative"
              />
              <Image
                className="w-full sm:w-[250px] lg:w-[313px] h-auto lg:h-[142px] object-contain sm:-ml-[25px] lg:-ml-[50px] mt-4 sm:mt-[40px] lg:mt-[80px]"
                src={growth}
                alt="growth"
              />
            </div>
          </div>
        </div>
      </div>

      {/* One-Click Trading */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 h-[397px] grid-card-3 relative">
        <div className=" w-full grid-inner-card h-full absolute top-[1px] left-[1px] right-[1px]">
          <div className="p-4 sm:p-6 lg:p-8">
            <h4 className="text-[#ffffff] text-lg sm:text-xl lg:text-[24px] font-[family-name:var(--font-inter)] font-medium">
              One-Click Trading
            </h4>
            <p className="text-[#E6ECFFB2] text-sm sm:text-base lg:text-[16px] font-[family-name:var(--font-inter)] font-normal mt-[18px]">
              Gain Exposure to crypto with Perpetual Contracts.
            </p>
            <div className="mt-[27px] flex relative justify-center">
              <Image
                className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-none"
                src={oneclick}
                alt="oneclick"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
