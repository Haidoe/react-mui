import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: ".5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: "25px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    background: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
    zIndex: theme.zIndex.modal + 2,
  },
  menuRoot: {
    zIndex: `${theme.zIndex.modal + 2} !important`,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  mobileMenuIconContainer: {
    marginLeft: "auto",
    color: "white",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerText: {
    ...theme.typography.tab,
    opacity: 0.7,
    color: "white",
    "&:hover": {
      opacity: 1,
    },
  },
  selectedItem: {
    opacity: 1,
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerEstimateContainer: {
    backgroundColor: theme.palette.common.orangex,
  },
  drawerEstimate: {
    ...theme.typography.estimate,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default useStyles;
