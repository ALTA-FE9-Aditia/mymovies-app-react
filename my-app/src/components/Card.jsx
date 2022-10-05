import React, { Component } from 'react';
import { ButtonPrimary } from './Button';
export class Card extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center bg-white shadow-lg  border">
        <img src={this.props.image} alt={this.props.title} />
        <p className="text-center">{this.props.title}</p>
        <ButtonPrimary label={`+Add Movie`} />
      </div>
    );
  }
}

export default Card;
