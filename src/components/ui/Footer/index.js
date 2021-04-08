import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import useStyles from "./style";
import footerLogo from "./FooterLogo.svg";
import { Link } from "react-router-dom";
import { mainRoutes } from "../Headers/tabSectionList";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";

const ItemLink = ({
  item,
  setValue,
  index,
  childIndex,
  setServiceSelected,
}) => {
  const classes = useStyles();
  const { name, url } = item;

  const handleClick = () => {
    if (index === 1) {
      let servicesIndex = Object.is(childIndex, undefined) ? 0 : childIndex + 1;
      setServiceSelected(servicesIndex);
    }
    setValue(index);
  };

  return (
    <Grid
      item
      className={classes.link}
      component={Link}
      to={url}
      onClick={handleClick}
    >
      {name}
    </Grid>
  );
};

const Footer = ({ setValue, setServiceSelected }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footerContainer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.gridContainer}>
          {mainRoutes.map((route, index) => (
            <Grid
              item
              className={classes.gridItems}
              key={`${route.name}-footer-item`}
            >
              <Grid container direction="column" spacing={2}>
                <ItemLink item={route} setValue={setValue} index={index} />

                {route.child &&
                  route.child.map((item, childIndex) => (
                    <ItemLink
                      key={`${route.name}-${item.name}-footer-item`}
                      setValue={setValue}
                      index={index}
                      childIndex={childIndex}
                      setServiceSelected={setServiceSelected}
                      item={item}
                    />
                  ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Hidden>

      <img src={footerLogo} className={classes.logo} alt="footer adornment" />

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component="a"
          href="https://www.facebook.com/haidren.amalia"
          target="_blank"
        >
          <img
            src={facebook}
            alt="facebook logo"
            className={classes.socialLogo}
          />
        </Grid>

        <Grid
          item
          component="a"
          target="_blank"
          href="https://www.instagram.com/haid.paul/"
        >
          <img
            src={instagram}
            alt="instagram logo"
            className={classes.socialLogo}
          />
        </Grid>

        <Grid
          item
          component="a"
          href="https://twitter.com/heidinprogress"
          target="_blank"
        >
          <img
            src={twitter}
            alt="twitter logo"
            className={classes.socialLogo}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
