"use client";
import Image from "next/image";
import chase from "../../../public/svgs/chase.png";
import others from "../../../public/svgs/others.png";
import smallcheck from "../../../public/svgs/smallcheck.svg";

export default function Comparison() {
  return (
    <div className="py-[100px] h-full ">
      <div className=" w-full max-w-[1280px] h-[4px] line-bg " />
      <div className="flex flex-col justify-center items-center px-4 sm:px-0">
        <div className="w-[138px] h-[43px] rounded-[22px] button-gradient relative mt-[100px]">
          <div className="w-full h-full rounded-[22px] bg-black absolute top-[1px] left-[2px] flex items-center">
            <h6 className="gradient-text ml-4 font-[family-name:var(--font-inter)] font-semibold text-sm sm:text-base">
              COMPARISON
            </h6>
          </div>
        </div>
        <h5 className="text-2xl sm:text-3xl lg:text-[44px] font-[family-name:var(--font-inter)] text-[#ffffff] font-medium text-center">
          Why Chase AI Stands Out
        </h5>
        <p className="font-[family-name:var(--font-inter)] text-[#E6ECFFB2] text-center font-bold text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-none">
          See how we compare against others in performance, growth
        </p>
      </div>
      <div className="flex justify-center mt-[44px]">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[27px] w-full max-w-6xl px-4 lg:px-0">
          <div className="w-full lg:w-[483px]">
            <div className="w-full flex justify-center items-center h-[62px] ">
              <Image
                src={chase}
                className="w-20 h-6 lg:w-[118px] lg:h-[34px]"
                alt="chase"
              />
            </div>
            <div className="roadmap-card-bg w-full h-auto lg:h-[339px] relative mt-[9px]">
              <div className="absolute top-[1px] right-[1px] w-full h-full roadmap-card px-4 sm:px-6 lg:px-[30px] pt-[26px] font-[family-name:var(--font-inter)]">
                <div className="">
                  <div>
                    <div className=" flex flex-col gap-4 lg:gap-[21px]">
                      <div className="flex gap-2.5 items-center">
                        <Image
                          src={smallcheck}
                          alt="mark"
                          className="w-4 h-4 lg:w-auto lg:h-auto"
                        />
                        <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                          Build AI-powered trading engine
                        </h5>
                      </div>
                      <div className="w-full h-[1px] divider" />
                      <div className="flex gap-2.5 items-center">
                        <Image
                          src={smallcheck}
                          alt="mark"
                          className="w-4 h-4 lg:w-auto lg:h-auto"
                        />
                        <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                          Conduct security audits & compliance checks
                        </h5>
                      </div>
                      <div className="w-full h-[1px] divider" />
                      <div className="flex gap-2.5 items-center">
                        <Image
                          src={smallcheck}
                          alt="mark"
                          className="w-4 h-4 lg:w-auto lg:h-auto"
                        />
                        <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                          Train AI models & optimize strategies
                        </h5>
                      </div>
                      <div className="w-full h-[1px] divider" />
                      <div className="flex gap-2.5 items-center">
                        <Image
                          src={smallcheck}
                          alt="mark"
                          className="w-4 h-4 lg:w-auto lg:h-auto"
                        />
                        <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                          Launch beta testing & gather feedback
                        </h5>
                      </div>
                      <div className="w-full h-[1px] divider" />
                      <div className="flex gap-2.5 items-center ">
                        <Image
                          src={smallcheck}
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
          <div className="w-full lg:w-[483px]">
            <div className="w-full flex justify-center items-center h-[62px]">
              <Image
                src={others}
                alt="others"
                className="w-20 h-6 lg:w-auto lg:h-auto"
              />
            </div>
            <div className="roadmap-card-bg w-full h-auto lg:h-[339px] relative mt-[9px]">
              <div className="absolute top-[1px] right-[1px] w-full h-full roadmap-card px-4 sm:px-6 lg:px-[30px] pt-[26px] font-[family-name:var(--font-inter)]">
                <div className="">
                  <div>
                    <div className=" flex flex-col gap-4 lg:gap-[21px]">
                      <div className="flex gap-2.5 items-center">
                        <Image
                          src={smallcheck}
                          alt="mark"
                          className="w-4 h-4 lg:w-auto lg:h-auto"
                        />
                        <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                          Build AI-powered trading engine
                        </h5>
                      </div>
                      <div className="w-full h-[1px] divider" />
                      <div className="flex gap-2.5 items-center">
                        <Image
                          src={smallcheck}
                          alt="mark"
                          className="w-4 h-4 lg:w-auto lg:h-auto"
                        />
                        <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                          Conduct security audits & compliance checks
                        </h5>
                      </div>
                      <div className="w-full h-[1px] divider" />
                      <div className="flex gap-2.5 items-center">
                        <Image
                          src={smallcheck}
                          alt="mark"
                          className="w-4 h-4 lg:w-auto lg:h-auto"
                        />
                        <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                          Train AI models & optimize strategies
                        </h5>
                      </div>
                      <div className="w-full h-[1px] divider" />
                      <div className="flex gap-2.5 items-center">
                        <Image
                          src={smallcheck}
                          alt="mark"
                          className="w-4 h-4 lg:w-auto lg:h-auto"
                        />
                        <h5 className="text-[#E6ECFFB2] text-sm lg:text-[17px]">
                          Launch beta testing & gather feedback
                        </h5>
                      </div>
                      <div className="w-full h-[1px] divider" />
                      <div className="flex gap-2.5 items-center ">
                        <Image
                          src={smallcheck}
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
        </div>
      </div>
    </div>
  );
}
