import Image from 'next/image'
import React from 'react'

export default function OurMission() {
  return (
    <div className='w-full flex flex-col items-center relative overflow-x-clip mt-40 px-5 sm:px-10 md:px-28 gap-20'>
      <div className='absolute left-0 bottom-[160px] -translate-x-1/4 translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>
      <div className="relative flex flex-col items-center">
        <h1 className='lg:text-[64px] text-center lg:leading-[6rem] md:text-6xl md:leading-[5.25rem] text-[2.5rem] leading-[3rem] font-black font-poppins mb-10 tracking-[widest]'>Our <span className='text-[#43D0F7]'>Mission</span></h1>
        <p className='text-[25px] text-center font-normal leading-[37.5px]'>Our mission at Chiraro is simple: to empower businesses with the tools and strategies they need to succeed online. We believe in the power of digital marketing to drive growth, enhance brand visibility, and create meaningful connections with target audiences. By combining creativity, strategy, and technical expertise, we strive to help our clients achieve their goals and stand out in today's competitive landscape.</p>
      </div>
      <div className="relative w-full px-5 lg:px-[100px] xl:px-[200px] 2xl:px-[300]">
          <Image src='/images/mission.svg' className='w-[100%_!important] object-contain' alt='about us' width={680} height={580}/>
      </div>
    </div>
  )
}
