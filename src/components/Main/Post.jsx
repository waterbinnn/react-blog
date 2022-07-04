import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../assets/css/wrapbox.css";
import "./category.css";
import "./author.css";

function Post({
  thumbnail,
  title,
  category,
  profileImg,
  userName,
  created,
  contents,
}) {
  return (
    <Link to="/post-view" className="post">
      <article>
        <img src={process.env.PUBLIC_URL + thumbnail} alt="" />
        <div className="contents-wrap">
          <dl className="category">
            <dt className="ally-hidden">Category</dt>
            {category.map((x, i) => (
              <dd key={i}>{x}</dd>
            ))}
          </dl>

          <h3>{title}</h3>

          <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <dd className="author">
              <img src={process.env.PUBLIC_URL + profileImg} alt="" />
              {userName}
            </dd>
            <dt className="a11y-hidden">Created</dt>
            <dd className="created">{created}</dd>
          </dl>

          <p className="post-description">{contents[0].text}</p>
        </div>
      </article>
    </Link>
  );
}

export default Post;
