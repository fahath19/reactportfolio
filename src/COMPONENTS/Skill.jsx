import React from 'react'
import htmlic from '../SKILL ICON/html-5.png';
import Reactic from '../SKILL ICON/react-js-icon.png';
import Cssic from '../SKILL ICON/social.png';
import jsic from '../SKILL ICON/js.png';
import tailwindic from '../SKILL ICON/tailwind-css-icon.png';
import github from '../SKILL ICON/pngimg.com - github_PNG47.png';


const Skill = () => {
  return (
    <div className=' bg-gradient-to-r from-fuchsia-500 to-cyan-500  flex flex-col items-center mt-[7%]  pb-20'>
       <div className='text-center mt-6 font-bold  text-white'>
         <h2 className='text-4xl lg:text-5xl'> Skills & <span className='text-orange-300'>Abilities</span> </h2>
       </div>

       <div className='lg:w-9/12 w-11/12  lg:p-2  flex flex-wrap justify-center mt-6 bg-[rgba(0,0,0,0.5)] rounded-lg'>
          <div className="icon rounded-lg text-white w-3/12 px-4  lg:px-8  py-3   flex flex-col items-center  border m-8 ">
              <img src={htmlic} alt="img" className='lg:w-4/12 w-12/12 mt-4  '/>
              <h2 className='text-center mt-2'>HTML</h2>
          </div>

          <div className="icon rounded-lg text-white w-3/12  px-4 lg:px-8  py-3   flex flex-col items-center  border m-8 ">
              <img src={Cssic} alt="img" className='lg:w-4/12 w-12/12 mt-4 '/>
              <h2 className='text-center mt-2'>CSS</h2>
          </div>

          <div className="icon rounded-lg text-white  w-3/12 px-4  lg:px-8  py-3    flex flex-col items-center  border m-8 ">
              <img src={jsic} alt="img" className='lg:w-4/12 w-12/12 mt-4'/>
              <h2 className='text-center  mt-2'>JavaScript</h2>
          </div>

          <div className="icon rounded-lg text-white  w-3/12 px-4  lg:px-8  py-3   flex flex-col items-center  border m-8 ">
              <img src={Reactic} alt="img" className='lg:w-4/12 w-12/12 mt-4'/>
              <h2 className='text-center  mt-2'>React</h2>
          </div>


          <div className="icon rounded-lg text-white w-3/12 px-4  lg:px-8  py-3   flex flex-col items-center  border m-8 ">
              <img src={tailwindic} alt="img" className='lg:w-5/12 w-12/12 mt-5 '/>
              <h2 className='text-center  mt-2'>Tailwind</h2>
          </div>


          <div className="icon rounded-lg text-white w-3/12 px-4  lg:px-8  py-3    flex flex-col items-center  border m-8 ">
              <img src={github} alt="img" className='lg:w-4/12 w-12/12 mt-4 '/>
              <h2 className='text-center  mt-2'>GitHub</h2>
          </div>
          
       
       </div>


    </div>
  )
}

export default Skill
