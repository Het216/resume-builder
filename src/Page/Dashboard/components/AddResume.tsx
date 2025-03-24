import {   Loader2, Loader2Icon, PlusSquare } from 'lucide-react'
import  { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button'

import GlobalApi from '@/service/GlobalApi';

import { useUser } from '@clerk/clerk-react';
import { error } from 'console';
import { useNavigate } from 'react-router-dom';



const AddResume = () => {

    const [openDialog, setDialog] = useState(false)
    const [resumeTitle,setResumeTitle]=useState("")
    const [loading,setLoading]=useState(false)
    const {user}=useUser()
    const navigator=useNavigate()
    const onCreate= async() => {
        setLoading(true)
        const uuid=uuidv4();
        const data={
            title:resumeTitle,
            resumeId:uuid,
            UserEmail:user?.primaryEmailAddress?.emailAddress,
            userName:user?.fullName    
        }
       GlobalApi.createNewResume({data}).then(resp=>{
        console.log(resp.data);
        setLoading(false)
        navigator("/dashboard/resume/"+resp.data.data.documentId+"/edit")
       },(error)=>{
        console.log(error);
        
        setLoading(false)
       }
       )
        
    }

    return (
        <div>
            <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg 
                 h-[250px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'
                onClick={() => setDialog(true)}
            >
                <PlusSquare />
            </div>

            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription >
                            <p className='font-bold text-xl mb-5 text-black'>Add A Title for Your New Resume</p>
                            <Input className='mt-2 mb-2' placeholder='Ex. Full Stack Resume'
                            onChange={(e)=>setResumeTitle(e.target.value)}
                            />
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button className='cursor-pointer' variant="ghost" onClick={()=> setDialog(false)}>Cancel</Button>
                            <Button className='cursor-pointer'
                            onClick={()=> onCreate()}
                            disabled={!resumeTitle || loading}>
                            {loading ? <Loader2 className='animate-spin'/> : 'Create'}
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddResume