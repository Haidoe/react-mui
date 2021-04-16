import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

import bgDesktop from "../../assets/background.jpg";
import bgMobile from "../../assets/mobileBackground.jpg";
import LearnMoreBtn from "../LearnMoreBtn";
import EstimateBtn from "../EstimateBtn";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "80em",
    [theme.breakpoints.down("sm")]: {
      height: "50em",
    },
  },
  bg: {
    backgroundImage: `url(${bgDesktop})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${bgMobile})`,
    },
  },
  content: {
    maxWidth: "2560px",
    position: "absolute",
    padding: "0 2em",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1em",
    },
  },
  title: {
    fontFamily: "Raleway",
    fontWeight: 700,
    color: theme.palette.common.blue,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.4em",
    },
  },
  subtitle: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: "1.5em",
    marginBottom: "0.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25em",
    },
  },
  estimate: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
}));

const CTABlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      className={classes.container}
      justify="center"
      alignItems="center"
    >
      <Grid
        container
        alignItems="center"
        direction={matchesXS ? "column" : "row"}
        justify={matchesXS ? "center" : "space-between"}
        className={classes.content}
        style={{
          textAlign: matchesXS ? "center" : undefined,
        }}
      >
        <Grid item>
          <Typography variant="h2" className={classes.title}>
            Simple Software.
          </Typography>
          <Typography variant="h2" className={classes.title}>
            Revolutionary Results.
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Take advantage of the 21st Century.
          </Typography>
          <LearnMoreBtn url="/revolution" />
        </Grid>
        <Grid item className={classes.estimate}>
          <EstimateBtn size="large" />
        </Grid>
      </Grid>

      <div className={classes.bg} />
    </Grid>
  );
};

export default CTABlock;
