/** @format */
import { Route, Routes } from "react-router";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Doodles from "../pages/doodles";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDark: false,
  changeTheme: () => {},
});

function AppRoutes() {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext value={{ isDark, changeTheme: changeTheme }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/doodles" element={<Doodles />} />
      </Routes>
    </ThemeContext>
  );
}

export default AppRoutes;
