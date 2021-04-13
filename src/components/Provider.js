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
  const [tabValue, setTabValue] = useState(0);
  const [serviceSelected, setServiceSelected] = useState(0);

  const activeRouteTabIndex = [tabValue, setTabValue];
  const serviceMenuActiveIndex = [serviceSelected, setServiceSelected];

  useEffect(() => {
    switch (window.location.pathname) {
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
  }, [tabValue, serviceSelected]);

  return (
    <RouteContext.Provider value={activeRouteTabIndex}>
      <MenuTabContext.Provider value={serviceMenuActiveIndex}>
        {children}
      </MenuTabContext.Provider>
    </RouteContext.Provider>
  );
};

export default ThemeProvider;
