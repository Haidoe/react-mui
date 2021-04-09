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
      maxWidth: "30em",
    },
  },
}));

export default useStyles;
