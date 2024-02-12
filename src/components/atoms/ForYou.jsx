import TimelineSettings from "./TimelineSettings"

function ForYou() {
  return (
    <div className="flex justify-around items-center font-semibold h-[53px] text-slate-200 border-b border-[#222528]">
      <div className="grid w-full h-full items-center text-center cursor-pointer hover:bg-[#181818] duration-200 ease-in-out">
        <h3>For You</h3>
      </div>
      <div className="grid w-full h-full items-center text-center cursor-pointer hover:bg-[#181818] duration-200 ease-in-out">
        <h3>Follow</h3>
      </div>
      <div className="hidden sm:block px-3">
        <TimelineSettings />
      </div>
    </div>
  )
}

export default ForYou