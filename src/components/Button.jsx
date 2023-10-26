import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-accent-purple hover:bg-accent-orange text-white font-semibold text-lg py-2 px-4 rounded-lg shadow-md transition duration-300">
      {text}
    </button>
  );
};

export default Button;
