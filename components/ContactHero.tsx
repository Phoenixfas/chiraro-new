"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import ContactModal from "./ContactModal";

const ContactHero = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [sent, setSent] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            name,
            email,
            subject,
            category,
            phone,
            message,
        };
        try {
            const res = await fetch("/api/contact", {
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
                setMessage("");
                setCategory("");
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
                console.log(res.status, res.statusText);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
            console.log(e);
        }
    };

    return (
        <section
            id="hero"
            className="px-4 w-full sm:w-[calc(100%-100px)] xl:w-[calc(100%-200px)] mx-auto pt-[150px] relative z-0"
        >
            <div className={`px-12 w-full fixed top-[100px] z-10 left-1/2 opacity-0 duration-300 sent flex justify-center ${sent ? "sent" : "hide"}`}
            >
                <ContactModal success={success} />
            </div>

            <div className="absolute top-[25%] left-[-100px] w-[300px] md:w-[600px] h-[400px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>

            <div className="w-full flex flex-col items-center justify-center gap-8">
                <h1 className="text-[40px] sm:text-[45px] px-4 lg:text-[68px] font-[700] w-fit uppercase text-center">
                    Contact <span className="text-[#43D0F7]"> Us</span>
                </h1>
                <p className="text-[#e5e5e5] leading-[200%] text-[22px] font-light text-center w-[80%] lg:w-[60%]">
                    We are here to help and answer any question, you can request services,
                    ask for a quote, or just say hi.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-center my-16 lg:my-22 py-10 relative px-4 sm:px-8 md:px-16 gap-10">
                <div className="rect"></div>

                <div className="flex flex-col items-center lg:items-start justify-start md:px-2">
                    <h1 className="text-[30px] font-[500] w-fit text-center tracking-widest underl mb-12">
                        Contact <span className="text-[#43D0F7]"> Info</span>
                    </h1>
                    <div className="flex lg:flex-col md:flex-row flex-col gap-5 md:gap-10 lg:gap-5 mb-10 lg:mb-16">
                        <div className="flex flex-col gap-8 items-start border-b-[2px] border-b-[#43D0F7] md:border-b-transparent lg:border-b-[#43D0F7] pb-5 justify-start">
                            <Link
                                href={"tel:+251991229893"}
                                className="flex justify-center items-center tracking-widest text-[16px] gap-5 duration-500 hover:text-[#43D0F7E0]"
                            >
                                <FaPhoneAlt />
                                +251-991-229893
                            </Link>
                            <Link
                                href={"tel:+251967825549"}
                                className="flex justify-center items-center tracking-widest text-[16px] gap-5 duration-500 hover:text-[#43D0F7E0]"
                            >
                                <FaPhoneAlt />
                                +251-967-825549
                            </Link>
                        </div>
                        <div className="flex flex-col gap-8 items-start ">

                            <Link
                                href={"https://maps.app.goo.gl/xCKpQ3V8nhHZfUk36"}
                                className="flex justify-center items-center tracking-widest text-[16px] gap-5 duration-500 hover:text-[#43D0F7E0]"
                            >
                                <FaLocationDot />
                                Addis Ababa, Ethiopia
                            </Link>
                            <Link
                                href={"mailto:info.chiraro@gmail.com"}
                                className="flex justify-center items-center tracking-widest text-[16px] gap-5 duration-500 hover:text-[#43D0F7E0]"
                            >
                                <MdEmail />
                                info.chiraro@gmail.com
                            </Link>
                        </div>
                    </div>


                    <div className="flex justify-center gap-12 items-center pr-0 sm:pr-8 flex-wrap md:flex-nowrap">
                        <Link
                            href={"https://www.instagram.com/chiraro.digital/"}
                            className="w-12 h-12 rounded-sm p-2 gradient flex justify-center items-center linkSocial shadow-[0px_0px_10px_0px_#43d0f7ba]"
                        >
                            <RiInstagramFill className="text-white text-[23px]" />
                        </Link>
                        <Link
                            href={"https://www.facebook.com/profile.php?id=61552682280329"}
                            className="w-12 h-12 rounded-sm p-2 gradient flex justify-center items-center linkSocial shadow-[0px_0px_10px_0px_#43d0f7ba]"
                        >
                            <FaFacebook className="text-white text-[23px]" />
                        </Link>


                        <Link
                            href={"https://x.com/chiraro_digital"}
                            className="w-12 h-12 rounded-sm p-2 gradient flex justify-center items-center linkSocial shadow-[0px_0px_10px_0px_#43d0f7ba]"
                        >
                            <FaTwitter className="text-white text-[23px]" />
                        </Link>
                        <Link
                            href={"https://www.linkedin.com/company/chiraro-digital-solutions/"}
                            className="w-12 h-12 rounded-sm p-2 gradient flex justify-center items-center linkSocial shadow-[0px_0px_10px_0px_#43d0f7ba]"
                        >
                            <FaLinkedin className="text-white text-[23px]" />
                        </Link>
                    </div>
                </div>
                <form ref={formRef} className="flex flex-col gap-5 w-full py-3 md:px-2">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full sm:w-1/2 h-12 bg-[#f5f5f5] px-4 rounded-sm text-[#676767] border-[3px] focus:border-[#43D0F7] duration-500 outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full sm:w-1/2 h-12 bg-[#f5f5f5] px-4 rounded-sm text-[#676767] border-[3px] focus:border-[#43D0F7] duration-500 outline-none"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full h-12 bg-[#f5f5f5] px-4 rounded-sm text-[#676767] border-[3px] focus:border-[#43D0F7] duration-500 outline-none"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                    />
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full sm:w-1/2 h-12 bg-[#f5f5f5] px-4 rounded-sm text-[#676767] border-[3px] focus:border-[#43D0F7] duration-500 outline-none"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        />
                        {/* category selector */}
                        <div className="w-full sm:w-1/2 custom-select">
                            <select className="w-full h-12 bg-[#f5f5f5] px-4 rounded-sm text-[#676767] border-[3px] focus:border-[#43D0F7] duration-500 outline-none className='text-[#9DA4B0]'"
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                            >
                                <option value="None">
                                    Select a service
                                </option>
                                <option value="Website Development">Website Development</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="Graphics Design">Graphics Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="SEO">Search Engine Optimization</option>
                            </select>
                        </div>
                    </div>
                    <textarea
                        placeholder="Message"
                        className="w-full h-36 bg-[#f5f5f5] py-3 px-4 rounded-sm text-[#676767] border-[3px] focus:border-[#43D0F7] duration-500 outline-none resize-none"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    ></textarea>
                    <button className="p-3 button-bg text-white rounded-sm button overflow-hidden" onClick={handleSubmit}>
                        {loading ? "Sending..." : sent ? "Sent" : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactHero;
