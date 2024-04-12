import { CiMail } from 'react-icons/ci'
import BottomFoot from '../BottomFooter/BottomFoot'
import GovernanceBot from '../GovernanceBot/GovernanceBot'
import Github from '/src/assets/Github svg.svg'
import telegram from '/src/assets/Group.svg'
import X from '/src/assets/X.jpg'
import { LuGlobe2 } from "react-icons/lu"

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-[#272727]">
      <div className="flex justify-center flex-col md:flex md:justify-center md:flex-col m-9 items-center">
        <h1 className="text-3xl font-bold text-white ">Join Our Commuity</h1>
        <p className="text-sm mt-2 text-center text-[#919094]">
          Be part of the community and have a say in the future of the Algorand Nigeria community
        </p>
      </div>

      <div className="ml-3 p-3 md:ml-10 md:p-10 md:grid md:grid-cols-3 md:gap-6 sm:flex sm:flex-col sm:mx-auto sm:ml-10">
        <a href="https://t.me/daowakanda" target="_blank" rel="noopener noreferrer" className="mb-4">
          <div className="w-[370px] p-5 mb-3 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#2AABEE] items-start gap-1 inline-flex">
            <div className="flex justify-between md:flex md:justify-between">
              <img src={telegram} alt="telegram" width={'90px'} />
              <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
                <h1 className="text-white text-2xl font-black font-['Avenir']"> Telegram</h1>
                <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Join chat</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://twitter.com/DaoWakanda" target="_blank" rel="noopener noreferrer" className="mb-4">
          <div className="w-[370px] p-5 mb-3 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#000] items-start gap-1 inline-flex">
            <div className="flex justify-between md:flex md:justify-between">
              <img src={X} alt="twitter[X]" width={'90px'} className="rounded-[40px]" />
              <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
                <h1 className="text-white text-2xl font-black font-['Avenir']"> Twitter</h1>
                <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Follow us</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://github.com/realsurd/wakandaV3.git" target="_blank" rel="noopener noreferrer" className="mb-4">
          <div className="w-[370px] p-5 mb-3 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#CD6116]  items-start gap-1 inline-flex">
            <div className="flex justify-between md:flex md:justify-between">
              <img src={Github} alt="github" width={'90px'} className="rounded-[40px]" />
              <div className="flex flex-col pl-4 pt-5 pr-5 pb-5">
                <h1 className="text-white text-2xl font-black font-['Avenir']"> Github</h1>
                <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Follow us</p>
              </div>
            </div>
          </div>
        </a>

        <a href="mailto:daowakanda@gmail.com" target="_blank" rel="noopener noreferrer" className="mb-4">
          <div className="w-[370px] p-5  mb-3 rounded-[15px] justify-between bg-[#1E1E1E] hover:bg-[#2AABEE] items-start gap-1 inline-flex">
            <div className="flex justify-between md:flex md:justify-between">
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

        <div className="col-start-2 bg-[#1E1E1E] w-[365px] md:w-[760px] mb-7 md:mb-7 hover:bg-[#E3E3E3] p-3 rounded-[15px]">
          <a href="https://medium.com/@daowakanda" className="flex pl-5">
            <div className="bg-[#E3E3E3] rounded-full p-3">
              <LuGlobe2 className="w-[60px] h-[50px]" />
            </div>
            <div className="flex flex-col pl-4 pt-2 md:pt-7 hover:text-[#000]">
              <h1 className="text-white text-2xl font-black font-['Avenir']"> Blog</h1>
              <p className="text-neutral-400 text-base font-normal font-['Plus Jakarta Sans']">Learn about Daowakanda</p>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-black h-px w-full"></div>
      <div className="w-full h-[321px] py-12 flex-col justify-center items-center gap-2 inline-flex">
        <div className="flex-col justify-start items-center gap-1 flex">
          <div className="text-white sm:text-2xl md:text-[35px] font-black font-['Avenir']">Subscribe to our mailing list</div>
          <div className="text-neutral-400 text-md font-normal font-['Plus Jakarta Sans']">
            Stay up to date with Algorand projects developments
          </div>
        </div>
        <div className="sm:w-[629px] w-90% h-16 p-4 bg-white rounded-[50px] justify-start items-center gap-1 inline-flex">
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
