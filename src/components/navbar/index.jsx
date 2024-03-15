"use client";
import Image from "next/image";
import iconLuna from "@/img/icon-luna.svg";
import iconSol from "@/img/icon-sol.svg";
import { Link } from "react-router-dom";
function Navbar({ darkMode, setDarkMode }) {
  function toggleDarkMode(params) {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <nav
        className={` flex justify-center px-8 py-3 lg:px-20 xl:p-7  h-40 lg:h-20 shadow-pre  w-full ${
          darkMode ? "bg-DarkBlue  " : "bg-White "
        }`}
      >
        <section
          className={`flex justify-between items-center max-w-screen-xl w-full ${
            darkMode ? "text-White  " : "text-VeryDarkBlue "
          }`}
        >
          <Link to="/">
            <h3 className="text-base sm:text-f28 font-bold  lg:text-f24 lg:font-extrabold">
              Where in the world?
            </h3>
          </Link>
          <div
            className={`flex items-center sm:gap-5 lg:gap-2 cursor-pointer
              `}
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <Image
                src={iconSol}
                priority
                alt="dark"
                width={32}
                className={` lg:w-5 ${darkMode ? "  " : "invert "}`}
              />
            ) : (
              <Image
                src={iconLuna}
                priority
                alt="dark"
                width={32}
                className={` lg:w-5 ${darkMode ? "  " : "invert "}`}
              />
            )}

            <span
              className={`text-base text-end  sm:text-f22 lg:text-base  font-medium lg:font-semibold ${
                darkMode ? "text-White  " : "text-VeryDarkBlue "
              }`}
            >
              {darkMode ? "Ligth Mode" : "Dark Mode"}
            </span>
          </div>
        </section>
      </nav>
    </>
  );
}
export default Navbar;
