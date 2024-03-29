'use client'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { toggleModal } from '../../redux/slices/orderModalSlice';
import { setPackage } from '../../redux/slices/packageSlice';
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import packages from '../../data/packages';

export default function WebCards() {
    const dispatch = useAppDispatch()
    const wType = useAppSelector((state) => state.wType.value)
    const staticPackages = packages.find((p) => p.name === "web")?.categories.find((c) => c.name === "static")?.packages
    const dynamicPackages = packages.find((p) => p.name === "web")?.categories.find((c) => c.name === "dynamic")?.packages
    return (
        <div className="w-full overflow-hidden">
            <div className={`relative flex duration-300 ${wType === "static" ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="min-w-full max-w-full flex flex-col md:flex-row md:flex-wrap items-center md:justify-center gap-14 [&>*:nth-child(even)]:py-28 [&>*:nth-child(even)]:bg-[#1E1E1E] [&>*:nth-child(even)]:border-[5px] [&>*:nth-child(even)]:border-[#43D0F7]">
                    {staticPackages?.map((p, i) => (
                        <div key={i} className="relative max-w-[350px] w-full flex flex-col px-8 py-14 bg-[#2F404B] rounded-xl items-center">
                            {p.main && <div className='absolute top-14 -translate-y-1/2 p-3 bg-[#43D0F7] rounded-md text-xl'>-20%</div>}
                            <h2 className='text-3xl font-bold text-center'>{p.name}</h2>
                            <p className='py-8 px-5 border-b border-white mb-7 text-xl font-bold'>{p.price} <span className='text-sm font-light'>ETB</span></p>
                            <ul className='flex flex-col gap-5 w-fit text-sm mb-10'>
                                {p.features.map((f, i) => (
                                    <li key={i} className='flex items-center gap-2'><FaCheckCircle className='min-w-[25px] text-xl'/> {f}</li>
                                ))}
                            </ul>
                            <div className="group/btn w-fit px-5 py-2 bg-[#43D0F7] rounded-md flex items-center gap-1 cursor-pointer" onClick={() => {
                                dispatch(setPackage(p.name))
                                dispatch(toggleModal(true))
                            }}>choose plan <FaArrowRightLong className='group-hover/btn:translate-x-[5px] duration-300' /></div>
                        </div>
                    ))}
                </div>
                
                <div className="min-w-full max-w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-14 [&>*:nth-child(even)]:py-28 [&>*:nth-child(even)]:bg-[#1E1E1E] [&>*:nth-child(even)]:border-[5px] [&>*:nth-child(even)]:border-[#43D0F7]">
                    {dynamicPackages?.map((p, i) => (
                        <div key={i} className="relative max-w-[350px] w-full flex flex-col px-8 py-14 bg-[#2F404B] rounded-xl items-center">
                            {p.main && <div className='absolute top-14 -translate-y-1/2 p-3 bg-[#43D0F7] rounded-md text-xl'>-20%</div>}
                            <h2 className='text-3xl font-bold text-center'>{p.name}</h2>
                            <p className='py-8 px-5 border-b border-white mb-7 text-xl font-bold'>{p.price} <span className='text-sm font-light'>ETB</span></p>
                            <ul className='flex flex-col gap-5 w-fit text-sm mb-10'>
                                {p.features.map((f, i) => (
                                    <li key={i} className='flex items-center gap-2'><FaCheckCircle className='min-w-[25px] text-xl'/> {f}</li>
                                ))}
                            </ul>
                            <div className="group/btn w-fit px-5 py-2 bg-[#43D0F7] rounded-md flex items-center gap-1 cursor-pointer" onClick={() => {
                                dispatch(setPackage(p.name))
                                dispatch(toggleModal(true))
                            }}>choose plan <FaArrowRightLong className='group-hover/btn:translate-x-[5px] duration-300' /></div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}
