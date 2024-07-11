import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Scene from "./Scene";
import React from "react";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <Scene />
  </StrictMode>
);