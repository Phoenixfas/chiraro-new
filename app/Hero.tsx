import Link from 'next/link'
import React from 'react'
import Hero3d from './Hero3d'

export default function Hero() {
  return (
    <div id='hero' className='w-[calc(100%-200px)] h-auto md:h-screen pt-[150px] flex flex-col-reverse md:flex-row mb-20 md:mb-0 '>
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-start px-10 md:pl-10">
            <h1 className='lg:text-[90px] lg:leading-[6rem] md:text-6xl md:leading-[5.25rem] text-[2.5rem] leading-[3rem] font-bold mb-10'>GROW YOUR <span className='text-[#43D0F7]'>DIGITAL</span> PRESENCE</h1>
            {/* <p className='sm:text-2xl sm:leading-10 text-[1rem] leading-8 text-[#aaa] mb-10'>Innovation guides us, crafting digital excellence to propel your business higher.</p> */}
            <div className="flex items-center gap-10">
                <Link href={"/"} className=' text-white text-2xl font-medium px-14 py-4 rounded-[20px] duration-500 shadow-[0px_0px_20px_4px_#43D0F788] bg-[linear-gradient(to_bottom_right,_#CCE7E9,_#43D0F7)]'>Explore</Link>
                {/* <Link href={"/"} className='border-[3px] border-[#01BAEF] bg-[#01BAEF] text-white text-xl px-10 py-3 rounded-[9999px]'>Explore</Link> */}
            </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center md:pr-10">
          {/* <Hero3d /> */}
        </div>
    </div>
  )
}
