'use client'
import React from 'react'
import WebCards from './WebCards'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { changeWType } from '../../redux/slices/wTypeSlice'

export default function WebPricing() {
    const dispatch = useAppDispatch()
    const wType = useAppSelector((state) => state.wType.value)

    return (
        <div className='w-full flex flex-col items-center mt-40 relative overflow-x-clip px-5'>
            <div className='absolute left-0 bottom-[160px] -translate-x-1/2 translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>
            <div className='absolute right-0 bottom-[160px] translate-x-[300px] translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>
            <h1 className='text-4xl font-black text-center'><span className='text-[#43D0F7]'>Web</span> Pricing</h1>
            <div className="w-full flex flex-col md:flex-row justify-center items-center py-10 gap-5">
                <div className={`px-8 py-2 text-2xl text-center font-semibold rounded-full cursor-pointer duration-300 border-2 border-[#ffffff00] ${wType === "static" && 'border-[#43D0F7ff_!important] shadow-[0px_5px_10px_0px_#43D0F755]'}`} onClick={() => dispatch(changeWType("static"))}>Static Web Presence</div>
                <div className={`px-8 py-2 text-2xl text-center font-semibold rounded-full cursor-pointer duration-300 border-2 border-[#ffffff00] ${wType === "dynamic" && 'border-[#43D0F7ff_!important] shadow-[0px_5px_10px_0px_#43D0F755]'}`} onClick={() => dispatch(changeWType("dynamic"))}>Dynamic Web Application</div>
            </div>
            <p className='w-full max-w-[800px] text-xl text-center mb-16'>Unlock the full potential of your business with our affordable pricing plans. Choose the perfect fit and let&apos;s grow together!</p>
            <WebCards />
        </div>
    )
}