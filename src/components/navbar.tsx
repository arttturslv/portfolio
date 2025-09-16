/** @format */

import { useContext } from "react";
import { NavLink } from "react-router";
import { ThemeContext } from "../routes/routes";

function Navbar() {
  const { isDark, changeTheme } = useContext(ThemeContext);

  return (
    <header className="w-full  flex justify-center ">
      <nav className="max-w-[1400px]  items-center w-full flex h-10 px-4  mx-12  ">
        <NavLink to="/">
          <img
            src="assets/logo.png"
            className={`w-12 ${isDark && "invert"}`}
          ></img>
        </NavLink>

        <div className="w-full gap-20 flex justify-center max-sm:hidden">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "underline  gap-12 flex justify-center"
                : "gap-12 flex justify-center "
            }
          >
            home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "underline  gap-12 flex justify-center"
                : " gap-12 flex justify-center"
            }
          >
            projects
          </NavLink>

          <NavLink
            to="/doodles"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "underline  gap-12 flex justify-center"
                : " gap-12 flex justify-center"
            }
          >
            gallery
          </NavLink>
        </div>
        <div
          onClick={changeTheme}
          className="max-sm:w-full invert flex items-center justify-end cursor-pointer group"
        >
          <img
            className={`${
              isDark && "invert-100"
            } group-hover:scale-105 transition-all duration-200`}
            src={isDark ? "assets/icon/sun.svg" : "assets/icon/moon.svg"}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
