'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggleModal } from '../../../redux/slices/jobappModalSlice';
import { setJob } from '@/redux/slices/jobSlice';

export default function Overview({ job, loading }: {job: any, loading: any}) {
  const dispatch = useAppDispatch()
  const tjob = useAppSelector(state => state.job)
  // console.log(loading)
  if (loading === true){ return (
    <div className='w-full p-5 border rounded-lg flex flex-col gap-5 job-pulse'>
        <div className='h-8 bg-[#43D0F7] rounded-md w-1/4'></div>
        {[...Array(3)].map((_, index) => (
            <div key={index} className="p-3 rounded-lg border border-[#43D0F7]">
                <div className='h-6 bg-[#43D0F7] rounded-md w-1/3 mb-2'></div>
                <div className='h-6 bg-[#ffffff88] rounded-md w-full'></div>
            </div>
        ))}
        <div className='h-10 bg-[#43D0F7] rounded-md w-1/3 mt-3'></div>
    </div>
  )}else return (
    <div className='w-full p-5 border rounded-lg flex flex-col gap-5'>
        <h2 className='text-2xl font-bold'>Job Overview</h2>
        {job && Object.entries(job.overview).map(([key, value]) => (
            <div key={key} className="p-3 rounded-lg border border-[#43D0F7]">
                <p className='text-lg font-black'>{key}</p>
                <p className='text-lg'>{value as React.ReactNode}</p>
            </div>
        ))}
        <button className='text-base font-bold px-5 py-2 rounded-md bg-[#43D0F7] text-white hover:bg-white hover:text-[#43D0F7] duration-300' onClick={() => {
          dispatch(setJob({id: job._id, details: job.overview}))
          dispatch(toggleModal(true))
        }}>Apply Now {">"}</button>
    </div>
  )
}
