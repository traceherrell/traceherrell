import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "beercss";
import "material-dynamic-colors";
import "./index.css";
import Profile from "./Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Profile />
  </StrictMode>
);
