<<<<<<< HEAD
import React from 'react'
import { Twitter, Favorite, Telegram, GitHub, Mail } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#1E1E1E] w-[100%] h-[70px] justify-center items-center flex">
        <div className="justify-between flex">
          <div className="justify-start flex">
            <h3 className="text-neutral-400 text-base font-medium font-['Space Grotesk'] leading-normal">
              Built with <Favorite /> at
              <span className="text-[#C5EE4F] text-base font-medium font-['Space Grotesk'] leading-normal"> DAO WAKANDA</span>
            </h3>
          </div>
        </div>
        <div className="flex justify-between text-neutral-400">
          <a href="https://twitter.com/DaoWakanda" target="_blank" rel="noopener noreferrer" className="mr-5">
            <Twitter />
          </a>

=======
import React from 'react';
import { Twitter, Favorite, Telegram, GitHub, Mail } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E]">
      <div className="flex flex-col items-center justify-center p-5 md:flex-row md:justify-between">
        <div className="text-neutral-400 mb-3 md:mb-0 md:ml-[120px]">
          <h3 className="text-base font-medium font-['Space Grotesk'] leading-normal">
            Built with <Favorite /> at
            <span className="text-[#C5EE4F]"> DAO WAKANDA</span>
          </h3>
        </div>
        <div className="flex justify-center md:justify-end md:mr-[120px] text-neutral-400">
          <a href="https://twitter.com/DaoWakanda" target="_blank" rel="noopener noreferrer" className="mr-5">
            <Twitter />
          </a>
>>>>>>> master
          <a href="https://t.me/daowakanda" target="_blank" rel="noopener noreferrer" className="mr-5">
            <Telegram />
          </a>
          <a href="https://github.com/realsurd/wakandaV3.git" target="_blank" rel="noopener noreferrer" className="mr-5">
            <GitHub />
          </a>
<<<<<<< HEAD
          <a href="mailto:daowakanda@gmail.com" target="_blank" rel="noopener noreferrer" className="mr-5">
=======
          <a href="mailto:daowakanda@gmail.com" target="_blank" rel="noopener noreferrer">
>>>>>>> master
            <Mail />
          </a>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  )
}

export default Footer
=======
  );
};

export default Footer;
>>>>>>> master
