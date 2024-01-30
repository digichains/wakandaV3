const CommunitiesDropdown = () => {
  return (
    <div className="flex justify-start px-1 py-3 bg-[#202020] fixed bottom-16  w-[35%]  z-50 transition-transform ease-in-out duration-300 transform translate-y-[100%] group-hover:translate-y-0 mt-4 rounded-md">
      {/* Use 'fixed' to keep the dropdown in view, 'bottom-16' to position below the navigation, 'left-0' to align with the left edge */}
      <a href="https://twitter.com/DaoWakanda" target="_blank" rel="noopener noreferrer">
        <div className="px-1 py-0 mr-[10px] text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-t-md">
          <h1 className="text-sm font-thin">Twitter</h1>
          <p className="text-sm font-thin">Follow us @daowakanda</p>
        </div>
      </a>

      <div className=" px-1 text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-t-md">
        <h1 className="text-sm font-thin">Discord</h1>
        <p>Ask questions</p>
      </div>

      <a href="https://t.me/daowakanda" target="_blank" rel="noopener noreferrer">
        <div className="px-1 ml-[70px] text-white hover:bg-[#919094] transition-all border-b-[1px] border-[#202020] rounded-t-md">
          <h1 className="text-sm font-thin">Telegram</h1>
          <p>Join the community</p>
        </div>
      </a>
    </div>
  )
}

export default CommunitiesDropdown
