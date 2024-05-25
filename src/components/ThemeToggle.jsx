import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/themeAtom";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="focus:outline-none transition-colors duration-300"
    >
      {theme === "dark" ? (
        <FaMoon className="text-blue-400 transition-transform duration-300 transform rotate-0 hover:rotate-12" />
      ) : (
        <FaSun className="text-yellow-600 transition-transform duration-300 transform rotate-0 hover:rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
