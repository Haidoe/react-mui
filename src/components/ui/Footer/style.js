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
}));

export default useStyles;
