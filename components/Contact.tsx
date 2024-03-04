import React from 'react'
import Button from './Button'

const Contact = () => {
    return (
        <section className="flex flex-col pt-48 w-full px-[200px] relative justify-center items-center text-center">
            <div className="absolute top-[55%] right-[200px] w-[500px] h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>

            <h1 className="text-[45px] font-[700] w-fit mb-16 text-center capitalize">
                Elevate your <br />
                digital presence with  <span className="text-[#43D0F7]">Chiraro</span>
            </h1>

            <p className='text-[22px] font-[400] leading-[200%] mb-16 px-[200px]'>Contact us today to discuss your project requirements and take the first step to wards achieving your goals!</p>
            <Button right={false} href={'/contac'} name={'Contact Us'} />
        </section>
    )
}

export default Contact