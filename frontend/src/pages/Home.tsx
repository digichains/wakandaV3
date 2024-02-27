import { useNavigate } from 'react-router-dom'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footers/Footer'
import HomeNav from '../components/HomeNav/HomeNav'
import Works from '../components/Works/Works'
import play from '/src/assets/play-circle.png'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    // Navigate to the "Governance" page
    navigate('/Governance')
  }

  return (
    <div className="relative h-screen overflow-y-auto">
      <div className="absolute inset-0 bg-cover" style={{ backgroundImage: 'url("src/assets/wakanda-warrior.jpg")' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/25" />
      <HomeNav />

      <div className="flex flex-col justify-start items-start gap-8 text-white">
        {/* Increased z-index to 10 */}
        <div className="flex flex-col justify-start items-start z-20 ml-10">
          <h1 className="mt-20 text-center text-[#C5EE4F] font-bold text-[60px] sm:text-4xl md:text-5xl">DaoWakanda</h1>
          <p className="w-[90%] sm:w-[80%] md:w-[600px] text-white text-xl text-[25px] leading-7 sm:text-base md:text-lg">
            This is a decentralized autonomous organization to revolutionize community engagement and participation within Algorand Nigeria.
          </p>
          <div className="md:flex md:flex-row sm:flex-col sm:items-center sm:justify-between mt-10 mb-10">
            <button onClick={handleClick} className="bg-[#C5EE4F] text-[#00484F] rounded-md p-3 w-full sm:w-[200px]">
              Explore Proposals
            </button>
            <div className="flex items-center sm:mt-0 sm:ml-4">
              <img src={play} alt="play" className="w-6 h-6" />
              <p className="ml-2 text-sm">Watch video</p>
            </div>
          </div>
          <div className="flex w-[90%] sm:w-[90%] p-4 bg-[#F4F4F433] bg-opacity-20 justify-between items-start">
            <div className="flex items-center mr-1">
              <h1 className="text-3xl mr-2">2943</h1>
              <p className="text-xs">
                Active <br /> Projects
              </p>
            </div>

            <div className=" relative">
              <div className="w-[20.34px] h-[0px] left-[-0px] top-[10px] absolute origin-top-left rotate-[-29.45deg] border border-zinc-300"></div>
              <div className="w-[20.34px] h-[0px] left-[-0px] top-[17px] absolute origin-top-left rotate-[-29.45deg] border border-zinc-300"></div>
              <div className="w-[20.34px] h-[0px] left-[-0px] top-[24px] absolute origin-top-left rotate-[-29.45deg] border border-zinc-300"></div>
              <div className="w-[20.34px] h-[0px] left-[-0px] top-[31px] absolute origin-top-left rotate-[-29.45deg] border border-zinc-300"></div>
              <div className="w-[20.34px] h-[0px] left-[-0px] top-[38px] absolute origin-top-left rotate-[-29.45deg] border border-zinc-300"></div>
            </div>

            <div className="flex items-center mr-1">
              <h1 className="text-3xl mr-2">$1M+</h1>
              <p className="text-xs">
                Community <br /> Members
              </p>
            </div>
          </div>
        </div>
        <div className="z-10 w-full">
          <Works />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
