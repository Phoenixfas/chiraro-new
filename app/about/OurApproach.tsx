'use client'
import Image from 'next/image'
import React from 'react'
import approaches from '../../data/approaches'

export default function OurApproach() {
  return (
    <div className='w-full flex flex-col items-center relative overflow-x-clip mt-40 px-5 sm:px-10 md:px-28 gap-20'>
      <div className='absolute right-0 bottom-[160px] translate-x-1/4 translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>
      <div className="relative flex flex-col items-center">
        <h1 className='lg:text-[64px] text-center lg:leading-[6rem] md:text-6xl md:leading-[5.25rem] text-[2.5rem] leading-[3rem] font-black font-poppins mb-10 tracking-[widest]'>Our <span className='text-[#43D0F7]'>Approach</span></h1>
        <p className='text-[25px] text-center font-normal leading-[37.5px]'>At Chiraro, we take a collaborative and personalized approach to every project we undertake. We understand that every business is unique, which is why we work closely with our clients to develop customized solutions that align with their objectives and budget. Whether you&apos;re a small startup or a large enterprise, we&apos;re committed to providing you with the highest level of service and support every step of the way.</p>
      </div>
      <div className="relative w-full px-2 2xl:px-[100px]">
        <div className="w-full max-w-full overflow-x-scroll flex gap-10 scrollbar-none">
          {approaches?.map((approach, index) => (
            <div key={index} className="min-w-[500px] max-w-[500px] h-[380px] p-8 overflow-hidden flex flex-col bg-[#2F404B] border-2 border-[#2F404B] hover:border-[#43D0F7] duration-300">
              <Image className='mb-3 h-[60px_!important]' src={approach.img} alt={approach.title} width={60} height={60} />
              <h1 className='w-fit text-[25px] leading-[37.5px] pb-2 font-semibold font-poppins mb-5 relative before:absolute before:left-0 before:bottom-0 before:bg-[#43D0F7] before:rounded before:h-[3px] before:w-1/2'>{approach.title}</h1>
              <p className='text-[20px] font-normal'>{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
