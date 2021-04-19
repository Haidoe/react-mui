import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useMenuTabContext } from "../../Provider";

const init = () => {
  return {
    left: "/",
    right: "/",
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "cs":
      return { left: "", right: "/mobileapps" };
    case "ma":
      return { left: "/customsoftware", right: "/websites" };
    case "web":
      return { left: "/mobileapps", right: "" };
    default:
      return state;
  }
};

const TransitionBlock = () => {
  const [btn, dispatch] = useReducer(reducer, init());
  const [menu, setMenu] = useMenuTabContext();

  useEffect(() => {
    switch (window.location.pathname) {
      case "/customsoftware": {
        dispatch({ type: "cs" });
        setMenu(1);
        break;
      }
      case "/mobileapps": {
        dispatch({ type: "ma" });
        setMenu(2);
        break;
      }
      case "/websites": {
        dispatch({ type: "web" });
        setMenu(3);
        break;
      }
    }
  }, []);

  return (
    <Grid container justify="space-between">
      <Grid item>
        <IconButton
          component={Link}
          to={btn.left}
          disabled={btn.left.length === 0}
        >
          <ArrowBackIcon />
        </IconButton>
      </Grid>

      <Grid item>
        <IconButton
          component={Link}
          to={btn.right}
          disabled={btn.right.length === 0}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TransitionBlock;
