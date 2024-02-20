'use client'
import { useAppSelector } from '../../redux/hooks'
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import packages from '../../data/packages';

export default function WebCards() {
    const wType = useAppSelector((state) => state.wType.value)
    const staticPackages = packages.find((p) => p.name === "web")?.categories.find((c) => c.name === "static")?.packages
    const dynamicPackages = packages.find((p) => p.name === "web")?.categories.find((c) => c.name === "dynamic")?.packages
    return (
        <div className="w-full overflow-hidden">
            <div className={`relative flex duration-300 ${wType === "static" ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="min-w-full max-w-full flex items-center justify-center gap-14">
                    {staticPackages?.map((p, i) => (
                        <div key={i} className="max-w-[350px] w-full flex flex-col px-8 py-14 bg-[#2F404B] rounded-xl items-center">
                            <h2 className='text-3xl font-bold'>{p.name}</h2>
                            <p className='py-8 px-5 border-b border-white mb-7 text-xl font-bold'>{p.price} <span className='text-sm font-light'>ETB</span></p>
                            <ul className='flex flex-col gap-5 w-fit text-sm mb-10'>
                                {p.features.map((f, i) => (
                                    <li key={i} className='flex items-center gap-2'><FaCheckCircle className='min-w-[25px] text-xl'/> {f}</li>
                                ))}
                            </ul>
                            <div className="group/btn w-fit px-5 py-2 bg-[#43D0F7] rounded-md flex items-center gap-1 cursor-pointer">choose plan <FaArrowRightLong className='group-hover/btn:translate-x-[5px] duration-300' /></div>
                        </div>
                    ))}
                </div>
                
                <div className="min-w-full max-w-full flex items-center justify-center gap-14">
                    dynamic
                </div>
            </div>
        </div>
    )
}
