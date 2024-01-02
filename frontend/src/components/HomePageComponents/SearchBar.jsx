import React from 'react'

const SearchBar = () => {
  return (
    <div className='h-full flex flex-col md:flex-row items-center border-2 border-red-400 py-5'>

      <div className="h-full fields flex flex-row justify-evenly w-[100%] md:w-[80%]">

          <div className="form-group w-[50%] flex px-1 md:px-5">
            <input type="text" className='input-item' placeholder='Enter key words'/>
          </div>

          
          <div className="form-group w-[50%] flex px-1 md:px-5">
            <input type="text" className='input-item' placeholder='Enter key words'/>
          </div>

      </div>

      <div className="form-group w-[100%] md:w-[20%] flex justify-center  px-1 py-2 md:px-5 border-2 border-red-400">
        <button className='button'>Search</button>
      </div>

    </div>
  )
}

export default SearchBar