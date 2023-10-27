import React from "react";
import cssLogoInverted from "../assets/css-inverted.png";
import envelopeIcon from "../assets/envelope-solid.svg";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="flex h-[211px] w-auto px-24 py-10 justify-between bg-primary text-white">
      <div className="left-half flex flex-col justify-center items-center">
        <div className="flex gap-10">
          <img className="h-[80px] mb-4" src={cssLogoInverted} alt="css-logo" />
        </div>
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
            <a className="cursor-pointer">Email</a>
          </div>
          <div className="flex gap-2">
            <img src={facebookIcon}></img>
            <a href="https://www.facebook.com/USTCSS">Facebook</a>
          </div>
          <div className="flex gap-2">
            <img src={twitterIcon}></img>
            <a className="cursor-pointer">Twitter</a>
          </div>
          <div className="flex gap-2">
            <img src={instagramIcon}></img>
            <a href="https://www.instagram.com/ustcss/">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
