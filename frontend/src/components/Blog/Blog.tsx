import frame77 from '/src/assets/Frame77.png'
import frame from '/src/assets/frame74.jpg'
import frame75 from '/src/assets/frame75.jpg'
import frame76 from '/src/assets/frame76.jpg'

const Blog = () => {
  return (
    <div className="flex flex-col w-full bg-[#000]">
      <div className="m-10">
        <div className="p-10 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-white">From our blog</h1>
          <p className="text-sm mt-2 text-[#919094]">Learn more about DaoWakanda, Algorand Nigeria community</p>
        </div>

        <div className="sm:hidden md:flex md:justify-between">
          {/* Left div */}
          <div className="hidden md:block ml-10 w-[40%] bg-[#1E1E1E] rounded-3xl">
            <img src={frame} alt="frame" width={'100%'} className="rounded-tr-3xl rounded-tl-3xl rounded-br-none" />
            <div className="m-4 p-2">
              <h3 className="mb-2 text-white text-lg">DaoWakanda-Connect 2023 Recap</h3>
              <p className="text-[#D7D7D7]">Author: Micha Tom</p>
              <p className="text-[#6E6E6E]">December 31, 2023</p>
            </div>
          </div>

          {/* Right div */}
          <div className="flex flex-col ml-3 w-full md:w-[60%]">
            <div className="mb-5">
              <div className="flex justify-between">
                <img src={frame75} alt="frame" width={'100px'} className="rounded-3xl rounded-tr-none rounded-br-none" />
                <div className="bg-[#1E1E1E] rounded-3xl pt-7 pr-7 pb-7 pl-4 h-[70%] w-full font-bold rounded-bl-none rounded-tl-none">
                  <h3 className="flex justify-start text-white text-lg">DaoWakanda Monthly Report: November</h3>
                  <p className="text-[#D7D7D7]">Author: Micha Tom</p>
                  <p className="text-[#6E6E6E] font-light">December 31, 2023</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between">
                <img src={frame76} alt="frame" width={'100px'} className="rounded-3xl rounded-tr-none rounded-br-none" />
                <div className="bg-[#1E1E1E] rounded-3xl pt-7 pr-7 pb-11 pl-4 h-[70%] w-full font-bold rounded-bl-none rounded-tl-none">
                  <h3 className="flex justify-start text-white text-2xl">NFT Launch</h3>
                  <p className="text-[#D7D7D7]">Author: Micha Tom</p>
                  <p className="text-[#6E6E6E] font-light">December 31, 2023</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <img src={frame77} alt="frame" width={'100px'} className="rounded-3xl rounded-tr-none rounded-br-none" />
                <div className="bg-[#1E1E1E] rounded-3xl pt-10 pr-7 pb-11 pl-4 w-full font-bold rounded-bl-none rounded-tl-none">
                  <h3 className="flex justify-start text-white text-2xl">Game night</h3>
                  <p className="text-[#D7D7D7]">Author: Micha Tom</p>
                  <p className="text-[#6E6E6E] font-light">December 31, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
