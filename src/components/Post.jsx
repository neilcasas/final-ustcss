import React from "react";
import placeholder from "../assets/placeholder.png";

const Post = (props) => {
  return (
    <div className="relative">
      <img className="h-[315px] w-[315px]" src={placeholder} alt="Post" />
      <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end">
        <p className="text-white">{props.postTitle}</p>
        <p className="text-white">{props.date}</p>
      </div>
    </div>
  );
};

export default Post;
