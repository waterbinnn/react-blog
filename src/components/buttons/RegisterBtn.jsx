import React from "react";

function RegisterBtn() {
  return (
    <>
      <li class="only-pc">
        <a href="#" className="button gray">
          <img
            src={`${process.env.PUBLIC_URL}/icons/icon-register.svg`}
            alt=""
          />
          <span>Register</span>
        </a>
      </li>
    </>
  );
}

export default RegisterBtn;
