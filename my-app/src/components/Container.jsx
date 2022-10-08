import React from 'react';
import house from 'assets/cinema.png';
import { Link } from 'react-router-dom';

const Container = (props) => {
  return (
    <div className="w-full h-screen  bg-bg-tr text-center">
      <nav
        style={{ backgroundColor: '#08231f' }}
        className="w-full p-3   sticky top-0 flex flex-col md:flex-row gap-2 items-center "
      >
        <Link to="/favorites">
          <p className=" pl-10 text-white text-6xl font-bebas font-extrabold">
            {' '}
            LIst of Movies on Play
          </p>
        </Link>
        <Link to="/sandbox">
          <img src={house} alt="house-ic" className="ml-4" />
        </Link>
      </nav>
      <div className="w-full h-full overflow-auto  bg-bg-tr">{props.children}</div>
    </div>
  );
};

export default Container;
