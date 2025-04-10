import React from 'react'
import htmlic from '../SKILL ICON/html-5.png';
import Reactic from '../SKILL ICON/react-js-icon.png';
import Cssic from '../SKILL ICON/social.png';
import jsic from '../SKILL ICON/js.png';
import tailwindic from '../SKILL ICON/tailwind-css-icon.png';
import github from '../SKILL ICON/github-6980894_640.png';
import nodejs from '../SKILL ICON/icons8-nodejs-48.png';
import mongo from '../SKILL ICON/MongoDB.png';
import express from '../SKILL ICON/icons8-express-js-64.png';
import api from '../SKILL ICON/cloud-api.png';


const Skill = () => {
  return (
    <div className=' bg-black to-cyan-500  flex flex-col items-center   pb-20'>
       <div className='text-center mt-6 font-bold  text-white'>
         <h2 className='text-4xl  lg:text-[2.8rem] mt-5'> Skills & <span className='text-orange-300'>Abilities</span> </h2>
       </div>

       <div className='lg:w-9/12 w-11/12  lg:p-2  flex flex-wrap justify-center mt-6 bg-[rgba(0,0,0,0.5)] rounded-lg'>
          <div className="icon rounded-lg text-white w-3/12 px-4  lg:px-8  py-3   flex flex-col items-center  border m-8 border-green-600">
              <img src={htmlic} alt="img" className='lg:w-4/12 w-12/12 mt-4  '/>
              <h2 className='text-center mt-2'>HTML</h2>
          </div>

          <div className="icon rounded-lg text-white w-3/12  px-4 lg:px-8  py-3   flex flex-col items-center  border m-8 border-green-600">
              <img src={Cssic} alt="img" className='lg:w-4/12 w-12/12 mt-4 '/>
              <h2 className='text-center mt-2'>CSS</h2>
          </div>

          <div className="icon rounded-lg text-white  w-3/12 px-4  lg:px-8  py-3    flex flex-col items-center  border m-8 border-green-600">
              <img src={jsic} alt="img" className='lg:w-4/12 w-12/12 mt-4'/>
              <h2 className='text-center  mt-2'>JavaScript</h2>
          </div>

          <div className="icon rounded-lg text-white  w-3/12 px-4  lg:px-8  py-3   flex flex-col items-center  border m-8 border-green-600 ">
              <img src={Reactic} alt="img" className='lg:w-4/12 w-12/12 mt-4'/>
              <h2 className='text-center  mt-2'>React Js</h2>
          </div>


          <div className="icon rounded-lg text-white w-3/12 px-4  lg:px-8  py-3   flex flex-col items-center  border m-8  border-green-600">
              <img src={tailwindic} alt="img" className='lg:w-5/12 w-12/12 mt-5 '/>
              <h2 className='text-center  mt-2'>Tailwind Css</h2>
          </div>


          <div className="icon rounded-lg text-white w-3/12 px-4  lg:px-8  py-3    flex flex-col items-center  border m-8 border-green-600 ">
              <img src={github} alt="img" className='lg:w-4/12 w-12/12 mt-4 '/>
              <h2 className='text-center  mt-2'>GitHub</h2>
          </div>

          <div className="icon rounded-lg text-white w-3/12 px-4  lg:px-8  py-3   flex flex-col items-center  border m-8  border-green-600">
              <img src={nodejs} alt="img" className='lg:w-5/12 w-12/12 mt-5 '/>
              <h2 className='text-center  mt-2'>Node Js</h2>
          </div>

          <div className="icon rounded-lg text-white w-3/12 px-4  lg:px-8  py-3   flex flex-col items-center  border m-8 border-green-600 ">
              <img src={express} alt="img" className='lg:w-5/12 w-12/12 mt-5 '/>
              <h2 className='text-center  mt-2'>Express Js</h2>
          </div>


          <div className="icon rounded-lg text-white w-3/12 px-4  lg:px-8  py-3   flex flex-col items-center  border m-8 border-green-600 ">
              <img src={api} alt="img" className='lg:w-5/12 w-12/12 mt-5 '/>
              <h2 className='text-center  mt-2'>Rest Api</h2>
          </div>

          <div className="icon rounded-lg text-white w-3/12 px-4  lg:px-8  py-3   flex flex-col items-center  border m-8 border-green-600 ">
              <img src={mongo} alt="img" className='lg:w-5/12 w-12/12 mt-5 '/>
              <h2 className='text-center  mt-2'>Mongo Db</h2>
          </div>
          
          
       
       </div>


    </div>
  )
}

export default Skill
