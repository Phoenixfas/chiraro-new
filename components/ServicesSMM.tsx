import Image from 'next/image'
import React from 'react'
import Button from './Button'

const ServicesSMM = () => {
    return (
        <section className="flex flex-col pt-16 lg:pt-24 w-full px-7 sm:px-[50px] lg:px-[200px] relative justify-center items-center">

            <h1 className="text-[40px] sm:text-[45px] px-4 text-center sm:text-[60px] font-[700] w-fit mb-8">
                Digital  <span className="text-[#43D0F7]">Marketing</span>
            </h1>
            <div className="flex justify-center items-center w-full flex-col-reverse lg:flex-row gap-10 md:gap-0">
                <div className='w-full md:w-1/2 px-0 xl:px-10 text-[#e5e5e5] leading-[200%] text-[28px] md:text-[25px] font-semibold flex flex-col gap-10 items-center text-center md:mb-6 mb-10'>
                    <p className=''>Social Media Marketing</p>
                    <p className=''>Pay-Per-Click Advertising (PPC)</p>
                    <p className=''>Content Marketing</p>
                    <p className=''>Email Marketing</p>
                </div>
                <div className='w-[80%] md:w-1/2'>

                    <Image src='/images/digitalm.svg' alt='Digital Marketing' width={1000} height={1000} />
                </div>
            </div>
            <Button right={false} href={"/contact"} name={"Request Service"} />

        </section>
    )
}

export default ServicesSMM