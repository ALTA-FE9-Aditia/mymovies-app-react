import React from "react";
import house from "assets/cinema.png";
import favMovie from "assets/favMovie.svg";
import { Link } from "react-router-dom";

const Container = (props) => {
  return (
    <div className="w-full h-screen  bg-black text-center ">
      <nav
        style={{ backgroundColor: "#08231f" }}
        className="w-full    sticky top-0 flex flex-col md:flex-row   "
      >
        <div className="w-full pt-7 h-28 sticky top-0 flex flex-col md:flex-row gap-2 justify-items-start ">
          <p className=" pl-10 text-white text-6xl font-bebas font-extrabold"> Movies on Play</p>
          <img className="w-14 h-14 ml-4" src={house} alt="house-ic" />
        </div>

        <div className="w-1/2  pt-7  sticky top-0 flex flex-col justify-center md:flex-row gap-3 ">
          <Link to="/favorites">
            <p className="text-white text-4xl font-bebas font-extrabold mt-2"> Your Picks HEre</p>
          </Link>
          <Link to="/favorites">
            <img className="w-18 h-16 " src={favMovie} alt="house-ic" />
          </Link>
        </div>
      </nav>
      <div className="w-full h-full overflow-auto  bg-bg-tr ">{props.children}</div>
    </div>
  );
};

export default Container;
