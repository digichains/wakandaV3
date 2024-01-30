import { useNavigate } from 'react-router-dom'

export const GovernanceDropdown = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    // Navigate to the "Governance" page
    navigate('/Governance')
  }

  return (
    <div className="flex justify-center items-center  bg-[#202020] fixed bottom-16 left-0 w-[40%] ml-[150px]  z-50 transition-transform ease-in-out duration-300 transform translate-y-[100%] group-hover:translate-y-0 mt-4 rounded-md">
      {/* Use 'fixed' to keep the dropdown in view, 'bottom-16' to position below the navigation, 'left-0' to align with the left edge */}
      <div className="px-1 py-0 text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-t-md">
        <h1 className="text-sm font-thin">S</h1>
        <p className="text-sm font-thin">Explore how the decisions in DaoWakanda governance process are made</p>
      </div>

      <div
        className=" px-1 text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-t-md"
        onClick={handleClick}
      >
        <h1 className="text-sm font-thin">DAO Voting</h1>
        <p>Participating in making decisions for the community via DAO voting</p>
      </div>

      <div className="px-1 text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-t-md">
        <h1 className="text-sm font-thin">Research Forum</h1>
        <p>Join forums to discuss your ideas with community members</p>
      </div>
    </div>
  )
}
