import React, { useState, useContext, useEffect } from "react";

const RouteContext = React.createContext();
const MenuTabContext = React.createContext();

export const useRouteContext = () => {
  return useContext(RouteContext);
};

export const useMenuTabContext = () => {
  return useContext(MenuTabContext);
};

const ThemeProvider = ({ children }) => {
  // Zero is the home default route index
  const activeRouteTabIndex = useState(0);
  const serviceMenuActiveIndex = useState(0);

  const [tabValue, setTabValue] = activeRouteTabIndex;
  const [serviceSelected, setServiceSelected] = serviceMenuActiveIndex;
  const activePath = window.location.pathname;

  useEffect(() => {
    switch (activePath) {
      case "/services":
        setTabValue(1);
        setServiceSelected(0);
        break;
      case "/customsoftware":
        setTabValue(1);
        setServiceSelected(1);
        break;
      case "/mobileapps":
        setServiceSelected(2);
        setTabValue(1);
        break;
      case "/websites":
        setServiceSelected(3);
        setTabValue(1);
        break;
      case "/revolution":
        setTabValue(2);
        break;
      case "/about":
        setTabValue(3);
        break;
      case "/contact":
        setTabValue(4);
        break;
      case "/":
        setTabValue(0);
        break;
      default:
        break;
    }
  }, [tabValue, serviceSelected, activePath]);

  return (
    <RouteContext.Provider value={activeRouteTabIndex}>
      <MenuTabContext.Provider value={serviceMenuActiveIndex}>
        {children}
      </MenuTabContext.Provider>
    </RouteContext.Provider>
  );
};

export default ThemeProvider;
