"use client";
import Image from "next/image";
import signals from "../../../public/svgs/signals.svg";
import graph from "../../../public/svgs/graph.svg";
import optimization from "../../../public/svgs/optimization.svg";
import management from "../../../public/svgs/management.svg";

export default function Integrations() {
  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className=" w-full max-w-[1280px] h-[4px] line-bg " />
      <div className="w-[147px] h-[43px] rounded-[22px] button-gradient relative mt-[100px]">
        <div className="w-full h-full rounded-[22px] bg-black absolute top-[1px] left-[2px] flex items-center">
          <h6 className="gradient-text ml-4 font-[family-name:var(--font-inter)] font-semibold text-sm sm:text-base">
            INTEGRATIONS
          </h6>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center px-4 sm:px-0">
        <h5 className="text-2xl sm:text-3xl lg:text-[44px] font-[family-name:var(--font-inter)] text-[#ffffff] font-medium text-center">
          Seamless Integrations
        </h5>
        <p className="font-[family-name:var(--font-inter)] text-[#E6ECFFB2] text-center font-bold text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-none">
          Connect with your favorite tools to streamline workflows
        </p>
      </div>
      <div className="mt-[44px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl px-4 lg:px-0">
        <div className="p-4 sm:p-6 lg:p-[32px] gradient-card w-full lg:w-[355px] ">
          <Image
            src={signals}
            alt="signals"
            className="w-12 h-12 lg:w-auto lg:h-auto"
          />
          <div className="mt-6 flex flex-col gap-4">
            <h5 className="text-[#ffffff] text-lg sm:text-xl lg:text-[23px] font-[family-name:var(--font-inter)] font-medium">
              AI-Driven Trading Signals
            </h5>
            <h5 className="text-[#E6ECFFB2] text-sm sm:text-base font-[family-name:var(--font-inter)]">
              Leverage real-time AI-generated insights to detect profitable
              market movements before they happen.
            </h5>
          </div>
        </div>
        <div className="p-4 sm:p-6 lg:p-[32px] gradient-card w-full lg:w-[355px] ">
          <Image
            src={signals}
            alt="signals"
            className="w-12 h-12 lg:w-auto lg:h-auto"
          />
          <div className="mt-6 flex flex-col gap-4">
            <h5 className="text-[#ffffff] text-lg sm:text-xl lg:text-[23px] font-[family-name:var(--font-inter)] font-medium">
              AI-Powered Auto Trades
            </h5>
            <h5 className="text-[#E6ECFFB2] text-sm sm:text-base font-[family-name:var(--font-inter)]">
              Execute trades seamlessly with AI-powered bots tailored to your
              risk profile and investment goals.
            </h5>
          </div>
        </div>
        <div className="p-4 sm:p-6 lg:p-[32px] gradient-card w-full lg:w-[355px] ">
          <Image
            src={signals}
            alt="signals"
            className="w-12 h-12 lg:w-auto lg:h-auto"
          />
          <div className="mt-6 flex flex-col gap-4">
            <h5 className="text-[#ffffff] text-lg sm:text-xl lg:text-[23px] font-[family-name:var(--font-inter)] font-medium">
              Smart Risk Management
            </h5>
            <h5 className="text-[#E6ECFFB2] text-sm sm:text-base font-[family-name:var(--font-inter)]">
              Stay protected with AI-driven alerts that optimize portfolio
              safety and prevent unnecessary losses.
            </h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mt-[44px] px-4 sm:px-0">
        <div className="flex gap-2.5 items-center">
          <Image
            src={graph}
            alt="graph"
            className="w-6 h-6 lg:w-auto lg:h-auto"
          />
          <h5 className="text-[#E6ECFFB2] text-sm lg:text-base font-[family-name:var(--font-inter)]">
            AI-Driven Trading Signals
          </h5>
        </div>
        <div className="flex gap-2.5 items-center">
          <Image
            src={optimization}
            alt="optimization"
            className="w-6 h-6 lg:w-auto lg:h-auto"
          />
          <h5 className="text-[#E6ECFFB2] text-sm lg:text-base font-[family-name:var(--font-inter)]">
            Dynamic Portfolio Optimization
          </h5>
        </div>
        <div className="flex gap-2.5 items-center">
          <Image
            src={management}
            alt="management"
            className="w-6 h-6 lg:w-auto lg:h-auto"
          />
          <h5 className="text-[#E6ECFFB2] text-sm lg:text-base font-[family-name:var(--font-inter)]">
            Adaptive Risk Management
          </h5>
        </div>
      </div>
    </div>
  );
}
