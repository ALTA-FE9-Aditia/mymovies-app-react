import React, { Component } from 'react';
import { ButtonPrimary, ButtonSecondary } from './Button';
export class Card extends Component {
  render() {
    return (
      <div className="flex mt-10 flex-col justify-center bg-white shadow-lg  border">
        <img src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt={this.props.title} />
        <p>{this.props.title}</p>
        <ButtonPrimary label={`+Add Movie`} />
      </div>
    );
  }
}

export default Card;
