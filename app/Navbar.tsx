'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
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

  return (
    <>
        <div className={`w-full ${menuOpen ? "hidden" : "flex"} flex-col items-center relative z-[999999999]`}>
            <div className={`w-[95%] duration-300 fixed ${scrollingUp ? 'top-5' : 'top-0'} bg-[rgba(255,255,255,.05)] backdrop-blur-md flex items-center justify-between sm:px-8 px-3 py-3 border-[2px] border-[#1a1e25] rounded-2xl`}>
                <Link href={"/"} className='flex items-center text-[30px] tracking-[.4rem]'>
                    <Image src="/images/logo/nav_logo.svg" alt="logo" width="30" height="45" className='w-auto h-[45px] object-contain mr-5'/>
                    <p className='hidden sm:block font-light'>CHIRARO</p>
                </Link>

                <div className="hidden items-center gap-14 text-base md:flex">
                    <Link href={"/services"} className='hover:text-[#01BAEF] duration-300'>Services</Link>
                    <Link href={"/pricing"} className='hover:text-[#01BAEF] duration-300'>Pricing</Link>
                    <Link href={"/"} className='hover:text-[#01BAEF] duration-300'>About</Link>
                    <Link href={"/"} className='hover:text-[#01BAEF] duration-300'>Contact</Link>
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
