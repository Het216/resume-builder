import React from 'react'
import logo  from '../../../public/logo.svg'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, UserProfile, useUser } from '@clerk/clerk-react'
const Header = () => {
  const {user, isSignedIn}= useUser()
  return (
    <div className='p-3 px-5  flex justify-between shadow-md'>
      
      <Link to={'/'}>
        <img src="/logo.svg" alt=""  />
      </Link>
      {isSignedIn?<div className='flex gap-2 items-center '>
        <Link to={'/dashboard'}>
        <Button variant={'outline'}>Dashboard</Button>
        </Link>
        <UserButton />
      </div>:
      <Link to={'/auth/sign-in'}>
      <Button className='bg-blue-700 cursor-pointer'>Get Started</Button>
      </Link>
      }
      
      
    </div>
  )
}

export default Header