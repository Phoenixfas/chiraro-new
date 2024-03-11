"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const HeroImage = ({ source }: { source: string }) => {

    return (
        <motion.div initial={{ translateY: "100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.3, length: 1 }} className="w-full lg:w-1/2 h-fit flex justify-center items-center">

            <Image src={source} className='w-full sm:h-[400px] flex justify-center items-center' alt='about us' width={500} height={400} />
        </motion.div>
    )
}

export default HeroImage