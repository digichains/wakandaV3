import { useNavigate } from 'react-router-dom'

export const GovernanceDropdown = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    // Navigate to the "Governance" page
    navigate('/Governance')
  }

  return (
    <div className="flex justify-center items-center  bg-[#202020] fixed bottom-16 left-0 w-[50%] h-[50%] ml-[150px]  z-50 transition-transform ease-in-out duration-300 transform translate-y-[100%] group-hover:translate-y-0 mt-4 rounded-md">
      {/* Use 'fixed' to keep the dropdown in view, 'bottom-16' to position below the navigation, 'left-0' to align with the left edge */}
      <div className="p-2 w-[40%] text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-md">
        <h1 className="text-[10px] font-thin">S</h1>
        <p className="text-[10px] font-thin">Explore how the decisions in DaoWakanda governance process are made</p>
      </div>

      <div
        className=" p-2 w-[40%] text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-md"
        onClick={handleClick}
      >
        <h1 className="text-[10px] font-thin">DAO Voting</h1>
        <p className="text-[10px]">Participating in making decisions for the community via DAO voting</p>
      </div>

      <div className="p-2 w-[40%] text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-md">
        <h1 className="text-[11px] font-thin">Research Forum</h1>
        <p className="text-[10px]">Join forums to discuss your ideas with community members</p>
      </div>
    </div>
  )
}
