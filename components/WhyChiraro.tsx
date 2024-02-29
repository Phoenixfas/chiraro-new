import React from 'react'
import Image from 'next/image'

const WhyChiraro = () => {
    return (
        <section className='flex flex-col pt-48 w-full relative justify-center items-center'>
            <h1 className="text-[60px] font-[700] w-fit mb-16">
                Why Chiraro <span className="text-[#43D0F7]">Digital</span>
            </h1>

            <div className="w-full relative flex flex-col gap-48 px-[200px]">
                <Image src='/images/why.svg' alt='Why Chiraro' width={1000} height={500} className='
                    absolute top-0 left-0 w-full h-full object-fit z-10
                '/>
                <div className="absolute top-[25%] left-[-100px] w-[500px] h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>
                <div className="absolute top-[25%] right-[-100px] w-[500px] h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col items-center justify-center w-[30%] text-center'>
                        <h1 className='text-[24px] font-semibold text-[#43D0F7] mb-5'>Expertise</h1>
                        <p className='text-[20px] font-[400] leading-[200%]'>Our team comprises experienced professionals with a deep understanding of digital marketing trends and techniques.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[30%] text-center translate-y-24'>
                        <h1 className='text-[24px] font-semibold text-[#43D0F7] mb-5 '>Proven Results</h1>
                        <p className='text-[20px] font-[400] leading-[200%]'>With a track record of delivering successful outcomes for our clients, we strive for excellence in everything we do.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[30%] text-center'>
                        <h1 className='text-[24px] font-semibold text-[#43D0F7] mb-5'>Customization</h1>
                        <p className='text-[20px] font-[400] leading-[200%]'>We tailor our solutions to meet your unique business goals and objectives.</p>
                    </div>
                </div>
                <div className='flex justify-center gap-32 items-center translate-y-24'>
                    <div className='flex flex-col items-center justify-center w-[30%] text-center'>
                        <h1 className='text-[24px] font-semibold text-[#43D0F7] mb-5'>Continuous <br />
                            Improvement</h1>
                        <p className='text-[20px] font-[400] leading-[200%]'>We continually optimize our strategies to ensure maximum efficiency and ROI for your business. </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[30%] text-center'>
                        <h1 className='text-[24px] font-semibold text-[#43D0F7] mb-5'>Transparent
                            Communication</h1>
                        <p className='text-[20px] font-[400] leading-[200%]'>We believe in open and honest communication, keeping you informed throughout the process.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyChiraro