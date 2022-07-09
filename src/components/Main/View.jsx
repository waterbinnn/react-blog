import React from "react";
import { Link, useParams } from "react-router-dom";
import LikeBtn from "../buttons/LikeBtn";
import "../../assets/css/wrapbox.css";
import "./view.css";
import data from "../../database/data.json";

function View() {
  const { id } = useParams();
  // console.log("id : ", id);

  const posts = data.posts;
  // console.log(posts);

  const post = posts.find((x) => x.id == id);
  // console.log("post : ", post);

  const { contents } = post;
  // console.log(contents);

  const List = contents.filter((item) => item.type === "p");
  const Img = contents.filter((item) => item.type === "img");

  // console.log("Img : ", Img);

  const Src = Img[0].src;
  // console.log("Src : ", Src);

  return (
    <>
      <div className="view">
        <div className="max-width">
          <section className="wrap-box">
            <div className="inner">
              <dl className="author-wrap">
                <dt className="a11y-hidden">Author</dt>
                <dd className="author">
                  <img src={process.env.PUBLIC_URL + post.profileImg} alt="" />{" "}
                  Chilli
                </dd>
                <dt className="a11y-hidden">Created</dt>
                <dd className="created">{post.created}</dd>
              </dl>

              <dl className="category">
                <dt className="a11y-hidden">Category</dt>
                {post.category.map((x, i) => (
                  <dd key={i}>{x}</dd>
                ))}
              </dl>
              <div className="title-wrap">
                <h2>{post.title}</h2>
                <LikeBtn />
              </div>
              <hr />
              <div className="view-contents">
                <p>{List[0].text}</p>
                <img src={process.env.PUBLIC_URL + Src} alt="" />
                <p>{List[1].text}</p>
              </div>
              <div className="btn-group">
                <a href="#" className="btn-modify">
                  <span className="a11y-hidden">modify</span>
                </a>
                <button type="button" className="btn-delete">
                  <span className="a11y-hidden">delete</span>
                </button>
              </div>
              <Link to="/react-blog" className="btn-back">
                <span className="a11y-hidden">Back</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default View;
