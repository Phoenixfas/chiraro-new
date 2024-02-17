"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'

const Blog = () => {
    const [cardOrder, setCardOrder] = useState([1, 2, 3])

    const assignClass = (number: number) => {
        if (number === 1) {
            return 'one'
        }
        if (number === 2) {
            return 'two'
        }
        if (number === 3) {
            return 'three'
        }
    }
    const shiftNext = () => {
        let temp = cardOrder[0]
        let temp2 = cardOrder[1]
        let temp3 = cardOrder[2]
        setCardOrder([temp2, temp3, temp])
    }
    const shiftPrev = () => {
        let temp = cardOrder[0]
        let temp2 = cardOrder[1]
        let temp3 = cardOrder[2]
        setCardOrder([temp3, temp, temp2])
    }

    return (
        <section className='w-full items-center justify-center flex relative'>
            <div className='w-[calc(100%-200px)] flex flex-col gap-[50px] mb-20 md:mb-0 items-center justify-center'>
                <div className='absolute top-[60%] right-10 w-16 flex justify-center items-center rounded-full h-16 bg-[#75d9f2cc] z-10 text-3xl translate-y-[50%] select-none' onClick={
                    shiftNext
                }
                >&gt;</div>
                <div className='absolute top-[60%] left-10 w-16 flex justify-center items-center rounded-full h-16 bg-[#75d9f2cc] z-10 text-3xl translate-y-[50%] select-none' onClick={shiftPrev
                }>
                    &lt;
                </div>
                <h1 className='text-[68px] font-[700] w-fit '>Blogs</h1>
                <div className="flex w-full pt-10 justify-between items-center px-24 relative">
                    <div className='absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-[#43D0F7] opacity-30 blur-[100px]'> </div>
                    <div className='w-[47%] flex flex-col gap-2 justify-center items-start'>
                        <h1 className='text-[46px] tracking-wide font-medium leading-[105%]'>The Future of Web <span className='text-[#5FE0F9] block pb-12'>
                            Development</span></h1>
                        <p className='text-[#C9C9C9] text-[20px] leading-[170%]'>We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings — even when it comes to highly competitive keywords.</p>

                        <Button href='/blogs/null/' name='Read More' right={true} />
                    </div>
                    <div className='translate-x-[20px] w-[50%] h-[700px] rounded-[42px] relative gap-2 justify-center items-start overflow-hidden'>
                        <div className={`card w-[400px] h-[600px] absolute bottom-0 right-0 rounded-[42px] ${assignClass(cardOrder[2])} duration-500`}></div>
                        <div className={`card w-[400px] h-[600px] absolute bottom-0 right-0 rounded-[42px] ${assignClass(cardOrder[1])} duration-500`}>
                        </div>
                        <div className={`card w-[400px] h-[600px] absolute bottom-0 right-0 rounded-[42px] ${assignClass(cardOrder[0])} duration-500`}></div>

                    </div>
                </div>

            </div>
        </section >
    )
}

export default Blog