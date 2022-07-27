import { createContext, useContext, useState, useEffect } from "react";

export const DARK = "dark";
export const LIGHT = "light";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider(props) {
  const THEME_KEY = "mode:dark";

  const [theme, setTheme] = useState();

  const toggleDarkMode = () => {
    if (theme === DARK) {
      localStorage.setItem(THEME_KEY, LIGHT);
      setTheme(LIGHT);
    } else {
      localStorage.setItem(THEME_KEY, DARK);
      setTheme(DARK);
    }
  };

  useEffect(() => {
    setTheme(localStorage.getItem(THEME_KEY) ?? LIGHT);
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
