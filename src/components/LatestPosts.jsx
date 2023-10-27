import React, { useState, useEffect } from "react";
import Post from "./Post";
import postsData from "../../postsData.json";

const PostCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePeriod, setActivePeriod] = useState("All");

  const postsToShow = postsData.filter((post) => {
    if (activePeriod === "All") return true;
    return false;
  });

  useEffect(() => {
    // Auto-swipe the carousel every 10 seconds
    const timer = setInterval(() => {
      if (activeIndex + 4 < postsToShow.length) {
        setActiveIndex(activeIndex + 4);
      } else {
        setActiveIndex(0);
      }
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [activeIndex, activePeriod, postsToShow]);

  const moveNext = () => {
    if (activeIndex + 4 < postsToShow.length) {
      setActiveIndex(activeIndex + 4);
    }
  };

  const movePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 4);
    }
  };

  return (
    <div className="flex flex-col items-center my-10" id="latestposts">
      <h3>Latest Posts</h3>
      <div className="post-container grid grid-cols-1 sm:grid-cols-4 items-center gap-[30px] mb-9">
        {postsToShow.slice(activeIndex, activeIndex + 4).map((post, index) => (
          <Post key={index} postTitle={post.postTitle} date={post.date} />
        ))}
      </div>
      <div className="flex justify-center">
        <button onClick={movePrev} disabled={activeIndex === 0}>
          Previous
        </button>
        <button
          onClick={moveNext}
          disabled={activeIndex + 4 >= postsToShow.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostCarousel;
