import React from 'react'
import WebCards from './WebCards'

export default function WebPricing() {
    return (
        <div className='min-h-screen w-full flex flex-col items-center mt-40 relative'>
            <div className='absolute left-0 bottom-[160px] w-[1px] h-[1px] shadow-2xl shadow-white'></div>
            <h1 className='text-4xl font-black'><span className='text-[#43D0F7]'>Web</span> Pricing</h1>
            <WebCards />
        </div>
    )
}
