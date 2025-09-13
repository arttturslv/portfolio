/** @format */

import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";

import "./index.css";
import Projects from "./pages/projects/index.tsx";
import Doodles from "./pages/doodles/index.tsx";
import Home from "./pages/home/index.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/doodles" element={<Doodles />} />
    </Routes>
  </HashRouter>
);
