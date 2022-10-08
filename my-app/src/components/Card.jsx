import React from 'react';
import { ButtonPrimary } from './Button';
const Card = (props) => {
  return (
    <div className="flex mt-10 flex-col justify-center pb-0 bg-white shadow-lg border w-48">
      <div className="w-full h-full" onClick={props.onNavigate}>
        <img
          // className="w-64 h-80"
          src={`https://image.tmdb.org/t/p/w500${props.image}`}
          alt={props.title}
        />
        <p className="font-bold">{props.title}</p>
      </div>
      <ButtonPrimary label="+Add Movie" onClick={props.addFavorite} />
    </div>
  );
};

export default Card;
