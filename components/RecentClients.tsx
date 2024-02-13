"use client"
import React, { useState } from 'react'



const RecentClients = () => {
    const [prevTab, setPrevTab] = useState("all")
    const [tabs, setTabs] = useState("all")

    const tabsHandler = (tab: string) => {
        setPrevTab(tabs)

        setTabs(tab)
    }

    return (
        <section className='w-full h-full items-center justify-center flex relative py-[150px]'>
            <div className='w-[calc(100%-200px)] flex flex-col gap-[50px] mb-20 md:mb-0 items-center justify-center relative '>
                <h1 className='text-[68px] font-[700] w-fit '>Our Recent<span className='text-[#43D0F7]'> Clients</span></h1>
                <div className='flex justify-start items-center gap-10 text-[20px] font-medium mt-[50px] select-none'>
                    <p className={`px-[15px] py-[7px] rounded-[24px] cursor-pointer duration-500 ${tabs === "all" ? "bg-[#43D0F7]" : ""}`} onClick={() => tabsHandler("all")}>All
                    </p>
                    <p className={`px-[15px] py-[7px] rounded-[24px] cursor-pointer duration-500 ${tabs === "web" ? "bg-[#43D0F7]" : ""}`} onClick={() => tabsHandler("web")}>Website Development</p>
                    <p className={`px-[15px] py-[7px] rounded-[24px] cursor-pointer duration-500 ${tabs === "gra" ? "bg-[#43D0F7]" : ""}`} onClick={() => tabsHandler("gra")}>Graphics Design</p>
                    <p className={`px-[15px] py-[7px] rounded-[24px] cursor-pointer duration-500 ${tabs === "app" ? "bg-[#43D0F7]" : ""}`} onClick={() => tabsHandler("app")}>Application Development</p>
                    <p className={`px-[15px] py-[7px] rounded-[24px] cursor-pointer duration-500 ${tabs === "smm" ? "bg-[#43D0F7]" : ""}`} onClick={() => tabsHandler("smm")}>Social Media Marketing</p>

                </div>
                <div className='w-full flex justify-between '></div>
            </div>
        </section>
    )
}

export default RecentClients