import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ServicesGraph from "@/components/ServicesGraph";
import ServicesSEO from "@/components/ServicesSEO";
import ServicesSMM from "@/components/ServicesSMM";
import ServicesWeb from "@/components/ServicesWeb";
import WhyChiraro from "@/components/WhyChiraro";
import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const page = () => {
  return (
    <main>
      <Hero />
      <ServicesWeb />
      <ServicesGraph />
      <ServicesSEO />
      <ServicesSMM />
      <WhyChiraro />
      <Contact />
    </main>
  );
};

export default page;
