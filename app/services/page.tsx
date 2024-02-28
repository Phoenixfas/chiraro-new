import Hero from "@/components/Hero";
import ServicesGraph from "@/components/ServicesGraph";
import ServicesSEO from "@/components/ServicesSEO";
import ServicesWeb from "@/components/ServicesWeb";
import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const page = () => {
  return (
    <main className={`${poppins.className}`}>
      <Hero />
      <ServicesWeb />
      <ServicesGraph />
      <ServicesSEO />
    </main>
  );
};

export default page;
