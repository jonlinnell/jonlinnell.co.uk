import { createContext, useContext, useState, useEffect } from "react";

export const DARK = "dark";
export const LIGHT = "light";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider(props) {
  const isServer = typeof window === "undefined";

  const [theme, setTheme] = useState();

  const toggleDarkMode = () => {
    if (theme === DARK) {
      localStorage.setItem("mode:dark", LIGHT);
      setTheme(LIGHT);
    } else {
      localStorage.setItem("mode:dark", DARK);
      setTheme(DARK);
    }
  };

  useEffect(() => {
    setTheme(localStorage.getItem("mode:dark") ?? LIGHT);
  }, []);

  useEffect(() => {
    if (theme === DARK) {
      document.documentElement.classList.add(DARK);
    } else {
      document.documentElement.classList.remove(DARK);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleDarkMode,
      }}
      {...props}
    />
  );
}

export default ThemeContext;
