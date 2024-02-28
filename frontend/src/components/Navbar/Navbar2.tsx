import { useWallet } from '@txnlab/use-wallet'
import React, { useState } from 'react'
import logo from '/src/assets/DaoWakanda - Black.png'
import { TbWallet } from 'react-icons/tb'

interface NavbarProps {
  toggleWalletModal: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggleWalletModal }) => {
  const { activeAddress } = useWallet()
  const [isOpen, setIsOpen] = useState(false)

  const formatWalletAddress = (address: string) => {
    if (!address) return ''
    const firstSeven = address.slice(0, 7)
    const lastFour = address.slice(-4)
    return `${firstSeven}...${lastFour}`
  }

  return (
    <>
      <nav className="bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              {/* Brand */}
              <img src={logo} alt="logo" width={'300px'} height={'100px'} />
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#4D4D4D] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                {/* Icon when menu is closed */}
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  // Icon when menu is open
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
                    Governance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
                    Communities
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
                    Developers
                  </a>
                </li> */}
                <li>
                  <a href="#" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
                    About
                  </a>
                </li>
              </ul>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                data-test-id="connect-wallet"
                className={`text-white  flex bg-[#4D4D4D] rounded-lg p-2 focus:outline-none ${activeAddress ? 'text-green-500' : ''}`}
                onClick={toggleWalletModal}
              >
                <TbWallet className="m-1" />
                {activeAddress ? ` ${formatWalletAddress(activeAddress)}` : 'Connect Wallet'}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col ml-[100px]">
            <div className="px-5 pt-2 pb-5 space-y-1 sm:px-3">
              <a href="#" className="text-white hover:bg-[#919094] block py-2 px-3 rounded-lg">
                Governance
              </a>
              <a href="#" className="text-white hover:bg-[#919094] block py-2 px-3 rounded-lg">
                Communities
              </a>
              {/* <a href="#" className="text-white hover:bg-[#919094] block py-2 px-3 rounded-lg">
                Developers
              </a> */}
              <a href="#" className="text-white hover:bg-[#919094] block py-2 px-3 rounded-lg">
                About
              </a>
            </div>
            <button
              data-test-id="connect-wallet"
              className={`text-white mb-5 w-[150px] flex bg-[#4D4D4D] rounded-lg p-2 focus:outline-none ${
                activeAddress ? 'text-green-500' : ''
              }`}
              onClick={toggleWalletModal}
            >
              <TbWallet className="m-1" />
              {activeAddress ? ` ${formatWalletAddress(activeAddress)}` : 'Connect Wallet'}
            </button>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
