import React, { useState } from 'react'
import {motion} from 'framer-motion'
import ApplicationListing from '../components/ProfileComponents/ApplicationListing'

const UserProfile = () => {

  const [isEdit, setIsEdit] = useState(true)

  const toggleEdit = () => {
    setIsEdit(prev => !prev)
  }

  return (
    <div>
      <div className="w-full h-auto flex flex-col md:flex-row">
        

        {!isEdit && (
                  <div className="left w-full md:w-[40%] border-2 flex justify-center items-center border-black">

                    <div className="profile flex h-auto  flex-col items-center gap-6 border-2 border-red-400">
                        <div className="img-container flex justify-center w-[100px]">
                            <img src="/profiles/p1.png" alt="" />
                        </div> 
                        <div className="details-section flex flex-col items-start gap-3 w-full">
                          <p><span>Name: </span>Ravindu Dharmadasa</p>
                          <p><span>Job Role: </span>Software Engineer Inter</p>
                          <ul className='skills flex flex-col gap-4'>
                            <li><span>Skill 1: </span>Frontend Development</li>
                            <li><span>Skill 2: </span>Backend Development</li>
                            <li><span>Skill 3: </span>Fullstack Development</li>
                          </ul>
                        </div>
                        <div className="buttton-section">
                          <button className='button' onClick={toggleEdit}>Edit Details</button>
                        </div>
                        <div className="job-preference border-2 border-blue-400 w-full">
                          <div className="grid grid-cols-2">
                            <div className="col-span-1 flex flex-col items-start px-5">
                              <p><span>Work type: </span>Remote</p>
                              <p><span>Notice Period: </span>Immediate</p>
                            </div>
                            <div className="col-span-1 flex flex-col items-start px-5">
                              <p>Salarry Expectations</p>
                              <p>Rs: 25 000/=</p>
                            </div>
                          </div>
                        </div>
                      </div>
                
                  </div>
        )}
        {isEdit && (
                  <div className="left w-full md:w-[40%] border-2 flex justify-center items-center border-black">

                        <div className="profile flex h-auto  flex-col items-center gap-2 border-2 border-red-400">
                            
                            <div className="img-container flex justify-center w-full gap-2">
                                <label htmlFor="">Choose your CV</label>
                                <input type="file"/>
                            </div> 

                            <div className="details-section flex flex-col items-start gap-3 w-full border-2 border-blue-300">
                              <div className="form-group w-full border-2 border-orange-300 py-2">
                                <p>Name</p>
                                <input type="text" className='border-2 border-black rounded-lg w-full'/>
                              </div>
                              <div className="form-group w-full border-2 border-orange-300 py-2">
                                <p>Role Applying</p>
                                <input type="text" className='border-2 border-black rounded-lg w-full'/>
                              </div>
                              <ul className='skills flex flex-col gap-4 w-[70%]'>
                                  <div className="form-group w-full border-2 border-orange-300 py-2">
                                    <p>Sjill 1</p>
                                    <input type="text" className='border-2 border-black rounded-lg w-full'/>
                                  </div>
                                  <div className="form-group w-full border-2 border-orange-300 py-2">
                                    <p>Skill 2</p>
                                    <input type="text" className='border-2 border-black rounded-lg w-full'/>
                                  </div>
                                  <div className="form-group w-full border-2 border-orange-300 py-2">
                                    <p>Skill 3</p>
                                    <input type="text" className='border-2 border-black rounded-lg w-full'/>
                                  </div>
                              </ul>
                            </div>
                            <div className="buttton-section flex gap-2">
                              <button className='button'>Save</button>
                              <button className='button' onClick={toggleEdit}>Back</button>
                            </div>
                            <div className="job-preference border-2 border-blue-400 w-full">
                              <div className="grid grid-cols-2">
                                <div className="col-span-1 flex flex-col items-start px-5">
                                    <p>Work type</p>
                                    <div className="form-group w-full border-2 border-orange-300 py-2">
                                    <input type="text" className='border-2 border-black rounded-lg w-full'/>
                                  </div>
                                </div>
                                <div className="col-span-1 flex flex-col items-start px-5">
                                  <p>Salary Expectations</p>
                                  <div className="form-group w-full border-2 border-orange-300 py-2">
                                    <input type="text" className='border-2 border-black rounded-lg w-full'/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                    
                  </div>

        )}




        <div className="right w-full md:w-[60%] border-2 border-black">
          <div className="applications">
            <ApplicationListing></ApplicationListing>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile