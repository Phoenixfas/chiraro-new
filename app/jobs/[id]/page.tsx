'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import JobDetails from './JobDetails'
import AppModal from './AppModal'

export default function page() {
  return (
    <div className='relative w-full min-h-screen flex flex-col items-center pt-40'>
        <JobD />
        <AppModal />
    </div>
  )
}

const JobD = () => {
    const { id } = useParams()
    return <JobDetails id={id} />
}