import { BsThreeDots } from "react-icons/bs"

function Footer() {
  return (
    <div className="text-[#5E6267] text-sm px-4 ">
      <div className="flex gap-2">
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
      </div>
      <div className="flex gap-2">
        <a href="">Cookie Use Policy</a>
        <a href="">Accessbility</a>
      </div>
      <div className="flex gap-2">
        <a href="">Advertising information</a>
        <div className="flex items-center gap-1">
          <p>Other</p>
          <BsThreeDots />
        </div>
      </div>
      <div>
        <p>© 2024 X Corp</p>
      </div>
    </div>
  )
}

export default Footer