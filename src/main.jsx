import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "beercss";
import "material-dynamic-colors";
import "./index.css";
import Profile from "./Profile.jsx";
import FordProject from "./projects/FordProject.jsx";
import TMobileProject from "./projects/TMobileProject.jsx";
import BluetoothProject from "./projects/BluetoothProject.jsx";
import Layout from "./components/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/ford" element={<FordProject />} />
        <Route path="/tmobile" element={<TMobileProject />} />
        <Route path="/bluetooth" element={<BluetoothProject />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
