import Sidebar from "./components/shared/Sidebar";
import { useState } from "react";
import {
  RiMenuFill,
  RiUserLine,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };
  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/** Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUserLine />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrder} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenuFill />}
        </button>
      </nav>
      {/**Main */}
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className=" md:p-8 p-4">
          {/**header */}
          <Header />
          {/** Title content*/}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/**content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/**Car */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nobles"
              price="2.29"
              inventory="20 Bowls availlable"
            />
            <Card
              img="comida2.png"
              description="Speacy seasoned seafood nobles"
              price="2.29"
              inventory="20 Bowls availlable"
            />
            <Card
              img="comida4.png"
              description="Speacy seasoned seafood nobles"
              price="2.29"
              inventory="20 Bowls availlable"
            />
            <Card
              img="comida3.png"
              description="Speacy seasoned seafood nobles"
              price="2.29"
              inventory="20 Bowls availlable"
            />
            <Card
              img="comida2.png"
              description="Speacy seasoned seafood nobles"
              price="2.29"
              inventory="20 Bowls availlable"
            />
            <Card
              img="comida3.png"
              description="Speacy seasoned seafood nobles"
              price="2.29"
              inventory="20 Bowls availlable"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
