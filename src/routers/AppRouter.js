import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BangsMain from "../components/BangsMain";
import About from "../components/About";
import Copyright from "../components/footer/Copyright";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element=<BangsMain /> />
      <Route path="/about" element=<About /> />
    </Routes>
    <Copyright />
  </BrowserRouter>
);

export default AppRouter;
