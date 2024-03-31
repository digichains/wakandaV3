import React from 'react'
import Clip from '/src/assets/Clip.png'

const Congratulations = ({ totalVotes, yesPercentage, noPercentage }) => {
  return (
    // <div className="bg-[#4D4D4D] w-[80%] p-[50px] h-[100%] rounded-3xl items-center m-[50px] md:fixed md:bg-[#4D4D4D] md:w-[40%] md:p-[20px] md:mt-[100px] md:rounded-3xl md:ml-[450px]">
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col bg-[#4D4D4D] items-center w-[80%] p-[20px] rounded-3xl md:w-[50%] md:p-[20px] md:rounded-3xl">
        <img src={Clip} width={'130px'} />
        <h1 className="flex justify-center items-center w-full text-white text-[15px] md:text-[22px]">
          Congratulations, your proposal got approved.
        </h1>
        <div className="text-white mt-5">
          <p>
            Total votes: <span className="text-[13px] text-[#E3E2E6]">{totalVotes}</span>
          </p>
          <p>
            Yes: <span className="text-[13px] text-[#E3E2E6]">{yesPercentage}%</span>
          </p>
          <p>
            No: <span className="text-[13px] text-[#E3E2E6]">{noPercentage}%</span>
          </p>
        </div>
        <button className="bg-[#C5EE4F] m-5 p-2 rounded-[50px] w-full">Claim Funding</button>
      </div>
    </div>
  )
}

export default Congratulations
