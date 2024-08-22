'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { IoClose } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggleModal } from '../../../redux/slices/jobappModalSlice';
import { AnimatePresence, motion } from 'framer-motion'
import ContactModal from '@/components/ContactModal';

export default function AppModal() {
    const formRef = useRef(null)
    const dispatch = useAppDispatch()
    const modalToggled = useAppSelector(state => state.jobappModal.value)
    const jTitle = useAppSelector(state => state.job["Job Title"])
    const jID = useAppSelector(state => state.job["Job ID"])
    const [fullName, setName] = useState('')
    const [dateOfBirth, setDob] = useState('')
    const [contactNumber, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [residentialAddress, setAddress] = useState('')
    const [universityName, setUni] = useState('')
    const [currentYearOfStudy, setYear] = useState('')
    const [major, setMajor] = useState('')
    const [expectedGraduationDate, setGraduation] = useState('')
    const [workTitle, setTitle] = useState('')
    const [companyName, setCompany] = useState('')
    const [duties, setDuties] = useState('')
    const [skillsAcquired, setSkills] = useState('')
    const [preferredStartDate, setStartDate] = useState('')
    const [preferredDuration, setDuration] = useState('')
    const [weeklyAvailability, setAvailability] = useState('')
    const [microsoftOfficeProficiency, setMicrosoft] = useState('')
    const [communicationSkills, setCommunication] = useState('')
    const [otherSkills, setOther] = useState('')
    const [additionalInfo, setInfo] = useState('')
    // const [resume, setResume] = useState('')
    // const [coverLetter, setCover] = useState('')
    // const [additionalDocuments, setAdditional] = useState<string[]>([])
    const [isConfirmed, setDeclaration] = useState(false)
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<any>(null)

    let resume = ''
    let coverLetter = ''
    let additionalDocuments: string[] = []


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
    
        const fileElements = [
            { id: 'resume', isOnlyOneFile: true, errorMessage: 'Error uploading resume' },
            { id: 'coverLetter', isOnlyOneFile: true, errorMessage: 'Error uploading cover letter' },
            { id: 'additionalDocuments', isOnlyOneFile: false, errorMessage: 'Error uploading additional documents' },
        ];
    
        for (const { id, isOnlyOneFile, errorMessage } of fileElements) {
            const files = (document.getElementById(id) as HTMLInputElement).files;
            if (files && files.length > 0) {
                const uploadSuccess = await uploadFilesToCloudinary(files, isOnlyOneFile, id);
                if (!uploadSuccess) {
                    setLoading(false);
                    setError(errorMessage);
                    return;
                }
            }
        }
    
        uploadApp();
    };

    const uploadApp = async () => {
        const data = {
            jobInfo: {
                jobID: jID,
                jobTitle: jTitle
            },
            personalInfo: {
                fullName,
                dateOfBirth,
                contactNumber,
                email,
                residentialAddress
            },
            academicInfo: {
                universityName,
                currentYearOfStudy,
                major,
                expectedGraduationDate
            },
            experience: [
                {
                    workTitle,
                    companyName,
                    duties,
                    skillsAcquired
                }
            ],
            availability: {
                preferredStartDate,
                preferredDuration,
                weeklyAvailability
            },
            skills: {
                microsoftOfficeProficiency,
                communicationSkills,
                otherSkills
            },
            attachments: {
                resume,
                coverLetter,
                additionalDocuments
            },
            additionalInfo,
            declaration: {
                isConfirmed
            }
        };
        try {
            const res = await fetch("/api/jobapp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (res.status === 201) {
                setName('');
                setDob('');
                setPhone('');
                setEmail('');
                setAddress('');
                setUni('');
                setYear('');
                setMajor('');
                setGraduation('');
                setTitle('');
                setCompany('');
                setDuties('');
                setSkills('');
                setStartDate('');
                setDuration('');
                setAvailability('');
                setMicrosoft('');
                setCommunication('');
                setOther('');
                setInfo('');
                resume = '';
                coverLetter = '';
                additionalDocuments = [];
                setDeclaration(false);
                setLoading(false);
                setSent(true);
                setSuccess(true);
                setTimeout(() => {
                    setSent(false);
                    dispatch(toggleModal(false));
                }, 5000);
                if (formRef.current) (formRef.current as HTMLFormElement).reset();
            }
            if (res.status === 500) {
                setLoading(false);
                setSent(true);
                setSuccess(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
            setError(e);
        }
    }

    async function uploadFilesToCloudinary(files: FileList, single: boolean = true, docType: string = ''): Promise<boolean> {
        const url = `https://api.cloudinary.com/v1_1/dbvzchrg2/image/upload`;
        const uploadPreset = 'jobapp';
        
        // Helper function to upload a single file
        const uploadFile = async (file: File): Promise<string> => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', uploadPreset);
    
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });
    
            if (!response.ok) {
                throw new Error('Failed to upload file');
            }
    
            const data = await response.json();
            return data.secure_url;
        };
    
        try {
            if (single) {
                const file = files[0];
                const url = await uploadFile(file);
    
                if (docType === 'resume') {
                    resume = url;
                } else if (docType === 'coverLetter') {
                    coverLetter = url;
                }
            } else {
                const fileArray = Array.from(files);
                const uploadPromises = fileArray.map(file => uploadFile(file));
    
                const urls = await Promise.all(uploadPromises);
                additionalDocuments = urls;
            }
    
            return true;
        } catch (error) {
            setError(error);
            setLoading(false);
            return false;
        }
    }
    


  return (
        <AnimatePresence>
            {modalToggled &&
                // <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed left-0 top-0 z-[9999999999] w-full min-h-screen bg-[#000000aa] flex flex-col items-center justify-center px-7 pt-80 pb-10 sm:py-20'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed left-0 top-0 z-[9999999999] w-full h-screen'>
                    <div className="w-full h-full overflow-y-auto bg-[#000000aa] flex justify-center items-center px-7 pb-10 sm:py-20">
                        <div className={`w-full fixed top-[100px] z-[999999999999999] ${sent ? "sent" : "hide"}`}
                        >
                            <ContactModal success={success} message='Application Submitted Successfully' />
                        </div>
                        <motion.div initial={{ y: "100%" }} animate={{ y: "0%" }} exit={{ y: "100%" }} transition={{ duration: .3, damping: 8, bounce: .5, type: "spring" }} className="relative flex mt-[1800px] sm:mt-[1100px] md:mt-[1300px] lg:mt-[1000px]">
                            <div className="z-[100] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full p-3 bg-[#43D0F7] cursor-pointer" onClick={() => dispatch(toggleModal(false))}><IoClose size={30} /></div>
                            <div className="hidden md:min-w-[300px] bg-[radial-gradient(#43D0F7,#222831)] rounded-l-xl overflow-hidden md:flex items-center justify-center">
                                <Image src="/images/logo/nav_logo_white.svg" alt="Chiraro" width={200} height={200} />
                            </div>

                            <div className="max-w-[700px] h-full overflow-y-auto bg-[#222831] rounded-xl md:rounded-l-none overflow-hidden flex flex-col p-8">
                                <h1 className="text-2xl sm:text-4xl font-black text-[#43D0F7] mb-10 text-wrap">JOB APPLICATION</h1>
                                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <input type="text" disabled placeholder={jTitle} className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-[#43D0F7] text-[#43D0F7] placeholder:text-[#43D0F7] outline-none" value={jTitle} />
                                    <h2 className='text-xl text-[#43D0F7] font-bold'>Personal Info</h2>
                                    <div className="flex flex-wrap gap-5">
                                        <input type="text" placeholder="Your Full Name*" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setName(e.target.value)} value={fullName} required/>
                                        <div className="flex-grow flex flex-col sm:flex-row sm:items-center gap-5">
                                            <p className='text-lg'>Date of Birth*:</p>
                                            <input type="date" placeholder="Date of Birth" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setDob(e.target.value)} value={dateOfBirth} required/>
                                        </div>
                                        <input type="text" placeholder="Your Phone*" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setPhone(e.target.value)} value={contactNumber} required/>
                                        <input type="text" placeholder="Your Email*" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                                        <input type="text" placeholder="Your Address*" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setAddress(e.target.value)} value={residentialAddress} required/>
                                    </div>

                                    <h2 className='text-xl text-[#43D0F7] font-bold'>Academic Info</h2>
                                    <div className="flex flex-wrap gap-5">
                                        <input type="text" placeholder="University Name*" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setUni(e.target.value)} value={universityName} required/>
                                        <input type="number" placeholder="Year of study*" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setYear(e.target.value)} value={currentYearOfStudy} required/>
                                        <input type="text" placeholder="Major*" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setMajor(e.target.value)} value={major} required/>
                                        <div className="flex-grow flex flex-col sm:flex-row sm:items-center gap-5">
                                            <p className='text-lg'>Graduation Date (optional):</p>
                                            <input type="date" placeholder="Graduation Date" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setGraduation(e.target.value)} value={expectedGraduationDate} />
                                        </div>
                                    </div>

                                    <h2 className='text-xl text-[#43D0F7] font-bold'>Availability</h2>
                                    <div className="flex flex-wrap gap-5">
                                        <div className="flex-grow flex flex-col sm:flex-row sm:items-center gap-5">
                                            <p className='text-lg'>Preferred Start Date*:</p>
                                            <input type="date" placeholder="Preferred Start Date*" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setStartDate(e.target.value)} value={preferredStartDate} required/>
                                        </div>
                                        <input type="text" placeholder="Preferred Duration*" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setDuration(e.target.value)} value={preferredDuration} required/>
                                        <input type="number" placeholder="Availabile hours/week*" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setAvailability(e.target.value)} value={weeklyAvailability} required/>
                                    </div>
                                    
                                    <h2 className='text-xl text-[#43D0F7] font-bold'>Skills</h2>
                                    <div className="flex flex-wrap gap-5">
                                        <input type="text" placeholder="MS-Office Proficiency (optional)" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setMicrosoft(e.target.value)} value={microsoftOfficeProficiency} />
                                        <input type="text" placeholder="Communication Skills (optional)" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setCommunication(e.target.value)} value={communicationSkills} />
                                        <input type="text" placeholder="Other Skills (optional)" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setOther(e.target.value)} value={otherSkills}/>
                                    </div>
                                    
                                    <h2 className='text-xl text-[#43D0F7] font-bold'>Attachments</h2>
                                    <div className="flex flex-wrap gap-5">
                                        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-5">
                                            <p className='text-lg font-bold'>resume*:</p>
                                            <input type="file" accept="Application/pdf" placeholder="Resume" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none w-full" name='resume' id='resume' required/>
                                        </div>
                                        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-5">
                                            <p className='text-lg font-bold'>cover letter (optional):</p>
                                            <input type="file" accept="Application/pdf" placeholder="Cover Letter" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none w-full" name='coverLetter' id='coverLetter'/>
                                        </div>
                                        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-5">
                                            <p className='text-lg font-bold'>other documents (optional):</p>
                                            <input type="file" accept="Application/pdf" placeholder="Additional Documents" className="p-3 flex-grow duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none w-full" name='additionalDocuments' id='additionalDocuments' multiple/>
                                        </div>
                                    </div>

                                    <h2 className='text-xl text-[#43D0F7] font-bold'>Additional Info (optional)</h2>
                                    <div className="flex flex-wrap gap-5">
                                        <textarea placeholder="Additional info you want us to know" className="w-full max-h-40 p-3 duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setInfo(e.target.value)} value={additionalInfo} />
                                    </div>

                                    <h2 className='text-xl text-[#43D0F7] font-bold'>Declaration*</h2>
                                    <div className="flex flex-wrap gap-5">
                                        <div className="flex gap-2">
                                            <input type="checkbox" className="duration-300 rounded-md bg-[#222831] border border-white focus:border-[#43D0F7] text-[#43D0F7] outline-none" onChange={(e) => setDeclaration(e.target.checked)} required/>
                                            <p className='text-lg'>I confirm that the information provided is accurate and complete</p>
                                        </div>
                                    </div>
                                    
                                    <button type='submit' className="w-full p-3 duration-300 rounded-md bg-[#43D0F7] hover:bg-white text-[#222831] font-bold">{loading ? "Submitting..." : sent ? "Submitted Successfuly" : "Submit"}</button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
  )
}
