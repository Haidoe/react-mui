import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import useStyles from "./style";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function ({ activeTabIndex, onTabChange }) {
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(true);
  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "The Revolution",
      url: "/revolution",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
  ];

  const handleOnClick = () => {
    setVisibility(!isVisible);
  };

  const itemProps = {
    component: Link,
    button: true,
    divider: true,
  };

  const itemTextProps = {
    className: classes.drawerText,
    disableTypography: true,
  };

  console.log(activeTabIndex);
  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={isVisible}
        onOpen={() => setVisibility(true)}
        onClose={() => setVisibility(false)}
        classes={{ paper: classes.drawerPaper }}
        keepMounted
      >
        <List disablePadding>
          {items.map((route, index) => (
            <ListItem
              key={`${route.name}${index}`}
              {...itemProps}
              to={route.url}
              onClick={(e) => onTabChange(e, index)}
              selected={activeTabIndex === index}
              classes={{ selected: classes.selectedItem }}
            >
              <ListItemText {...itemTextProps}>{route.name}</ListItemText>
            </ListItem>
          ))}

          <ListItem
            {...itemProps}
            to="/estimate"
            className={classes.drawerEstimateContainer}
          >
            <ListItemText {...itemTextProps} className={classes.drawerEstimate}>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton
        className={classes.mobileMenuIconContainer}
        onClick={() => handleOnClick()}
        disableRipple
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </>
  );
}
