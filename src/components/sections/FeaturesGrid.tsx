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
    <div className="pb-12 sm:pb-16 lg:pb-[96px] pt-6 sm:pt-8 lg:pt-[44px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-[25px] relative z-[40] px-4 sm:px-6 lg:px-0">
      {/* Platform for Every Skill Level */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 grid-card w-full bg-red-500 p-[1px] relative">
        <div className="w-full bg-rad h-full ">
          <div className="p-4 sm:p-6 lg:p-8">
            <h4 className="text-[#ffffff] text-lg sm:text-xl lg:text-[24px] font-[family-name:var(--font-inter)] font-medium">
              A Platform for Every Skill Level
            </h4>
            <p className="text-[#E6ECFFB2] text-sm sm:text-base lg:text-[16px] font-[family-name:var(--font-inter)] font-normal mt-4 sm:mt-5 lg:mt-[18px]">
              Chase AI empowers both experts and beginners to trade
              effortlessly.
            </p>
            <div className="mt-6 sm:mt-7 flex flex-col items-start group">
              <div className="h-[60px] sm:h-[68px] gap-2 sm:gap-[9px] bg-[#16171a44] rounded-[12px] border-[0.8px] border-[#232324] backdrop-blur-[5px] transition-all duration-300 group-hover:blur-[5px] group-hover:opacity-50 px-3 sm:px-4 flex items-center w-full">
                <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-[4px] bg-[#3d404349] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={star}
                    alt="star"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </div>
                <h5 className="text-sm sm:text-base font-[family-name:var(--font-inter)] text-white font-medium ml-2 sm:ml-3 flex-1">
                  Expert Traders
                </h5>
                <Image
                  src={check}
                  alt="check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                />
              </div>
              <div className="ml-4 sm:ml-6 lg:ml-[27px] -mt-3 sm:-mt-4 lg:-mt-[20px] h-[60px] sm:h-[68px] bg-[#16171a44] rounded-[12px] border-[0.8px] border-[#232324] relative z-[20] backdrop-blur-[5px] transition-all duration-300 group-hover:scale-110 w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] lg:w-[calc(100%-27px)]">
                <div className="h-[60px] sm:h-[68px] gap-2 sm:gap-[9px] bg-[#16171a44] rounded-[12px] border-[0.8px] border-[#232324] backdrop-blur-[5px] transition-all duration-300 px-3 sm:px-4 flex items-center w-full">
                  <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-[4px] bg-[#3d4043] flex items-center justify-center flex-shrink-0">
                    <Image
                      src={star}
                      alt="star"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </div>
                  <h5 className="text-sm sm:text-base font-[family-name:var(--font-inter)] text-white font-medium ml-2 sm:ml-3 flex-1">
                    Intermediate Traders
                  </h5>
                  <Image
                    src={check}
                    alt="check"
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                </div>
              </div>
              <div className="ml-8 sm:ml-12 lg:ml-[110px] -mt-3 sm:-mt-4 lg:-mt-[20px] h-[60px] sm:h-[68px] bg-[#16171a44] rounded-[12px] border-[0.8px] border-[#232324] relative z-[10] backdrop-blur-[5px] transition-all duration-300 group-hover:blur-[5px] group-hover:opacity-50 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-110px)]">
                <div className="h-[60px] sm:h-[68px] gap-2 sm:gap-[9px] bg-[#16171a44] rounded-[12px] border-[0.8px] border-[#232324] backdrop-blur-[5px] transition-all duration-300 group-hover:blur-[5px] group-hover:opacity-50 px-3 sm:px-4 flex items-center w-full">
                  <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-[4px] bg-[#3d4043] flex items-center justify-center flex-shrink-0">
                    <Image
                      src={star}
                      alt="star"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </div>
                  <h5 className="text-sm sm:text-base font-[family-name:var(--font-inter)] text-white font-medium ml-2 sm:ml-3 flex-1">
                    Novice Trader
                  </h5>
                  <Image
                    src={check}
                    alt="check"
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elevate your Trading Strategy with AI */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 h-full grid-card p-[1px] relative">
        <div className="w-full grid-inner-card h-full">
          <div className="p-4 sm:p-6 lg:p-8">
            <h4 className="text-[#ffffff] text-lg sm:text-xl lg:text-[24px] font-[family-name:var(--font-inter)] font-medium">
              Elevate your Trading Startegy with AI
            </h4>
            <p className="text-[#E6ECFFB2] text-sm sm:text-base lg:text-[16px] font-[family-name:var(--font-inter)] font-normal mt-4 sm:mt-5 lg:mt-[18px]">
              Insights provides instant access to public sentiment, evolving
              market patterns, and trends.
            </p>
            <div className="mt-6 sm:mt-7 lg:mt-[27px] flex flex-col sm:flex-row relative">
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
      <div className="col-span-1 md:col-span-2 lg:col-span-2 grid-card-2 p-[1px] relative">
        <div className="w-full grid-inner-card h-full ">
          <div className="p-4 sm:p-6 lg:p-8">
            <h4 className="text-[#ffffff] text-lg sm:text-xl lg:text-[24px] font-[family-name:var(--font-inter)] font-medium">
              The Complete Crypto Derivatives Solution
            </h4>
            <p className="text-[#E6ECFFB2] text-sm sm:text-base lg:text-[16px] font-[family-name:var(--font-inter)] font-normal mt-4 sm:mt-5 lg:mt-[18px]">
              Chase AI is a decentralized, self-custodial platform that
              simplifies derivatives trading with seamless AI automation.
            </p>
            <div className="mt-6 sm:mt-7 lg:mt-[27px] flex flex-col sm:flex-row relative">
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
      <div className="col-span-1 md:col-span-2 lg:col-span-1 grid-card-3 relative p-[1px]">
        <div className="w-full grid-inner-card h-full">
          <div className="p-4 sm:p-6 lg:p-8">
            <h4 className="text-[#ffffff] text-lg sm:text-xl lg:text-[24px] font-[family-name:var(--font-inter)] font-medium">
              One-Click Trading
            </h4>
            <p className="text-[#E6ECFFB2] text-sm sm:text-base lg:text-[16px] font-[family-name:var(--font-inter)] font-normal mt-4 sm:mt-5 lg:mt-[18px]">
              Gain Exposure to crypto with Perpetual Contracts.
            </p>
            <div className="mt-6 sm:mt-7 lg:mt-[27px] flex relative justify-center">
              <Image
                className="w-full max-w-[180px] sm:max-w-[220px] lg:max-w-none"
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
