import React from "react";
import placeholder from "../assets/placeholder.png";

const Post = (props) => {
  return (
    <div>
      <img src={placeholder} />
      <p>{props.postTitle}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default Post;
