import React, { useState } from 'react'

const ApplicationListing = () => {

  const [applications, setApplications] = useState([
    {id:1, companyLogo:'/logos/logo.png', position:'Senior Software Enginner', companyName:'SkillSync',applicationStatus:"screening", location:'Miniuwangoda', postedOn:'2024/01/02'},
  ])

  return (
    <div>
      
    </div>
  )
}

export default ApplicationListing