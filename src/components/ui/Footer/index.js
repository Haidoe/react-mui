import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import footerLogo from "./FooterLogo.svg";
import { Link } from "react-router-dom";
import { mainRoutes } from "../Headers/tabSectionList";

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

      <img src={footerLogo} className={classes.logo} alt="footer adornment" />
    </footer>
  );
};

export default Footer;
