import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

// React 18'in yeni createRoot API'si kullanılarak kök öğe oluşturuluyor
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
