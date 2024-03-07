import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ServicesGraph from "@/components/ServicesGraph";
import ServicesSEO from "@/components/ServicesSEO";
import ServicesSMM from "@/components/ServicesSMM";
import ServicesWeb from "@/components/ServicesWeb";
import WhyChiraro from "@/components/WhyChiraro";
import React from "react";
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
