import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.tsx'
import Home from './Page/Home.tsx'
import Dashboard from './Page/Dashboard/Dashboard.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Edit from './Page/Dashboard/resume/[resumeId]/edit/edit.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


const router=createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    element:<App/>,
    children: [
     
      {
        path: "/dashboard",
        element:<Dashboard/>
      },
      {
        path: "/dashboard/resume/:resumeId/edit",
        element:<Edit/>
      }
    ]
  },
 
  {
    path: "/auth/sign-in",
    element:<SignInPage/>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
        <RouterProvider router={router}/>
    </ClerkProvider>
   
  </StrictMode>,
)
