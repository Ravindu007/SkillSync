import React from 'react'
import {motion} from 'framer-motion'


const CompanyLogin = () => {

  const variants = { 
    initial: {
      y:20,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        type:'spring',
        stiffness:800,
        damping:20
      }
    }
  }
  return (
    <div className='flex w-full h-full border-2 border-black'>

      <motion.div 
      className="left hidden md:flex justify-center w-[50%]  h-full  border-2 border-black"
      variants={variants}
      initial='initial'
      whileInView='animate'
      >
        <img src="login\company.jpg" alt="" />
      </motion.div>


      <div className="right w-[100%] md:w-[50%] h-full  border-2 border-blue-500">

        <div className="form-container h-full flex  justify-center items-center border-2 border-red-200">
          <form action="" className='w-full h-full flex flex-col items-center justify-center gap-8'>
            <div className="w-full flex justify-center form-group px-1 md:px-5">
                <p className='text-2xl font-semibold'>Company Login</p>
            </div>
            <div className="w-full form-group px-1 md:px-5">
              <input type="text" className='input-item' placeholder='Enter your email'/>
            </div>
            <div className="w-full form-group px-1 md:px-5">
              <input type="text" className='input-item' placeholder='Enter password'/>
            </div>
            <div className="w-[50%] flex flex-col gap-2 form-group px-1 md:px-5">
              <button className='bg-orange-300  rounded-xl'>Login</button>
              <a className='hover:underline hover:underline-offset-4' href="">Still havent registered ? click here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogin