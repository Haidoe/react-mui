import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

import ElevationScroll from "./ElevationScroll";
import logo from "../../../assets/logo.svg";
import { tabList } from "./tabList.json";
import useStyles from "./style";

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const onChange = (e, val) => {
    setValue(val);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/services":
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
      default:
        setValue(0);
    }
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
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
            <Tabs
              value={value}
              onChange={onChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              {tabList.map((item, index) => (
                <Tab
                  className={classes.tab}
                  key={index}
                  label={item.label}
                  component={Link}
                  to={item.url}
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
