/** @format */

import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";

import "./index.css";
import AppRoutes from "./routes/routes";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <HashRouter>
    <AppRoutes></AppRoutes>
  </HashRouter>
);
