import blockchain from '/src/assets/blockchain-07.svg'
import payment from '/src/assets/payment-success-02.svg'
import wallet from '/src/assets/wallet-add-02.svg'

const Works = () => {
  return (
    <div className="bg-[#202020] p-10 w-full">
      <div className="flex justify-center text-3xl items-center m-10 text-white">
        <h1>How it works</h1>
      </div>

      <div className=" lg:m-2 ">
        {/* steps */}
        <div className="lg:w-[50%] max-w-[1240px] text-[#C7C6CA]  h-8 px-4 mx-auto justify-between items-center flex">
          <div className="text-base font-semibold ">Step 1</div>
          <div className="text-base font-semibold ">Step 2</div>
          <div className="text-base font-semibold ">Step 3</div>
        </div>
      </div>

      {/* icons */}
      <div className="w-[700px] max-w-[1240px] h-24 px-4  mx-auto justify-center items-center flex">
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
      <div className="lg:hidden sm:flex sm:flex-col sm:m-2 ">
        {/* steps */}
        <div className="lg:hidden bg-[#000] w-[70%] p-10 max-w-[1240px] text-[#C7C6CA] h-[100%] m-10 items-center flex-col flex">
          <div className="text-3xl font-bold">Step 1</div>
          <div className="w-[60px] h-[60px] p-2 bg-rose-100 rounded-[50px] mx-2 items-center flex">
            <img src={wallet} alt="wallet" className="w-[100px]" />
          </div>
          <h1 className="w-full text-center text-stone-300 text-3xl font-['Avenir LT Std']">Connect Your Wallet</h1>
          <p className="w-[300px] text-center text-zinc-400 text-lg font-['Avenir LT Std']">
            Connecting your wallet automatically makes you a member of the community.
          </p>
        </div>

        <div className="lg:hidden bg-[#000] w-[70%] p-10  max-w-[1240px] text-[#C7C6CA] h-[100%] m-10 items-center flex-col flex">
          <div className="text-3xl font-bold ">Step 2</div>
          <div className="w-[60px] h-[60px] p-2 bg-rose-100 rounded-[50px] mx-2 items-center flex">
            <img src={payment} alt="payment" className="w-[100px]" />
          </div>
          <h1 className="w-full text-center text-stone-300 text-3xl font-['Avenir LT Std']">Buy Wakanda NFT</h1>
          <p className="w-[400px] text-center text-zinc-400 text-lg font-['Avenir LT Std']">
            To have the right to vote for or against proposals, you must possess our WAKANDA NFTs. If you do not have, kindly buy.
          </p>
        </div>

        <div className="lg:hidden bg-[#000] w-[70%] p-10  max-w-[1240px] text-[#C7C6CA] h-[100%] m-10 items-center flex-col flex">
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
