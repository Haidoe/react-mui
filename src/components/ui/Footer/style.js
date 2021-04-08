import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.common.blue,
    zIndex: `${theme.zIndex.modal + 1} `,
    position: "relative",
  },
  logo: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  gridContainer: {
    position: "absolute",
  },
  gridItems: {
    margin: "3em",
  },
  link: {
    fontSize: "0.75rem",
    fontWeight: "bold",
    color: "white",
    fontFamily: "Arial",
    textDecoration: "none",
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "3em",
    [theme.breakpoints.down("xs")]: {
      right: "1rem",
      marginTop: "-4em",
    },
  },
  socialLogo: {
    width: "4rem",
    [theme.breakpoints.down("xs")]: {
      width: "2rem",
    },
  },
}));

export default useStyles;
