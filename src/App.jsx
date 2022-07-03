import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import "./assets/css/global.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/pages/MainPage";
import PostView from "./components/pages/PostView";
import data from "../src/database/data.json";

function App() {
  return (
    <BrowserRouter>
      <Header profileImg={data.users[0].profileImg} />
      <Routes>
        <Route path="/" element={<MainPage data={data} />} />
        <Route path="/post-view" element={<PostView data={data} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
