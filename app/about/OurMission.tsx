import Image from 'next/image'
import React from 'react'

export default function OurMission() {
  return (
    <div className='flex flex-col pt-10 lg:pt-24 w-full px-7 sm:px-[50px] lg:px-[200px] relative justify-center items-center text-center gap-12'>
      <div className='absolute left-0 bottom-[160px] translate-x-0 sm:translate-x-4 md:translate-x-16 xl:translate-x-[100px] translate-y-full sm:translate-y-1/2 w-full sm:w-[300px] md:w-[600px] h-full sm:h-[300px] md:h-[600px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>

      <div className="relative flex flex-col items-center">
        <h1 className='text-[40px] sm:text-[45px] px-4 text-center lg:text-[60px] font-[700] w-fit mb-10'>Our <span className='text-[#43D0F7]'>Mission</span></h1>
        <p className='text-[#e5e5e5] leading-[200%] text-[22px] font-light text-center'>Our mission at Chiraro is simple: to empower businesses with the tools and strategies they need to succeed online. We believe in the power of digital marketing to drive growth, enhance brand visibility, and create meaningful connections with target audiences. <br /> <br /> By combining creativity, strategy, and technical expertise, we strive to help our clients achieve their goals and stand out in today&apos;s competitive landscape. Whether you&apos;re looking to increase your online presence, generate more leads, or boost your sales, we&apos;re here to help you every step of the way.
        </p>
      </div>
      <Image src='/images/mission.svg' className='w-[90%] md:w-[75%] xl:w-[60%] object-contain' alt='about us' width={680} height={580} />
    </div>
  )
}
