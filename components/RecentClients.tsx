"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import clients from "@/data/clients";

const RecentClients = () => {
  const [prevTab, setPrevTab] = useState("all");
  const [tabs, setTabs] = useState("all");
  const [width, setWidth] = useState(0);
  const [md, setMd] = useState(false);
  const [sm, setSm] = useState(false);
  let [translate, setTranslate] = useState(0);

  const tabsHandler = (tab: string) => {
    setPrevTab(tabs);

    setTabs(tab);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    if (width > 1024) {
      setMd(true);
    } else {
      setMd(false);
    }
    if (width > 768) {
      setSm(true);
    } else {
      setSm(false);
    }
    console.log(width);
    console.log(md);
  }, [width, md]);

  return (
    <section className="w-full h-full items-center justify-center flex relative pt-10 lg:pt-24">
      <div className="px-3 sm:px-[50px] lg:px-[200px] w-full flex flex-col items-center justify-center relative ">
        <h1 className="font-[700] w-fit text-center text-[40px] sm:text-[45px] px-6 lg:text-[60px] mb-10">
          Our Recent<span className="text-[#43D0F7] block sm:inline"> Clients</span>
        </h1>
        <div className="hidden md:flex justify-start items-center gap-2 lg:gap-5 text-[15px] lg:text-[20px] font-medium  select-none mb-10">
          <p
            className={`lg:px-[12px] lg:py-[6px] px-[6px] py-[3px] rounded-[24px] cursor-pointer duration-500 ${tabs === "all" ? "bg-[#43D0F7]" : ""
              }`}
            onClick={() => tabsHandler("all")}
          >
            All
          </p>
          <p
            className={`lg:px-[12px] lg:py-[6px] px-[6px] py-[3px] rounded-[24px] cursor-pointer duration-500 ${tabs === "web" ? "bg-[#43D0F7]" : ""
              }`}
            onClick={() => tabsHandler("web")}
          >
            Website Development
          </p>
          <p
            className={`lg:px-[12px] lg:py-[6px] px-[6px] py-[3px] rounded-[24px] cursor-pointer duration-500 ${tabs === "gra" ? "bg-[#43D0F7]" : ""
              }`}
            onClick={() => tabsHandler("gra")}
          >
            Graphics Design
          </p>
          <p
            className={`lg:px-[12px] lg:py-[6px] px-[6px] py-[3px] rounded-[24px] cursor-pointer duration-500 ${tabs === "app" ? "bg-[#43D0F7]" : ""
              }`}
            onClick={() => tabsHandler("app")}
          >
            Application Development
          </p>
          <p
            className={`lg:px-[12px] lg:py-[6px] px-[6px] py-[3px] rounded-[24px] cursor-pointer duration-500 ${tabs === "smm" ? "bg-[#43D0F7]" : ""
              }`}
            onClick={() => tabsHandler("smm")}
          >
            Social Media Marketing
          </p>
        </div>
        <div className="overflow-hidden clients relative w-full">
          <div
            className="absolute top-[50%] right-0 w-16 flex justify-center items-center rounded-full h-16 bg-[#43d0f7d2] z-10 text-3xl -translate-y-[50%] select-none cursor-pointer"
            onClick={() => {
              if (translate <= 6 - 3) {
                setTranslate(translate + 1);
              } else {
                setTranslate(0);
              }
              console.log(translate);
            }}
          >
            <MdOutlineNavigateNext />
          </div>
          <div
            className="absolute top-[50%] left-0 w-16 flex justify-center items-center rounded-full h-16 bg-[#43d0f7d2] z-10 text-3xl -translate-y-[50%] select-none cursor-pointer"
            onClick={() => {
              if (translate > 0) {
                setTranslate(translate - 1);
              }
              console.log(translate);
            }}
          >
            <MdOutlineNavigateBefore />
          </div>
          <div
            id="slider"
            className={`w-full flex justify-between gap-10 px-6 my-2 flex-nowrap duration-500 relative`}
            style={{
              transform: `translateX(calc((${(sm || md) ? sm ? "30%" : "50%" : "100%"} ) * ${translate}*-1))`,
            }}
          >
            {clients && clients.reverse().map((cli, index) => (
              <Link
                key={index}
                href={cli.link}
                className="min-w-full sm:min-w-[90%] lg:min-w-[50%] xl:min-w-[40%] h-[270px] bg-[#393E4680] rounded-2xl p-4 relative [&>div]:hover:translate-y-0 overflow-hidden"
              >
                <Image
                  alt={cli.name}
                  width={800}
                  height={800}
                  src={cli.image}
                  className="object-cover h-full w-full rounded-xl"
                />
                <div className="w-full h-full absolute rounded-[20px] bg-[#43d0f7aa] blur-[17px] z-[-1] top-0 left-0"></div>

                <div className="absolute bottom-0 left-0 w-full h-[60px] bg-[#43d0f7aa] rounded-b-2xl flex items-center justify-center duration-500 translate-y-16">
                  <p className="text-[25px] font-medium">{cli.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* <div className="logos overflow-hidden py-[60px] bg-[#222831] relative flex justify-start">
          <div className="logos-slide flex">
            <Image width={100} height={100} alt={"logo"} src="/logos/3m.svg" />
            <Image width={100} height={100} alt={"logo"} src="/logos/barstool-store.svg" />
            <Image width={100} height={100} alt={"logo"} src="/logos/budweiser.svg" />
            <Image width={100} height={100} alt={"logo"} src="/logos/mrbeast.svg" />
          </div>
          <div className="logos-slide flex">
            <Image width={100} height={100} alt={"logo"} src="./logos/3m.svg" />
            <Image width={100} height={100} alt={"logo"} src="./logos/barstool-store.svg" />
            <Image width={100} height={100} alt={"logo"} src="./logos/budweiser.svg" />
            <Image width={100} height={100} alt={"logo"} src="./logos/mrbeast.svg" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default RecentClients;
