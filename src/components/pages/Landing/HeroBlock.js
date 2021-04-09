import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import animationData from "../../../animations/landinganimation/data";
import useStyles from "./styles";
import LearnMoreBtn from "./LearnMoreBtn";

function HeroBlock() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };

  return (
    <Grid container justify="flex-end" alignItems="center">
      <Grid item sm className={classes.heroContainer}>
        <Typography variant="h4" className={classes.firstText}>
          Bringing West Coast Technology <br />
          to the Midwest
        </Typography>

        <Grid container justify="center">
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              className={classes.estimateBtn}
            >
              Free Estimate
            </Button>
          </Grid>

          <Grid item>
            <LearnMoreBtn />
          </Grid>
        </Grid>
      </Grid>

      <Grid item sm className={classes.animation}>
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </Grid>
    </Grid>
  );
}

export default HeroBlock;
