import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black text-white'>
          <h2 className='text-[1.5rem] font-semibold p-2 flex items-center gap-2 justify-center text-gray-400'>Made with  <FaHeart className='text-red-500'/> by Abdul</h2>
    </div>
  )
}

export default Footer
