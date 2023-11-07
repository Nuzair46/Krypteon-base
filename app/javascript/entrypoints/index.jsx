import React from "react";
import { createRoot } from "react-dom/client";
import "stylesheets/index.css";
import Main from "src/Main";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
