import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import animationData from "../../../../../animations/automationAnimation/data";
import uxAnimationData from "../../../../../animations/uxAnimation/data";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "5em",
    [theme.breakpoints.down("sm")]: {
      margin: "5em 3em",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "5em 1em",
    },
  },
  itemContainer: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: "3em",
    },
  },
  title: {
    fontFamily: "Raleway",
    fontWeight: 700,
    color: theme.palette.common.blue,
  },
  subtitle: {
    fontFamily: "Roboto",
    color: theme.palette.common.grey,
    marginBottom: "1em",
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRation: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  ...defaultOptions,
  animationData: uxAnimationData,
};

function FourthBlock() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item className={classes.container}>
      <Grid container>
        <Grid item md className={classes.itemContainer}>
          <Grid
            container
            justify={matchesSM ? "center" : "space-between"}
            direction={matchesSM ? "column" : undefined}
          >
            <Grid item sm>
              <Typography variant="h4" className={classes.title}>
                Automation
              </Typography>

              <Typography variant="subtitle1" className={classes.subtitle}>
                Why waste time when you don’t have to?
              </Typography>

              <Typography variant="subtitle1" className={classes.subtitle}>
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>

              <Typography variant="subtitle1" className={classes.subtitle}>
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>

            <Grid item sm className={classes.animation}>
              <Grid container justify="center">
                <Lottie options={defaultOptions} height="300px" width="100%" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md className={classes.itemContainer}>
          <Grid
            container
            justify={matchesSM ? "center" : "space-between"}
            direction={matchesSM ? "column-reverse" : undefined}
          >
            <Grid item sm className={classes.animation}>
              <Lottie options={defaultOptions2} height="300px" width="100%" />
            </Grid>

            <Grid item sm>
              <Typography variant="h4" className={classes.title}>
                User Experience Design
              </Typography>

              <Typography variant="subtitle1" className={classes.subtitle}>
                A good design that isn’t usable isn’t a good design.
              </Typography>

              <Typography variant="subtitle1" className={classes.subtitle}>
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>

              <Typography variant="subtitle1" className={classes.subtitle}>
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FourthBlock;
