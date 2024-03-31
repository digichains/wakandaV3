import React from 'react'

const NftClaimed = () => {
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col bg-[#4D4D4D] items-center w-[80%] p-[20px] rounded-3xl md:w-[50%] md:p-[20px] md:rounded-3xl">
      <img src={sadEmoticon} width={'130px'} />
        <h1 className="flex justify-center items-center w-full text-white text-[15px] md:text-[22px]">
          NFT Successfully Claimed
        </h1>
          <p>Proceed to create proposal</p>

          <button>Create Proposal</button>
          </div>
          </div>

  )
}

export default NftClaimed
