import Button from "../atoms/Button"
import Profile from "../atoms/Profile"

function ToFollow() {
  return (
    <div className="bg-[#16181C] rounded-2xl overflow-hidden">
      <div className="text-white">
        <div className="text-xl font-bold px-4 py-3">
          <h2>To Follow</h2>
        </div>
        <div className="flex px-4 py-3 cursor-pointer hover:bg-[#1D1F23]">
          <div className="mr-3">
            <Profile />
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p className="font-semibold">Emma</p>
              <p className="text-[#5E6267] text-sm">@emmayears</p>
            </div>
            <div>
              <Button title="Follow" />
            </div>
          </div>
        </div>
        <div className="flex px-4 py-3 cursor-pointer hover:bg-[#1D1F23]">
          <div className="mr-3">
            <Profile />
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p className="font-semibold">Emma</p>
              <p className="text-[#5E6267] text-sm">@emmayears</p>
            </div>
            <div>
              <Button title="Follow" />
            </div>
          </div>
        </div>
        <div className="flex px-4 py-3 cursor-pointer hover:bg-[#1D1F23]">
          <div className="mr-3">
            <Profile />
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p className="font-semibold">Emma</p>
              <p className="text-[#5E6267] text-sm">@emmayears</p>
            </div>
            <div>
              <Button title="Follow" />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 text-[#1D9BF0] hover:bg-[#1D1F23]">
          <p>Show more</p>
        </div>
      </div>
    </div>
  )
}

export default ToFollow