import { useWallet } from '@txnlab/use-wallet'
import React from 'react'
import Stake from '../../stake/page'
import Footer from '../Footer'
import logo from '/src/assets/DaoWakanda - Black.png'

interface NavbarProps {
  toggleWalletModal: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggleWalletModal }) => {
  const { activeAddress } = useWallet()

  // Function to format the wallet address (e.g., display only first and last 4 characters)
  const formatWalletAddress = (address: string) => {
    if (!address) return ''
    const firstFour = address.slice(0, 4)
    const lastFour = address.slice(-4)
    return `${firstFour}...${lastFour}`
  }

  return (
    <>
      <nav className="flex justify-between items-center p-5 bg-[#2F3033] w-[100%] overflow-hidden">
        <div className=" cursor-pointer w-[20%] flex lg:flex-col">
          {/* Brand */}
          <img src={logo} alt="logo" width={'300px'} height={'100px'} />
        </div>

        {/* Navbar Navigation */}
        <div className="flex justify-between items-center p-3 bg-[#2F3033] w-[100%]">
          <div className="md:flex flex-initial justify-between items-center ">
            <ul className="flex cursor-pointer mx-20">
              <li className="justify-between rounded-full py-2 px-7 mx-4 text-white hover:bg-[#919094]">Vote</li>
              <li className="justify-between rounded-full py-2 px-7 mx-4 text-white hover:bg-[#919094]">Resources</li>
              <li className="justify-between rounded-full py-2 px-7 mx-4 text-white hover:bg-[#919094]">Doc</li>
              <li className="justify-between rounded-full py-2 px-7 mx-4 text-white hover:bg-[#919094]">About</li>
            </ul>

            <button
              data-test-id="connect-wallet"
              className={`text-blue-500 hover:text-blue-700 focus:outline-none mt-4 lg:mt-0 ${activeAddress ? 'text-green-500' : ''}`}
              onClick={toggleWalletModal}
            >
              {activeAddress ? `Connected: ${formatWalletAddress(activeAddress)}` : 'Connect'}
            </button>
          </div>
        </div>
      </nav>
      <>
        <Stake />
        <Footer />
      </>
    </>
  )
}

export default Navbar
