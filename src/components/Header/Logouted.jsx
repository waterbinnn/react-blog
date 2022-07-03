import React from "react";
import Button from "../buttons/Button";
import RegisterBtn from "../buttons/RegisterBtn";

function Logouted({ setLogin }) {
  return (
    <ul>
      <Button
        style="button gray"
        src={"icons/icon-login.svg"}
        title={"Login"}
        handleLogin={() => {
          setLogin(true);
        }}
      />
      <RegisterBtn />
    </ul>
  );
}

export default Logouted;
