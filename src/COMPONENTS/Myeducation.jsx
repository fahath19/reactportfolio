import React from 'react'
import {schoolimg} from '../Constant/'
import jmc from '../PERSONAL IMG/jmc.jpg'
const Myeducation = () => {
  return (
    <div id='education' className='bg--400'>
        <div className='title text-center mt-5'>
            <h2 className='font-bold  text-4xl'>My <span className='text-green-500 '>Education</span></h2>
        </div>

        <div className="education mb-40 flex flex-col justify-center items-center mt-10 ">
            <div className='hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] cursor-pointer flex lg:justify-between lg:items-center lg:flex-row flex-col  w-10/12 lg:w-8/12 mt-3 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  rounded-lg '>
            <div className='lg:w-3/12 md:h-[180px] w-12/12 h-[200px] bg-slate-100'>
            <img  alt="img" src={jmc} className='w-[100%] h-[100%] object-cover' />

            </div>
                <div className='mx-auto lg:pr-60 lg:w-auto p-2 '>
              
                    <h2 className='text-3xl font-semibold text-blue-900'>Bsc Computer Science</h2>
                    <p className=' text-[1.3rem] lg:text-2xl font-serif text-gray-500 mt-2'>Jamal Mohamed College Trichy</p>
                    <h2 className='text-2xl font-sans font-medium text-blue-600'>2022-2025</h2>
                </div>

            </div>


            <div className='hover:shadow-[0_20px_50px_rgba(4,_12,_124,_0.3)] cursor-pointer flex lg:justify-between lg:items-center lg:flex-row flex-col  w-10/12 lg:w-8/12 mt-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  rounded-lg '>
            <div className='lg:w-3/12 md:h-[180px] w-12/12 h-[200px] bg-slate-100'>
            <img  alt="img" src={schoolimg} className='w-[100%] h-[100%] object-cover' />

            </div>
                <div className='mx-auto lg:pr-60 lg:w-auto p-2 '>
              
                    <h2 className='text-3xl font-semibold text-blue-900'>Leaving School</h2>
                    <p className='text-2xl font-serif text-gray-500 mt-2'>Majestic Matric Hr.Sec School</p>
                    <h2 className='text-2xl font-sans font-medium text-blue-600'>2021-2022</h2>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Myeducation
