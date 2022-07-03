import React from "react";

function Button(props) {
  const { src, title, style, handleLogin } = props;
  return (
    <>
      <li>
        <button className={("button", style)} onClick={handleLogin}>
          <img src={src} alt="" />
          <span>{title}</span>
        </button>
      </li>
    </>
  );
}

export default Button;
