import { FaGithub } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const BottomFoot = () => {
  return (
    <div className="flex flex-col bg-[#000] pl-[20px] pr-[20px] py-[50px] gap-4 md:flex-row md:justify-between md:pl-[50px] md:pr-[10px] md:items-start">
      <div className="flex flex-col md:w-1/4">
        <h1 className="mb-5 font-bold">DaoWakanda Communities</h1>
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

      <div className="flex flex-col md:w-1/4">
        <h1 className="mb-5 font-extrabold">Useful Links</h1>
        <div className="font-sm text-[#ABABAF]">
          <p>Governance</p>
          <p>DAO Voting</p>
          <p>Documentation</p>
          <p>Research Forum</p>
        </div>
      </div>

      <div className="flex flex-col md:w-1/4">
        <h1 className="mb-5 font-extrabold"> About Us</h1>
        <div className="font-sm text-[#ABABAF]">
          <p>FAQs</p>
          <p>Help Center </p>
          <p>Download Dev.Kit</p>
          <p>Blog </p>
        </div>
      </div>
    </div>
  );
};

export default BottomFoot;
