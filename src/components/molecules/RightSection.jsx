import Search from "../atoms/Search"
import CardPremium from "./CardPremium"
import Footer from "./Footer"
import ToFollow from "./ToFollow"
import Trending from "./Trending"

function RightSection() {
  return (
    <div className="w-[290px] xl:w-[350px]">
      <div className="">
        <div className="sticky top-0 mb-3">
          <Search />
        </div>
        <div className="mb-3">
          <CardPremium />
        </div>
        <div className="mb-3">
          <Trending />
        </div>
        <div className="mb-3">
          <ToFollow />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default RightSection