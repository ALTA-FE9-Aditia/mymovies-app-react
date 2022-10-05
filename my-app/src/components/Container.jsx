import React, { Component } from 'react';
import house from '../assets/cinema.png';
class Container extends Component {
  render() {
    return (
      <div className="w-full h-screen  bg-bg-tr text-center">
        <nav
          style={{ backgroundColor: '#08231f' }}
          className="w-full p-4   sticky top-0 flex flex-col md:flex-row gap-2 items-center "
        >
          <p className="hover:tracking-wide text-netflix-red text-4xl font-bebas font-extrabold">
            Movies Playing
          </p>
          <a href="">
            {' '}
            <img src={house} alt="house-ic" className="ml-4" />
          </a>
        </nav>
        <div className="w-full h-full overflow-auto  bg-bg-tr">{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
