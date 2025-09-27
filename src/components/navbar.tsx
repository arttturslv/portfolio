/** @format */

import { useContext } from "react";
import { NavLink } from "react-router";
import { ThemeContext } from "../routes/routes";
import React from "react";

function Navbar() {
  const { isDark, changeTheme } = useContext(ThemeContext);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full  flex justify-center ">
      <nav className="max-w-[1400px]  items-center w-full flex h-10 px-4  mx-4 sm:mx-12  ">
        <NavLink to="/">
          <span className="flex group w-16 ">
            <h1 className="font-khan font-extrabold text-2xl ">Art</h1>
            <h1 className="font-khan font-extrabold text-2xl   group-hover:overflow-hidden group-hover:max-w-0 max-w-[5.4rem] transition-all duration-200 ease-in-out">
              {" "}
              tt
            </h1>
            <h1 className="font-khan font-extrabold text-2xl  ">ur</h1>
          </span>
        </NavLink>

        <div className="w-full gap-20 flex justify-center max-sm:hidden">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "underline  gap-12 flex justify-center"
                : "gap-12 flex justify-center hover:underline "
            }
          >
            home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "underline  gap-12 flex justify-center"
                : " gap-12 flex justify-center hover:underline"
            }
          >
            projects
          </NavLink>

          <NavLink
            to="/doodles"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "underline  gap-12 flex justify-center"
                : " gap-12 flex justify-center hover:underline"
            }
          >
            gallery
          </NavLink>
        </div>

        <div className="max-sm:w-full ">
          <div
            className={` ${
              !isMenuOpen ? " -top-26" : "top-8 "
            } w-screen absolute flex flex-col px-16 items-end gap-2 py-1 mt-1 left-0  transition-all duration-300 ease-in-out `}
          >
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "underline"
                  : "gap-12 flex justify-end hover:underline w-full "
              }
            >
              home
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "underline  gap-12 flex justify-center"
                  : " gap-12 flex justify-center hover:underline"
              }
            >
              projects
            </NavLink>

            <NavLink
              to="/doodles"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "underline  gap-12 flex justify-center"
                  : " gap-12 flex justify-center hover:underline"
              }
            >
              gallery
            </NavLink>
          </div>

          <div className="flex justify-end">
            <div
              onClick={toggleMenu}
              className=" sm:hidden w-8  flex items-center justify-end cursor-pointer group"
            >
              <img
                className={`${
                  isDark && "invert-100"
                } group-hover:scale-105 transition-all duration-200`}
                src={"assets/icon/menu.svg"}
                alt="options"
              />
            </div>

            <div
              onClick={changeTheme}
              className=" invert  w-8  flex items-center justify-end cursor-pointer group"
            >
              <img
                alt="change theme"
                className={`${
                  isDark && "invert-100"
                } group-hover:scale-105 transition-all duration-200`}
                src={isDark ? "assets/icon/sun.svg" : "assets/icon/moon.svg"}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
