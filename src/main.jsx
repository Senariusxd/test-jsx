import React from "react";
import ReactDOM from "react-dom/client";
import './components/styles/App.css'
import Rout from "./Rout";



const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>
);
