import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Pokemon from "./pokemon";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <br/>
    <Pokemon />
  </StrictMode>
);