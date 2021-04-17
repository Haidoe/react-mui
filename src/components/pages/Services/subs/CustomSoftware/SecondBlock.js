import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import animationData from "../../../../../animations/documentsAnimation/data";
import uxAnimationData from "../../../../../animations/scaleAnimation/data";
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

function SecondBlock() {
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
                Digital Documents & Data
              </Typography>

              <Typography variant="subtitle1" className={classes.subtitle}>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>

              <Typography variant="subtitle1" className={classes.subtitle}>
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>

              <Typography variant="subtitle1" className={classes.subtitle}>
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>

            <Grid item sm className={classes.animation}>
              <Grid container justify="center">
                <Lottie options={defaultOptions} height="250px" width="100%" />
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
              <Grid container justify="center" alignItems="center">
                <Lottie options={defaultOptions2} height="250px" width="100%" />
              </Grid>
            </Grid>

            <Grid item sm>
              <Typography variant="h4" className={classes.title}>
                Scale
              </Typography>

              <Typography variant="subtitle1" className={classes.subtitle}>
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SecondBlock;
