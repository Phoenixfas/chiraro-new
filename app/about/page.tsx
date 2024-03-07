import React from 'react'
import AboutUs from './AboutUs'
import Button from '../../components/Button'
import OurMission from './OurMission'
import OurApproach from './OurApproach'
import OurTeam from './OurTeam'

export default function page() {
  return (
    <div className='w-full flex flex-col items-center'>
      <AboutUs />
      <Button right={false} href={"/services"} name={"Explore"} />
      <OurMission />
      <OurApproach />
      <OurTeam />
    </div>
  )
}
