"use client";
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
import star from "../../public/svgs/star.png";
import check from "../../public/svgs/check.svg";
import earn from "../../public/svgs/earn.png";
import grid from "../../public/svgs/grid.png";
import oneclick from "../../public/svgs/oneclick.png";
import derivative from "../../public/svgs/derivation.png";
import growth from "../../public/svgs/growth.png";
import cta from "../../public/svgs/cta.svg";
import ctablur from "../../public/svgs/ctablur.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data = [
    {
      title: "How do I send money with Cash Tide?",
      answer:
        "Simply enter the recipient's phone number, specify the amount, and hit send. No banking details are needed!",
    },
    {
      title: "Can I use Cash Tide internationally?",
      answer:
        "Absolutely! You can send money anywhere in the world, instantly and without hassle.",
    },
    {
      title: "How does Cash Tide ensure security?",
      answer:
        "Cash Tide uses blockchain technology to ensure that all transactions are secure, transparent, and efficient.",
    },
    {
      title: "Are there any fees for sending money?",
      answer:
        "No! All transfers are completely free—there are no hidden costs or service charges.",
    },
    {
      title: "Is there a limit to how much I can send?",
      answer:
        "There are no strict limits on transfers, though certain regions may have transaction thresholds. Please check our terms for more details.",
    },
  ];

  return (
    <div className="relative  w-full">
      <div className="relative hero-bg ">
        <Image
          src={mask}
          alt="mask"
          className="absolute top-[-400px] -left-[600px] z-[30] opacity-[70%]"
        />

        <div className="absolute top-0 h-[426px] w-full flex justify-center items-center">
          <Image
            src={heromask}
            alt="hero-mask"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10] object-cover w-full"
          />
        </div>
        <div className="pt-[68px] relative z-[10]">
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
                  Join <span className="text-[#ffff]">15,725+</span> other
                  loving customers
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
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[1000px]">
            <Marquee className="" direction="left" speed={40}>
              <div className=" flex gap-[99px] items-center h-[81px] mt-6">
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
        </div>

        <div className="max-w-[1440px] mx-auto  px-[60px]">
          <div className="pb-[96px] pt-[44px] grid grid-cols-3 gap-[25px]  items-center relative z-[40]">
            <div className="col-span-1 h-[397px] grid-card relative">
              <div className=" w-full grid-inner-card h-full absolute top-[1px] left-[1px]">
                <div className="p-8">
                  <h4 className="text-[#ffffff] text-[24px] font-[family-name:var(--font-inter)] font-medium">
                    A Platform for Every Skill Level
                  </h4>
                  <p className="text-[#E6ECFFB2] text-[16px] font-[family-name:var(--font-inter)] font-normal mt-[18px]">
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
            <div className="col-span-2 h-full grid-card relative">
              <div className=" w-full grid-inner-card h-full absolute top-[1px] ">
                <div className="p-8">
                  <h4 className="text-[#ffffff] text-[24px] font-[family-name:var(--font-inter)] font-medium">
                    Elevate your Trading Startegy with AI
                  </h4>
                  <p className="text-[#E6ECFFB2] text-[16px] font-[family-name:var(--font-inter)] font-normal mt-[18px]">
                    Insights provides instant access to public sentiment,
                    evolving market patterns, and trends.
                  </p>
                  <div className="mt-[27px] flex relative">
                    <Image
                      className="w-[297px] object-contain"
                      src={earn}
                      alt="earn"
                    />
                    <Image
                      className="w-[432px] object-contain -ml-[50px] mt-[100px]"
                      src={grid}
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-[397px] grid-card-2 relative">
              <div className=" w-full grid-inner-card h-full absolute top-[1px] left-[1px]">
                <div className="p-8">
                  <h4 className="text-[#ffffff] text-[24px] font-[family-name:var(--font-inter)] font-medium">
                    The Complete Crypto Derivatives Solution
                  </h4>
                  <p className="text-[#E6ECFFB2] text-[16px] font-[family-name:var(--font-inter)] font-normal mt-[18px]">
                    Chase AI is a decentralized, self-custodial platform that
                    simplifies derivatives trading with seamless AI automation.
                  </p>
                  <div className="mt-[27px] flex relative">
                    <Image
                      className="w-[298px] h-[312px] object-contain"
                      src={derivative}
                      alt="derivative"
                    />
                    <Image
                      className="w-[313px] h-[142px] object-contain -ml-[50px] mt-[80px]"
                      src={growth}
                      alt="growth"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 h-[397px] grid-card-3 relative">
              <div className=" w-full grid-inner-card h-full absolute top-[1px] left-[1px] right-[1px]">
                <div className="p-8">
                  <h4 className="text-[#ffffff] text-[24px] font-[family-name:var(--font-inter)] font-medium">
                    One-Click Trading
                  </h4>
                  <p className="text-[#E6ECFFB2] text-[16px] font-[family-name:var(--font-inter)] font-normal mt-[18px]">
                    Gain Exposure to crypto with Perpetual Contracts.
                  </p>
                  <div className="mt-[27px] flex relative justify-center">
                    <Image src={oneclick} alt="oneclick" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-[96px]">
            <div className=" w-[1280px] h-[4px] line-bg" />
          </div>
          <div className="">
            <div className="">
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
          <div className="">
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
          <div>
            <div className="flex justify-center items-center mb-[96px]">
              <div className=" w-[1280px] h-[4px] line-bg" />
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-[150px] h-[43px] rounded-[22px] button-gradient relative">
                <div className="w-full h-full rounded-[22px] bg-black absolute top-[1px] left-[2px] flex items-center">
                  <h6 className="gradient-text ml-4 font-[family-name:var(--font-inter)] font-semibold">
                    FAQ&apos;S SECTION
                  </h6>
                </div>
              </div>
              <h5 className="text-[44px] font-[family-name:var(--font-inter)] text-[#ffffff] font-medium">
                Some Common FAQ&apos;s
              </h5>
              <p className="font-[family-name:var(--font-inter)] text-[#E6ECFFB2] text-center font-bold">
                Get answers to your questions and learn about our platform
              </p>
              <div className="  flex flex-col p-[36px] w-[900px] gap-4 card-bg shadow-[0px_-22px_37px_0px_#1d1f130d] rounded-[20px]">
                {data.map((item, index) => (
                  <Accordion
                    key={index}
                    index={index}
                    title={item.title}
                    answer={item.answer}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-[100px]">
            <div className="relative">
              <Image
                src={ctablur}
                alt="cta"
                className="absolute top-0 left-0 w-full h-full"
              />
              <div className="flex justify-center items-center mb-[96px]">
                {" "}
                <div className=" w-[1280px] h-[4px] line-bg" />
              </div>

              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="w-[269px] h-[43px] rounded-[22px] button-gradient relative">
                  <div className="w-full h-full rounded-[22px] bg-black absolute top-[1px] left-[2px] flex items-center">
                    <h6 className="gradient-text ml-4 font-[family-name:var(--font-inter)] font-semibold">
                      WHAT YOU STILL WAITING FOR
                    </h6>
                  </div>
                </div>
                <h5 className="text-[44px] font-[family-name:var(--font-inter)] text-[#ffffff] font-medium">
                  Grow Now with Chase AI
                </h5>
                <p className="font-[family-name:var(--font-inter)] text-[#E6ECFFB2] text-center font-bold">
                  Unlock AI-driven trading to optimize decisions, enhance
                  <br />
                  efficiency, and accelerate your trading growth.
                </p>
                <div className="flex gap-4 items-center mt-3">
                  <button className=" cursor-pointer bg-[#2934FF] shadow-[0px_8px_40px_0px_rgba(17,0,255,0.5),_0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white px-[18px] h-[45px] rounded-[10px] font-medium font-[family-name:var(--font-inter)] border border-[#fff3]">
                    Get Started Now
                  </button>
                  <button className="ml-2 cursor-pointer bg-[#031457] shadow-[0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white px-[18px] h-[45px] rounded-[10px] font-medium font-[family-name:var(--font-inter)]">
                    Enter Dapp
                  </button>
                </div>
              </div>
              <div className="-mt-[200px] flex justify-center">
                <Image src={cta} alt="cta" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Accordion = ({
  title,
  answer,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  title: string;
  answer: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const isOpen = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      onClick={() => setHoveredIndex(isOpen ? null : index)}
      className="relative p-[1px] overflow-hidden cursor-pointer"
    >
      <div className="stroke-rectangle absolute inset-0"></div>
      {isOpen && <div className="stroke-rectangle is-gradient"></div>}
      <div className=" faq-card rounded-[12px] font-[family-name:var(--font-inter)] py-[16px]">
        <motion.button
          className="flex justify-between items-center w-full px-[16px] cursor-pointer "
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-[16px] text-[#ffff] font-medium">{title}</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              d="M19 9L12 16L5 9"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className=" text-[1rem] text-[#ffffff] mt-[21px] px-[16px] ">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
