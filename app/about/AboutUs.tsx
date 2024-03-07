import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <div className='w-full mb-10 flex flex-col lg:flex-row mt-40 relative overflow-x-clip pt-0 px-5 sm:px-10 md:px-28 gap-5'>
        <div className='absolute left-0 bottom-[160px] -translate-x-1/2 translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>
        <div className='absolute right-0 bottom-[160px] translate-x-[300px] translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>
        <div className="relative lg:w-1/2 w-full flex flex-col">
            <h1 className='lg:text-[64px] lg:leading-[6rem] md:text-6xl md:leading-[5.25rem] text-[2.5rem] leading-[3rem] font-black font-poppins mb-10 tracking-[widest]'>About <span className='text-[#43D0F7]'>Us</span></h1>
            <p className='text-[25px] font-normal leading-[37.5px]'>At Chiraro, we are dedicated to providing top-notch digital marketing solutions tailored to elevate your brand and drive meaningful results. Explore our comprehensive range of services below:</p>
        </div>
        <div className="relative lg:w-1/2 w-full">
            <Image src='/images/about.svg' className='w-[100%_!important] object-contain' alt='about us' width={680} height={580}/>
        </div>
    </div>
  )
}
