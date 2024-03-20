import React from 'react'
import AboutUs from './AboutUs'
import Button from '../../components/Button'
import OurMission from './OurMission'
import OurApproach from './OurApproach'
import OurTeam from './OurTeam'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About Us | Chiraro Digital Solutions',
  description: "Learn more about Chiraro Digital and our commitment to excellence. Dive into our story, mission, and values that drive us to exceed expectations. Meet the talented individuals behind our success and discover why we're a trusted partner for businesses worldwide.",
}
export default function page() {
  return (
    <div className='w-full flex flex-col items-center'>
      <AboutUs />
      <OurMission />
      <OurApproach />
      {/* <OurTeam /> */}
    </div>
  )
}
