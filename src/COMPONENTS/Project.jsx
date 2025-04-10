

import { RiCodeSSlashLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { projectinfo } from "../Data/skilldata";

const Project=()=>{
    return(
        <div className='bg-black pt-[30px] ' id='project'>
                <h2 className='font-bold mb-6 text-4xl text-center text-white '>My <span className='text-yellow-400 '>Project</span></h2>
<div className="flex  md:w-[85%] mx-auto flex-wrap justify-center bg-blue-40  bg-red-40 pl-5 ml-auto">



{
    projectinfo.map((items)=>
    
<div className='imagecontainer lg:w-[350px] w-[330px] relative md:w-[350px] mb-6 mr-5   overflow-hidden  border-2 border-green-600  '>
                    <div className='imagediv w-[320px]  md:w-[330px] h-[300px]  '>

                    <img src={items.projectimg} alt="PROJECT IMG" className='w-[100%] h-[100%] object-fill p-3' />
                    </div>

                    <div className=' delay-200 bg-black/40 backdrop-blur-none 	duration-700		 overlay details absolute top-[84%] w-[100%] left-0 right-0   '>
                         <h2 className='bg-black text-white text-[1.3rem] font-bold font-arial p-[7px] rounded'>{items.projecttitle}</h2>
                         <div className='ease-out	p-3 '>
                            <h2 className='text-[1.2rem] font-arial font-medium text-white'>{items.projectdesc}  </h2>

                            <div className='flex justify-between p-4'>
                                <div>
 <a href={items.view} className='' target="_blank">
 <button className='flex items-center justify-center  w-[100px]  mr-2  bg-black text-white text-[1.3rem] font-arial py-1 rounded hover:bg-green-700'>
<MdOutlineRemoveRedEye className='mr-1 mt-1'/>  View 
</button>
 </a>
                                </div>
                                <a  href={items.code} className='' target="_blank">
 <button className='flex items-center justify-center  w-[100px]  mr-2  bg-black text-white text-[1.3rem] font-arial py-1 rounded hover:bg-blue-600'>
<RiCodeSSlashLine className='mr-1 mt-1'/>  Code 
</button>
 </a>
                            </div>

                         </div>
                    </div>
                </div>
    )
}


                
               
             
          
                
               


                
               
</div>

        </div>
    )
}
export default Project;