import React, { useEffect } from 'react'

const Contact = () => {


  function clickmsg(){
        document.querySelector('.uname').value='';
        document.querySelector('.email').value='';
        document.querySelector('.msg').value='';

    
  }
  // useEffect(()=>{},[FormData])
  return (
    <div className='bg-black text-white' id='contact'>
        <div className=' flex flex-col items-center'>
            <h2 className='text-3xl font-serif  mt-6'>Contact Me</h2>
            <p className='text-gray-400 font-semibold '>Submit the form below to get in touch with me</p>
        </div>

          <form  action="https://api.web3forms.com/submit" method="POST"  className='flex flex-col items-center '>
            <input type="hidden" name="access_key" value="5b235dda-35a8-4fb1-932b-424f41b7a619"
/>

            <input type="text" name='uname' placeholder='Enter Your Name'  className='uname bg-transparent border-2 lg:w-4/12 w-9/12 p-2 border-gray-300 rounded mt-3 'required />
            <input type="email" name='email' placeholder='Enter Your Email' className='email bg-transparent border-2 lg:w-4/12 w-9/12 p-2 border-gray-300 rounded mt-3'  required/>
            <textarea type="text" name='message' placeholder='Enter Your Message' className='msg bg-transparent  border-2 lg:w-4/12 w-9/12 h-64 p-2 border-gray-300 rounded mt-3 resize-none'  required/>
            <button className='submitbtn border-2 text-white border-gray-300 mt-6 p-4 mb-4 rounded-md hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] hover:text-black ' >Submit Message</button>

           
          </form>
    </div>
  )
}

export default Contact
