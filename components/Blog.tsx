"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { temp } from "three/examples/jsm/nodes/Nodes.js";

const Blog = () => {
  const [cardOrder, setCardOrder] = useState([1, 2, 3]);
  const [blog, setBlog] = useState(1);

  const assignClass = (number: number) => {
    if (number === 1) {
      return "one";
    }
    if (number === 2) {
      return "two";
    }
    if (number === 3) {
      return "three";
    }
  };
  const shiftNext = () => {
    let temp = cardOrder[0];
    cardOrder[0] = cardOrder[1];
    cardOrder[1] = cardOrder[2];
    cardOrder[2] = temp;
    if (blog === 1) {
      setBlog(3);
      return;
    }
    setBlog(blog + 1);
  };
  const shiftPrev = () => {
    let temp = cardOrder[2];
    cardOrder[2] = cardOrder[1];
    cardOrder[1] = cardOrder[0];
    cardOrder[0] = temp;
    if (blog === 3) {
      setBlog(1);
      return;
    }
    setBlog(blog + 1);
  };

  return (
    <section className="w-full items-center justify-center flex relative">
      <div className="w-[calc(100%-200px)] flex flex-col gap-[50px] mb-20 md:mb-0 items-center justify-center">
        <div
          className="absolute top-[60%] right-10 w-16 flex justify-center items-center rounded-full h-16 bg-[#75d9f2cc] z-10 text-3xl translate-y-[50%] select-none"
          onClick={shiftPrev}
        >
          &gt;
        </div>
        <div
          className="absolute top-[60%] left-10 w-16 flex justify-center items-center rounded-full h-16 bg-[#75d9f2cc] z-10 text-3xl translate-y-[50%] select-none"
          onClick={shiftNext}
        >
          &lt;
        </div>
        <h1 className="text-[68px] font-[700] w-fit ">Blogs</h1>
        <div className="flex w-full justify-between items-stretch px-24 relative">
          <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>
          <div className="w-[50%] overflow-hidden">
            <div
              className="w-full h-full items-center flex justify-start duration-[1s] "
              style={{
                transform: `translateX(${(blog - 1) * -100}%)`,
              }}
            >
              <div className="min-w-full h-full flex flex-col gap-2 justify-center items-start pl-6">
                <h1 className="text-[46px] tracking-wide font-medium leading-[105%]">
                  The First of Web{" "}
                  <span className="text-[#5FE0F9] block pb-12">
                    Development
                  </span>
                </h1>
                <p className="text-[#C9C9C9] text-[20px] leading-[170%]">
                  We offer professional SEO services that help websites increase
                  their organic search score drastically in order to compete for
                  the highest rankings — even when it comes to highly
                  competitive keywords.
                </p>

                <Button href="/blogs/null/" name="Read More" right={true} />
              </div>
              <div className="min-w-full h-full flex flex-col gap-2 justify-center items-start pl-6">
                <h1 className="text-[46px] tracking-wide font-medium leading-[105%]">
                  The Second Blog{" "}
                  <span className="text-[#5FE0F9] block pb-12">
                    Development
                  </span>
                </h1>
                <p className="text-[#C9C9C9] text-[20px] leading-[170%]">
                  We offer professional SEO services that help websites increase
                  their organic search score drastically in order to compete for
                  the highest rankings — even when it comes to highly
                  competitive keywords.
                </p>

                <Button href="/blogs/null/" name="Read More" right={true} />
              </div>
              <div className="min-w-full h-full flex flex-col gap-2 justify-center items-start pl-6">
                <h1 className="text-[46px] tracking-wide font-medium leading-[105%]">
                  The Third of Web{" "}
                  <span className="text-[#5FE0F9] block pb-12">
                    Development
                  </span>
                </h1>
                <p className="text-[#C9C9C9] text-[20px] leading-[170%]">
                  We offer professional SEO services that help websites increase
                  their organic search score drastically in order to compete for
                  the highest rankings — even when it comes to highly
                  competitive keywords.
                </p>

                <Button href="/blogs/null/" name="Read More" right={true} />
              </div>
            </div>
          </div>

          <div className="translate-x-[20px] w-[50%] h-[700px] rounded-[42px] relative gap-2 justify-center items-start overflow-hidden">
            <div
              className={`card w-[400px] h-[600px] absolute bottom-0 right-0 rounded-[42px] ${assignClass(
                cardOrder[0]
              )} duration-500 border-[3px] flex justify-center items-center overflow-hidden`}
            >
              <Image
                src={"/images/webdev.svg"}
                alt="Future of web dev"
                className="rounded-md w-full object-fit absolute top-0 left-0 h-full z-[-1]"
                width={500}
                height={500}
              />
              <h1 className="absolute w-full flex justify-center top-[500px] left-[50%] -translate-x-[50%] text-[26px] tracking-widest font-[400] items-center gap-2">
                Read Time:
                <span className="text-[#5FE0F9] font-[700] tracking-widest text-[20px]">
                  {" "}
                  10 mins
                </span>
              </h1>
            </div>

            <div
              className={`card w-[400px] h-[600px] absolute bottom-0 right-0 rounded-[42px] ${assignClass(
                cardOrder[1]
              )} duration-500 border-[3px] flex justify-center items-center overflow-hidden`}
            >
              <Image
                src={"/images/webdev.svg"}
                alt="Future of web dev"
                className="rounded-md w-full object-fit absolute top-0 left-0 h-full z-[-1]"
                width={500}
                height={500}
              />
              <h1 className="absolute w-full flex justify-center top-[500px] left-[50%] -translate-x-[50%] text-[26px] tracking-widest font-[400] items-center gap-2">
                Read Time:
                <span className="text-[#5FE0F9] font-[700] tracking-widest text-[20px]">
                  {" "}
                  20 mins
                </span>
              </h1>
            </div>
            <div
              className={`card w-[400px] h-[600px] absolute bottom-0 right-0 rounded-[42px] ${assignClass(
                cardOrder[2]
              )} duration-500 border-[3px] flex justify-center items-center overflow-hidden`}
            >
              <Image
                src={"/images/webdev.svg"}
                alt="Future of web dev"
                className="rounded-md w-full object-fit absolute top-0 left-0 h-full z-[-1]"
                width={500}
                height={500}
              />
              <h1 className="absolute w-full flex justify-center top-[500px] left-[50%] -translate-x-[50%] text-[26px] tracking-widest font-[400] items-center gap-2">
                Read Time:
                <span className="text-[#5FE0F9] font-[700] tracking-widest text-[20px]">
                  {" "}
                  30 mins
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
