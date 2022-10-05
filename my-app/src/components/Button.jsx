import React, { Component } from 'react';

export class ButtonPrimary extends Component {
  render() {
    return (
      <button
        className="p-3  border cursor-pointer bg-netflix-red text-white 
      text-center "
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export class ButtonSecondary extends Component {
  render() {
    return (
      <button
        style={{ backgroundColor: '#2aa6b1', color: 'white' }}
        className="hover:tracking-wide p-2 text-4xl font-bebas mt-9 mb-6 w-1/3 h-16 border cursor-pointer rounded-xl bg-white  text-center text-3xl"
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default ButtonPrimary;
