import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  learnMoreBtn: {
    textTransform: "none",
    borderRadius: "25px",
  },
  iconBtn: {
    fontSize: ".8em",
    marginLeft: ".5em",
  },
}));

function LearnMoreBtn({ url = "", color = "primary" }) {
  const classes = useStyles();
  return (
    <Button
      color="primary"
      variant="outlined"
      component={Link}
      to={url}
      className={classes.learnMoreBtn}
      style={{
        color: color === "white" ? "white" : undefined,
        border: color === "white" ? "2px solid white" : undefined,
      }}
    >
      Learn more
      <ArrowRightAltIcon className={classes.iconBtn} />
    </Button>
  );
}

export default LearnMoreBtn;
