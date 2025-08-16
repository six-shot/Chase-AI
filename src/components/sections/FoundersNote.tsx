"use client";

export default function FoundersNote() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" w-full max-w-[1280px] h-[4px] line-bg mb-[96px]" />
      <div className="w-[163px] h-[43px] rounded-[22px] button-gradient relative">
        <div className="w-full h-full rounded-[22px] bg-black absolute top-[1px] left-[2px] flex items-center">
          <h6 className="gradient-text ml-4 font-[family-name:var(--font-inter)] font-semibold text-sm sm:text-base">
            FOUNDERS NOTE
          </h6>
        </div>
      </div>
      <div className="mt-[26px] font-[family-name:var(--font-inter)] pb-[100px] px-4 sm:px-0">
        <h4 className="w-full max-w-[640px] text-center text-xl sm:text-2xl lg:text-[32px] text-white mx-auto">
          Chase AI simplifies crypto derivatives trading with AI-powered
          automation.{" "}
          <span className="text-[#8AA5FF]">
            From personalized market insights to seamless execution
          </span>
          , we empower you to trade with confidence, control, and precision.
        </h4>
        <div className="mt-[23px] flex gap-4 justify-center items-center">
          <div className="w-7 h-7 rounded-full bg-[#8AA5FF]"></div>
          <h5 className="text-[#E6ECFFB2] text-sm sm:text-[16px]">
            Co-founder & ex google designer
          </h5>
        </div>
      </div>
    </div>
  );
}
