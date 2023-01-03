import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./routers/AppRouter";

import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "react-multi-carousel/lib/styles.css";
import "animate.css/animate.min.css";

import backToTopVisibilty from "./backToTopVisibility";
backToTopVisibilty();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);
