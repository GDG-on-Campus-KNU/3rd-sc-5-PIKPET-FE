import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";

import { COLORS } from "@assets/theme";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <ThemeProvider theme={{ colors: COLORS }}>
      <App />
    </ThemeProvider>
  </CookiesProvider>
);
