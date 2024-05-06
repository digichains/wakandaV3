import React from 'react'
import Group from '/src/assets/Group.png'

const Decline = ({ totalVotes, yesPercentage, noPercentage }) => {
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col bg-[#4D4D4D] items-center w-[80%] p-[20px] rounded-3xl md:w-[50%] md:p-[20px] md:rounded-3xl">
      <img src={Group} width={'130px'} />
        <h1 className="flex justify-center items-center w-full text-white text-[15px] md:text-[22px]">
          Unfortunately, your proposal was declined.
        </h1>
        <div className="text-white mt-5">
          <p>
            Total votes: <span className="text-[13px] text-[#E3E2E6]"> {totalVotes}</span>
          </p>
          <p>
            Yes: <span className="text-[13px] text-[#E3E2E6]">{yesPercentage} %</span>
          </p>
          <p>
            No: <span className="text-[13px] text-[#E3E2E6]">{noPercentage} %</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Decline
