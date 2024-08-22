'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
// import jobs from '@/data/jobs'
import Link from 'next/link';

export default function JobsList() {

    const [jobs, setJobs] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('/api/jobs');
                const data = await res.json();
                setJobs(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchJobs();
    }, [])

    function getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function generateRandomMonochromaticColors() {
        const hue = getRandomInt(0, 360);
        const saturation = getRandomInt(70, 100);
    
        const lightColor = `hsl(${hue}, ${saturation}%, 90%)`;
    
        const darkColor = `hsl(${hue}, ${saturation}%, 30%)`;
    
        return { lightColor, darkColor };
    }

    const generateReq = (req: string, i: any) => {
        const { darkColor, lightColor } = generateRandomMonochromaticColors();
        return <p key={i} style={{color: darkColor, backgroundColor: lightColor}} className={`text-sm font-bold rounded-lg py-[2px] px-2`}>{req}</p>
    }

    const dateConverter = (date: any) => {
        const newDate = new Date(date);
        return newDate.toDateString();
    };
  return (
    <div className='w-full pt-40 px-5 sm:px-10 flex flex-col items-center'>
        <h1 className="text-6xl font-bold text-[#43D0F7] text-center mb-10">Jobs</h1>
        <div className="w-full flex justify-center flex-wrap gap-10">
            {loading && [...Array(3)].map((_, index) => (
                <div key={index} className="max-w-[420px] border border-[#43D0F7] rounded-xl p-5 flex flex-col gap-5 duration-300 job-pulse">
                    <div className="w-14 h-14 bg-[#43D0F7] rounded-lg"></div>
                    <div className="flex flex-col gap-1">
                        <div className="w-3/4 h-6 bg-[#43D0F7] rounded-md"></div>
                        <div className="w-1/2 h-4 bg-[#ffffff88] rounded-md"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="w-full flex flex-wrap gap-3">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-20 h-6 bg-[#43D0F7] rounded-md"></div>
                            ))}
                        </div>
                        <div className="w-full h-6 bg-[#43D0F7] rounded-md max-w-[400px]"></div>
                    </div>
                    <hr className='border-[#43D0F755]' />
                    <div className="w-full flex flex-wrap items-center justify-between gap-5">
                        <div className="w-1/4 h-4 bg-[#ffffff88] rounded-md"></div>
                        <div className="w-1/3 h-8 bg-[#43D0F7] rounded-md"></div>
                    </div>
                </div>            
            ))}
            {!loading && jobs && jobs.length === 0 && <h1 className='text-2xl text-center text-[#ffffff88]'>No Jobs Available At The Moment. Please Check Back Later</h1>}
            {jobs && jobs.map((job: any, index: any) => (
                <div key={index} className="lg:max-w-[430px] border border-[#43D0F7] rounded-xl p-5 flex flex-col gap-5 hover:scale-105 duration-300">
                    <Image className='w-14 h-14 object-cover rounded-lg' src={job.logo} alt='Chiraro-Logo' width={500} height={500} />
                    <div className="flex flex-col gap-1">
                        <h2 className='text-xl font-bold'>{job.title}</h2>
                        <p className='text-[#ffffff88]'>{job.company}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="w-full flex flex-wrap gap-3">
                            {job.requirements.slice(0, 5).map((requirement: any, index: any) => generateReq(requirement, index))}
                        </div>
                        <div className="text-base">
                            <p>{job.description.slice(0, 150)}</p>
                        </div>
                    </div>
                    <hr className='border-[#43D0F755]' />
                    <div className="w-full flex flex-wrap items-center justify-between gap-5">
                        <p className='text-base text-[#ffffff88]'>{dateConverter(job.date)}</p>
                        <Link className='text-base font-bold px-5 py-2 rounded-md bg-[#43D0F7] text-white hover:bg-white hover:text-[#43D0F7] duration-300' href={`/jobs/${job._id}`}>Apply Now {">"}</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
