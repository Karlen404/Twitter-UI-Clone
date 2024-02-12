import CreatePost from "./components/molecules/CreatePost"
import Navbar from "./components/molecules/Navbar"
import RightSection from "./components/molecules/RightSection"
import Sidebar from "./components/molecules/Sidebar"
import TopMenu from "./components/molecules/TopMenu"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <div className="flex flex-col h-full bg-black mx-auto">
        <div className="flex justify-center">
          <div>
            <Sidebar />
          </div>
          <div className="flex gap-4">
            <div className="border-r border-[#222528]">
              <TopMenu />
              <CreatePost />
              <Home />
            </div>
            <div className="hidden lg:block">
              <RightSection />
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  )
}

export default App
