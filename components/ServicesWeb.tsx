"use client"
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const ServicesWeb = () => {
  const [active, setActive] = useState(0);
  return <section id={"services"} className="flex flex-col pt-48 w-full px-[200px] relative justify-center items-center">

    <h1 className="text-[60px] font-[700] w-fit mb-10">
      Website <span className="text-[#43d0f7]">Development</span>
    </h1>
    <div className="w-full flex justify-center items-center gap-[50px] mb-10">
      <div className=" border-[1px] rounded-[35px] border-[#43D0F7] px-10 py-3 text-[23px] font-semibold duration-500 cursor-pointer"
        style={{
          backgroundColor: active === 0 ? "#43D0F7" : "#ffffff",
          color: active === 0 ? "#ffffff" : "#43D0F7",
          boxShadow: active === 0 ? "0px 0px 10px 0px #43D0F7" : "none",
        }}
        onClick={() => setActive(0)}
      >Static Websites</div>
      <div className=" border-[1px] rounded-[35px] border-[#43D0F7] px-10 py-3 text-[23px] font-semibold duration-500 cursor-pointer"
        style={{
          backgroundColor: active === 1 ? "#43D0F7" : "#ffffff",
          color: active === 1 ? "#ffffff" : "#43D0F7",
          boxShadow: active === 1 ? "0px 0px 10px 0px #43D0F7" : "none",
        }}
        onClick={() => setActive(1)}
      >Dynamic Websites</div>
    </div>
    <div className="w-full overflow-hidden flex justify-start items-center my-5">
      <div className="w-full flex flex-nowrap justify-start duration-500"
        style={{
          transform: `translateX(-${active * 100}%)`,
        }}
      >
        <div className="min-w-full flex justify-center items-center gap-10 flex-col">
          <p className="text-[#e5e5e5] leading-[200%] text-[22px] font-light text-center">A static website or business portfolio boosts a business by showcasing its services and products online. It helps attract potential customers, builds credibility, and expands market reach. With easy access to information, it increases visibility, enabling businesses to grow their clientele and enhance their reputation in a cost-effective manner.</p>
          <Image src={"/images/bluenile.png"} alt="Static Websites" className="w-[70%] rounded-2xl" width={1000} height={1000} />
          <Button right={false} href={"/contact"} name={"Request Service"} />
        </div>
        <div className="min-w-full flex justify-center items-center gap-10 flex-col">
          <p className="text-[#e5e5e5] leading-[200%] text-[22px] font-light text-center">
            A dynamic website brings businesses to life online, engaging visitors with interactive features like forms, galleries, and real-time updates. It fosters stronger customer relationships, drives traffic through personalized content, and adapts to evolving needs. This dynamic approach maximizes engagement, conversion rates, and overall business success.</p>
          <Image src={"/images/sawla.png"} alt="Static Websites" className="w-[70%] rounded-2xl" width={1000} height={1000} />
          <Button right={false} href={"/contact"} name={"Request Service"} />
        </div>
      </div>
    </div>
  </section>;
};

export default ServicesWeb;
