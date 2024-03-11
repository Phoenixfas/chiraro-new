'use client'
import Image from 'next/image'
import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleModal } from '../../redux/slices/orderModalSlice';
import { AnimatePresence, motion } from 'framer-motion'

export default function OrderModal() {
    const dispatch = useAppDispatch()
    const modalToggled = useAppSelector(state => state.orderModal.value)
    const pkg = useAppSelector(state => state.package.value)

    const [full_name, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setCompany] = useState("")
    const [website, setWebsite] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log({full_name, email, phone, company, website, description, package: pkg})
    }
  return (
    <AnimatePresence>
        {modalToggled &&
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='fixed left-0 top-0 z-[9999999999] w-full min-h-screen bg-[#000000aa] flex items-center justify-center px-7'>
                <motion.div initial={{y: "100%"}} animate={{y: "0%"}} exit={{y: "100%"}} transition={{duration: .3, damping: 8, bounce: .5, type: "spring" }} className="relative flex my-20">
                    <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full p-3 bg-[#43D0F7] cursor-pointer" onClick={() => dispatch(toggleModal(false))}><IoClose size={30} /></div>
                    <div className="hidden min-w-[300px] bg-[radial-gradient(#43D0F7,#222831)] rounded-l-xl overflow-hidden md:flex items-center justify-center">
                        <Image src="/images/logo/nav_logo_white.svg" alt="Chiraro" width={200} height={200} />
                    </div>

                    <div className="max-w-[700px] bg-[#222831] rounded-xl md:rounded-l-none overflow-hidden flex flex-col p-8">
                        <h1 className="text-4xl font-black text-[#43D0F7] mb-10">ORDER NOW</h1>
                        <form onSubmit={handleSubmit} className="flex flex-wrap gap-5">
                            <input type="text" placeholder="Your Full Name" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setFullName(e.target.value)} />
                            <input type="text" placeholder="Your Email" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder="Your Phone" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setPhone(e.target.value)} />
                            <input type="text" placeholder="Your Company Name" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setCompany(e.target.value)} />
                            <input type="text" placeholder="Your Company Website (if available)" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setWebsite(e.target.value)} />
                            <input type="text" disabled placeholder={pkg} className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] placeholder:text-[#43D0F7] outline-none" />
                            <textarea placeholder="A brief description of the project you need" className="w-full p-3 duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setDescription(e.target.value)} />
                            <button type='submit' className="w-full p-3 duration-300 rounded-md bg-[#43D0F7] hover:bg-white text-[#222831] font-bold">Order Now</button>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        }
    </AnimatePresence>
  )
}
