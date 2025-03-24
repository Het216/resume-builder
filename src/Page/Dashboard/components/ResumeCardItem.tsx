import {  Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeCardItem = ({resume}: {resume: {
  resumeId: string,title: string
}}) => {
  return (
    <Link to={'/dashboard/resume/'+resume.resumeId+"/edit"}>
        <div className='p-14 bg-secondary flex items-center justify-center h-[250px] rounded-md border
         hover:shadow-md hover:scale-105 transition-all hover:border-primary'>
            <h2 className='text-center my-1 font-semibold'>{resume.title}</h2>

        </div>
        
    </Link>
  )
}

export default ResumeCardItem