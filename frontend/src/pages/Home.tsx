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
      <div className="absolute inset-0 bg-cover  " style={{ backgroundImage: 'url("src/assets/wakanda-warrior.jpg")' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/25" />
      <HomeNav />

      <div className="flex flex-col justify-start items-start gap-8 text-white">
        {' '}
        {/* Increased z-index to 10 */}
        <div className="lg:flex lg:flex-col lg:justify-start lg:items-start z-20 ml-10">
          <h1 className="lg:mt-20 sm:mt-[120px] sm:text-center text-[#C5EE4F] lg:font-extrabold sm:font-bold lg:text-[65px] sm:text-[90px]">
            DaoWakanda
          </h1>
          <div className="lg:w-[524px] sm:w-[600px]  lg:text-center sm:text-center text-white lg:text-xl sm:text-[25px] font-['Avenir LT Std'] leading-7">
            This is a decentralized autonomous organization to revolutionize community engagement and participation within Algorand Nigeria.
          </div>
          <div className="flex mt-10 mb-10">
            <div className="sm:hidden lg:flex lg:justify-between">
              <div>
                <button onClick={handleClick} className="bg-[#C5EE4F] text-[#00484F] rounded-md p-3 w-[200px]">
                  Explore Proposals
                </button>
              </div>
              <div className="flex items-center p-3 mr-1">
                <img src={play} alt="play" />
                <p className="ml-2">Watch video</p>
              </div>
            </div>

            {/* mobile view */}
            <div className="lg:hidden sm:flex sm:flex-col sm:ml-[150px]">
              <div>
                <button onClick={handleClick} className="bg-[#C5EE4F] text-[#00484F] rounded-md p-3 w-[200px]">
                  Explore Proposals
                </button>
              </div>
              <div className="flex items-center p-3 mr-1">
                <img src={play} alt="play" />
                <p className="ml-2">Watch video</p>
              </div>
            </div>
          </div>

          <div className="flex lg:w-[100%] sm:w-[90%] p-4 bg-[#F4F4F433] bg-opacity-20 justify-between items-start">
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
        <div className="z-10">
          <Works />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
