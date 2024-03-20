import ContactHero from "@/components/ContactHero";
import ContactMap from "@/components/ContactMap";
import ContactModal from "@/components/ContactModal";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Contact Us | Chiraro Digital Solutions',
  description: "Get in touch with our team to discuss your project requirements or inquire about our services. Whether you have questions about pricing, need technical support, or want to collaborate on a project, we're here to assist you every step of the way. Reach out to us via phone, email, or our convenient online contact form.",
}
const page = () => {
  return (
    <main>
      <ContactHero />
      <ContactMap />
    </main>
  )
}

export default page