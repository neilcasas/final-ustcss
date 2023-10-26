const Button = ({ text }) => {
  return (
    <button className="text-lg font-bold w-auto h-[41px] p-2 rounded-lg text-white bg-accentpurple hover:drop-shadow-xl active:bg-accentorange flex items-center justify-center">
      {text}
    </button>
  );
};

export default Button;
