import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "beercss";
import "material-dynamic-colors";
import "./index.css";
import Profile from "./Profile.jsx";
import FordProject from "./projects/FordProject.jsx";
import TMobileProject from "./projects/TMobileProject.jsx";
import BluetoothProject from "./projects/BluetoothProject.jsx";
import Layout from "./Layout.jsx";
import Game from "./games/2048/index.jsx";
import Make24Game from "./games/make24/index.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/ford" element={<FordProject />} />
        <Route path="/tmobile" element={<TMobileProject />} />
        <Route path="/bluetooth" element={<BluetoothProject />} />
        <Route path="/2048" element={<Game />} />
        <Route path="/make24" element={<Make24Game />} />
      </Routes>
    </Layout>
  </HashRouter>
);
