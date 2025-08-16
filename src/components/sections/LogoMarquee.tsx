"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import opai from "../../../public/logo/opal.svg";
import dune from "../../../public/logo/dune.svg";
import oasis from "../../../public/logo/oasis.svg";
import asterik from "../../../public/logo/asterik.svg";
import eooks from "../../../public/logo/eook.svg";

export default function LogoMarquee() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[1000px] px-4 sm:px-6 lg:px-0">
        <Marquee className="" direction="left" speed={40}>
          <div className=" flex gap-8 sm:gap-[50px] lg:gap-[99px] items-center h-[81px] mt-6">
            <Image
              className="logo-mask w-16 h-8 sm:w-auto sm:h-auto"
              src={opai}
              alt="opai"
            />
            <Image
              className="logo-mask w-16 h-8 sm:w-auto sm:h-auto"
              src={dune}
              alt="dune"
            />
            <Image
              className="logo-mask w-16 h-8 sm:w-auto sm:h-auto"
              src={oasis}
              alt="oasis"
            />
            <Image
              className="logo-mask w-16 h-8 sm:w-auto sm:h-auto"
              src={asterik}
              alt="asterik"
            />
            <Image
              className="logo-mask w-16 h-8 sm:w-auto sm:h-auto"
              src={eooks}
              alt="eooks"
            />
            \
            <Image
              className="logo-mask w-16 h-8 sm:w-auto sm:h-auto"
              src={opai}
              alt="opai"
            />
            <Image
              className="logo-mask w-16 h-8 sm:w-auto sm:h-auto"
              src={dune}
              alt="dune"
            />
            <Image
              className="logo-mask w-16 h-8 sm:w-auto sm:h-auto"
              src={oasis}
              alt="oasis"
            />
            <Image
              className="logo-mask w-16 h-8 sm:w-auto sm:h-auto"
              src={asterik}
              alt="asterik"
            />
            <Image
              className="logo-mask w-16 h-8 sm:w-auto sm:h-auto"
              src={eooks}
              alt="eooks"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
