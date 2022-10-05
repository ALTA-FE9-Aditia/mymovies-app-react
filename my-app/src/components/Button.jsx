import React, { Component } from 'react';

export class ButtonPrimary extends Component {
  render() {
    return (
      <div className="p-2 border  bg-netflix-red text-white text-center text-xl">
        {this.props.label}
      </div>
    );
  }
}

export default ButtonPrimary;
