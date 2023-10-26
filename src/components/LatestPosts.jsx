import React, { useState, useEffect } from "react";
import Post from "./Post";
import postsData from "../../postsData.json";

const LatestPosts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePeriod, setActivePeriod] = useState("All");

  const postsToShow = postsData.filter((post) => {
    if (activePeriod === "All") return true;
    // Implement logic to filter posts based on the selected period
    // For example, compare post dates with the current date
    // and return true if it matches the selected period.
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
    }, 10000); // 10 seconds

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
    <div className="flex flex-col items-center my-10">
      <h3>Latest Posts</h3>
      <div className="post-container grid grid-cols-4 items-center gap-[30px]">
        {postsToShow.slice(activeIndex, activeIndex + 4).map((post, index) => (
          <Post
            key={index}
            postTitle={post.postTitle}
            date={post.date}
            gradientEnd={true} // Add a prop to apply the gradient
            onHoverMaximize={true} // Add a prop to apply hover effect
          />
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

export default LatestPosts;
