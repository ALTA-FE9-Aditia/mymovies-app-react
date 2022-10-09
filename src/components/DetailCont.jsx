import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import house from "../assets/icon-house-48.png";
const DetContainer = (props) => {
  return (
    <div className="w-full h-screen  ">
      <nav className="w-full p-1 bg-black sticky top-0 flex flex-col md:flex-row  justify-start ">
        <div className="border w-screen mt-5 mx-3  ">
          <div className="my-6 flex justify-between">
            <p className="text-white text-6xl font-bold font-bebas ml-32">Movie Details</p>

            <Link to="/">
              <div className="cursor-pointer ml-14 text-6xl text-white mr-32 font-bebas font-bold">
                <p>GO HOME </p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="w-full h-full overflow-auto gap-1 bg-black">{props.children}</div>
    </div>
  );
};

export default DetContainer;
