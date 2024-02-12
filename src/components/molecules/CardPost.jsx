import { BsCheckCircleFill, BsDot, BsThreeDots } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { IoIosStats } from "react-icons/io";
import { LuUpload } from "react-icons/lu";

function CardPost() {
  return (
    <div className="flex flex-col text-slate-200 pt-3 border-b border-[#222528]">
      <div className="flex mx-4">
        <div>
          <div className="aspect-square rounded-full overflow-hidden mr-3 w-10">
            <img src="https://i.pinimg.com/564x/c5/79/22/c5792292d6b69a84c05a706fe7be7ef6.jpg" alt="" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 font-bold">
                <p>Minji</p>
                <BsCheckCircleFill />
              </div>
              <div className="flex items-center text-sm text-[#71767B] gap-1">
                <div>
                  <p>@minejiaaa</p>
                </div>
                <div>
                  <BsDot />
                </div>
                <div>
                  <p>19h</p>
                </div>
              </div>

            </div>
            <div className="text-[#71767B] text-lg">
              <BsThreeDots />
            </div>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, saepe!</p>
          </div>
          <div className="rounded-2xl overflow-hidden mt-3">
            <img src="https://i.pinimg.com/564x/35/92/6a/35926a660469cdf0288d74ed5839e71c.jpg" alt="" />
          </div>
          <div className="flex justify-between text-sm text-[#71767B] mt-3 pb-3">
            <div className="flex items-center gap-1">
              <FaRegComment className="text-lg" />
              <p>77</p>
            </div>
            <div className="flex items-center gap-1">
              <FaRetweet className="text-lg" />
              <p>77</p>
            </div>
            <div className="flex items-center gap-1">
              <GoHeart className="text-lg" />
              <p>77<span>k</span> </p>
            </div>
            <div className="flex items-center gap-1">
              <IoIosStats className="text-lg" />
              <p>77</p>
            </div>
            <div className="flex items-center">
              <LuUpload className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPost