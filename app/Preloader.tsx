'use client'
import { useState, useEffect } from "react";
import Navbar from "./Navbar"
import LogoSvg from "./LogoSvg";
import Footer from "./Footer";

export default function Preloader({ children, }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        isMounted ? <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            {children}
            <Footer />
        </div> : <LogoSvg />
    )
}
