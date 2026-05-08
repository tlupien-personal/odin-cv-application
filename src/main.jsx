import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import Resume from "./components/Resume";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
);
