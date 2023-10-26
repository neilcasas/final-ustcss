import React from "react";
import cicsLogo from "../assets/cics.png";
import ustLogo from "../assets/ust.png";
import envelopeIcon from "../assets/envelope-solid.svg";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="flex h-[211px] w-auto px-24 py-10 justify-between bg-primary text-white">
      <div className="left-half flex flex-col justify-center items-center">
        <div className="flex gap-10">
          <img className="h-[40px] w-auto" src={ustLogo}></img>
          <img
            className="css-logo flex h-[40px] w-fit"
            src={cicsLogo}
            alt="css logo"
          ></img>
        </div>
        <p className="text-center text-xs my-2">
          University of Santo Tomas College of Computing Sciences
        </p>
        <div className="message p-1.5 rounded-lg bg-white shadow-lg">
          <p className="text-primary text-center">
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
          <div className="flex gap-2">
            <img src={envelopeIcon}></img>
            <a>Email</a>
          </div>
          <div className="flex gap-2">
            <img src={facebookIcon}></img>
            <a>Facebook</a>
          </div>
          <div className="flex gap-2">
            <img src={twitterIcon}></img>
            <a>Twitter</a>
          </div>
          <div className="flex gap-2">
            <img src={instagramIcon}></img>
            <a>Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
