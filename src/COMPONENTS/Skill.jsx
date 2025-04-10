import skilldata from "../Data/skilldata"


const Skill = () => {
  return (
    <div className=' bg-black flex flex-col items-center   pb-20'>
       <div className='text-center mt-6 font-bold  text-white'>
         <h2 className='text-4xl  lg:text-[2.8rem] mt-5'> Skills & <span className='text-orange-300'>Abilities</span> </h2>
       </div>

       <div className='lg:w-9/12  grid grid-cols-3 lg:p-2  lg:flex lg:flex-wrap lg:justify-center mt-6  rounded-lg pr-8'>


       {
          skilldata?.map((items)=>

<div key={items.id} className="icon rounded-lg text-white lg:w-3/12 px-4  lg:px-8  py-3   lg:flex lg:flex-col lg:items-center  border m-8 border-green-600 w-[100px]">
              <img src={items.skillimage} alt="img" className='lg:w-4/12 mt-4  '/>
              <h2 className='text-center mt-2 '>{items.skillname}</h2>
          </div>

          )


       }
          

        
          
          
       
       </div>


    </div>
  )
}

export default Skill
