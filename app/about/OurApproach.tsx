'use client'
import Image from 'next/image'
import React from 'react'
import approaches from '../../data/approaches'

export default function OurApproach() {
  return (
    <div className='flex flex-col pt-10 lg:pt-24 w-full px-7 sm:px-[50px] lg:px-[200px] relative justify-center items-center text-center gap-12'>
      <div className='absolute left-0 bottom-[160px] translate-x-0 sm:translate-x-4 md:translate-x-16 xl:translate-x-[100px] translate-y-full sm:translate-y-1/2 w-full sm:w-[300px] md:w-[600px] h-full sm:h-[300px] md:h-[600px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>
      <div className="relative flex flex-col items-center">
        <h1 className='text-[40px] sm:text-[45px] px-4 text-center lg:text-[60px] font-[700] w-fit mb-10'>Our <span className='text-[#43D0F7]'>Approach</span></h1>
        <p className='text-[#e5e5e5] leading-[200%] text-[22px] font-light text-center'>At Chiraro, we take a collaborative and personalized approach to every project we undertake. We understand that every business is unique, which is why we work closely with our clients to develop customized solutions that align with their objectives and budget. <br /> <br />Whether you&apos;re a small startup or a large enterprise, we&apos;re committed to providing you with the highest level of service and support every step of the way.</p>
      </div>
      <div className="relative w-full">
        <div className="w-full max-w-full overflow-x-scroll flex items-stretch gap-5 sm:gap-10 scrollbar-none">
          {approaches?.map((approach, index) => (
            <div key={index} className="min-w-[95%] sm:min-w-[500px] max-w-[500px] h-[550px] sm:h-[380px] p-8 overflow-hidden flex flex-col bg-[#2F404B] border-2 border-[#2F404B] hover:border-[#43D0F7] duration-300 items-center sm:items-start">
              <Image className='mb-3 h-[60px_!important]' src={approach.img} alt={approach.title} width={60} height={60} />
              <h1 className='w-fit text-[25px] leading-[37.5px] pb-2 font-semibold  mb-5 relative before:absolute before:left-0 before:bottom-0 before:bg-transparent sm:before:bg-[#43D0F7] before:rounded before:h-[3px] before:w-1/2'>{approach.title}</h1>
              <p className='text-[#e5e5e5] leading-[200%] text-[18px] font-light sm:text-start text-center'>{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
