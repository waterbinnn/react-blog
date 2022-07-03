import React from "react";
import Posts from "./Posts";
import "./about.css";
import "./post.css";
import "./main.css";
import "./posts.css";

const Main = ({ data }) => {
  return (
    <main>
      <Posts data={data} posts={data.posts} />
    </main>
  );
};

export default Main;
