"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



const RecentClients = () => {
    const [prevTab, setPrevTab] = useState("all")
    const [tabs, setTabs] = useState("all")
    let [translate, setTranslate] = useState(0)

    const tabsHandler = (tab: string) => {
        setPrevTab(tabs)

        setTabs(tab)
    }


    return (
        <section className='w-full h-full items-center justify-center flex relative py-[150px]'>
            <div className='w-[calc(100%-200px)] flex flex-col gap-[50px] mb-20 md:mb-0 items-center justify-center relative '>
                <h1 className='text-[68px] font-[700] w-fit '>Our Recent<span className='text-[#43D0F7]'> Clients</span></h1>
                <div className='flex justify-start items-center gap-10 text-[20px] font-medium mt-[20px] select-none'>
                    <p className={`px-[15px] py-[7px] rounded-[24px] cursor-pointer duration-500 ${tabs === "all" ? "bg-[#43D0F7]" : ""}`} onClick={() => tabsHandler("all")}>All
                    </p>
                    <p className={`px-[15px] py-[7px] rounded-[24px] cursor-pointer duration-500 ${tabs === "web" ? "bg-[#43D0F7]" : ""}`} onClick={() => tabsHandler("web")}>Website Development</p>
                    <p className={`px-[15px] py-[7px] rounded-[24px] cursor-pointer duration-500 ${tabs === "gra" ? "bg-[#43D0F7]" : ""}`} onClick={() => tabsHandler("gra")}>Graphics Design</p>
                    <p className={`px-[15px] py-[7px] rounded-[24px] cursor-pointer duration-500 ${tabs === "app" ? "bg-[#43D0F7]" : ""}`} onClick={() => tabsHandler("app")}>Application Development</p>
                    <p className={`px-[15px] py-[7px] rounded-[24px] cursor-pointer duration-500 ${tabs === "smm" ? "bg-[#43D0F7]" : ""}`} onClick={() => tabsHandler("smm")}>Social Media Marketing</p>

                </div>
                <div className='overflow-hidden p-5'>
                    <div className='absolute top-[50%] -right-3 w-16 flex justify-center items-center rounded-full h-16 bg-[#43d0f7aa] z-10 text-3xl translate-y-[50%] select-none' onClick={
                        () => {
                            if (translate <= 5 - 3) {
                                setTranslate(translate + 1)
                            }
                            else {
                                setTranslate(0)
                            }
                            console.log(translate)
                        }
                    }>&gt;</div>
                    <div className='absolute top-[50%] left-3 w-16 flex justify-center items-center rounded-full h-16 bg-[#43d0f7aa] z-10 text-3xl translate-y-[50%] select-none' onClick={
                        () => {
                            if (translate > 0) {
                                setTranslate(translate - 1)
                            }
                            console.log(translate)
                        }
                    }>
                        &lt;
                    </div>
                    <div id='slider' className={`w-full flex justify-between gap-10 px-6 my-2 flex-nowrap duration-500 relative`}
                        style={{
                            transform: `translateX(calc((30% + 35px) * ${translate}*-1))`,
                        }

                        }
                    >


                        <Link href={"https://www.sawlatours.com/"} className='min-w-[30%] h-[270px] bg-[#393E4680] rounded-2xl p-4 relative [&>div]:hover:translate-y-0 overflow-hidden'>
                            <Image alt='Sawla Tours' width={800} height={800} src={"/images/sawla.png"} className="object-cover h-full w-full rounded-xl" />
                            <div className='w-full h-full absolute rounded-[20px] bg-[#43d0f7aa] blur-[17px] z-[-1] top-0 left-0'></div>

                            <div className='absolute bottom-0 left-0 w-full h-[60px] bg-[#43d0f7aa] rounded-b-2xl flex items-center justify-center duration-500 translate-y-16'>
                                <p className='text-[25px] font-medium'>Sawla Tours</p>
                            </div>
                        </Link>
                        <Link href={"https://www.bluenileexpeditions.com/"} className='min-w-[30%] h-[270px] bg-[#393E4680] rounded-2xl p-4 relative [&>.name]:hover:translate-y-0 overflow-hidden'>
                            <Image alt='Blue Nile Expedition' width={800} height={800} src={"/images/bluenile.png"} className="object-cover h-full w-full rounded-xl" />
                            <div className='w-full h-full absolute rounded-[20px] bg-[#43d0f7aa] blur-[17px] z-[-1] top-0 left-0'></div>

                            <div className='name absolute bottom-0 left-0 w-full h-[60px] bg-[#43d0f7aa] rounded-b-2xl flex items-center justify-center duration-500 translate-y-16'>
                                <p className='text-[25px] font-medium'>
                                    Blue Nile Expedition
                                </p>
                            </div>
                        </Link><Link href={"https://www.mettita.com/"} className='min-w-[30%] h-[270px] bg-[#393E4680] rounded-2xl p-4 relative [&>.name]:hover:translate-y-0 overflow-hidden'>
                            <Image alt='Metti Legal Services' width={800} height={800} src={"/images/metti.png"} className="object-cover h-full w-full rounded-xl" />
                            <div className='w-full h-full absolute rounded-[20px] bg-[#43d0f7aa] blur-[17px] z-[-1] top-0 left-0'></div>

                            <div className='name absolute bottom-0 left-0 w-full h-[60px] bg-[#43d0f7aa] rounded-b-2xl flex items-center justify-center duration-500 translate-y-16'>
                                <p className='text-[25px] font-medium'>
                                    Min-Tech Ethiopia
                                </p>
                            </div>
                        </Link>
                        <Link href={"https://www.bluenileexpeditions.com/"} className='min-w-[30%] h-[270px] bg-[#393E4680] rounded-2xl p-4 relative [&>.name]:hover:translate-y-0 overflow-hidden'>
                            <Image alt='Sawla Tours' width={800} height={800} src={"/images/sawla.png"} className="object-cover h-full w-full rounded-xl" />
                            <div className='w-full h-full absolute rounded-[20px] bg-[#43d0f7aa] blur-[17px] z-[-1] top-0 left-0'></div>

                            <div className='name absolute bottom-0 left-0 w-full h-[60px] bg-[#43d0f7aa] rounded-b-2xl flex items-center justify-center duration-500 translate-y-16'>
                                <p className='text-[25px] font-medium'>
                                    Metti Legal Services
                                </p>
                            </div>
                        </Link>

                        <Link href={"https://www.bluenileexpeditions.com/"} className='min-w-[30%] h-[270px] bg-[#393E4680] rounded-2xl p-4 relative [&>.name]:hover:translate-y-0 overflow-hidden'>
                            <Image alt='Sawla Tours' width={800} height={800} src={"/images/sawla.png"} className="object-cover h-full w-full rounded-xl" />
                            <div className='w-full h-full absolute rounded-[20px] bg-[#43d0f7aa] blur-[17px] z-[-1] top-0 left-0'></div>

                            <div className='name absolute bottom-0 left-0 w-full h-[60px] bg-[#43d0f7aa] rounded-b-2xl flex items-center justify-center duration-500 translate-y-16'>
                                <p className='text-[25px] font-medium'>
                                    Metti Legal Services
                                </p>
                            </div>
                        </Link>
                        <Link href={"https://www.bluenileexpeditions.com/"} className='min-w-[30%] h-[270px] bg-[#393E4680] rounded-2xl p-4 relative [&>.name]:hover:translate-y-0 overflow-hidden'>
                            <Image alt='Sawla Tours' width={800} height={800} src={"/images/sawla.png"} className="object-cover h-full w-full rounded-xl" />
                            <div className='w-full h-full absolute rounded-[20px] bg-[#43d0f7aa] blur-[17px] z-[-1] top-0 left-0'></div>

                            <div className='name absolute bottom-0 left-0 w-full h-[60px] bg-[#43d0f7aa] rounded-b-2xl flex items-center justify-center duration-500 translate-y-16'>
                                <p className='text-[25px] font-medium'>
                                    Min-Tech Ethiopia
                                </p>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className="mt-10 w-full flex justify-center items-center">
                    <Link href={"/services/seo"} className=' text-white text-2xl font-medium px-14 py-4 rounded-[20px] duration-500 shadow-[0px_0px_20px_4px_#43D0F788] bg-[linear-gradient(to_bottom_right,_#CCE7E9,_#43D0F7)]'>See More</Link>
                </div>
            </div>
        </section>
    )
}

export default RecentClients