import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ServicesGraph from "@/components/ServicesGraph";
import ServicesSEO from "@/components/ServicesSEO";
import ServicesSMM from "@/components/ServicesSMM";
import ServicesWeb from "@/components/ServicesWeb";
import WhyChiraro from "@/components/WhyChiraro";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Services | Chiraro Digital Solutions',
  description: "Explore our diverse range of services tailored to meet your digital needs. Whether you're looking for a stunning website, captivating graphics, or strategic social media campaigns, we have the expertise to bring your vision to life.",
}
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
