import Link from "next/link"
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#01baef] min-h-[100px] p-[20px_0_0] flex justify-center items-center flex-col mt-[200px]">
        <div className="waves">
            <div className="absolute top-[-99px] left-0 w-full h-[100px] bg-[url('/images/wave.png')] bg-[length:1000px_100px] z-10 opacity-100 bottom-0 animate-animateWaves-4" id="wave1"></div>
            <div className="absolute top-[-99px] left-0 w-full h-[100px] bg-[url('/images/wave.png')] bg-[length:1000px_100px] z-9 opacity-50 bottom-[10px] animate-animateWaves-r-4" id="wave2"></div>
            <div className="absolute top-[-99px] left-0 w-full h-[100px] bg-[url('/images/wave.png')] bg-[length:1000px_100px] z-10 opacity-20 bottom-[15px] animate-animateWaves-3" id="wave3"></div>
            <div className="absolute top-[-99px] left-0 w-full h-[100px] bg-[url('/images/wave.png')] bg-[length:1000px_100px] z-9 opacity-70 bottom-[20px] animate-animateWaves-r-3" id="wave4"></div>
        </div>
        <div className="flex gap-5 text-3xl">
            <Link className="text-white hover:text-[#192655] duration-300" href="https://www.instagram.com/">
                <FaInstagram />
            </Link>
            <Link className="text-white hover:text-[#192655] duration-300" href="https://www.facebook.com/">
                <FaFacebook />
            </Link>
            <Link className="text-white hover:text-[#192655] duration-300" href="https://twitter.com/">
                <FaTwitter />
            </Link>
            <Link className="text-white hover:text-[#192655] duration-300" href="https://www.linkedin.com/">
                <FaLinkedin />
            </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-[1.3rem] p-[15px_20px] mt-[10px]">
            <Link className="text-white hover:text-[#192655] duration-300" href="/">Services</Link>
            <Link className="text-white hover:text-[#192655] duration-300" href="/store">Pricing</Link>
            <Link className="text-white hover:text-[#192655] duration-300" href="/about">About</Link>
            <Link className="text-white hover:text-[#192655] duration-300" href="/contact">Contact</Link>
        </div>
        <div className="w-full p-[15px_20px] text-[0.9rem] text-center ">
            <p>&copy; 2023 Chiraro Digital Solutions. All Rights Reserved.</p>
        </div>
    </footer>
  )
}
