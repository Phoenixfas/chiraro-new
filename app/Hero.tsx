import Link from "next/link";
import React from "react";
import Hero3d from "./Hero3d";
import Button from "@/components/Button";
import HeroLeft from "@/components/HeroLeft";

export default function Hero() {
  return (
    <div
      id="hero"
      className="w-full min-h-screen md:w-[calc(100%-50px)] md:h-screen pt-[150px] flex justify-center items-center flex-col-reverse md:flex-row"
    >
      <HeroLeft />
      <div className="relative md:w-1/2 w-full h-full flex justify-center items-center md:pr-10">
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>
        <Hero3d />
      </div>
    </div>
  );
}
