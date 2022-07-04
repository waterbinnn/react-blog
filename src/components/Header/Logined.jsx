import React from "react";
import WriteBtn from "../buttons/WriteBtn";
import Button from "../buttons/Button";
import Logouted from "./Logouted";

function Logined({ setProfileImg, setLogin }) {
  return (
    <ul>
      <li className="profile-img">
        <a href="#">
          <img src={process.env.PUBLIC_URL + setProfileImg} alt="" />
        </a>
      </li>
      <WriteBtn />
      <Button
        style="button white"
        src={`${process.env.PUBLIC_URL}/icons/icon-logout.svg`}
        title={"Logout"}
        handleLogin={() => {
          setLogin(false);
        }}
      />
    </ul>
  );
}

export default Logined;
