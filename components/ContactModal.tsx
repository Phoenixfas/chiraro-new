import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";

const ContactModal = ({ success, message }: { success: boolean, message: string }) => {
    return (
        <div className='fixed left-1/2 -translate-x-1/2 w-full md:w-[600px] flex justify-center items-center px-10 py-5 rounded-xl text-center bg-[#43d0f7] shadow-[0px_0px_18px_10px_#43d0f770]'>
            {success ?
                <>
                    <FaCircleInfo className='mr-4 text-green-400 hidden md:block' /> {message}
                </>
                : 
                <>
                <FaCircleInfo className='mr-4 text-red-400 hidden md:block' />
                    Something went wrong, please try again later.
                </>
            }
        </div>
    )
}

export default ContactModal