import Navbar from '../components/Navbar/Navbar2'
import about from '../assets/about.jpg'
import about2 from '../assets/about2.jpg'
import { GoArrowUpRight } from 'react-icons/go'
import Footer from '../components/Footer'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import HrtOverview from '../modals/HrtOverview'
import Distribution from '../modals/Distribution'
import GovernanceView from '../modals/GovernanceView'
import { useState } from 'react'

const About = () => {
  const [showTokenOverview, setShowTokenOverview] = useState(false)
  const [showDistribution, setShowDistribution] = useState(false)
  const [showGovernanceView, setShowGovernanceView] = useState(false)

  const toggleTokenOverview = () => {
    setShowTokenOverview(!showTokenOverview)
  }
  const toggleShowDistribution = () => {
    setShowDistribution(!showDistribution)
  }
  const toggleShowGovernanceView = () => {
    setShowGovernanceView(!showGovernanceView)
  }

  return (
    <>
      <div>
        <Navbar
          toggleWalletModal={function (): void {
            throw new Error('Function not implemented.')
          }}
        />

        <div
          className="hidden md:block"
          style={{
            width: '100%',
            height: '100px',
            backgroundImage: `url(${about})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(70%)',
          }}
        >
          <h1 className="text-3xl font-bold text-white pl-[500px] pt-7" style={{ filter: 'brightness(100%)' }}>
            About Us
          </h1>
        </div>
        <div className="bg-[#000] w-full  px-[20px] py-[10px] md:w-[100%] h-[80vh]">
          <div className="w-[100%] px-1 py-[5px] md:w-full overflow-hidden  md:overflow-visible">
            <h1 className="text-[#CAFFBB] text-[30px] ml-1 md:text-[30px] pb-2">Background</h1>
            <p className="text-[#ABABAF] w-[90%] text-[15px]">
              In the evolving digital landscape, community engagement and participation have become crucial for the growth and
              sustainability of blockchain ecosystems. DAO Wakanda addresses the need for a more inclusive, participatory, and rewarding
              platform within Algorand Nigeria.
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row md:flex md:justify-between mt-[60px]">
            <div className="w-full md:w-1/2 md:mr-5">
              <h1 className="text-white text-[20px]">
                Designed to revolutionize community engagement within the Algorand Nigeria ecosystem.
              </h1>
              <p className="text-[#ABABAF] text-[13px]">
                Through innovative use of NFTs, developer incentives, task-based rewards, and community rewards, DAO Wakanda aims to create
                a vibrant, incentivized environment that empowers community members and amplifies their collective voice.
              </p>
              <button className="mt-10 w-[80%] md:w-[40%] justify-center bg-[#fff] p-2 rounded-lg text-sm flex">
                Become a community member <GoArrowUpRight className="color-[#000] m-1 " />
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={about2}
                alt="about"
                className="mt-5 md:ml-[160px] md:mt-0 rounded-tl-[50px] rounded-br-[50px]"
                style={{ width: '100%', maxWidth: '350px' }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#000] px-5 py-20 md:flex-row md:space-x-4">
          <div className="bg-[#4D4D4D4D] w-full md:w-[30%] p-5 rounded-lg mb-4 md:mb-0" style={{ border: '1px solid white' }}>
            <h1 className="text-white">Vision & Goals</h1>
            <hr className="mb-5" />
            <p className="text-white text-[13px] mb-5">
              DAO Wakanda's vision is to foster a dynamic and empowered community that actively contributes to and benefits from the
              Algorand Nigeria ecosystem. Its goals include enhancing developer engagement, facilitating community-driven decision-making,
              and rewarding contributions through a comprehensive tokenomics model.
            </p>
          </div>

          <div className="bg-[#4D4D4D4D] w-full md:w-[30%] p-5 rounded-lg mb-4 md:mb-0" style={{ border: '1px solid white' }}>
            <h1 className="text-white">Blockchain Foundation</h1>
            <hr className="mb-5" />
            <p className="text-white text-[13px] mb-5">
              DAO Wakanda is built on the Algorand blockchain, known for its speed, security, and scalability. This section will detail the
              technical architecture, smart contracts, and how NFTs integrate with the DAO.
            </p>
          </div>

          <div className="bg-[#4D4D4D4D] w-full md:w-[30%] p-5 rounded-lg mb-4 md:mb-0" style={{ border: '1px solid white' }}>
            <h1 className="text-white">Tokenomics</h1>
            <hr className="mb-1" />
            <div className="flex justify-between" onClick={toggleTokenOverview}>
              <p className="text-[#919094] text-[13px]">$HRT Token Overview</p>
              {showTokenOverview ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
            </div>
            <hr className="mb-1" />
            {showTokenOverview && <HrtOverview />}
            <hr className="mb-1" />

            <div className="flex justify-between" onClick={toggleShowDistribution}>
              <p className="text-[#919094] text-[13px]">Distribution</p>
              {showDistribution ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
            </div>
            <hr className="mb-1" />
            {showDistribution && <Distribution />}
            <hr className="mb-1" />

            <div className="flex justify-between" onClick={toggleShowGovernanceView}>
              <p className="text-[#919094] text-[13px]">Governance</p>
              {showGovernanceView ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
            </div>
            <hr className="mb-1" />
            {showGovernanceView && <GovernanceView />}
            <hr className="mb-1" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default About
