import Profile from "../atoms/Profile"
import TimelineSettings from "../atoms/TimelineSettings"
import ForYou from "../atoms/ForYou"
import Logo from "../../assets/images/logo.png"
function TopMenu() {
  return (
    <div className="sticky top-0 bg-black">
      <div className="flex justify-between px-4 h-[53px] items-center sm:hidden">
        <Profile />
        <div className="w-6">
          <img src={Logo} alt="" />
        </div>
        <TimelineSettings />
      </div>
      <div className="t-10">
        <ForYou/>
      </div>
    </div>
  )
}

export default TopMenu