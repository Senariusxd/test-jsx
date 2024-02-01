import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as Lolo from "./App";

console.log(Lolo);

const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
