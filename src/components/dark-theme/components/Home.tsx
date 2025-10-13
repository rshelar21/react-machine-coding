import "../style.css";
import { useTheme } from "../hooks/useTheme";

export const Home = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      Home
      <button onClick={() => toggleTheme()}>change theme {theme}</button>
    </div>
  );
};
