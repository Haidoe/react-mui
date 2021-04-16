import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    ...theme.typography.estimate,
    borderRadius: 50,
  },
}));

const EstimateBtn = (props) => {
  const classes = useStyles();
  return (
    <Button
      component={Link}
      to="/estimate"
      color="secondary"
      variant="contained"
      className={classes.btn}
      {...props}
    >
      Free Estimate
    </Button>
  );
};

export default EstimateBtn;
