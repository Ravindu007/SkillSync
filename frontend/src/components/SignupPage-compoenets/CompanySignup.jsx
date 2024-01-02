import React from 'react'
import BannerTyper from '../HomePageComponents/BannerTyper'
import {motion} from 'framer-motion'

const CompanySignup = () => {
  const variants = {
    initial : {
      scale:0.9
    },
    animate:{
      scale:1,
      transition:{
        type:'spring',
        stiffness:600,
        damping:20
      }
    }
  }
  return (
    <motion.div 
    className='flex w-full h-full'
    variants={variants}
    initial='initial'
    whileInView='animate'
    >
      <div className="left hidden md:flex justify-center items-start md:w-[40%] h-full">
        <h1 className='text-xl md:text-3xl bg-gradient-to-r from-primary to-black bg-clip-text text-transparent font-bold py-5'>
        <BannerTyper text={'Hire and Manage Empolyees easily'}/>
        </h1>
      </div>
      
      <div className="right w-full md:w-[60%] h-full">
        <form action="" className='px-4 flex flex-col gap-5'>

          <div className="form-group">
            <div className="grid grid-cols-2">
              <div className="col-span-1 px-1">
                <div className="form-group flex flex-col">
                  <label htmlFor="">First Name</label>
                  <input type="text" className='shadow-md shadow-gray-700 rounded-md' />
                </div>
              </div>
              <div className="col-span-1  px-1">
              <div className="form-group flex flex-col">
                  <label htmlFor="">First Name</label>
                  <input type="text" className='shadow-md shadow-gray-700 rounded-md' />
                </div>
              </div>
            </div>
          </div>


          <div className="form-group flex flex-col">
            <label htmlFor="">Office Email</label>
            <input type="text" className='shadow-md shadow-gray-700 rounded-md'/>
          </div>

          <div className="form-group flex flex-col">
            <label htmlFor="">Password</label>
            <input type="text" className='shadow-md shadow-gray-700 rounded-md'/>
          </div>

          <div className="form-group flex flex-col">
            <label htmlFor="">Confirm Password</label>
            <input type="text" className='shadow-md shadow-gray-700 rounded-md'/>
          </div>

          <div className="form-group flex flex-col">
            <div className="button-container flex justify-center">
             <button className='px-4 py-1 bg-primary rounded-md font-semibold'>Sign up</button>
            </div>
          </div>

        </form>
      </div>
    </motion.div>
  )
}

export default CompanySignup