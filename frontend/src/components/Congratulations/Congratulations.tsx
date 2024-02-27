import React from 'react'
import hooray from '/src/assets/hooray.png'
const Congratulations = () => {
  return (
    <div className="bg-black bg-opacity-75 w-[80%] p-[50px] h-[100%] rounded-3xl items-center m-[50px] md:bg-black md:bg-opacity-75 md:w-[40%] md:p-[20px] md:h-[40%] md:rounded-3xl md:ml-[450px] ">
      <div className="flex flex-col items-center w-full">
        <img src={hooray} width={'200px'} />
        <h1 className="text-white text-[22px] items-center">Congratulations, your proposal got approved.</h1>
        <div className="text-white mt-5">
          <p>
            Total votes: <span className="text-[13px] text-[#E3E2E6]"> 78</span>
          </p>
          <p>
            Yes: <span className="text-[13px] text-[#E3E2E6]">83%</span>
          </p>
          <p>
            No: <span className="text-[13px] text-[#E3E2E6]"> 17%</span>
          </p>
        </div>
        <button className='bg-[#C5EE4F] m-5 p-2 rounded-[50px] w-full'>Claim Funding</button>
      </div>
    </div>
  )
}

export default Congratulations
