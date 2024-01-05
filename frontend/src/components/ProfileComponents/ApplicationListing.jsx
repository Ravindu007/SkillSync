import React, { useState } from 'react'
import ApplicationCard from './ApplicationCard'

const ApplicationListing = () => {

  const [applications, setApplications] = useState([
    {id:1, companyLogo:'/logos/logo.png', position:'Senior Software Enginner', companyName:'SkillSync',applicationStatus:"screening", location:'Miniuwangoda', postedOn:'2024/01/02'},
  ])

  return (
    <div>
      {applications.map((application) => (
        <ApplicationCard key={application.id} application={application}></ApplicationCard>
      ))}
    </div>
  )
}

export default ApplicationListing