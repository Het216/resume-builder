import { resumeInfo } from '@/types/types'
import { CalendarDays } from 'lucide-react'
import React from 'react'

const EducationPreview: React.FC<{ resumeInfo: resumeInfo }> = ({ resumeInfo }) => {
    return (
        <div>
            <h2 className='text-lg font-bold mt-3'>EDUCATION</h2>
            <hr className='border-[2px] rounded-md' style={{ borderColor: "#000" }} />

            {resumeInfo?.education.map((education,index)=> (
                <div key={index} className='my-5 m-3 flex justify-between'>
                    <div>
                    <h2 className=' text-sm font-semibold mb-0.5'>{education.degree} in {education.major}</h2>
                    <h2 style={{color:resumeInfo?. themeColor}} className='font-bold text-xs'>{education.universityName}</h2>
                    </div>
                    <div>
                    <span className='text-xs flex items-center font-medium justify-end'><CalendarDays className='w-3 mx-1' /> {education.startDate} - {education.endDate}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EducationPreview