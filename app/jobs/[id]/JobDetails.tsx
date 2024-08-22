'use client'
import { useEffect, useState } from 'react'
// import jobs from '@/data/jobs'
import Overview from './Overview'
import Image from 'next/image'

export default function JobDetails({ id }: any) {
    const [job, setJob] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchJob = async (id: any) => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        if (id) {
            fetchJob(id);
        }
    }, [id])
  if(job) return (
    <div className='w-full flex flex-col md:flex-row gap-10 px-5 sm:px-10'>
        {loading && <div className="md:flex-[.7] flex flex-col gap-7">
            <h1 className='text-4xl sm:text-5xl font-bold text-[#43D0F7] job-pulse bg-[#43D0F7] rounded-md h-12 w-3/4'></h1>
            <div className="w-full flex items-center gap-5 p-5 border rounded-lg job-pulse">
                <div className='w-20 h-20 bg-[#43D0F7] rounded-lg'></div>
                <div className="flex flex-col gap-2">
                    <div className='w-32 h-8 bg-[#ffffff88] rounded-md'></div>
                    <div className='w-24 h-6 bg-[#ffffff88] rounded-md'></div>
                </div>
            </div>

            <h2 className='text-2xl job-pulse bg-[#43D0F7] rounded-md h-8 w-40'></h2>
            <div className="w-full p-5 border rounded-lg job-pulse">
                <div className='w-full h-32 bg-[#43D0F7] rounded-md'></div>
            </div>

            <h2 className='text-2xl job-pulse bg-[#43D0F7] rounded-md h-8 w-40'></h2>
            <div className="w-full p-5 border rounded-lg job-pulse">
                <ul className="space-y-2">
                    {[...Array(3)].map((_, index) => (
                        <li key={index} className='w-3/4 h-6 bg-[#43D0F7] rounded-md'></li>
                    ))}
                </ul>
            </div>

            <h2 className='text-2xl job-pulse bg-[#43D0F7] rounded-md h-8 w-40'></h2>
            <div className="w-full p-5 border rounded-lg job-pulse">
                <ul className="space-y-2">
                    {[...Array(3)].map((_, index) => (
                        <li key={index} className='w-3/4 h-6 bg-[#43D0F7] rounded-md'></li>
                    ))}
                </ul>
            </div>

            <h2 className='text-2xl job-pulse bg-[#43D0F7] rounded-md h-8 w-40'></h2>
            <div className="w-full p-5 border rounded-lg job-pulse">
                <ul className="space-y-2">
                    {[...Array(3)].map((_, index) => (
                        <li key={index} className='w-3/4 h-6 bg-[#43D0F7] rounded-md'></li>
                    ))}
                </ul>
                <div className="flex flex-wrap mt-5 gap-2">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className='h-6 w-20 bg-[#43D0F7] rounded-md'></div>
                    ))}
                </div>
            </div>
        </div>}
        {!loading && <div className="md:flex-[.7] flex flex-col gap-7">
            <h1 className='text-4xl sm:text-5xl font-bold text-[#43D0F7]'>{job.title}</h1>
            <div className="w-full flex items-center gap-5 p-5 border rounded-lg">
                <Image className='w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-lg' src={job.logo} alt='Chiraro-Logo' width={500} height={500} />
                <div>
                    <p className='text-[#ffffff88] text-2xl sm:text-3xl text-wrap'>{job.company}</p>
                    <p className='text-[#ffffff88]'>{job.location}</p>
                </div>
            </div>
            <h2 className='text-2xl'>Job Description:</h2>
            <div className="w-full p-5 border rounded-lg">
                <p className='text-base'>{job.description}</p>
            </div>
            <h2 className='text-2xl'>Responsibilities:</h2>
            <div className="w-full p-5 border rounded-lg">
                <ul>
                    {job.responsibilities?.map((responsibility: string, index: number) => (
                        <li key={index} className='text-base list-[circle] list-inside mb-1'>{responsibility}</li>
                    ))}
                </ul>
            </div>
            <h2 className='text-2xl'>Qualification:</h2>
            <div className="w-full p-5 border rounded-lg">
                <ul>
                    {job.qualifications?.map((qualification: string, index: number) => (
                        <li key={index} className='text-base list-[circle] list-inside mb-1'>{qualification}</li>
                    ))}
                </ul>
            </div>
            <h2 className='text-2xl'>Skill & Experience:</h2>
            <div className="w-full p-5 border rounded-lg">
                <ul>
                    {job.skills?.map((skill: string, index: number) => (
                        <li key={index} className='text-base list-[circle] list-inside mb-1'>{skill}</li>
                    ))}
                </ul>
                <div className="flex flex-wrap mt-5 gap-2">
                    {job.requirements?.map((requirement: string, index: number) => (
                        <p key={index} className='text-sm font-bold rounded-lg py-[2px] px-2 bg-[#43D0F7] text-white'>{requirement}</p>
                    ))}
                </div>
            </div>
        </div>}
        <div className="md:flex-[.3]">
            <Overview job={job} loading={loading} />
        </div>
    </div>
  )
}
