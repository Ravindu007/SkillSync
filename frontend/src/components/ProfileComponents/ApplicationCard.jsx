import React from 'react'

const ApplicationCard = ({application}) => {
  return (
    <div>
      <div className="card my-2 mx-2 p-2 rounded-xl shadow-md shadow-gray-400">
        <div className="card-body">

          <div className="top w-full flex">
            <div className="left w-[10%]">
              <img src={application.companyLogo} alt="" width={50}/>
            </div>
            <div className="right w-[70%] flex flex-col items-start">
              <p>{application.position}</p>
              <p>{application.companyName}</p>
            </div>
          </div>

          <div className="bottom w-full flex justify-between">
            <div className="comments">
              <p><span>Comment: </span>Still Processing</p>
            </div>
            <div className="status">
              <p><span>Application Status: </span>Screening</p>
            </div>
            <div className="applied">
              <p><span>Applied on: </span> 2024/01/05</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationCard