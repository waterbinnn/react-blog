import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "../../assets/css/button.css";
import Logined from "./Logined";
import Logouted from "./Logouted";
import data from "../../database/data.json";

function Header() {
  const [login, setLogin] = useState(false);
  return (
    <header>
      <div className="max-width">
        <h1>
          <Link to="/react-blog">
            <img
              src={`${process.env.PUBLIC_URL}/icons/Logo.svg`}
              alt="my blog"
            />
          </Link>
        </h1>
        {login ? (
          <Logined
            setLogin={setLogin}
            setProfileImg={data.users[0].profileImg}
          />
        ) : (
          <Logouted setLogin={setLogin} />
        )}
      </div>
    </header>
  );
}

export default Header;
