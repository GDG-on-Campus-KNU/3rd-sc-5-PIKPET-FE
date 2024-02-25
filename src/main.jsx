import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";

import { COLORS } from "@assets/theme";
import App from "./App.jsx";
import "./index.css";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  console.log("resized");

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <ThemeProvider theme={{ colors: COLORS }}>
      <App />
    </ThemeProvider>
  </CookiesProvider>
);
