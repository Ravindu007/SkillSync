import React from 'react'

const Filter = () => {
  return (
    <div className='w-full'>
      <div className="from border-2 border-red-400">

        <div className="form-group flex flex-col px-1 md:px-5 py-5">
              <label htmlFor="">Type</label>
              <input type="text" className='input-item' placeholder='Enter key words'/>
        </div>
        <div className="form-group flex flex-col px-1 md:px-5 py-5">
              <label htmlFor="">Salary</label>
              <input type="text" className='input-item' placeholder='Enter key words'/>
        </div>
        <div className="form-group flex flex-col px-1 md:px-5 py-5">
              <label htmlFor="">Place</label>
              <input type="text" className='input-item' placeholder='Enter key words'/>
        </div>
        <div className="form-group flex flex-col px-1 md:px-5 py-5">
            <button className='button'>Filter</button>
        </div>
        

      </div>

    </div>
  )
}

export default Filter