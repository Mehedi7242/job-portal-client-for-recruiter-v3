import React, { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };

    const themeInfo = {
        theme,toggleTheme
    };

    return (

   <ThemeContext.Provider value={themeInfo}>
        {children}
   </ThemeContext.Provider>
    );
};

export default ThemeProvider;