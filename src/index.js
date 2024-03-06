import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client"; // Change the import statement
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
