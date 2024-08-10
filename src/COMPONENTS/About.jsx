import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import pdf from '../SKILL ICON/cv.pdf'
import userimg from '../PERSONAL IMG/user.jpg'
import { MdNavigateNext } from "react-icons/md";

const About = () => {
  return (
    <div id='about'>
       <div className='flex items-center justify-center mt-3' >
        <FaUserAlt className='text-3xl'/>
        <h2 className='ml-4 text-4xl font-bold'>About <span className='text-violet-800'> Me</span> </h2>
       </div>

       <div className='flex justify-evenly mt-20 items-center lg:flex-row flex-col'>
          <div className="img  md:w-[350px] md:h-[350px] w-[280px] h-[280px]">
             <img src={userimg} alt="USER IMAGE" className=' object-fit w-[100%] h-[100%] rounded-[50%]'/>
          </div>
          <div className='info  lg:w-4/12 w-8/12 lg:m-0 mt-10 '>
            <h2 className='text-3xl lg:text-4xl font-bold leading-6 mb-4'>I'm Abdul Bahad</h2>
            <p className='text-2xl font-semibold'>Frontend Developer</p>
            <p className='mt-2 text-justify'> 
             I am a Frontend developer based in Tamil Nadu, India. 
             I am very passionate about improving my coding skills & developing applications & websites. 
              Working for myself to improve my skills.
             </p>
             <p className='mt-2'><span className='text-blue-600 font-bold mr-1'>Email:</span> bahadabdul539@gmail.com</p>
             <p className='mt-2'> <span className='text-blue-600 font-bold mr-1'>Place:</span>TamilNadu, India - 622504</p>

             <button className='resumebtn mt-5 bg-violet-800  hover:bg-violet-900 text-white p-2 px-8 text-2xl rounded  '><a href={pdf} download="resume" className='flex items-center'>Resume <MdNavigateNext className=' nexticon mt-1'/> </a></button>
       </div>
    </div>
    </div>
  )
}

export default About
