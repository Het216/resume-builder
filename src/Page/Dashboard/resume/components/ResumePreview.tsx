import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalPreview from './Preview/PersonalPreview'

import SummaryPreview from './Preview/SummaryPreview'
import ExperiencePreview from './Preview/ExperiencePreview'
import EducationPreview from './Preview/EducationPreview'
import SkillPreview from './Preview/SkillPreview'

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
      <SkillPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview