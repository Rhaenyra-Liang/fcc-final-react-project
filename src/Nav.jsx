import { Link, Outlet } from "react-router-dom";
import QuotePage from "./container/QuotePage";
import { useState, useRef } from "react";

// const text1 = <span>Quote</span>;

function Nav() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <img
        className="h-16 right-0  fixed z-10"
        src={"/fccimage.png"}
        alt="logo"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      />
      <div
        className={`${
          isNavbarOpen ? "right-[20%]" : "right-[0%]"
        } h-screen flex gap-4 duration-500 fixed w-16`}
        // onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <nav className="flex items-start">
          <ul className="bg-white/20 h-16 backdrop-blur-3xl w-fit px-2 flex gap-x-7 items-center">
            <li>
              <Link to="/quote">
                {/* <Tooltip placement="bottom" title={text1}></Tooltip> */}
                <h1>Quote</h1>
              </Link>
            </li>
            <li>
              <Link to="/quote">
                {/* <Tooltip placement="bottom" title={text1}></Tooltip> */}
                <h1>Quote</h1>
              </Link>
            </li>
            <li>
              <Link to="/quote">
                {/* <Tooltip placement="bottom" title={text1}></Tooltip> */}
                <h1>Quote</h1>
              </Link>
            </li>
            <li>
              <Link to="/quote">
                {/* <Tooltip placement="bottom" title={text1}></Tooltip> */}
                <h1>Quote</h1>
              </Link>
            </li>
            <li>
              <Link to="/quote">
                {/* <Tooltip placement="bottom" title={text1}></Tooltip> */}
                <h1>Quote</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
