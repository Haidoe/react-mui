import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();

export const useRouteContext = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  // Zero is the home default route index
  const activeRouteTabIndex = useState(0);

  return (
    <ThemeContext.Provider value={activeRouteTabIndex}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
