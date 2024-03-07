import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Contact = () => {
    return (
        <section className="flex flex-col pt-16 md:pt-44 w-full px-7 sm:px-[50px] lg:px-[200px] relative justify-center items-center text-center">
            <div className="absolute top-[55%] right-[200px] w-[500px] h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>

            <h1 className="text-[40px] sm:text-[45px] px-4 lg:text-[60px] font-[700] w-fit text-center capitalize">
                Elevate your <br />
                digital presence with  <span className="text-[#43D0F7]">Chiraro</span>
            </h1>
            <div className='flex justify-center items-center flex-col'>
                <Image src='/images/contact.png' alt='Contact Us' width={500} height={500} className='w-[80%] md:w-1/2 xl:w-1/3' />
                <div className='w-full md:w-[70%]'>
                    <p className='text-[#e5e5e5] leading-[200%] text-[22px] font-light text-center mb-10'>Contact us today to discuss your project requirements and take the first step to wards achieving your goals!</p>
                    <Button right={false} href={'/contact'} name={'Contact Us'} />
                </div>

            </div>

        </section>
    )
}

export default Contact