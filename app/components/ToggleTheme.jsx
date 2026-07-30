"use client";

import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "../context/ThemeProvider";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center justify-center
        rounded-lg
        p-2
        text-slate-700
        transition-colors
        hover:bg-slate-100
        dark:text-yellow-400
        dark:hover:bg-slate-800
      "
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FaMoon size={22} />
      ) : (
        <FaSun
          size={22}
          className="text-yellow-500"
        />
      )}
    </button>
  );
}

export default ThemeToggle;