import React from 'react'
import {schoolimg} from '../Constant/'
import jmc from '../PERSONAL IMG/jmc.jpg'
const Myeducation = () => {
  return (
    <div id='education' className='bg-black'>
        <div className='title text-center '>
            <h2 className='font-bold text-white text-4xl'>My <span className='text-green-500 '>Education</span></h2>
        </div>

        <div className="education  flex flex-col justify-center items-center mt-10 ">
            <div className='cursor-pointer flex lg:justify-between lg:items-center lg:flex-row flex-col  w-10/12 lg:w-8/12 border-2 rounded-lg '>
            <div className='lg:w-3/12 md:h-[180px] w-12/12 h-[200px] bg-slate-800 '>
            <img  alt="img" src={jmc} className='w-[100%] h-[100%] object-cover ' />

            </div>
                <div className='mx-auto lg:pr-60 lg:w-auto p-2 '>
              
                    <h2 className='text-3xl font-semibold text-blue-700'>Bsc Computer Science</h2>
                    <p className=' text-[1.3rem] lg:text-2xl font-serif text-slate-200 mt-2 '>Jamal Mohamed College,Trichy</p>
                    <h2 className='text-2xl font-sans font-medium text-blue-600'>2022-2025</h2>
                </div>

            </div>


            <div className='border-2 cursor-pointer flex lg:justify-between lg:items-center lg:flex-row flex-col  w-10/12 lg:w-8/12 mt-8  rounded-lg '>
            <div className='lg:w-3/12 md:h-[180px] w-12/12 h-[200px] bg-slate-800 '>
            <img  alt="img" src={schoolimg} className='w-[100%] h-[100%] object-cover ' />

            </div>
                <div className='mx-auto lg:pr-60 lg:w-auto p-2 '>
              
                    <h2 className='text-3xl font-semibold text-blue-700'>Leaving School</h2>
                    <p className='text-2xl font-serif text-gray-200 mt-2'>Majestic Matric Hr.Sec School</p>
                    <h2 className='text-2xl font-sans font-medium text-blue-600'>2021-2022</h2>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Myeducation
