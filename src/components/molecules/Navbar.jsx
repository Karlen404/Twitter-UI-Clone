import { GoHomeFill, GoSearch } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { PiBell } from "react-icons/pi";

function Navbar() {
  return (
    <>
      <header className="grid items-center w-full h-[52px] bottom-0 sticky bg-black border-t border-[#222528] sm:hidden">
        <div className="flex justify-between text-white text-[26px] mx-8">
          <GoHomeFill />
          <GoSearch />
          <PiBell />
          <CiMail />
        </div>
      </header>
     
    </>

  )
}

export default Navbar