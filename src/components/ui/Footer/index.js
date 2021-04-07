import React from "react";
import useStyles from "./style";
import footerLogo from "./FooterLogo.svg";
const Footer = () => {
  const classes = useStyles();
  console.log(classes);

  return (
    <footer className={classes.footerContainer}>
      <img src={footerLogo} className={classes.logo} alt="footer adornment" />
    </footer>
  );
};

export default Footer;
