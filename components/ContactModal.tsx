import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";

const ContactModal = ({ success }: { success: boolean }) => {
    return (
        <div className='boxShadow w-full md:w-[600px] flex justify-center items-center relative px-10 py-5 z-10 rounded-xl text-center'>
            <div className="rect2"></div>
            {success ? <>
                <FaCircleInfo className='mr-4 text-green-400 hidden md:block' /> Your message was sent successfuly, we&lsquo;ll reply within 24 hours</> : <><FaCircleInfo className='mr-4 text-red-400 hidden md:block' />
                Something went wrong, please try again later.
            </>

            }</div>
    )
}

export default ContactModal