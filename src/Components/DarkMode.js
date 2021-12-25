import { useContext } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { ThemeContext } from "../Providers/ThemeContext";

const DarkMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="dark:bg-zinc-800 bg-neutral-300 absolute right-8 top-5 flex py-1 px-1.5 items-center space-x-3 rounded-lg">
      <div className="relative">
        <button
          className={`p-1.5 rounded-lg ${
            theme === "light" ? "bg-gray-400 bg-opacity-80" : ""
          } hover:bg-gradient-to-r hover:from-emerald-400 hover:to-sky-700 peer cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500`}
          onClick={() => setTheme("light")}
        >
          <SunIcon className="w-5 h-5 dark:text-gray-200 text-neutral-900" />
        </button>
        <span className="absolute top-11 bg-gray-400 px-2 -left-2 rounded-md py-1 bg-gradient-to-r from-emerald-400 to-sky-700 text-gray-200 font-medium opacity-0 peer-hover:opacity-100">
          Light
        </span>
      </div>
      <div className="relative">
        <button
          className={`p-1.5 rounded-lg ${
            theme === "dark" ? "bg-zinc-600" : ""
          } hover:bg-gradient-to-r hover:from-emerald-400 hover:to-sky-700 peer cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500`}
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="w-5 h-5 dark:text-gray-200 text-neutral-600" />
        </button>
        <span className="absolute top-11 bg-gray-400 px-2 -left-2 rounded-md py-1 bg-gradient-to-r from-emerald-400 to-sky-700 text-gray-200 font-medium opacity-0 peer-hover:opacity-100">
          Dark
        </span>
      </div>
    </div>
  );
};

export default DarkMode;
