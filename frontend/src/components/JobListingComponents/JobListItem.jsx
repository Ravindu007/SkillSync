import React from 'react'

const JobListItem = ({job}) => {
  return (
    <div className="card listCard flex justify-between">

      <div className="left w-[70%] flex flex-col gap-3">
        <div className="uppear flex flex-row">
          <img src={job.companyLogo} alt="" width={70}/>
          <div className="name-section flex flex-col">
            <p className='font-semibold'>{job.position}</p>
            <p>{job.companyName}</p>
          </div>
        </div>
        <div className="bottom flex flex-col">
          <p>{job.companyType}</p>
          <div className="location flex flex-row gap-11">
            <p>{job.type}</p>
            <p>{job.location}</p>
          </div>
        </div>
      </div>

      <div className="right w-[30%] flex flex-col items-end justify-between">
          <button className='button'>Apply</button>
          <p>posted on: {job.postedOn}</p>
      </div>
      
    </div>
  )
}

export default JobListItem