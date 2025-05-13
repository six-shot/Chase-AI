import Image from "next/image";
import heromask from "../../public/svgs/hero-mask.svg";
import profileimg from "../../public/img/profile img.png";
import profileimg1 from "../../public/img/profile img1.png";
import profileimg2 from "../../public/img/profile img2.png";
import profileimg3 from "../../public/img/profile img4.png";
import mask from "../../public/svgs/mask.svg";
import opai from "../../public/logo/opal.svg";
import dune from "../../public/logo/dune.svg";
import oasis from "../../public/logo/oasis.svg";
import asterik from "../../public/logo/asterik.svg";
import eooks from "../../public/logo/eook.svg";
import Marquee from "react-fast-marquee";
import minicard from "../../public/svgs/minicard.svg";
import { motion } from "framer-motion";

const marqueeFeatures = [
  "Automate your Trades",
  "Instant Transactions",
  "Blockchain-Powered",
  "Global Access",
  "Instant Transfers",
  "Zero Fees",
];

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

export default function Home() {
  return (
    <div className="relative hero-bg w-full">
      <Image
        src={mask}
        alt="mask"
        className="absolute top-[-400px] -left-[600px]"
      />

      <div className="absolute top-0 h-[426px] w-full flex justify-center items-center">
        <Image
          src={heromask}
          alt="hero-mask"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10] object-cover w-full"
        />
      </div>
      <div className="pt-[68px] relative z-[10000]">
        <div className="flex flex-col items-center justify-center ">
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
                Join <span className="text-[#ffff]">15,725+</span> other loving
                customers
              </p>
            </div>
            <h1 className="text-white text-[64px] font-medium font-[family-name:var(--font-poppins)] text-center leading-[70.4px]">
              Trade smarter with <br /> AI-enhanced trading <br /> tool
            </h1>
            <p className="text-[#e6ecffb3]  text-center font-normal font-[family-name:var(--font-inter)] ">
              Master crypto derivatives trading with AI-powered insights,
              perpetual <br /> contracts, and advanced trading features.
            </p>
            <div className="flex gap-4 items-center">
              <button className=" cursor-pointer bg-[#2934FF] shadow-[0px_8px_40px_0px_rgba(17,0,255,0.5),_0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white px-[18px] h-[45px] rounded-[10px] font-medium font-[family-name:var(--font-inter)] border border-[#fff3]">
                Whitepaper
              </button>
              <button className=" cursor-pointer bg-[#2934FF]  text-white px-[18px] h-[45px] rounded-[10px] font-[family-name:var(--font-inter)] ">
                Enter Dapp
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto  px-[90px]">
          <Marquee className="" direction="left" speed={40}>
            <div className="flex gap-[99px] items-center h-[81px] mt-6">
              <Image className="logo-mask" src={opai} alt="opai" />
              <Image className="logo-mask" src={dune} alt="dune" />
              <Image className="logo-mask" src={oasis} alt="oasis" />
              <Image className="logo-mask" src={asterik} alt="asterik" />
              <Image className="logo-mask" src={eooks} alt="eooks" />\
              <Image className="logo-mask" src={opai} alt="opai" />
              <Image className="logo-mask" src={dune} alt="dune" />
              <Image className="logo-mask" src={oasis} alt="oasis" />
              <Image className="logo-mask" src={asterik} alt="asterik" />
              <Image className="logo-mask" src={eooks} alt="eooks" />
            </div>
          </Marquee>
        </div>
        <div className="my-[44px]">
          <div className="max-w-[1440px] mx-auto px-[100px]">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-[109px] h-[43px] rounded-[22px] button-gradient relative">
                <div className="w-full h-full rounded-[22px] bg-black absolute top-[1px] left-[2px] flex items-center">
                  <h6 className="gradient-text ml-4 font-[family-name:var(--font-inter)] font-semibold">
                    BENEFITS
                  </h6>
                </div>
              </div>
              <h5 className="text-[44px] font-[family-name:var(--font-inter)] text-[#ffffff] font-medium">
                Why Choose Cashtide?
              </h5>
              <p className="font-[family-name:var(--font-inter)] text-[#E6ECFFB2] text-center font-bold">
                Powerful AI tools and market insights designed to elevate
                <br />
                your trading strategy.
              </p>
            </div>
            <div className="mt-[44px] grid grid-cols-3 gap-8 ">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="p-[32px] gradient-card ">
                  <Image src={minicard} alt="minicard" />
                  <div className="mt-6 flex flex-col gap-4">
                    <h5 className="text-[#ffffff] text-[23px] font-[family-name:var(--font-inter)] font-medium">
                      {benefit.title}
                    </h5>
                    <h5 className="text-[#E6ECFFB2] text-base font-[family-name:var(--font-inter)]">
                      {benefit.description}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-[90px]">
          <div className="p-2.5">
            <Marquee className="" direction="left" speed={40}>
              <div className="flex gap-8">
                {marqueeFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="px-6 h-[49px] rounded-full bg-mini-card flex items-center"
                  >
                    <h5 className="text-[#E6ECFFB2] text-sm font-[family-name:var(--font-inter)]">
                      {feature}
                    </h5>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="p-2.5 mt-6">
            <Marquee className="" direction="right" speed={40}>
              <div className="flex gap-8">
                {marqueeFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="px-6 h-[49px] rounded-full bg-mini-card flex items-center"
                  >
                    <h5 className="text-[#E6ECFFB2] text-sm font-[family-name:var(--font-inter)]">
                      {feature}
                    </h5>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
