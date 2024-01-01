import React from 'react'

const Home = () => {
  return (
    <div className='flex w-full h-screen'>

      <div className="filter-panel h-full w-[30%] border-2 border-black">
      </div>

      <div className="list h-full w-[70%]">
        <div className="search-section h-[20%] border-2 border-black"></div>
        <div className="job-listing overflow-y-scroll"></div>
      </div>

    </div>
  )
}

export default Home