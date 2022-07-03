import React from "react";
import Banner from "../Banner/Banner";
import Main from "../Main/Main";

export default function MainPage({ data }) {
  return (
    <>
      <Banner
        mainTitle={data.blog.mainTitle}
        subTitle={data.blog.subTitle}
        description={data.blog.description}
      />
      <Main data={data} />
    </>
  );
}
