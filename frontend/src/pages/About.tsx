import Navbar from '../components/Navbar/Navbar2'
import about from '../assets/about.jpg'
import about2 from '../assets/about2.jpg'
import { GoArrowUpRight } from 'react-icons/go'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <div>
        <Navbar
          toggleWalletModal={function (): void {
            throw new Error('Function not implemented.')
          }}
        />

        <div
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

        <div className="bg-[#000] p-[60px] w-full h-[80vh]">
          <h1 className="text-[#CAFFBB] text-[25px]">Background</h1>
          <p className="text-[#ABABAF]">
            In the evolving digital landscape, community engagement and participation have become crucial for the growth and sustainability
            of blockchain ecosystems. DAO Wakanda addresses the need for a more inclusive, participatory, and rewarding platform within
            Algorand Nigeria.
          </p>

          <div className="flex justify-between mt-[60px]">
            <div className="w-[50%]">
              <h1 className="text-white text-[18px]">
                Designed to revolutionize community engagement within the Algorand Nigeria ecosystem.
              </h1>
              <p className="text-[#ABABAF] text-[13px]">
                Through innovative use of NFTs, developer incentives, task-based rewards, and community rewards, DAO Wakanda aims to create
                a vibrant, incentivized environment that empowers community members and amplifies their collective voice.
              </p>

              <button className="mt-10 w-[40%] justify-center bg-[#fff] p-2 rounded-lg text-sm flex">
                Become a community member <GoArrowUpRight className="color-[#000] m-1 " />
              </button>
            </div>

            <div className="w-[50%]">
              <img src={about2} alt="about" width={'60%'} className="ml-[250px] rounded-tl-[80px] " />
            </div>
          </div>
        </div>
        <div className="flex justify-between p-[60px] bg-[#000] w-[100%]">
          <div className="bg-[#4D4D4D4D] w-[30%] p-5 rounded-lg" style={{ border: '1px solid white' }}>
            <h1 className="text-white">Vision & Goals</h1>
            <hr className="mb-5" />
            <p className="text-white text-[13px] mb-5">
              DAO Wakanda's vision is to foster a dynamic and empowered community that actively contributes to and benefits from the
              Algorand Nigeria ecosystem. Its goals include enhancing developer engagement, facilitating community-driven decision-making,
              and rewarding contributions through a comprehensive tokenomics model.
            </p>
          </div>

          <div className="bg-[#4D4D4D4D] w-[30%] p-5 rounded-lg" style={{ border: '1px solid white' }}>
            <h1 className="text-white">Blockchain Foundation</h1>
            <hr className="mb-5" />
            <p className="text-white text-[13px] mb-5">
              DAO Wakanda is built on the Algorand blockchain, known for its speed, security, and scalability. This section will detail the
              technical architecture, smart contracts, and how NFTs integrate with the DAO.
            </p>
          </div>

          <div className="bg-[#4D4D4D4D] w-[30%] p-5 rounded-lg" style={{ border: '1px solid white' }}>
            <h1 className="text-white">Blockchain Foundation</h1>
            <hr className="mb-5" />
            <p className="text-white text-[13px] mb-5">
              DAO Wakanda is built on the Algorand blockchain, known for its speed, security, and scalability. This section will detail the
              technical architecture, smart contracts, and how NFTs integrate with the DAO.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default About
