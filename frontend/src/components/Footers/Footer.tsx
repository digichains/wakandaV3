import { CiMail } from 'react-icons/ci'
import BottomFoot from '../BottomFooter/BottomFoot'
import GovernanceBot from '../GovernanceBot/GovernanceBot'
import Github from '/src/assets/Github svg.svg'
import telegram from '/src/assets/Group.svg'
import X from '/src/assets/X.jpg'

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-[#272727]">
      <div className="sm:hidden lg:flex lg:justify-center lg:flex-col lg:m-9 lg:items-center">
        <h1 className="text-3xl font-bold text-white">Join Our Commuity</h1>
        <p className="text-sm mt-2 text-[#919094]">
          Be part of the community and have a say in the future of the Algorand Nigeria community
        </p>
      </div>
      {/* mobile view */}
      <div className="lg:hidden flex justify-center flex-col m-9 items-center">
        <h1 className="text-3xl font-bold text-white">Join Our Commuity</h1>
        <p className="text-lg mt-2 text-[#919094]">
          Be part of the community and have a say in the future of the Algorand Nigeria community
        </p>
      </div>

      <div className="sm:hidden lg:ml-10 lg:p-10 lg:grid lg:grid-cols-3 lg:gap-6">
        <a href="https://t.me/daowakanda" target="_blank" rel="noopener noreferrer">
          <div className="w-[370px] p-5 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#2AABEE] items-start gap-1 inline-flex">
            <div className="flex justify-between">
              <img src={telegram} alt="telegtam" width={'90px'} />
              <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
                <h1 className="text-white text-2xl font-black font-['Avenir']"> Telegram</h1>
                <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Join chat</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://twitter.com/DaoWakanda" target="_blank" rel="noopener noreferrer">
          <div className="w-[370px] p-5 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#000] items-start gap-1 inline-flex">
            <div className="flex justify-between">
              <img src={X} alt="twitter[X]" width={'90px'} className="rounded-[40px]" />
              <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
                <h1 className="text-white text-2xl font-black font-['Avenir']"> Twitter</h1>
                <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Follow us</p>
              </div>
            </div>
          </div>
        </a>

        <div className="w-[370px] p-5 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#CD6116]  items-start gap-1 inline-flex">
          <div className="flex justify-between">
            <img src={Github} alt="telegtam" width={'90px'} className=" rounded-[40px]" />
            <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
              <h1 className="text-white text-2xl font-black font-['Avenir']"> Github</h1>
              <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Follow us</p>
            </div>
          </div>
        </div>
        <a href="mailto:daowakanda@gmail.com" target="_blank" rel="noopener noreferrer">
          <div className="w-[370px] p-5 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#2AABEE] items-start gap-1 inline-flex">
            <div className="flex justify-between">
              <div className="bg-[#E3E3E3] rounded-full p-5">
                <CiMail className="w-[50px] h-[50px]" />
              </div>
              <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
                <h1 className="text-white text-2xl font-black font-['Avenir']"> Contact us</h1>
                <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Get in touch</p>
              </div>
            </div>
          </div>
        </a>

        <div className="col-start-2 bg-[#1E1E1E] w-[760px] hover:bg-[#E3E3E3]  p-5 rounded-[15px]">
          <a href="https://medium.com/@daowakanda" className="flex pl-5">
            <div className="bg-[#E3E3E3] rounded-full p-5">
              <CiMail className="w-[50px] h-[50px]" />
            </div>
            <div className="flex flex-col pl-4 pt-5 pb-5 hover:text-[#000]">
              <h1 className="text-white text-2xl font-black font-['Avenir']"> Blog</h1>
              <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Learn about Daowakanda</p>
            </div>
          </a>
        </div>
      </div>

      {/* mobile view */}

      <div className="lg:hidden sm:ml-5 sm:p-10 sm:grid sm:grid-cols-2 sm:gap-5">
        <a href="https://t.me/daowakanda" target="_blank" rel="noopener noreferrer">
          <div className="w-[300px] p-5 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#2AABEE] items-start inline-flex">
            <div className="flex justify-between">
              <img src={telegram} alt="telegtam" width={'100px'} />
              <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
                <h1 className="text-white text-lg font-black font-['Avenir']"> Telegram</h1>
                <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Join chat</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://twitter.com/DaoWakanda" target="_blank" rel="noopener noreferrer">
          <div className="w-[300px] p-5 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#000] items-start  inline-flex">
            <div className="flex justify-between">
              <img src={X} alt="twitter[X]" width={'100px'} className="rounded-[50%]" />
              <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
                <h1 className="text-white text-lg font-black font-['Avenir']"> Twitter</h1>
                <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Follow us</p>
              </div>
            </div>
          </div>
        </a>

        <div className="w-[300px] p-5 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#CD6116]  items-start gap-1 inline-flex">
          <div className="flex justify-between">
            <img src={Github} alt="telegtam" width={'50px'} className=" rounded-[40px]" />
            <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
              <h1 className="text-white text-2xl font-black font-['Avenir']"> Github</h1>
              <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Follow us</p>
            </div>
          </div>
        </div>
        <a href="mailto:daowakanda@gmail.com" target="_blank" rel="noopener noreferrer">
          <div className="w-[300px] p-5 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#2AABEE] items-start gap-1 inline-flex">
            <div className="flex justify-between">
              <div className="bg-[#E3E3E3] rounded-full p-5">
                <CiMail className="w-[50px] h-[50px]" />
              </div>
              <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
                <h1 className="text-white text-2xl font-black font-['Avenir']"> Contact us</h1>
                <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Get in touch</p>
              </div>
            </div>
          </div>
        </a>

        <div className="bg-[#1E1E1E] w-[650px] hover:bg-[#E3E3E3]  p-5 rounded-[15px]">
          <a href="https://medium.com/@daowakanda" className="flex pl-5">
            <div className="bg-[#E3E3E3] rounded-full p-5">
              <CiMail className="w-[50px] h-[50px]" />
            </div>
            <div className="flex flex-col pl-4 pt-5 pb-5 hover:text-[#000]">
              <h1 className="text-white text-2xl font-black font-['Avenir']"> Blog</h1>
              <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Learn about Daowakanda</p>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-black h-px w-full"></div>
      <div className="w-full h-[321px] py-12 flex-col justify-center items-center gap-2 inline-flex">
        <div className="flex-col justify-start items-center gap-1 flex">
          <div className="text-white text-[35px] font-black font-['Avenir']">Subscribe to our mailing list</div>
          <div className="text-neutral-400 text-md font-normal font-['Plus Jakarta Sans']">
            Stay up to date with Algorand projects developments
          </div>
        </div>
        <div className="w-[629px] h-16 p-4 bg-white rounded-[50px] justify-start items-center gap-1 inline-flex">
          <div className="grow shrink basis-0 text-neutral-400 text-xl font-light font-['Plus Jakarta Sans']">Email address</div>
          <div className="px-8 py-2 bg-green-950 rounded-[100px] justify-start items-center gap-2.5 flex">
            <div className="text-white text-xl font-black font-['Avenir']">Subscribe</div>
          </div>
        </div>
      </div>
      <GovernanceBot />
      <BottomFoot />
    </div>
  )
}

export default Footer
