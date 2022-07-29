import { useThemeContext, DARK } from "../context/theme";

export default function ToggleDarkMode() {
  const { theme, toggleDarkMode } = useThemeContext();

  return <button onClick={toggleDarkMode}>{theme === DARK ? "🌚" : "🌞"}</button>;
}
