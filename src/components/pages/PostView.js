import React from "react";
import PostBanner from "../Banner/PostBanner";
import View from "../Main/View";
import data from "../../database/data.json";

function PostView() {
  return (
    <>
      <PostBanner data={data} />
      <View />
    </>
  );
}

export default PostView;
