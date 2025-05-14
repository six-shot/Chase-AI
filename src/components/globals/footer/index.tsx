import Image from "next/image";
import chase from "../../../../public/svgs/chase.png";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-[76px] px-10">
      <div className="w-full max-w-[1440px] mx-auto  px-[90px]  h-[45px]  flex  items-center">
        <nav className="flex items-center w-full h-full font-medium font-[family-name:var(--font-inter)] text-[#E6ECFFB2]">
          <div className="border-r-[2px] border-[#121426] px-[65px] h-full">
            <Image src={chase} alt="chase" />
          </div>
          <Link
            className="border-r-[2px] border-[#121426] px-[65px] h-full flex items-center"
            href="/"
          >
            Home
          </Link>
          <Link
            className="border-r-[2px] border-[#121426] px-[65px] h-full flex items-center"
            href="/"
          >
            About
          </Link>
          <Link
            href="/"
            className="border-r-[2px] border-[#121426] px-[65px] h-full flex items-center"
          >
            Services
          </Link>
          <Link
            href="/"
            className="border-r-[2px] border-l-[2px] border-[#121426] px-[65px] h-full flex items-center"
          >
            Faq
          </Link>
          <div className="pl-[65px]  border-l-[2px] border-[#121426] ">
            <button className="cursor-pointer bg-[#031457] shadow-[0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white px-[18px] h-[45px] rounded-[10px] font-medium font-[family-name:var(--font-inter)]">
              Pitch Deck
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
