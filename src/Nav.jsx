import { Link, Outlet } from "react-router-dom";
import QuotePage from "./container/QuotePage";
import { useState, useRef } from "react";

// const text1 = <span>Quote</span>;

function Nav() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      {/* <section className="h-screen bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"> */}
      <img
        className="h-16 right-0  fixed z-20 cursor-pointer"
        src={"/fccimage.png"}
        alt="logo"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      />
      <div
        className={`${
          isNavbarOpen ? "right-[28%]" : "right-[0%]"
        } h-screen flex gap-4 duration-500 fixed w-16 z-10`}
        // onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <nav className="flex items-start fixed text-xl">
          <ul className=" h-16  w-fit px-2 flex gap-x-7 items-center">
            <li>
              <Link to="/home">
                {/* <Tooltip placement="bottom" title={text1}></Tooltip> */}
                <h1 className=" text-gray-100">Home</h1>
              </Link>
            </li>
            <li>
              <Link to="/quote">
                {/* <Tooltip placement="bottom" title={text1}></Tooltip> */}
                <h1 className="text-gray-100">Quote</h1>
              </Link>
            </li>
            <li>
              <Link to="/excalidraw">
                {/* <Tooltip placement="bottom" title={text1}></Tooltip> */}
                <h1 className="text-gray-100">Excalidraw</h1>
              </Link>
            </li>
            <li>
              <Link to="/markdown">
                {/* <Tooltip placement="bottom" title={text1}></Tooltip> */}
                <h1 className="text-gray-100">Markdown</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* </section> */}
      <Outlet />
    </>
  );
}

export default Nav;
