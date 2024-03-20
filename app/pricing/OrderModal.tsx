'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleModal } from '../../redux/slices/orderModalSlice';
import { AnimatePresence, motion } from 'framer-motion'
import ContactModal from '@/components/ContactModal';

export default function OrderModal() {
    const dispatch = useAppDispatch()
    const modalToggled = useAppSelector(state => state.orderModal.value)
    const pkg = useAppSelector(state => state.package.value)
    const formRef = useRef(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setCompany] = useState("")
    const [website, setWebsite] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true);
        const data = {
            name,
            email,
            phone,
            company,
            website,
            package: pkg,
            description
        };
        try {
            const res = await fetch("/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (res.status === 200) {
                setName("");
                setEmail("");
                setPhone("");
                setCompany("");
                setWebsite("");
                setDescription("");
                setLoading(false);
                setSent(true);
                setSuccess(true);
                setTimeout(() => {
                    setSent(false);
                }, 5000);
                if (formRef.current) (formRef.current as HTMLFormElement).reset();
            }
            if (res.status === 400) {
                setLoading(false);
                setSent(true);
                setSuccess(false);
                console.log(res.status, res.statusText);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
            console.log(e);
        }
    };

    return (
        <AnimatePresence>
            {modalToggled &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed left-0 top-0 z-[9999999999] w-full h-screen bg-[#000000aa] flex flex-col items-center justify-center px-7 pt-80 pb-10 sm:py-20 overflow-y-auto'>
                    <motion.div initial={{ y: "100%" }} animate={{ y: "0%" }} exit={{ y: "100%" }} transition={{ duration: .3, damping: 8, bounce: .5, type: "spring" }} className="relative flex ">
                        <div className={`px-12 w-full fixed -top-[30px] z-10 left-1/2 opacity-0 duration-300 sent flex justify-center ${sent ? "sent" : "hide"}`}
                        >
                            <ContactModal success={success} />
                        </div>
                        <div className="z-[100] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full p-3 bg-[#43D0F7] cursor-pointer" onClick={() => dispatch(toggleModal(false))}><IoClose size={30} /></div>
                        <div className="hidden min-w-[300px] bg-[radial-gradient(#43D0F7,#222831)] rounded-l-xl overflow-hidden md:flex items-center justify-center">
                            <Image src="/images/logo/nav_logo_white.svg" alt="Chiraro" width={200} height={200} />
                        </div>

                        <div className="max-w-[700px] h-full overflow-y-auto bg-[#222831] rounded-xl md:rounded-l-none overflow-hidden flex flex-col p-8">
                            <h1 className="text-4xl font-black text-[#43D0F7] mb-10">ORDER NOW</h1>
                            <form onSubmit={handleSubmit} className="flex flex-wrap gap-5">
                                <input type="text" placeholder="Your Full Name" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setName(e.target.value)} value={name} />
                                <input type="text" placeholder="Your Email" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setEmail(e.target.value)} value={email} />
                                <input type="text" placeholder="Your Phone" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setPhone(e.target.value)} value={phone} />
                                <input type="text" placeholder="Your Company Name" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setCompany(e.target.value)} value={company} />
                                <input type="text" placeholder="Your Company Website (if available)" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setWebsite(e.target.value)} value={website} />
                                <input type="text" disabled placeholder={pkg} className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] placeholder:text-[#43D0F7] outline-none" value={pkg} />
                                <textarea placeholder="A brief description of the project you need" className="w-full max-h-40 p-3 duration-300 rounded-md bg-[#222831] border border-[#43D0F7] focus:border-white text-[#43D0F7] outline-none" onChange={(e) => setDescription(e.target.value)} value={description} />
                                <button type='submit' className="w-full p-3 duration-300 rounded-md bg-[#43D0F7] hover:bg-white text-[#222831] font-bold">{loading ? "Ordering..." : sent ? "Order Placed Successfuly" : "Order Service"}</button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
}
