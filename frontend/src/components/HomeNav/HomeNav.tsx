import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import CommunitiesDropdown from '../../modals/CommunitiesDropdown'
import { GovernanceDropdown } from '../../modals/GovernanceDropdown'
import logo from '/src/assets/DaoWakanda - Black.png'
import twitters from '/src/assets/new-twitter.png'

const HomeNav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isCommunitiesHovered, setCommunitiesHovered] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="flex justify-between items-center bg-[#2F3033] w-[100%] overflow-hidden px-5 py-0 bg-opacity-30 backdrop-blur-[25px] ">
      <div className="cursor-pointer w-[50%]  mb-10 flex lg:flex-col items-start">
        {/* Brand */}
        <img src={logo} alt="logo" width={'100%'} height={'100px'} />
      </div>

      {/* Navbar Navigation */}
      <div
<<<<<<< HEAD
        className={`lg:flex lg:flex-initial justify-between items-center p-3 w-[100%] mb-[30px] ${
=======
        className={`flex flex-initial md:flex md:flex-initial md:justify-between md:items-center md:p-3 md:w-[100%] md:mb-[30px] ${
>>>>>>> master
          isMobileMenuOpen ? 'flex flex-col' : 'hidden'
        } lg:items-end`}
      >
        <ul className="flex flex-col lg:flex-row cursor-pointer text-white lg:mr-7">
          <li className="relative lg:mr-[5px] mb-2 ml-5 lg:mb-0" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <div className="flex items-center cursor-pointer">
              <Link to="/Governance" className="flex items-center hover:text-blue-500 hover:bg-[#919094] p-2 rounded transition-all">
                Governance
              </Link>
              {isDropdownOpen && <GovernanceDropdown />}
            </div>
          </li>

          <li
            className="flex flex-between mr-12 lg:mr-4 mb-2 lg:mb-0"
            onMouseEnter={() => setCommunitiesHovered(true)}
            onMouseLeave={() => setCommunitiesHovered(false)}
          >
            <Link
              to="/Communities"
              className="flex items-center hover:text-blue-500 lg:ml-[120px]  hover:bg-[#919094] p-2 rounded transition-all"
            >
              Communities
            </Link>
            {isCommunitiesHovered && <CommunitiesDropdown />}
          </li>

          {/* <li className="flex flex-between mr-12 lg:mr-4 mb-2 lg:mb-0">
            <Link to="/Developers" className="flex items-center hover:text-blue-500 hover:bg-[#919094] p-2 rounded transition-all">
              Developers
            </Link>
          </li> */}

          <li className="flex flex-between mr-12 lg:mr-4">
            <Link to="/About" className="flex items-center lg:ml-[120px] hover:text-blue-500 hover:bg-[#919094] p-2 rounded transition-all">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="lg:hidden flex items-center justify-center">
        {isMobileMenuOpen ? (
          <FiX size={24} onClick={toggleMobileMenu} className="text-white cursor-pointer" />
        ) : (
          <FiMenu size={24} onClick={toggleMobileMenu} className="text-white cursor-pointer" />
        )}
      </div>

      <a
        href="https://twitter.com/DaoWakanda"
        className="lg:flex hidden  mb-10  items-center justify-center bg-[#FFF] px-4 py-2 rounded-md text-black hover:bg-gray-400 w-[40%]"
      >
        <img src={twitters} alt="twitter" className="mr-2" width={'20px'} />
        Join Twitter
      </a>
    </nav>
  )
}

export default HomeNav
