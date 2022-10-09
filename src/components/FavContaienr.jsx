import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import house from "../assets/icon-house-48.png";
const FavContainer = (props) => {
  return (
    <div className="w-full h-screen  bg-bg-tr">
      <nav className="w-full p-1 bg-bg-nav sticky top-0 flex flex-col md:flex-row  justify-center ">
        <div className="my-6 flex flex-row">
          <p className="text-white text-4xl font-bold font-bebas ">
            These are your favorite Movies
          </p>
          <a href="">
            {" "}
            <Link to="/">
              <img className="cursor-pointer ml-4" src={house} alt="house-ic" />
            </Link>
          </a>
        </div>
      </nav>
      <div className="w-full h-full overflow-auto gap-1 bg-bg-tr">{props.children}</div>
    </div>
  );
};

export default FavContainer;
