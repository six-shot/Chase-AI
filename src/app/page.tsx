"use client";
import Image from "next/image";
import heromask from "../../public/svgs/hero-mask.svg";
import Footer from "@/components/globals/footer";
import {
  Hero,
  LogoMarquee,
  FeaturesGrid,
  Benefits,
  MarqueeFeatures,
  Roadmap,
  FoundersNote,
  Integrations,
  Comparison,
  AIEfficiency,
  FAQ,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative  w-full">
    
      <div className="relative hero-bg ">
        <div className="absolute top-0 h-[426px] w-full flex justify-center items-center">
          <Image
            src={heromask}
            alt="hero-mask"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10] object-cover w-full"
          />
        </div>

        <Hero />
        <LogoMarquee />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
          <FeaturesGrid />

          <div className="flex justify-center items-center mb-[96px]">
            <div className=" w-full max-w-[1280px] h-[4px] line-bg" />
          </div>

          <Benefits />
          <MarqueeFeatures />
          <Roadmap />
          <FoundersNote />
          <Integrations />
          <Comparison />
          <AIEfficiency />
          <FAQ />
          <CTA />
        </div>

        <Footer />
      </div>
    </div>
  );
}
