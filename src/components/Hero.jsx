import React from "react";
import Button from "./Button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[713px] h-[170px] mx-auto my-48">
      <div className="text-center">
        <h2>Lorem ipsum dolor sit amet, consectetur adi</h2>
        <h6>incididunt ut labore et dolore magna aliqua</h6>
        <div className="button-container flex space-x-2 items-center justify-center my-10">
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
