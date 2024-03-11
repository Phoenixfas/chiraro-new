"use client"
import Image from "next/image";
import React, { useState, useRef } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email,
      message,
    };
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        setEmail("");
        setMessage("");
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        if (formRef.current) (formRef.current as HTMLFormElement).reset();
      }
      if (res.status === 400) {
        setLoading(false);
        console.log(res.status, res.statusText);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      console.log(e);
    }
  };
  return (
    <section
      id="offers"
      className="w-full items-center justify-center flex relative"
    >
      <div className="px-4 sm:px-[50px] lg:px-[100px] xl:px-[200px] pt-10 md:pt-[150px] lg:pt-[200px] flex items-center justify-center">
        <div className="w-full px-0 sm:px-12 flex flex-col md:flex-row justify-center items-center rounded-lg relative py-10">
          <div className="rect"></div>
          <div className="w-full md:w-1/2 px-4 sm:p-8 flex flex-col gap-3">
            <div>
              <h1 className="text-[35px] sm:text-[46px] text-center md:text-start tracking-wide font-semibold leading-[105%]">
                Subscribe to our{" "}
                <span className="text-[#5FE0F9] block pb-4">Newsletter</span>
              </h1>
              <p className={`duration-300 text-[#5FE0F9] text-lg text-center md:text-start ${success ? "opacity-1" : "opacity-0"} tracking-wider`}>
                Thanks for subscribing to our newsletter!
              </p>
            </div>

            <form className="flex flex-col gap-1" ref={formRef}>
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 pl-6 rounded-sm mb-4 input duration-500 text-gray-500"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="email"
                placeholder="What's on your mind"
                className="p-3 pl-6 rounded-sm mb-4 input duration-500 text-gray-500"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <button onClick={handleSubmit} className="p-3 button-bg text-white rounded-sm button overflow-hidden">
                {loading ? "Loading..." : "Subscribe"}
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/newsletter.svg"
              height={500}
              width={500}
              alt="newsletter"
              className="w-[90%] h-[90%] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
