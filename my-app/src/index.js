import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "./css/base.css";
import App from "./app/index";


var num = 1/window.devicePixelRatio;
document.write("<meta name = 'viewport' content='width=device-width',initial-scale='+num+'>");
var width = document.documentElement.clientWidth;
document.documentElement.style.fontSize = width/25+"px";

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,
    document.getElementById("root")
);

