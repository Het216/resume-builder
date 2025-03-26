import { resumeInfo } from "@/types/types";
import React from "react";

const SkillPreview: React.FC<{ resumeInfo: resumeInfo }> = ({ resumeInfo }) => {
  return (
    <div>
            <h2 className='text-lg font-bold mt-3'>SKILLS</h2>
            <hr className='border-[2px] rounded-md' style={{ borderColor: "#000" }} />

            <div className="grid grid-cols-5 gap-2  m-3">
                {resumeInfo?.skills.map((skill,index)=>(
                    <div key={index} className="m-1 border-b-3  w-fit border-b-gray-500 my-1 " >
                        <h2 className="text-sm font-semibold mt-1">{skill.name}</h2>
                        
                    </div>
                ))}
            </div>
    </div>
  )
};

export default SkillPreview;
