import telegram from '/src/assets/Group.svg';

const GovernanceBot = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#2A84EE] p-[50px]">
      <div className="mb-4">
        <img src={telegram} alt="telegram" width={'90px'} />
      </div>
      <div className="text-center">
        <h1 className="text-2xl pb-4 font-extrabold">Governance notification bot</h1>
        <p className="text-[#F0F0F0] text-md">Stay up to speed with DaoWakanda governance developments</p>
      </div>
      <div>
        <button className="bg-[#fff] text-black p-3 mt-5">Get notified</button>
      </div>
    </div>
  );
};

export default GovernanceBot;
