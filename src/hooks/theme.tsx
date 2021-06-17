import React, { useState, createContext, useContext, useEffect } from "react";
import dracula from "../styles/themes/dracula";
import light from "../styles/themes/light";
import Cookie from "js-cookie";

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    white: string;
    black: string;
    gray: string;
    success: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {

  const themeDracula = "dracula";
  const themeLight = "light";

  const storagedTheme = Cookie.get("theme") === themeLight ? light : dracula;
  const [theme, setTheme] = useState<ITheme>(storagedTheme);

  useEffect(() => {
    Cookie.set("theme", theme.title);
  }, [theme]);

  const toggleTheme = () => {
    if (theme.title === themeDracula) {
      setTheme(light);
    } else {
      setTheme(dracula);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}
