'use client'
import { useAppDispatch } from '../../redux/hooks';
import { toggleModal } from '../../redux/slices/orderModalSlice';
import { setPackage } from '../../redux/slices/packageSlice';
import React from 'react'
import packages from '../../data/packages';
import { FaCheckCircle } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function GraphicsCards() {
    const dispatch = useAppDispatch()
    const graphicsPackages = packages?.find((p) => p.name === "graphics")?.packages
  return (
    <div className='min-w-full max-w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-14'>
        {graphicsPackages?.map((p, i) => (
            <div key={i} className="relative p-[1px] bg-[linear-gradient(to_right,_transparent,_#43D0F7)]">
                <div className={`relative max-w-[350px] w-full flex flex-col px-8 py-14 bg-[#222831] items-center ${i === 1 && 'pb-40'} overflow-hidden`}>
                    <div className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full"></div>
                    {/* {p.main && <div className='absolute top-[72px] -translate-y-1/2 p-3 bg-[#43D0F7] rounded-md text-xl'>-20%</div>} */}
                    <h2 className='text-3xl font-bold text-center'>{p.name}</h2>
                    <p className='py-8 px-5 border-b border-white mb-7 text-xl font-bold'>{p.price} <span className='text-sm font-light'>ETB</span></p>
                    <ul className='flex flex-col gap-5 w-fit text-sm mb-10'>
                        {p.features.map((f, i) => (
                            <li key={i} className='flex items-center gap-2'><FaCheckCircle className='min-w-[25px] text-xl'/> {f}</li>
                        ))}
                    </ul>
                    <div className="z-[1] p-[2px] bg-[linear-gradient(to_top_right,_#43D0F7,_#43D0F733)] rounded-md duration-300 hover:shadow-[0_0_15px_5px_#43D0F788]">
                        <div className="group/btn w-fit px-5 py-2 bg-[#222831] rounded-[4px] flex items-center gap-1 cursor-pointer" onClick={() => {
                            dispatch(setPackage(p.name))
                            dispatch(toggleModal(true))
                        }}>choose plan <FaArrowRightLong className='group-hover/btn:translate-x-[5px] duration-300' /></div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
