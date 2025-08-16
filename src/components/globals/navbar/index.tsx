"use client";
import logo from "../../../../public/svgs/logo.avif";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Feature", href: "/feature" },
  { name: "FAQ", href: "/faq" },
  { name: "Whitepaper", href: "/whitepaper" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`w-full nav-bg transition-all duration-300 ${
          isScrolled ? " backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto md:px-[90px] px-5 h-[68px] flex justify-between items-center">
          <Image src={logo} alt="logo" width={118} height={34} />

          <div className="flex items-center gap-[10px]">
            <nav className="hidden lg:flex items-center gap-[16px] font-medium font-[family-name:var(--font-inter)] text-[#E6ECFFB2]">
              {menuItems.slice(0, 4).map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`px-3 hover:text-white transition-colors duration-150 ${
                    pathname === item.href ? "text-white" : "text-[#E6ECFFB2]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <button className="lg:block hidden ml-2 cursor-pointer bg-[#031457] shadow-[0px_0px_0px_1px_rgba(0,85,255,0.12)] text-white px-[18px] h-[45px] rounded-[10px] font-medium font-[family-name:var(--font-inter)] hover:bg-[#042a7a] transition-colors duration-150">
              Chart
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 block cursor-pointer lg:hidden"
              data-state={menuState ? "active" : "inactive"}
            >
              <div className="flex flex-col gap-[4px]">
                <div
                  className={`w-[30px] h-[2px] bg-white transition-all duration-300 ${
                    menuState ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <div
                  className={`w-[30px] h-[2px] bg-white transition-all duration-300 ${
                    menuState ? "opacity-0 scale-0" : ""
                  }`}
                />
                <div
                  className={`w-[30px] h-[2px] bg-white transition-all duration-300 ${
                    menuState ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed top-[72px] left-0 right-0 bottom-0 z-[1000] bg-black/80 backdrop-blur-md transition-all duration-300 lg:hidden ${
            menuState ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuState(false)}
        >
          <div
            className={`absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ${
              menuState ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <ul className="space-y-6 text-base">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`text-muted-foreground hover:text-accent-foreground block duration-150 ${
                        pathname === item.href ? "text-white" : "text-[#525866]"
                      }`}
                      onClick={() => setMenuState(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <button
                  className="w-full bg-[#031457] text-white px-4 py-2 rounded-lg hover:bg-[#042a7a] transition-colors duration-150"
                  onClick={() => setMenuState(false)}
                >
                  <span>Chart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
