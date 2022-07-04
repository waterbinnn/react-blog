import React from "react";
import { Link } from "react-router-dom";
import LikeBtn from "../buttons/LikeBtn";
import "../../assets/css/wrapbox.css";
import "./view.css";

function View() {
  return (
    <>
      <div className="view">
        <div className="max-width">
          <section className="wrap-box">
            <div className="inner">
              <dl className="author-wrap">
                <dt className="a11y-hidden">Author</dt>
                <dd className="author">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                    alt=""
                  />{" "}
                  Chilli
                </dd>
                <dt className="a11y-hidden">Created</dt>
                <dd className="created">2022.05.25</dd>
              </dl>

              <dl className="category">
                <dt className="a11y-hidden">Category</dt>
                <dd>Life</dd>
                <dd>Style</dd>
              </dl>
              <div className="title-wrap">
                <h2>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <LikeBtn />
              </div>
              <hr />
              <div className="view-contents">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore illum nostrum perferendis voluptas, voluptate soluta
                  corrupti dolore quidem. Placeat, eaque! Exercitationem est
                  facilis dolor quas odio cum incidunt repudiandae vel. Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                  illum nostrum perferendis voluptas, voluptate soluta corrupti
                  dolore quidem. Placeat, eaque! Exercitationem est facilis
                  dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Inventore illum
                  nostrum perferendis voluptas, voluptate soluta corrupti dolore
                  quidem. Placeat, eaque! Exercitationem est facilis dolor quas
                  odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Inventore illum nostrum
                  perferendis voluptas, voluptate soluta corrupti dolore quidem.
                  Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                  incidunt repudiandae vel.
                </p>
                <img
                  src={`${process.env.PUBLIC_URL}/images/post-background6.jpg`}
                  alt=""
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore illum nostrum perferendis voluptas, voluptate soluta
                  corrupti dolore quidem. Placeat, eaque! Exercitationem est
                  facilis dolor quas odio cum incidunt repudiandae vel. Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                  illum nostrum perferendis voluptas, voluptate soluta corrupti
                  dolore quidem. Placeat, eaque! Exercitationem est facilis
                  dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Inventore illum
                  nostrum perferendis voluptas, voluptate soluta corrupti dolore
                  quidem. Placeat, eaque! Exercitationem est facilis dolor quas
                  odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Inventore illum nostrum
                  perferendis voluptas, voluptate soluta corrupti dolore quidem.
                  Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                  incidunt repudiandae vel.
                </p>
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
