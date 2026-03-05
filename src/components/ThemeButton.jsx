import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../hooks/useTheme";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-lg bg-alt px-4 py-2 font-medium text-text transition-colors duration-200 ease-in-out hover:bg-border focus:ring-2 focus:ring-primary focus:outline-none"
    >
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
    </button>
  );
};

export default ThemeButton;
