import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[713px] h-[170px] mx-auto my-48">
      <div className="text-center">
        <h2>Lorem ipsum dolor sit amet, consectetur adi</h2>
        <h6>incididunt ut labore et dolore magna aliqua</h6>
        <div className="button-container flex space-x-2 items-center justify-center my-10">
          <Button text="#tracks" />
          <Button text="#subjects" />
          <Button text="#latestpage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
