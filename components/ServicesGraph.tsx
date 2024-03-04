import React from "react";
import Image from "next/image";
import Button from "./Button";

const ServicesGraph = () => {
  return (
    <section className="flex flex-col pt-48 w-full px-[200px] relative justify-center items-center">
      <h1 className="text-[60px] font-[700] w-fit mb-16">
        Graphics <span className="text-[#43D0F7]">Design</span>
      </h1>
      <div className="absolute top-[25%] left-0 w-[500px] h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>
      <div className="absolute top-[45%] right-0 w-[500px] h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>
      <div className="flex justify center w-full mb-24">

        <div className="w-1/3 flex flex-col items-center justify-center px-5">
          <h1 className="text-[30px] font-bold">Logo Design</h1>
          <span className="text-[20px] font-[400] mb-10">Brand Identity</span>
          <Image
            src="/images/graph1.svg"
            alt="Logo Designs"
            className="w-full"
            width={300}
            height={300}
          />
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center translate-y-10 px-5">
          <h1 className="text-[25px] font-bold">Social Media Graphics</h1>
          <span className="text-[20px] font-[400] mb-10">Brand Identity</span>
          <Image
            src="/images/graph2.png"
            alt="Logo Designs"
            className="w-full"
            width={300}
            height={300}
          />
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center px-5">
          <h1 className="text-[30px] font-bold">Print Design</h1>
          <span className="text-[20px] font-[400] mb-10">Business Card, Broachure, Flyer</span>
          <Image
            src="/images/graph3.svg"
            alt="Logo Designs"
            className="w-full"
            width={300}
            height={300}
          />
        </div>
      </div>
      <Button right={false} href={"/contact"} name={"Request Service"} />

    </section>
  );
};

export default ServicesGraph;
