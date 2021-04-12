import { createMuiTheme } from "@material-ui/core/styles";

const haiblue = "#0B72B9";
const haorange = "#FFBA60";
const hagrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: haiblue,
      orangex: haorange,
      grey: hagrey,
    },
    primary: {
      main: haiblue,
    },
    secondary: {
      main: haorange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1rem",
      textTransform: "none",
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
  },
});
