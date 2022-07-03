import React from "react";

function WriteBtn() {
  return (
    <>
      <li>
        <a href="#" className="button">
          <img
            src={`${process.env.PUBLIC_URL}/icons/icon-modify-white.svg`}
            alt=""
          />
          <span>Write</span>
        </a>
      </li>
    </>
  );
}

export default WriteBtn;
