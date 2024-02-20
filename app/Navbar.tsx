'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'
import { useEffect, useState } from 'react'
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

export default function Navbar() {
    const [scrollingUp, setScrollingUp] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        var lastScrollTop = 0

        const handleScroll = () => {
            var st = window.scrollY || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                setScrollingUp(false)
            } else {
                setScrollingUp(true)
            }
            lastScrollTop = st;
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
        
    }, [])
    const currentPage = usePathname();
        
    // console.log(currentPage)
    const checkCurrentPage = (page:String) => {
        // return true if the page is the current page
        if (currentPage === page) {
            return true
        } else {
            return false
        }
    }
    

  return (
    <>
        <div className={`w-full ${menuOpen ? "hidden" : "flex"} flex-col items-center relative z-[999999999]`}>
            <div className={`w-[95%] duration-300 fixed ${scrollingUp ? 'top-10 py-3' : 'top-0 py-10'} md:bg-transparent bg-[rgba(255,255,255,.05)] md:backdrop-blur-none backdrop-blur-md flex items-center justify-between sm:px-8 px-3 py-3`}>
                <Link href={"/"} className='flex items-center text-[30px] tracking-[.4rem]'>
                    <Image src="/images/logo/nav_logo.svg" alt="logo" width="30" height="45" className='w-auto h-[45px] object-contain mr-5'/>
                    <p className='hidden sm:block font-light text-4xl'>CHIRARO</p>
                </Link>

                <div className={`hidden items-center gap-14 text-lg md:flex [&>*:hover]:text-[#57D4F5] duration-300`}>
                    <Link href={"/services"} className={`${checkCurrentPage("/services") ? "text-[#57D4F5]":""}`}>Services</Link>
                    <Link href={"/pricing"} className={`${checkCurrentPage("/pricing") ? "text-[#57D4F5]":""}`}>Pricing</Link>
                    <Link href={"/about"} className={`${checkCurrentPage("/about") ? "text-[#57D4F5]":""}`}>About</Link>
                    <Link href={"/contact"} className={`${checkCurrentPage("/contact") ? "text-[#57D4F5]":""}`}>Contact</Link>
                </div>

                <div className="flex items-center justify-center md:hidden" onClick={() => setMenuOpen(true)}>
                    <CiMenuFries className='text-white text-3xl'/>
                </div>
            </div>
        </div>
        <div className={`fixed top-5 right-0 z-[9999999999] w-3/4 flex flex-col gap-5 pb-10 rounded-l-2xl bg-[rgba(255,255,255,.05)] backdrop-blur-md border-[2px] border-r-0 border-[#192655] duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>
            <div className="w-full flex justify-end items-center px-3 h-[72px] border-b-2 border-[#192655]">
                <TfiClose className='text-white text-3xl' onClick={() => setMenuOpen(false)}/>
            </div>
            <div className="w-full flex flex-col justify-center items-center px-10 mb-5">
                <Link href={"/"} className='hover:bg-[#01BAEF] rounded-lg duration-300 py-3 hover:border-b-[1px] border-white w-full text-center'>Home</Link>
                <Link href={"/"} className='hover:bg-[#01BAEF] rounded-lg duration-300 py-3 hover:border-b-[1px] border-white w-full text-center'>Services</Link>
                <Link href={"/pricing"} className='hover:bg-[#01BAEF] rounded-lg duration-300 py-3 hover:border-b-[1px] border-white w-full text-center'>Pricing</Link>
                <Link href={"/"} className='hover:bg-[#01BAEF] rounded-lg duration-300 py-3 hover:border-b-[1px] border-white w-full text-center'>About</Link>
                <Link href={"/"} className='hover:bg-[#01BAEF] rounded-lg duration-300 py-3 hover:border-b-[1px] border-white w-full text-center'>Contact</Link>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center gap-5 text-white text-2xl">
                <Link className="hover:text-[#01BAEF] duration-300" href="https://www.instagram.com/">
                    <FaInstagram />
                </Link>
                <Link className="hover:text-[#01BAEF] duration-300" href="https://www.facebook.com/">
                    <FaFacebook />
                </Link>
                <Link className="hover:text-[#01BAEF] duration-300" href="https://twitter.com/">
                    <FaTwitter />
                </Link>
                <Link className="hover:text-[#01BAEF] duration-300" href="https://www.linkedin.com/">
                    <FaLinkedin />
                </Link>
            </div>
        </div>
    </>
  )
}
