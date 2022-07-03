import React from "react";
import "../../assets/css/profile.css";
import "./about.css";

const snsArr = [
  {
    name: "Github",
    src: "/icons/Github.svg",
  },
  {
    name: "Twitter",
    src: "/icons/Twitter.svg",
  },
  {
    name: "Facebook",
    src: "/icons/Facebook.svg",
  },
  {
    name: "Instagram",
    src: "/icons/Instagram.svg",
  },
];
function About({ user }) {
  return (
    <aside className="about">
      <h2>About Me</h2>
      <img className="user-profile" src={user.profileImg} alt="프로필이미지" />
      <p className="user-name">{user.name}</p>
      <p className="user-description">{user.userInfo}</p>

      <h3>Category</h3>
      <ul className="categories">
        {user.category.map((x, i) => (
          <li key={i}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>

      <h3>Follow</h3>
      <ul className="sns">
        {Object.entries(user.sns).map((x, i) => {
          return (
            <li key={i}>
              <a href="#">
                <img src={snsArr[i].src} alt="" />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default About;
