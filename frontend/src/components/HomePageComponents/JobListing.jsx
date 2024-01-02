import React, { useState } from 'react'
import JobListItem from '../JobListingComponents/JobListItem'

const JobListing = () => {
  const [jobs, setJobs] = useState([
    {id:1, companyLogo:'/logos/logo.png', position:'Senior Software Enginner', companyName:'SkillSync',companyType:'Software Development', type:'Remote', location:'Miniuwangoda', postedOn:'2024/01/02'},
    {id:1, companyLogo:'/logos/logo.png', position:'Senior Software Enginner', companyName:'SkillSync',companyType:'Software Development', type:'Remote', location:'Miniuwangoda', postedOn:'2024/01/02'},
    {id:1, companyLogo:'/logos/logo.png', position:'Senior Software Enginner', companyName:'SkillSync',companyType:'Software Development', type:'Remote', location:'Miniuwangoda', postedOn:'2024/01/02'},
    {id:1, companyLogo:'/logos/logo.png', position:'Senior Software Enginner', companyName:'SkillSync',companyType:'Software Development', type:'Remote', location:'Miniuwangoda', postedOn:'2024/01/02'},
  ])

  return (
    <div className='job listing h-[85vh] md:h-[80vh] overflow-y-scroll px-4 flex flex-col gap-10'>
      {jobs ? jobs.map((job)=>(
        <JobListItem key={job.id} job={job}/>
      )) : <p>No Jobs to show</p>}
    </div>
  )
}

export default JobListing