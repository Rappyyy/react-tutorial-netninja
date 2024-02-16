import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client"; // Change the import statement
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
