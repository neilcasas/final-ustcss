import React from "react";
import Button from "./Button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="text-center my-8 sm:my-48">
      <h2 className="text-4xl sm:text-5xl">
        Lorem ipsum dolor sit amet, consectetur adi
      </h2>
      <h6 className="text-base sm:text-lg mt-2">
        incididunt ut labore et dolore magna aliqua
      </h6>
      <div className="button-container flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center mt-6">
        <Link to="tracks" smooth={true} offset={-180} duration={1000}>
          <Button text="#tracks" />
        </Link>
        <Link to="subjects" smooth={true} duration={1000}>
          <Button text="#subjects" />
        </Link>
        <Link to="latestposts" smooth={true} duration={1000}>
          <Button text="#latestpage" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
