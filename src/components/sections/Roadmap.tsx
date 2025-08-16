"use client";
import Image from "next/image";
import mark from "../../../public/svgs/mark.svg";
import hand from "../../../public/svgs/hand.svg";

export default function Roadmap() {
  return (
    <div className="py-[100px]">
      <div className="flex flex-col gap-3 justify-center items-center px-4 sm:px-0">
        <h5 className="text-2xl sm:text-3xl lg:text-[44px] font-[family-name:var(--font-inter)] text-[#ffffff] font-medium text-center">
          Roadmap
        </h5>
        <p className="font-[family-name:var(--font-inter)] text-[#E6ECFFB2] text-center font-bold text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-none">
          Chase AI&apos;s Roadmap Drives Innovation, From Launch to{" "}
          <br className="hidden lg:block" /> Global Expansion
        </p>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <div className="w-full max-w-[330px] h-[57px] roadmap-bg"></div>
        <div className="mt-[36px] flex flex-col lg:flex-row gap-4 lg:gap-[27px] w-full max-w-6xl px-4 lg:px-0">
          <div className="roadmap-card-bg w-full lg:w-[484px] h-auto lg:h-[504px] relative">
            <div className="absolute top-[1px] right-[1px] w-full h-full roadmap-card p-4 sm:p-6 font-[family-name:var(--font-inter)]">
              <h5 className="text-white text-base lg:text-[17px]">Phase - I</h5>{" "}
              <h5 className="text-2xl sm:text-3xl lg:text-[38px] mt-[21px] font-medium text-white leading-tight lg:leading-[42px]">
                Development
              </h5>
              <div className="">
                <button className="my-[26px] w-full cursor-pointer bg-[#031457] shadow-[0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white text-[17px] h-[50px] rounded-[10px] font-[family-name:var(--font-inter)]">
                  Completed
                </button>
                <div>
                  <h5 className="text-[#E6ECFFB2] text-base lg:text-[17px]">
                    Objectives:
                  </h5>
                  <div className="mt-[23px] flex flex-col gap-4 lg:gap-[21px]">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={mark}
                        alt="mark"
                        className="w-4 h-4 lg:w-auto lg:h-auto"
                      />
                      <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                        Build AI-powered trading engine
                      </h5>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={mark}
                        alt="mark"
                        className="w-4 h-4 lg:w-auto lg:h-auto"
                      />
                      <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                        Conduct security audits & compliance checks
                      </h5>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={mark}
                        alt="mark"
                        className="w-4 h-4 lg:w-auto lg:h-auto"
                      />
                      <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                        Train AI models & optimize strategies
                      </h5>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={mark}
                        alt="mark"
                        className="w-4 h-4 lg:w-auto lg:h-auto"
                      />
                      <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                        Launch beta testing & gather feedback
                      </h5>
                    </div>
                    <div className="flex gap-2 items-center mt-4">
                      <Image
                        src={mark}
                        alt="mark"
                        className="w-4 h-4 lg:w-auto lg:h-auto"
                      />
                      <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                        Official Chase AI platform launch
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="roadmap-card-bg w-full lg:w-[484px] h-auto lg:h-[504px] relative">
            <div className="absolute top-[1px] right-[1px] w-full h-full roadmap-card p-4 sm:p-6 font-[family-name:var(--font-inter)]">
              <h5 className="text-white text-base lg:text-[17px]">Phase - I</h5>{" "}
              <h5 className="text-2xl sm:text-3xl lg:text-[38px] mt-[21px] font-medium text-white leading-tight lg:leading-[42px]">
                Development
              </h5>
              <div className="">
                <button className="my-[26px] w-full cursor-pointer bg-[#031457] shadow-[0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white text-[17px] h-[50px] rounded-[10px] font-[family-name:var(--font-inter)]">
                  Completed
                </button>
                <div>
                  <h5 className="text-[#E6ECFFB2] text-base lg:text-[17px]">
                    Objectives:
                  </h5>
                  <div className="mt-[23px] flex flex-col gap-4 lg:gap-[21px]">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={mark}
                        alt="mark"
                        className="w-4 h-4 lg:w-auto lg:h-auto"
                      />
                      <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                        Build AI-powered trading engine
                      </h5>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={mark}
                        alt="mark"
                        className="w-4 h-4 lg:w-auto lg:h-auto"
                      />
                      <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                        Conduct security audits & compliance checks
                      </h5>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={mark}
                        alt="mark"
                        className="w-4 h-4 lg:w-auto lg:h-auto"
                      />
                      <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                        Train AI models & optimize strategies
                      </h5>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={mark}
                        alt="mark"
                        className="w-4 h-4 lg:w-auto lg:h-auto"
                      />
                      <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                        Launch beta testing & gather feedback
                      </h5>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={mark}
                        alt="mark"
                        className="w-4 h-4 lg:w-auto lg:h-auto"
                      />
                      <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                        Official Chase AI platform launch
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 gap-2.5 h-[49px] rounded-full bg-mini-card flex items-center mt-4 w-full max-w-md">
          <Image
            src={hand}
            alt="hand"
            className="w-6 h-6 lg:w-auto lg:h-auto"
          />
          <h5 className="text-[#E6ECFFB2] text-xs sm:text-sm font-[family-name:var(--font-inter)] text-center">
            Chase AI - Revolutionizing AI Trading Globally
          </h5>
        </div>
        <div className="mt-[88px]"></div>
      </div>
    </div>
  );
}
