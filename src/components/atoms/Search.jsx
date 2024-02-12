import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="bg-black flex items-center h-[53px] w-full text-white">
      <span className="absolute pl-3 flex items-center text-lg"><CiSearch />
      </span>
      <input type="text" placeholder="Search" className="rounded-full overflow-hidden h-[43px] bg-[#202327] focus:outline-none focus:ring-1 focus:ring-[#1D9BF0] pl-10 w-full" />

    </div>
  )
}

export default Search