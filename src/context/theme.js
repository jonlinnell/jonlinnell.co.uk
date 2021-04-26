import { createContext, useContext, useState } from "react";

export const DARK = "dark";
export const LIGHT = "light";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(LIGHT);

  const toggleDarkMode = () => {
    if (theme === DARK) {
      setTheme(LIGHT);
    } else {
      setTheme(DARK);
    }
  };

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
