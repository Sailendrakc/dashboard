import Post from "./Post";
import generatePetPosts from "../ActivityGen";
import { useEffect, useRef, useState } from "react";

function Posts({ count }) {
  let post = useRef([]);
  let [postIndex, setPostIndex] = useState(0);

  useEffect(() => {
    if (!count || count <= 0) {
      return;
    }

    post.current = generatePetPosts(count);

    setPostIndex(1); //triger re-render

    // Automatically cycle through posts every 5 seconds
    const interval = setInterval(() => {
      setPostIndex((prevIndex) => {
        let nextIndex = prevIndex + 1;
        if (nextIndex >= post.current.length) {
          nextIndex = 0; // Reset to the first post if we reach the end
        }
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  function renderPosts() {
    if (post.current.length <= 0) {
      return <p>No posts available</p>;
    } else {
      let endIndex = postIndex + 3;
      if (endIndex > post.current.length) {
        endIndex = endIndex - post.current.length;
      }

      let finalPosts = [];

      if (endIndex > postIndex) {
        finalPosts = post.current.slice(postIndex, endIndex);
      } else {
        finalPosts = post.current
          .slice(postIndex)
          .concat(post.current.slice(0, endIndex));
      }

      let finalDivs = finalPosts.map((post, index) => {
        return (
          <Post
            post={post}
            key={Math.floor(Math.random() * 100000)}
            position={index}
          />
        );
      });

      return finalDivs;
    }
  }

  return <div className="posts">{renderPosts()}</div>;
}

export default Posts;
