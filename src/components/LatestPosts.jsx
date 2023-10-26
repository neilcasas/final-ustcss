import React from "react";
import Post from "./Post";

const LatestPosts = () => {
  return (
    <div>
      <h3>Latest Posts</h3>
      <div className="post-container grid grid-cols-4">
        <Post postTitle="New Year's eve" date="Jun 18" />
        <Post postTitle="New Year's eve" date="August 18" />
        <Post postTitle="New Year's eve" date="May 23" />
        <Post postTitle="New Year's eve" date="November 12" />
      </div>
    </div>
  );
};

export default LatestPosts;
