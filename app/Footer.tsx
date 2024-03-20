import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdPriceCheck } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="relative w-full p-[20px_0_0] flex justify-center items-center flex-col mt-[50px]">
      <div className="hidden lg:block absolute top-0 left-[32%] w-[2px] h-full bg-[rgba(238,238,238,0.1)] -z-[1]"></div>
      <div className="hidden lg:block absolute left-0 top-[50%] h-[2px] w-full bg-[rgba(238,238,238,0.1)] -z-[1]"></div>
      <div className="py-[100px] px-5 w-full flex flex-col gap-14 justify-center items-center rounded-lg">
        <div className="flex justify-center flex-col lg:flex-row items-center gap-14">
          <div className="flex flex-wrap justify-center items-center gap-14">

            <Link
              href="/"
              className="flex justify-center items-center gap-3 text-xl link"
            >
              {" "}
              <FiHome />
              Home{" "}
            </Link>
            <Link
              href="/services"
              className="flex justify-center items-center gap-3 text-xl link"
            >
              {" "}
              <MdMiscellaneousServices />
              Services{" "}
            </Link>
          </div>
          <div className="flex justify-center items-center gap-14">

            <Link
              href="/pricing"
              className="flex justify-center items-center gap-3 text-xl link"
            >
              {" "}
              <MdPriceCheck />
              Pricing{" "}
            </Link>

            <Link
              href="/about"
              className="flex justify-center items-center gap-3 text-xl link"
            >
              {" "}
              <FaRegUser />
              About{" "}
            </Link>
          </div>
          <Link
            href="/contact"
            className="flex justify-center items-center gap-3 text-xl link"
          >
            {" "}
            <FiPhone />
            Contact{" "}
          </Link>
        </div>
        <div className="flex justify-center items-center gap-7">
          <Link
            href={"https://www.instagram.com/chiraro.digital/"}
            className="flex justify-center items-center p-3 rounded-full text-[30px] bg-slate-700 linkSocial"
          >
            <FaInstagram />
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=61552682280329"}
            className="flex justify-center items-center p-3 rounded-full text-[30px] bg-slate-700 linkSocial"
          >
            <FaFacebookF />

          </Link>
          <Link
            href={"https://twitter.com/chiraro_digital"}
            className="flex justify-center items-center p-3 rounded-full text-[30px] bg-slate-700 linkSocial"
          >
            <RiTwitterXFill />

          </Link>
          <Link
            href={"https://www.linkedin.com/company/chiraro-digital-solutions/"}
            className="flex justify-center items-center p-3 rounded-full text-[30px] bg-slate-700 linkSocial"
          >
            <FaLinkedinIn />

          </Link>
        </div>
        <div className="text-[12px] sm:text-[19px] text-slate-200 font-mono">
          © All rights reserved{" "}
          <span className="text-[#5fe0f9]">Chiraro Digital</span>{" "}
        </div>
      </div>
    </footer>
  );
}
