import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggleButton() {

  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {

    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

  }

  return (
    <div>
      <h2>Theme Toggle</h2>

      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default ThemeToggleButton;