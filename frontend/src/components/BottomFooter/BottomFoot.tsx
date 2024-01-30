import { FaGithub } from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'

const BottomFoot = () => {
  return (
    <div className="flex justify-between items-center bg-[#000] pl-[50px] pr-[200px] py-[50px] gap-1">
      <div className="flex flex-col">
        <h1 className="mb-10 font-bold">DaoWakanda Communities</h1>
        <a href="https://twitter.com/DaoWakanda" target="_blank" rel="noopener noreferrer">
          <div className="flex font-sm text-[#ABABAF]">
            <RiTwitterXLine className="mr-5" /> Twitter
          </div>
        </a>

        <div className="flex font-sm text-[#ABABAF]">
          <FaGithub className="mr-5" /> Github
        </div>

        <a href="https://t.me/daowakanda" target="_blank" rel="noopener noreferrer">
          <div className="flex font-sm text-[#ABABAF]">
            <RiTwitterXLine className="mr-5" /> Telegram
          </div>
        </a>
        <a href="https://medium.com/@daowakanda" target="_blank" rel="noopener noreferrer">
          <div className="flex font-sm text-[#ABABAF]">
            <RiTwitterXLine className="mr-5" /> Blog
          </div>
        </a>
      </div>

      <div className="flex flex-col">
        <h1 className="mb-10 font-extrabold">Useful Links</h1>
        <div className="font-sm text-[#ABABAF]">
          <p>Governance</p>
          <p>DAO Voting</p>
          <p>Documentation</p>
          <p>Research Forum</p>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="mb-10 font-extrabold"> About Us</h1>
        <div className="font-sm text-[#ABABAF]">
          <p>FAQs</p>
          <p>Help Center </p>
          <p>Download Dev.Kit</p>
          <p>Blog </p>
        </div>
      </div>
    </div>
  )
}

export default BottomFoot
