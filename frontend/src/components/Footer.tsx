import React from 'react'
import { Twitter, Instagram, Facebook, Favorite } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#2F3033] w-[100%] h-[100px] px-[340px] justify-center items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch justify-between items-center inline-flex">
          <div className="justify-start items-center gap-0.5 flex">
            <h3 className="text-neutral-400 text-base font-medium font-['Space Grotesk'] leading-normal">
              Built with <Favorite /> at
              <span className="text-[#C5EE4F] text-base font-medium font-['Space Grotesk'] leading-normal"> DAO WAKANDA</span>
            </h3>
          </div>
        </div>
        <div>
          <Twitter />
          <Instagram />
          <Facebook />
        </div>
      </div>
    </footer>
  )
}

export default Footer
