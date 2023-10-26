import React from "react";

const Footer = () => {
  return (
    <div className="flex h-[211px] w-auto bg-primary justify-between">
      <div className="left-half flex flex-col justify-center">
        <p>logo</p>
        <p>css headliner</p>
        <div className="message bg-white rounded-sm">
          <p>Passionately designed & developed by CSS 💻</p>
        </div>
      </div>
      <div className="right-half flex">
        <div className="nav flex flex-col">
          <p>UST Computer Science Society</p>
          <a>About Us</a>
          <a>Community</a>
          <a>News & Events</a>
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
