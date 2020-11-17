import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import theme from "./theme";
import "normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
