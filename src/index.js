import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./Providers/ThemeContext";
import Context from "./Providers/Context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Context>
        <App />
      </Context>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
