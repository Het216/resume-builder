import { resumeInfo } from '@/types/types'
import React from 'react'

const EducationPreview: React.FC<{ resumeInfo: resumeInfo }> = ({ resumeInfo }) => {
    return (
        <>
            <h2 className='text-lg font-bold mt-3'>EDUCATION</h2>
            <hr className='border-[2px] rounded-md' style={{ borderColor: "#000" }} />
        </>
    )
}

export default EducationPreview