// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 1. import
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 2. App 전체를 BrowserRouter로 감싸기 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);