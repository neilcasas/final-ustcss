import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-lg font-bold w-32 h-fit p-2 rounded-lg text-white bg-accentpurple hover:drop-shadow-xl active:bg-accentorange">
      {text}
    </button>
  );
};

export default Button;
