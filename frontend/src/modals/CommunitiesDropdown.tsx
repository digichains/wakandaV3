const CommunitiesDropdown = () => {
  return (
    <div className="flex justify-start items-center px-10 py-3 bg-[#202020] fixed bottom-16 w-[40%] h-[50%]  z-50 transition-transform ease-in-out duration-300 transform translate-y-[100%] group-hover:translate-y-0 mt-4 rounded-md">
      {/* Use 'fixed' to keep the dropdown in view, 'bottom-16' to position below the navigation, 'left-0' to align with the left edge */}
      <a href="https://twitter.com/DaoWakanda" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col p-2 w-[60%] ml-[10px] text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-md">
          <h1 className="text-[12px] font-thin">Twitter</h1>
          <p className="text-[10px] font-thin">Follow us @daowakanda</p>
        </div>
      </a>

      <div className=" ml-[12px] p-2 w-[30%] text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-md">
        <h1 className="text-[10px] font-thin">Discord</h1>
        <p className="text-[10px]">Ask questions</p>
      </div>

      <a href="https://t.me/daowakanda" target="_blank" rel="noopener noreferrer">
        <div className="p-2 w-[80%] mr-[80px] text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-md">
          <h1 className="text-[12px] font-thin">Telegram</h1>
          <p className="text-[10px]">Join the community</p>
        </div>
      </a>
    </div>
  )
}

export default CommunitiesDropdown
