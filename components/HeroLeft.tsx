"use client"
import Button from './Button'
import { motion } from 'framer-motion'

const HeroLeft = () => {
    return (
        <motion.div
            initial={{ translateX: "-100%", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ delay: 1, length: 1 }}
            className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-start px-10 md:pl-20 md:pr:10">
            <h1 className="lg:text-[90px] lg:leading-[6rem] md:text-6xl md:leading-[5.25rem] text-[2.5rem] leading-[3rem] font-bold mb-10 tracking-[widest]">
                GROW YOUR <span className="text-[#43D0F7]">DIGITAL</span> PRESENCE
            </h1>
            <p className="text-[#c9c9c9] text-[24px] font-light md:hidden block my-5">
                Elevating brands through innovative strategies and targeted campaigns. Your vision, our expertise.
            </p>
            {/* <p className='sm:text-2xl sm:leading-10 text-[1rem] leading-8 text-[#aaa] mb-10'>Innovation guides us, crafting digital excellence to propel your business higher.</p> */}
            <Button right={true} href={"/services"} name={"Explore Services"} />
        </motion.div>
    )
}

export default HeroLeft