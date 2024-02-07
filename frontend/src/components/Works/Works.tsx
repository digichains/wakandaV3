import blockchain from '/src/assets/blockchain-07.svg'
import payment from '/src/assets/payment-success-02.svg'
import wallet from '/src/assets/wallet-add-02.svg'

const Works = () => {
  return (
    <div className="bg-[#202020] p-10 w-full">
      <div className="flex justify-center text-3xl items-center m-10 text-white">
        <h1>How it works</h1>
      </div>


    {/* steps */}
      <div className="md:m-2 ">
        <div className="md:w-[50%] md:max-w-[1240px] md:text-[#C7C6CA]  md:h-8 md:px-4 md:mx-auto md:justify-between md:items-center md:flex">
          <div className="md:text-base md:font-semibold ">Step 1</div>
          <div className="md:text-base md:font-semibold ">Step 2</div>
          <div className="md:text-base md:font-semibold ">Step 3</div>
        </div>
      </div>

      {/* icons */}
      <div className="sm:hidden md:w-[700px] md:max-w-[1240px] md:h-24 px-4  md:mx-auto md:justify-center md:items-center md:flex">
        {/* Adjusted padding and width for better spacing */}
        <div className="w-[60px] h-[60px] p-2 bg-rose-100 rounded-[50px] mx-2 justify-center items-center flex">
          <img src={wallet} alt="wallet" className="w-[100px]" />
          <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex" />
        </div>
        <div className="grow shrink basis-0 h-0 border-2 border-neutral-600 border-opacity-30"></div>
        <div className="w-[60px] h-[60px] p-2 bg-indigo-300 rounded-[50px] mx-2 justify-center items-center flex">
          <img src={payment} alt="payment" className="w-[100px] flex" />
          <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex" />
        </div>
        <div className="grow shrink basis-0 h-0 border-2 border-neutral-600 border-opacity-30"></div>
        <div className="w-[60px] h-[60px] p-2 bg-lime-200 rounded-[50px] mx-2 justify-center items-center flex">
          <img src={blockchain} alt="blockchain" className="w-[100px]" />
          <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex" />
        </div>
      </div>
      {/* explanation */}
      <div className="w-full max-w-[940px] h-[121px] px-2 mx-auto justify-start items-center gap-2 flex flex-wrap">
        <div className="grow shrink basis-0 self-stretch p-2 bg-zinc-900 rounded-md flex-col justify-start items-center mb-4">
          <div className="self-stretch h-[70px] flex-col justify-center items-center gap-2 flex">
            <div className="w-full text-center text-stone-300 text-lg font-['Avenir LT Std']">Connect Your Wallet</div>
            <div className="self-stretch text-center text-zinc-400 text-sm font-['Avenir LT Std']">
              Connecting your wallet automatically makes you a member of the community.
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 p-2 bg-zinc-900 rounded-md flex-col justify-center items-center mb-4">
          <div className="self-stretch h-[89px] flex-col justify-center items-center gap-2 flex">
            <div className="w-full text-center text-stone-300 text-lg font-['Avenir LT Std']">Buy Wakanda NFT</div>
            <div className="self-stretch text-center text-zinc-400 text-sm font-['Avenir LT Std']">
              To have the right to vote for or against proposals, you must possess our WAKANDA NFTs. If you do not have, kindly buy.
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch p-2 bg-zinc-900 rounded-md flex-col justify-start items-center mb-4">
          <div className="self-stretch h-[70px] flex-col justify-center items-center gap-2 flex">
            <div className="w-full pt-2 text-center text-stone-300 text-lg font-['Avenir LT Std']">Vote</div>
            <div className="self-stretch text-center text-zinc-400 text-sm font-['Avenir LT Std']">
              You may now vote during proposals. Your voice matters in the community. You are one of us, vote wisely.
            </div>
          </div>
        </div>
      </div>

      {/* mobile screen */}
      <div className="md:hidden sm:flex sm:flex-col sm:m-2 ">
        {/* steps */}
        <div className="md:hidden bg-[#000] p-10 w-[100%] text-[#C7C6CA] h-[100%] m-5 items-center flex-col flex">
          <div className="text-3xl font-bold">Step 1</div>
          <div className="w-[60px] h-[60px] p-2 bg-rose-100 rounded-[50px] mx-2 items-center flex">
            <img src={wallet} alt="wallet" className="w-[100px]" />
          </div>
          <h1 className="w-full text-center text-stone-300 text-3xl font-['Avenir LT Std']">Connect Your Wallet</h1>
          <p className="w-[300px] text-center text-zinc-400 text-lg font-['Avenir LT Std']">
            Connecting your wallet automatically makes you a member of the community.
          </p>
        </div>

        <div className="md:hidden bg-[#000] p-10 w-[100%] text-[#C7C6CA] h-[100%] m-5 items-center flex-col flex">
          <div className="text-3xl font-bold ">Step 2</div>
          <div className="w-[60px] h-[60px] p-2 bg-rose-100 rounded-[50px] mx-2 items-center flex">
            <img src={payment} alt="payment" className="w-[100px]" />
          </div>
          <h1 className="w-full text-center text-stone-300 text-3xl font-['Avenir LT Std']">Buy Wakanda NFT</h1>
          <p className="w-[400px] text-center text-zinc-400 text-lg font-['Avenir LT Std']">
            To have the right to vote for or against proposals, you must possess our WAKANDA NFTs. If you do not have, kindly buy.
          </p>
        </div>

        <div className="md:hidden bg-[#000] p-10 w-[100%] text-[#C7C6CA] h-[100%] m-5 items-center flex-col flex">
          <div className="text-3xl font-bold ">Step 3</div>
          <div className="w-[60px] h-[60px] p-2 bg-rose-100 rounded-[50px] mx-2 items-center flex">
            <img src={blockchain} alt="blockchain" className="w-[100px]" />
          </div>
          <h1 className="w-full text-center text-stone-300 text-3xl font-['Avenir LT Std']">Vote</h1>
          <p className="w-[400px] text-center text-zinc-400 text-lg font-['Avenir LT Std']">
            You may now vote during proposals. Your voice matters in the community. You are one of us, vote wisely.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Works
