import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "beercss";
import "material-dynamic-colors";
import "./index.css";
import Profile from "./Profile.jsx";
import FordProject from "./projects/FordProject.jsx";
import TMobileProject from "./projects/TMobileProject.jsx";
import BluetoothProject from "./projects/BluetoothProject.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/traceherrell">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects/ford" element={<FordProject />} />
        <Route path="/projects/tmobile" element={<TMobileProject />} />
        <Route path="/projects/bluetooth" element={<BluetoothProject />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
