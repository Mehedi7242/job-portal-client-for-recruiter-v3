import { useContext } from "react";
import { Moon, Sun } from "lucide-react"; // Importing Lucide Icons
import ThemeContext from "../../context/ThemeContext/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="btn flex items-center gap-2 p-2 rounded-md"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      <span>{theme === "light"}</span>
    </button>
  );
};

export default ThemeToggleButton;
