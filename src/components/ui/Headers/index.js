import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

import ElevationScroll from "./ElevationScroll";
import MobileDrawer from "./MobileDrawer";
import logo from "../../../assets/logo.svg";
import useStyles from "./style";
import { routeList, servicesList } from "./servicesList.json";

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [serviceSelected, setServiceSelected] = useState(0);

  const handleOnTabChange = (e, val) => {
    setValue(val);
  };

  const handleServiceMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
    setServicesOpen(true);
  };

  const handleServiceMenuClose = (e) => {
    setAnchorEl(null);
    setServicesOpen(false);
  };

  const handleServiceMenuItemClick = (service) => {
    handleServiceMenuClose();
    setServiceSelected(service);
    setValue(1);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/services":
        setValue(1);
        setServiceSelected(0);
        break;
      case "/customsoftware":
        setValue(1);
        setServiceSelected(1);
        break;
      case "/mobileapps":
        setServiceSelected(2);
        setValue(1);
        break;
      case "/websites":
        setServiceSelected(3);
        setValue(1);
        break;
      case "/revolution":
        setValue(2);
        break;
      case "/about":
        setValue(3);
        break;
      case "/contact":
        setValue(4);
        break;
      case "/":
        setValue(0);
        break;
      default:
        break;
    }
  }, [value]);

  const tabProps = {
    className: classes.tab,
    component: Link,
  };

  const servicesProps = {
    "aria-owns": anchorEl ? "services-menu" : undefined,
    "aria-haspopup": anchorEl ? "true" : undefined,
    onMouseEnter: (event) => handleServiceMenuClick(event),
  };

  const hasServicesProps = (itemName) =>
    itemName === "Services" ? servicesProps : {};

  const desktop = (
    <>
      <Tabs
        value={value}
        onChange={handleOnTabChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routeList.map((item, index) => (
          <Tab
            key={`tab-${item.name}-${index}`}
            {...tabProps}
            label={item.name}
            to={item.url}
            {...hasServicesProps(item.name)}
          />
        ))}
      </Tabs>

      <Button
        variant="contained"
        className={classes.estimate}
        color="secondary"
        component={Link}
        to="/estimate"
      >
        Free Estimate
      </Button>

      <Menu
        id="services-menu"
        anchorEl={anchorEl}
        keepMounted
        open={servicesOpen}
        onClose={handleServiceMenuClose}
        MenuListProps={{ onMouseLeave: handleServiceMenuClose }}
        classes={{ paper: classes.menu }}
        className={classes.menuRoot}
        elevation={0}
      >
        {servicesList.map((item, i) => (
          <MenuItem
            key={i}
            component={Link}
            to={item.url}
            onClick={() => handleServiceMenuItemClick(i)}
            classes={{ root: classes.menuItem }}
            selected={serviceSelected === i && value === 1}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              className={classes.logoContainer}
              disableRipple
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>

            {isMobile ? (
              <MobileDrawer
                activeTabIndex={value}
                onTabChange={handleOnTabChange}
              />
            ) : (
              desktop
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
