import { useWallet } from '@txnlab/use-wallet'
import React, { useState } from 'react'
import logo from '/src/assets/Dao.png'
import { TbWallet } from 'react-icons/tb'
import Stake from '../../stake/page'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

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
        <div className="px-4 lg:px-8">
          <div className="flex justify-between items-center p-3 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              {/* Brand */}
              <Link to="/">
                <img src={logo} alt="logo" width={'50px'} height={'50px'} />
              </Link>
              <span
                className="hidden sm:inline md:text-xl md:py-2 md:px-3 md:text-white md:ml-4 md:font-bold"
                style={{ fontFamily: "'Avenue', sans-serif" }}
              >
                DaoWakanda
              </span>
            </div>
            <div className="mr-2 md:hidden">
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
                  <Link to="/Governance" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
                    Governance
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
                    Communities
                  </a>
                </li>
                <li>
                  <Link to="/About" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Faucet" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
                    Faucet
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                data-test-id="connect-wallet"
                className={`text-white  flex bg-[#4D4D4D] rounded-2xl p-2 focus:outline-none border border-white ${
                  activeAddress ? 'text-green-500' : ''
                }`}
                onClick={() => {
                  toggleWalletModal()
                  console.log('working')
                }}
              >
                <TbWallet className="m-1" />
                {activeAddress ? ` ${formatWalletAddress(activeAddress)}` : 'Connect Wallet'}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col ml-[100px] ">
            <div className="px-5 pt-2 pb-5 space-y-1 sm:px-3">
              <a href="/Governance" className="text-white hover:bg-[#919094] block py-2 px-3 rounded-lg">
                Governance
              </a>
              <a href="#" className="text-white hover:bg-[#919094] block py-2 px-3 rounded-lg">
                Communities
              </a>
              <a href="/About" className="text-white hover:bg-[#919094] block py-2 px-3 rounded-lg">
                About
              </a>
              <a href="/Faucet" className="text-white hover:bg-[#919094] block py-2 px-3 rounded-lg">
                Faucet
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

// <div className="bg-[#1E1E1E]">
// <nav className="p-7 h-screen bg-opacity-30 backdrop-blur-sm md:flex md:bg-[#1E1E1E] md:h-[80px] md:justify-between md:items-center">
//   <div className="flex justify-between items-center cursor-pointer">
//     <Link to="/">
//       <img src={logo} alt="logo" width={'50px'} height={'50px'} />
//     </Link>
//     <span className="text-2xl text-white ml-4 font-bold" style={{ fontFamily: "'Avenue', sans-serif" }}>
//       DaoWakanda
//     </span>
//   </div>

//   <ul className="hidden md:flex md:items-center md:justify-between md:ml-[130px]">
//     <li className="mx-4 my-10 md:my-0">
//       <Link to="/Governance" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
//         Governance
//       </Link>
//     </li>
//     <li className="mx-4 my-6 md:my-0">
//       <Link to="/Communities" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
//         Communities
//       </Link>
//     </li>
//     <li className="mx-4 my-6 md:my-0">
//       <Link to="/About" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
//         About
//       </Link>
//     </li>
//     <li className="mx-4 my-6 md:my-0">
//       <Link to="/Faucet" className="text-white hover:bg-[#919094] py-2 px-3 rounded-lg">
//         Faucet
//       </Link>
//     </li>
//   </ul>
//   <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
//     {' '}
//     <button
//       data-test-id="connect-wallet"
//       className={`text-white  flex bg-[#4D4D4D] rounded-2xl p-2 focus:outline-none border border-white ${
//         activeAddress ? 'text-green-500' : ''
//       }`}
//       onClick={() => {
//         toggleWalletModal()
//         console.log('working')
//       }}
//     >
//       <TbWallet className="m-1" />
//       {activeAddress ? ` ${formatWalletAddress(activeAddress)}` : 'Connect Wallet'}
//     </button>{' '}
//   </div>
// </nav>
// </div>
