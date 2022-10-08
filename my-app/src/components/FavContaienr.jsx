import { useState, useEffect } from 'react';
import house from '../assets/icon-house-48.png';
const FavContainer = (props) => {
  return (
    <div className="w-full h-screen  bg-bg-tr">
      <nav className="w-full p-4 bg-bg-nav sticky top-0 flex flex-col md:flex-row  justify-center ">
        <p className="text-netflix-red text-4xl font-bold">These are your favorite Movies</p>
        <a href="">
          {' '}
          <img href="" src={house} alt="house-ic" className="ml-4" />
        </a>
      </nav>
      <div className="w-full h-full overflow-auto  bg-bg-tr">{props.children}</div>
    </div>
  );
};

export default FavContainer;
