import React from "react";
import cssLogo from "../assets/css.png";

const Header = () => {
  return (
    <header className="text-primary">
      <div className="pt-12 text-lg font-bold container mx-auto flex justify-between items-center">
        <img className="css-logo" src={cssLogo} alt="css logo"></img>
        <nav>
          <ul className="flex space-x-4 gap-8">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Community</a>
            </li>
            <li>
              <a href="/contact">News & Events</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
