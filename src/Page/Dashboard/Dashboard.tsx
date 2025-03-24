import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from '@/service/GlobalApi'
import ResumeCardItem from './components/ResumeCardItem'

const Dashboard = () => {

  const {user}= useUser()
  const [resumeList,setResumeList]= useState([])

  useEffect(() => {
    user&&getResumeList()

  },[user])

  const getResumeList = () => {
    GlobalApi.getUserResume(user?.primaryEmailAddress?.emailAddress)
    .then(res => {
     
      setResumeList(res.data.data)
      
    })
  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h1 className='font-bold text-2xl'>My Resume</h1>
      <p>Start Creating Resume for Your next Job Role </p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
        <AddResume/>
        {resumeList.length>0&&resumeList.map((resume,index) => (
          <ResumeCardItem resume={resume} key={index}/> 
        ))}
      </div>
    </div>
  )
}

export default Dashboard