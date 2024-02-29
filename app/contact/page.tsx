import ContactHero from "@/components/ContactHero";
import ContactModal from "@/components/ContactModal";
import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const page = () => {
  return (
    <main className={`${poppins.className}`}>
      <ContactHero />
    </main>
  )
}

export default page