import { useState } from "react";
import {RiAddLine, RiCloseLine, RiMenu3Fill, RiPieChartLine, RiUser3Line } from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar"
import Main from "./container/Main";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
   <div className="bg-[#262837] w-full min-h-screen">
   <Sidebar showMenu={showMenu}></Sidebar>
   {/* Menu mobil */}
   <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex justify-between rounded-tl-xl rounded-tr-xl">
    <button className="p-2"><RiUser3Line /></button>
    <button className="p-2"><RiAddLine /></button>
    <button className="p-2"><RiPieChartLine /></button>
    <button className="p-2" onClick={toggleMenu}>
    {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
    </button>

   </nav>
   <Main></Main>
    </div>
  )
}

export default App
