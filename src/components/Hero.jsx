import React from "react";
import Button from "./Button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto my-6 px-4 sm:px-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl">
          Lorem ipsum dolor sit amet, consectetur adi
        </h2>
        <h6 className="text-sm sm:text-base">
          incididunt ut labore et dolore magna aliqua
        </h6>
        <div className="button-container flex flex-col space-y-2 items-center justify-center mt-6">
          <Link to="tracks" smooth={true} offset={-200} duration={1000}>
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
    </div>
  );
};

export default Hero;
