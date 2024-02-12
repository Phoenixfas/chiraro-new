import Offers from "@/components/Offers";
import Hero from "./Hero";
import { Poppins } from 'next/font/google'
import { IoIosArrowRoundDown } from "react-icons/io";
import ScrollOffers from "@/components/ScrollOffers";
import OurServices from "@/components/OurServices";
import SEOInfo from "@/components/SEOInfo";


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export default function Home() {

  return (
    <main className={`${"w-full h-full flex flex-col items-center relative"} ${poppins.className}`}>
      <div className="absolute top-0 left-[35%] w-[2px] h-[calc(300vh-450px)] bg-[rgba(238,238,238,0.1)] -z-[1]" >
        <div className="absolute w-28 h-28 translate-x-[-50%] translate-y-[calc(100vh-75px)] bg-[#43D0F7] top-0 left-0 z-0 opacity-10 blur-[20px] rounded-[100%]">
        </div>
      </div>
      <ScrollOffers />
      <div className="absolute top-[150px] left-0 w-full h-[2px] bg-[rgba(238,238,238,0.1)] -z-[1]" ></div>
      <Hero />
      <Offers />
      <OurServices />
      <SEOInfo />
    </main>
  );
}
