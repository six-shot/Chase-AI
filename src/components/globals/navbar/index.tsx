import React from "react";
import logo from "../../../../public/svgs/logo.avif";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full nav-bg px-[45px]">
        <div className="w-full max-w-[1440px] mx-auto  h-[68px] px-10 flex justify-between items-center">
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
    </div>
  );
}
