import React from 'react'

const Navbar = () => {
  return (
    <div className='h-auto w-full bg-gradient-to-l from-primary to-white px-10 py-4'>
      {/* desktop */}
      <div className="desktop-view flex justify-between items-center">
        <div className="brand" >
          <img src="logos/logo.png" alt="" width={80}/>
        </div>
        <div className="items">
          <ul className='flex gap-10'>
            <li>Post a Job</li>
            <li>LogIn</li>
            <li>Register</li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Navbar