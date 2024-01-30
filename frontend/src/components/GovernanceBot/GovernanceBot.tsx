import telegram from '/src/assets/Group.svg'

const GovernanceBot = () => {
  return (
    <div className="flex justify-center bg-[#2A84EE] p-[50px]">
      <div className="mr-7">
        <img src={telegram} alt="telegtam" width={'90px'} />
      </div>
      <div>
        <h1 className="text-2xl pb-4 font-extrabold">Governance notification bot</h1>
        <p className="text-[#F0F0F0] text-md">Stay up to speed with DaoWakanda governance developments</p>
      </div>

      <div>
        <button className="bg-[#fff] text-black p-3 ml-[150px] mt-5">Get notified</button>
      </div>
    </div>
  )
}

export default GovernanceBot
