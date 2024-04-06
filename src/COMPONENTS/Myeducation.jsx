import React from 'react'
import {jmcimg,schoolimg} from '../Constant/'
const Myeducation = () => {
  return (
    <div>
        <div className='title text-center mt-5'>
            <h2 className='font-bold  text-4xl'>My <span className='text-green-500 '>Education</span></h2>
        </div>

        <div className="education mb-40 flex flex-col justify-center items-center mt-10 ">
            <div className='flex lg:justify-between lg:items-center lg:flex-row flex-col  w-10/12 lg:w-8/12 mt-3 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  rounded-lg '>
                <img src={jmcimg} alt="img" className='lg:w-3/12 w-12/12' />
                <div className='mx-auto lg:pr-60 lg:w-auto p-2 '>
              
                    <h2 className='text-3xl font-semibold text-blue-900'>Bsc Computer Science</h2>
                    <p className=' text-[1.3rem] lg:text-2xl font-serif text-gray-500 mt-2'>Jamal Mohamed College Trichy</p>
                    <h2 className='text-2xl font-sans font-medium text-blue-600'>2022-2025</h2>
                </div>

            </div>


            <div className='flex lg:justify-between lg:items-center lg:flex-row flex-col  w-10/12 lg:w-8/12 mt-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  rounded-lg '>
                <img src={schoolimg} alt="img" className='lg:w-3/12 w-12/12' />
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
