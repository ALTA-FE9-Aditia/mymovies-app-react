import React, { useState, useEffect } from "react";

const ButtonPrimary = (props) => {
  return (
    <button
      className="p-2  dark:border border-blue-200 cursor-pointer bg-netflix-red text-white mx-1 my-1 rounded-lg shadow-xl
      text-center "
      onClick={props.onClick}
    >
      <p className="hover:tracking-wide text-xl"> {props.label}</p>
    </button>
  );
};

const ButtonSecondary = (props) => {
  return (
    <button
      style={{ backgroundColor: "#2aa6b1", color: "white" }}
      className="hover:tracking-wide p-2 text-5xl font-bebas mt-9 mb-6 w-1/3 h-16 border cursor-pointer rounded-xl bg-white  text-center "
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

const ButtonDarkMode = (props) => {
  return (
    <button
      className=" p-2 text-2xl font-bebas mt-1 mb-6 w-1/6 h-16 border cursor-pointer rounded-xl dark:bg-black dark:text-white bg-white text-black text-center "
      onClick={props.onClick}
    >
      {props.label} {props.img}
    </button>
  );
};

export { ButtonPrimary, ButtonSecondary, ButtonDarkMode };
