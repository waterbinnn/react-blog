import React from "react";
import WriteBtn from "../buttons/WriteBtn";
import Button from "../buttons/Button";

function Logined({ setProfileImg, setLogin }) {
  return (
    <ul>
      <li className="profile-img">
        <a href="#">
          {/* <img src="images/profile.jpg" alt="" /> */}
          <img src={setProfileImg} alt="" />
        </a>
      </li>
      <WriteBtn />
      <Button
        style="button white"
        src={"/icons/icon-logout.svg"}
        title={"Logout"}
        handleLogin={() => {
          setLogin(false);
        }}
      />
    </ul>
  );
}

export default Logined;
