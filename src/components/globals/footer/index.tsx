import Image from 'next/image';
import logo from "../../../../public/svgs/logo.avif";
import React from 'react'
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="py-20 px-10">
      <div className="w-full max-w-[1440px] mx-auto  px-[90px]  h-[68px]  flex justify-between items-center">
        <Image src={logo} alt="logo" width={118} height={34} />

        <div className="flex items-center gap-[10px]">
          <nav className="flex items-center gap-[16px] font-medium font-[family-name:var(--font-inter)] text-[#E6ECFFB2]">
            <Link href="/" className="px-3">
              Home
            </Link>
            <Link href="/" className="px-3">
              About
            </Link>
            <Link href="/" className="px-3">
              Feauture
            </Link>
            <Link href="/" className="px-3">
              Faq
            </Link>
          </nav>

          <button className="ml-2 cursor-pointer bg-[#031457] shadow-[0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white px-[18px] h-[45px] rounded-[10px] font-medium font-[family-name:var(--font-inter)]">
            Chart
          </button>
        </div>
      </div>
    </div>
  );
}
