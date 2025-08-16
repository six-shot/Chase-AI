"use client";
import Marquee from "react-fast-marquee";

const marqueeFeatures = [
  "Automate your Trades",
  "Instant Transactions",
  "Blockchain-Powered",
  "Global Access",
  "Instant Transfers",
  "Zero Fees",
  "Automate your Trades",
  "Instant Transactions",
  "Blockchain-Powered",
  "Global Access",
  "Instant Transfers",
  "Zero Fees",
];

export default function MarqueeFeatures() {
  return (
    <div className="">
      <div className="p-2.5">
        <Marquee className="" direction="left" speed={40}>
          <div className="flex gap-4 sm:gap-6 lg:gap-8">
            {marqueeFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="px-4 sm:px-6 h-[49px] rounded-full bg-mini-card flex items-center"
              >
                <h5 className="text-[#E6ECFFB2] text-xs sm:text-sm font-[family-name:var(--font-inter)]">
                  {feature}
                </h5>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="p-2.5 mt-6">
        <Marquee className="" direction="right" speed={40}>
          <div className="flex gap-4 sm:gap-6 lg:gap-8">
            {marqueeFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="px-4 sm:px-6 h-[49px] rounded-full bg-mini-card flex items-center"
              >
                <h5 className="text-[#E6ECFFB2] text-xs sm:text-sm font-[family-name:var(--font-inter)]">
                  {feature}
                </h5>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
