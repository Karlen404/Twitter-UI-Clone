import { GoHomeFill, GoSearch } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { PiBell } from "react-icons/pi";
import Profile from "../atoms/Profile";
import { FaXTwitter } from "react-icons/fa6";
import { RiFileListLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { PiDotsThreeCircle } from "react-icons/pi";

function Sidebar() {
  return (
    <>
      <header className="sticky hidden sm:block text-slate-200 top-0 right-0 border-r border-[#222528]">
        <div className="flex flex-col items-center text-[26px] w-20 h-screen justify-between">
          <div className="grid gap- w-[72px] px-3">
            <div className="grid items-center justify-center  w-[50px] h-[50px] my-1">
              <FaXTwitter className="cursor-pointer" />
            </div>
            <div className="grid justify-center h-[402px] text-3xl gap-5 mt-3">
              <GoHomeFill className="cursor-pointer" />
              <GoSearch className="cursor-pointer" />
              <PiBell className="cursor-pointer" />
              <CiMail className="cursor-pointer" />
              <RiFileListLine className="cursor-pointer" />
              <FaXTwitter className="cursor-pointer" />
              <BsPerson className="cursor-pointer" />
              <PiDotsThreeCircle className="cursor-pointer" />
            </div>
            <div className="cursor-pointer grid justify-center items-center h-[52px] w-[52px] rounded-full overflow-hidden bg-[#1D9BF0] mt-4">
              <p>c</p>
            </div>
          </div>
          <div className="h-18 w-18 my-3">
            <Profile />
          </div>
        </div>
      </header>
    </>
  )
}

export default Sidebar