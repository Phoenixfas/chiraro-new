import Offers from "@/components/Offers";
import Hero from "./Hero";
import ScrollOffers from "@/components/ScrollOffers";
import OurServices from "@/components/OurServices";
import SEOInfo from "@/components/SEOInfo";
import RecentClients from "@/components/RecentClients";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import WhyChiraro from "@/components/WhyChiraro";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`${"w-full h-full flex flex-col items-center relative"}`}
    >
      <div className="md:block hidden absolute top-0 left-[35%] w-[2px] h-[calc(200vh-450px)] bg-[rgba(238,238,238,0.1)] -z-[1]">
        <div className="md:block hidden absolute w-28 h-28 translate-x-[-50%] translate-y-[calc(100vh-75px)] bg-[#43D0F7] top-0 left-0 z-0 opacity-10 blur-[20px] rounded-[100%]"></div>
      </div>
      <ScrollOffers />
      <div className="md:block hidden absolute top-[150px] left-0 w-full h-[2px] bg-[rgba(238,238,238,0.1)] -z-[1]"></div>
      <Hero />
      <OurServices />
      <Offers />
      <SEOInfo />
      <RecentClients />
      <WhyChiraro />

      {/* <Blog /> */}
      <Newsletter />
    </main>
  );
}
