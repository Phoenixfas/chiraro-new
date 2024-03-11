import Button from '@/components/Button'
import HeroImage from '@/components/HeroImage'
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <div className='w-full pt-[150px] flex flex-col mb-10 lg:mb-0 px-7 sm:px-[50px] lg:px-[100px] relative'>
      <div className='absolute right-0 bottom-[160px] translate-x-0 sm:translate-x-4 md:translate-x-16 xl:translate-x-[100px] translate-y-1/2 w-full sm:w-[300px] md:w-[600px] h-full sm:h-[300px] md:h-[600px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>


      <div className='flex justify-center items-center flex-col-reverse lg:flex-row gap-16 lg:gap-0'>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:items-start flex-col gap-7 text-center lg:text-start">
          <h1 className='text-[50px] sm:text-[60px] font-[800] w-fit'>About <span className='text-[#43D0F7]'>Us</span></h1>
          <p className='text-[#e5e5e5] leading-[200%] text-[22px] font-light'>Welcome to Chiraro Digital, your digital marketing partner in Ethiopia. Specializing in web development, graphic design, and social media marketing, we offer tailored services to enhance your brand&apos;s online presence.
            <br /><br />
            With expertise in the Ethiopian market, we craft innovative strategies to drive tangible results for businesses of all sizes.</p>
        </div>
        <HeroImage source='/images/about.svg' />
      </div>
      <Button right={false} href={"#services"} name={"Explore"} className={"pt-10"} />

    </div>
  )
}
