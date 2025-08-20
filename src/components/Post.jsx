import { useEffect, useRef, useState } from "react";

function Post({ post, position }) {
  const [anim, setAnim] = useState("");
  let firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;

    if (position === 2) {
      setAnim("postFadeIn");
    }

    let tout = setTimeout(() => {
      if (position === 0) {
        setAnim("postFadeOut");
      } else {
        setAnim("postGoUp");
      }
    }, 4450);

    return () => {
      clearTimeout(tout);
    };
  }, []);

  function renderPost() {
    if (firstRender.current && position === 2) {
      return <div className="post"></div>;
    } else {
      return (
        <div className={`post ${anim}`}>
          <div>
            <img src={post.image} alt="Profile Image" className="postImage" />
            <h5 className="postUserID">{post.userID}</h5>
          </div>

          <h4>{post.title}</h4>
          <p>{post.post}</p>
        </div>
      );
    }
  }

  return renderPost();
}

export default Post;
