import React from "react";
import { createRoot } from "react-dom/client";
import DisableDevtool from "disable-devtool";

import App from "./App";
import "./App.css";

DisableDevtool({
  ondevtoolopen: () => {
    window.dispatchEvent(new CustomEvent("security-alert"));
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
