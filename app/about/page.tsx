import React from 'react'
import AboutUs from './AboutUs'
import Button from '../../components/Button'
import OurMission from './OurMission'

export default function page() {
  return (
    <div className='w-full flex flex-col items-center'>
      <AboutUs />
      <Button right={false} href={"/services"} name={"Explore"} />
      <OurMission />
    </div>
  )
}
