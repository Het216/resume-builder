import React from 'react'
import { resumeInfo } from '@/types/types'


const PersonalPreview: React.FC<{ resumeInfo: resumeInfo }> = ({ resumeInfo }) => {
  return (
    <div>
        <h2 className='font-bold text-xl text-center'>{resumeInfo?.firstName} {resumeInfo?.lastName} </h2>
        <h2 className='text-center text-sm font-medium' style={{color:resumeInfo?. themeColor}}>{resumeInfo?.jobTitle}</h2>
        <h2 className='text-center font-normal text-xs'>{resumeInfo.address}</h2>
        
        <div className='flex justify-between'>
            <h2 className='text-center font-normal text-xs'>{resumeInfo.phone}</h2>
            <h2 className='text-center font-normal text-xs'>{resumeInfo.email}</h2>
        </div>


    </div>
  )
}

export default PersonalPreview