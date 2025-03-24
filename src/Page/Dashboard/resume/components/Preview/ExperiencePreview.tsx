import { resumeInfo } from '@/types/types'
import { CalendarDays, MapPin } from 'lucide-react'
import React from 'react'

const ExperiencePreview: React.FC<{ resumeInfo: resumeInfo }> = ({ resumeInfo }) => {
    return (
        <div >
            <h2 className='text-lg font-bold'>EXPERIENCE</h2>
            <hr className='border-[2px] rounded-md' style={{ borderColor: "#000" }} />

            {resumeInfo?.experience.map((experience, index) => (
                <div key={index} className='h-full m-5'>
                    <h2 className='text-sm font-semibold'>{experience.title}</h2>
                    <h2 className='font-semibold text-sm' style={{ color: resumeInfo?.themeColor }}>{experience.companyName}</h2>
                    <div className='flex justify-start gap-7 items-center'>
                        <div className='flex '>
                            <MapPin className='w-3 mx-1' />
                            <h2 className='text-xs font-medium mt-1'> {experience.city}</h2>
                        </div>
                        <div className='flex items-center'>
                            <CalendarDays className='w-3 mx-1' />
                            <h2 className='text-xs font-medium'>{experience.startDate} - {experience.currentlyWorking == true ? "Present" : experience.endDate}</h2>
                        </div>

                    </div>
                    <p className='text-xs '>
                        {experience.workSummary.split("\n").map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>

                </div>
            ))}
        </div>
    )
}

export default ExperiencePreview