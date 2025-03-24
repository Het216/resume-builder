import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalPreview from './Preview/PersonalPreview'
import { resumeInfo } from '@/types/types'
import SummaryPreview from './Preview/SummaryPreview'
import ExperiencePreview from './Preview/ExperiencePreview'
import EducationPreview from './Preview/EducationPreview'

const ResumePreview = () => {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]' style={{borderColor:resumeInfo?. themeColor}}>
      {/* personal details */}
      <PersonalPreview resumeInfo={resumeInfo}/>
      {/* Summary */}
      <SummaryPreview resumeInfo={resumeInfo}/>
      {/* Professional Experience  */}
      <ExperiencePreview resumeInfo={resumeInfo} />
      {/* Education  */}
      <EducationPreview resumeInfo={resumeInfo}/>
      {/* Skills  */}
    </div>
  )
}

export default ResumePreview