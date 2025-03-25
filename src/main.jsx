import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "beercss";
import "material-dynamic-colors";
import "./index.css";
import Profile from "./Profile.jsx";
import FordProject from "./projects/FordProject.jsx";
import TMobileProject from "./projects/TMobileProject.jsx";
import BluetoothProject from "./projects/BluetoothProject.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/ford" element={<FordProject />} />
        <Route path="/tmobile" element={<TMobileProject />} />
        <Route path="/bluetooth" element={<BluetoothProject />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
