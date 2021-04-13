import { makeStyles } from "@material-ui/core/styles";
import revolutionBg from "../../../assets/repeatingBackground.svg";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    minWidth: "21.5em",
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
    },
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em",
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
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      maxWidth: "18em",
      minWidth: "18em",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  subtitle1: {
    fontFamily: "Roboto",
    fontSize: "1.25rem",
    color: theme.palette.common.grey,
    [theme.breakpoints.down("sm")]: {
      padding: " 5px 25px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
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
  revolutionContainer: {
    height: "80em",
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      height: "50em",
    },
  },
  revolutionBg: {
    backgroundImage: `url(${revolutionBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionBox: {
    textAlign: "center",
  },
  revCard: {
    position: "absolute",
    borderRadius: 15,
    boxShadow: theme.shadows[10],
    padding: "7em",
    [theme.breakpoints.down("sm")]: {
      padding: "2em",
      margin: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },
  revolutionTitle: {
    fontFamily: "Pacifico",
    color: theme.palette.common.blue,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
}));

export default useStyles;
