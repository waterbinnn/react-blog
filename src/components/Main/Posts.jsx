import React from "react";
import Post from "./Post";
import About from "./About";

function Posts({ data, posts }) {
  return (
    <div className="max-width">
      <h2 className="a11y-hidden">Post</h2>
      <ul className="posts">
        {posts
          .slice(0)
          .reverse()
          .map((x) => {
            return (
              <li key={x.id}>
                <Post
                  thumbnail={x.thumbnail}
                  title={x.title}
                  mainBg={x.mainBg}
                  category={x.category}
                  profileImg={x.profileImg}
                  contents={x.contents}
                  userName={x.userName}
                  created={x.created}
                />
              </li>
            );
          })}
      </ul>
      <About user={data.users[0]} />
    </div>
  );
}

export default Posts;
