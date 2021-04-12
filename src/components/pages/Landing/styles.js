import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    minWidth: "21.5em",
  },
  firstText: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: theme.palette.common.blue,
    marginBottom: "1.5em",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    marginRight: "2em",
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      maxWidth: "20em",
    },
  },
  serviceBlockContainer: {
    marginTop: "16em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "8em",
    },
  },
  serviceTitle: {
    fontFamily: "Raleway",
    color: theme.palette.common.blue,
    fontWeight: 700,
    fontSize: "2rem",
  },
  subtitle1: {
    fontFamily: "Roboto",
    fontSize: "1.25rem",
    color: theme.palette.common.grey,
    [theme.breakpoints.down("sm")]: {
      padding: " 5px 25px",
    },
  },
  celebrationTxt: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orangex,
  },
  csIcon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "2em",
    },
  },
}));

export default useStyles;
