import React, { useState, useEffect } from "react";
import cssLogo from "../assets/css.png";
import mobileMenuLogo from "../assets/mobile-menu.svg";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down, hide the header
        setIsHidden(true);
      } else {
        // Scrolling up, show the header
        setIsHidden(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`text-primary sticky top-0 z-50 transition-all duration-300 ${
        isHidden ? "transform -translate-y-full" : "transform translate-y-0"
      }`}
    >
      <div className="p-3 text-lg font-bold bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <img className="css-logo h-[80px]" src={cssLogo} alt="css logo"></img>

          <div className="relative sm:hidden">
            <button onClick={toggleMobileMenu}>
              <img src={mobileMenuLogo} alt="Mobile Menu" />
            </button>

            {mobileMenuOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg">
                <ul className="py-2">
                  <li>
                    <a href="">Home</a>
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
              </div>
            )}
          </div>

          <nav className="sm:flex space-x-4 gap-8">
            <ul className="flex">
              <li>
                <a href="">Home</a>
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
      </div>
    </header>
  );
};

export default Navbar;
