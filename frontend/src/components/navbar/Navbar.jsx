import React from 'react'

const Navbar = () => {
  return (
    <div className='h-auto w-full bg-gradient-to-l from-primary to-white px-10 py-4'>
      {/* desktop */}
      <div className="desktop-view hidden md:flex justify-between items-center">
        <div className="brand" >
          <a href="/"><img src="logos/logo.png" alt="" width={80}/></a>
        </div>
        <div className="items">
          <ul className='flex gap-10'>
            <a href='/login'>Post a Job</a>
            <a href='/login'>LogIn</a>
            <a href=''>Register</a>
          </ul>
        </div>
      </div>


      {/* mobile view */}
      <div className="mobile-view flex md:hidden justify-between items-center">
        <div className="brand" >
          <img src="logos/logo.png" alt="" width={80}/>
        </div>
        <div className="burger">
          <img src="icons/menu.svg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Navbar