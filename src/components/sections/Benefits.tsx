"use client";
import Image from "next/image";
import minicard from "../../../public/svgs/minicard.svg";

const benefitsData = [
  {
    title: "Automate your Trades",
    description:
      "Chase AI uses AI to automate your trading strategies for any market sentiment.",
  },
  {
    title: "Instant Transactions",
    description:
      "Your money moves at the speed of a text message. Send funds globally and have them arrive within seconds, not days.",
  },
  {
    title: "Blockchain-Powered",
    description:
      "Your transactions are secured on the blockchain - fast, transparent, and tamper-proof from end to end.",
  },
  {
    title: "Global Access",
    description:
      "Use your phone number anywhere in the world. One wallet, global access - No borders & No banking apps.",
  },
  {
    title: "Instant Transfers",
    description:
      "Send and receive money instantly across borders with just a phone number.",
  },
  {
    title: "Zero Fees",
    description:
      "Enjoy completely free transfers with no hidden charges or transaction fees.",
  },
];

export default function Benefits() {
  return (
    <div className="">
      <div className="flex flex-col gap-3 justify-center items-center px-4 sm:px-0">
        <div className="w-[109px] h-[43px] rounded-[22px] button-gradient relative">
          <div className="w-full h-full rounded-[22px] bg-black absolute top-[1px] left-[2px] flex items-center">
            <h6 className="gradient-text ml-4 font-[family-name:var(--font-inter)] font-semibold text-sm sm:text-base">
              BENEFITS
            </h6>
          </div>
        </div>
        <h5 className="text-2xl sm:text-3xl lg:text-[44px] font-[family-name:var(--font-inter)] text-[#ffffff] font-medium text-center">
          Why Choose Cashtide?
        </h5>
        <p className="font-[family-name:var(--font-inter)] text-[#E6ECFFB2] text-center font-bold text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-none">
          Powerful AI tools and market insights designed to elevate
          <br className="hidden lg:block" />
          your trading strategy.
        </p>
      </div>
      <div className="mt-[44px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="p-4 sm:p-6 lg:p-[32px] gradient-card ">
            <Image
              src={minicard}
              alt="minicard"
              className="w-12 h-12 sm:w-auto sm:h-auto"
            />
            <div className="mt-6 flex flex-col gap-4">
              <h5 className="text-[#ffffff] text-lg sm:text-xl lg:text-[23px] font-[family-name:var(--font-inter)] font-medium">
                {benefit.title}
              </h5>
              <h5 className="text-[#E6ECFFB2] text-sm sm:text-base font-[family-name:var(--font-inter)]">
                {benefit.description}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
