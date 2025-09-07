/** @format */

import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="w-full  flex justify-center ">
      <nav className="max-w-[1400px] items-center w-full flex h-10 px-4  ">
        <div className="w-12 h-8 bg-black"></div>

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
            doodles
          </NavLink>
        </div>
        <div className="max-sm:w-full flex items-center justify-end">
          <p>lightmode</p>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
