import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import bulbIcon from "../../../../../assets/bulb.svg";
import cashIcon from "../../../../../assets/cash.svg";
import stopwatchIcon from "../../../../../assets/stopwatch.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    marginTop: "1em",
  },
  title: {
    fontFamily: "Raleway",
    fontWeight: 700,
    color: theme.palette.common.blue,
    marginBottom: "1em",
  },
  paragraphContainer: {},
  paragraph: {
    fontFamily: "Robot",
    color: theme.palette.common.grey,
    maxWidth: "600px",
    margin: "0 auto",
    marginBottom: "3em",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  items: {
    marginRight: "4em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      marginTop: "2em",
    },
  },
}));

const FirstBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid item className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Custom Software Development
      </Typography>
      <Typography variant="subtitle1" className={classes.paragraph}>
        Whether we’re replacing old software or inventing new solutions, Arc
        Development is here to help your business tackle technology.
        <br />
        <br />
        Using regular commercial software leaves you with a lot of stuff you
        don’t need, without some of the stuff you do need, and ultimately
        controls the way you work. Without using any software at all you risk
        falling behind competitors and missing out on huge savings from
        increased efficiency.
        <br />
        <br />
        Our custom solutions are designed from the ground up with your needs,
        wants, and goals at the core. This collaborative process produces finely
        tuned software that is much more effective at improving your workflow
        and reducing costs than generalized options.
        <br />
        <br />
        We create exactly what you what, exactly how you want it.
      </Typography>

      <Grid
        container
        justify="center"
        style={{ marginBottom: "2em" }}
        direction={matchesXS ? "column" : "row"}
      >
        <Grid item className={classes.items}>
          <Typography variant="h5" className={classes.title}>
            Save Energy
          </Typography>
          <img src={bulbIcon} alt="bulb icon" />
        </Grid>

        <Grid item className={classes.items}>
          <Typography variant="h5" className={classes.title}>
            Save Time
          </Typography>
          <img src={stopwatchIcon} alt="watch icon" />
        </Grid>

        <Grid item className={classes.items}>
          <Typography variant="h5" className={classes.title}>
            Save Money
          </Typography>
          <img src={cashIcon} alt="cash icon" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FirstBlock;
