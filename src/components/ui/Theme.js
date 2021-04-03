import { createMuiTheme } from "@material-ui/core/styles";

const haiblue = "#0B72B9";
const haorange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: haiblue,
      orangex: haorange,
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
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
  },
});
