import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

import customSoftwareIcon from "../../../assets/Custom Software Icon.svg";
import mobileIcon from "../../../assets/mobileIcon.svg";
import websiteIcon from "../../../assets/websiteIcon.svg";

import LearnMoreBtn from "../../LearnMoreBtn";
import useStyles from "./styles";

const ServiceBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        justify={matchesSM ? "center" : undefined}
        direction={matchesSM ? "column" : "row"}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          <Typography variant="h5" className={classes.serviceTitle}>
            Custom Software Development
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.subtitle1}
            style={{ marginBottom: "1em" }}
          >
            Save Energy. Save Time. Save Money.
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle1}>
            Complete digital solutions, from investigation to
            <span className={classes.celebrationTxt}> celebration </span>
          </Typography>

          <LearnMoreBtn url="/customsoftware" />
        </Grid>

        <Grid item>
          <Grid container justify="center">
            <img
              src={customSoftwareIcon}
              alt="custom software icon"
              className={classes.csIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        justify={matchesSM ? "center" : "flex-end"}
        style={{ marginTop: "10em" }}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          <Typography variant="h5" className={classes.serviceTitle}>
            iOS/Android App Development
          </Typography>

          <Typography
            variant="subtitle1"
            className={classes.subtitle1}
            style={{ marginBottom: "1em" }}
          >
            Extended Functionality. Extended Access. Increase Engagement.
          </Typography>

          <Typography variant="subtitle1" className={classes.subtitle1}>
            Integrage your web experience or create standalone app
            <br /> with either mobile platform
          </Typography>

          <LearnMoreBtn url="/mobileapps" />
        </Grid>

        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
          <Grid container justify="center">
            <img
              src={mobileIcon}
              alt="mobile icon"
              className={classes.csIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        justify={matchesSM ? "center" : "flex-start"}
        style={{ marginTop: "10em" }}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          <Typography variant="h5" className={classes.serviceTitle}>
            Website Development
          </Typography>

          <Typography
            variant="subtitle1"
            className={classes.subtitle1}
            style={{ marginBottom: "1em" }}
          >
            Reach More. Discover. Sell More.
          </Typography>

          <Typography variant="subtitle1" className={classes.subtitle1}>
            Optimized for Search Engines, <br />
            built for speed.
          </Typography>

          <LearnMoreBtn url="/websites" />
        </Grid>

        <Grid item className={classes.iconContainer}>
          <Grid container justify="center">
            <img
              src={websiteIcon}
              alt="website development icon"
              className={classes.csIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceBlock;
