import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const routerBase = window.location.pathname.startsWith("/jerryzhao") ? "/jerryzhao" : "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={routerBase}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
