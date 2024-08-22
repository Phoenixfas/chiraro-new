'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import JobDetails from './JobDetails'
import AppModal from './AppModal'

export default function page() {
    const { id } = useParams()
  return (
    <div className='relative w-full min-h-screen flex flex-col items-center pt-40'>
        <JobDetails id={id} />
        <AppModal />
    </div>
  )
}
