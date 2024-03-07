import React from "react";
import Image from "next/image";
import Button from "./Button";

const ServicesGraph = () => {
  return (
    <section className="flex flex-col pt-10 lg:pt-24 w-full px-0 sm:px-[50px] lg:px-[200px] relative justify-center items-center">
      <h1 className="text-[40px] sm:text-[45px] px-4 text-center sm:text-[60px] font-[700] w-fit mb-10">
        Graphics <span className="text-[#43D0F7]">Design</span>
      </h1>
      <div className="absolute top-[55%] sm:top-[45%] -z-10 right-0 w-[500px] h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>
      <div className="absolute top-0 sm:top-[25%] -z-10 left-0 sm:-left-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>
      <div className="flex justify center w-full mb-24 md:items-start md:flex-row flex-col items-center md:gap-0 gap-16">
        <div className="w-[80%] sm:w-[350px] md:w-1/3 flex flex-col items-center justify-center px-0 sm:px-5 md:hover:-translate-y-5 duration-500 text-center">
          <h1 className="text-[35px] md:text-[30px] font-bold">Logo Design</h1>
          <span className="text-[24px] md:text-[20px] font-[400] mb-10">Brand Identity</span>
          <Image
            src="/images/graph1.svg"
            alt="Logo Designs"
            className="w-full"
            width={300}
            height={300}
          />
        </div>
        <div className="w-[80%] sm:w-[350px] md:w-1/3 flex flex-col items-center justify-center translate-y-0 md:translate-y-10 px-0 sm:px-5 md:hover:-translate-y-0 duration-500 text-center">
          <h1 className="text-[35px] md:text-[30px] font-bold">Social Media Graphics</h1>
          <span className="text-[24px] md:text-[20px] font-[400] mb-10">Brand Identity</span>
          <Image
            src="/images/graph2.png"
            alt="Logo Designs"
            className="w-full"
            width={300}
            height={300}
          />
        </div>
        <div className="w-[80%] sm:w-[350px] md:w-1/3 flex flex-col items-center justify-center px-0 sm:px-5 md:hover:-translate-y-5 duration-500 text-center">
          <h1 className="text-[34px] md:text-[30px] font-bold">Print Design</h1>
          <span className="text-[24px] md:text-[20px] font-[400] mb-10">Business Card, Broachure, Flyer</span>
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
