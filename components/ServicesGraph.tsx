import React from "react";
import Image from "next/image";

const ServicesGraph = () => {
  return (
    <div className="flex flex-col py-48 w-full px-[200px] relative justify-center items-center">
      <h1 className="text-[60px] font-[700] w-fit mb-10">
        Garphics <span className="text-[#43D0F7]">Design</span>
      </h1>
      <div className="absolute top-[25%] left-[5%] w-[500px] h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>
      <div className="flex justify center w-full">
        <div className="w-1/3 flex flex-col items-center justify-center">
          <h1 className="text-[35px] font-medium">Logo Design</h1>
          <span>Brand Identity</span>
          <Image
            src="/images/graph1.svg"
            alt="Logo Designs"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesGraph;
