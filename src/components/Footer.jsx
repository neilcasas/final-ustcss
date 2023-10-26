import React from "react";

const Footer = () => {
  return (
    <div className="flex h-[211px] w-auto p-10 justify-between bg-primary text-white">
      <div className="left-half flex flex-col justify-center">
        <p>logo</p>
        <p>css headliner</p>
        <div className="message p-1.5 rounded-lg bg-white shadow-lg">
          <p className="text-primary">
            Passionately designed & developed by CSS 💻
          </p>
        </div>
      </div>
      <div className="right-half flex items-center gap-[65px]">
        <div className="nav flex flex-col">
          <p className="font-bold">UST Computer Science Society</p>
          <a className="cursor-pointer">About Us</a>
          <a className="cursor-pointer">Community</a>
          <a className="cursor-pointer">News & Events</a>
        </div>
        <div className="socials flex flex-col">
          <a>Email</a>
          <a>Facebook</a>
          <a>Twitter</a>
          <a>Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
