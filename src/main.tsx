/** @format */

import ReactDOM from "react-dom/client";
import { HashRouter, Routes } from "react-router";

import "./index.css";
import AnimatedRoutes from "./router/AnimatedRoutes.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <HashRouter>
    <AnimatedRoutes />
  </HashRouter>
);
