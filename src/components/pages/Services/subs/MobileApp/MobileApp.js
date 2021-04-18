import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TransitionBlock from "../../TransitionBlock";
import CTABlock from "../../../../CTABlock/CTABlock";
import mobileIcon from "../../../../../assets/mobile.svg";
import animationData from "../../../../../animations/integrationAnimation/data";
import increaseEngagementIcon from "../../../../../assets/increaseEngagement.svg";
import swissKnifeIcon from "../../../../../assets/swissKnife.svg";
import extendAccessIcon from "../../../../../assets/extendAccess.svg";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRation: "xMidYMid slice",
  },
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Raleway",
    fontWeight: 700,
    color: theme.palette.common.blue,
    marginBottom: "1em",
  },
  subtitle: {
    fontFamily: "Roboto",
    color: theme.palette.common.grey,
    marginBottom: "1em",
  },

  firstBlockContainer: {
    width: "500px",
    textAlign: "center",
    padding: "1em",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  blockContainer: {
    padding: "2em 4em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "2em 1em",
    },
  },

  rightItem: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  item: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3em",
    },
  },
}));
const MobileApp = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <TransitionBlock />
      </Grid>

      <Grid item>
        <Grid container justify="center" alignItems="center">
          <div className={classes.firstBlockContainer}>
            <Typography variant="h4" className={classes.title}>
              iOS/Android App Development
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Mobile apps allow you to take your tools on the go.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Convenience. Connection.
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container className={classes.blockContainer}>
          <Grid item sm md={4}>
            <Typography variant="h5" className={classes.title}>
              Integration
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>

          <Grid item sm={12} md={4}>
            <Grid container justify="center">
              <Lottie options={defaultOptions} height="300px" width="100%" />
            </Grid>
          </Grid>

          <Grid item sm={12} md={4} className={classes.rightItem}>
            <Typography variant="h5" className={classes.title}>
              Simultaneous Platform Support
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              This significantly reduces costs and creates a more unified brand
              experience across all devices
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        className={classes.blockContainer}
        style={{ textAlign: "center" }}
      >
        <Grid container>
          <Grid item xs={12} md={4} className={classes.item}>
            <Typography variant="h5" className={classes.title}>
              Extend Functionality
            </Typography>

            <img src={swissKnifeIcon} alt="swiss knife icon" width="200px" />
          </Grid>

          <Grid item xs={12} md={4} className={classes.item}>
            <Typography variant="h5" className={classes.title}>
              Extend Access
            </Typography>

            <img
              src={extendAccessIcon}
              alt="extended access icon"
              width="300px"
              style={{ marginTop: "1em" }}
            />
          </Grid>

          <Grid item xs={12} md={4} className={classes.item}>
            <Typography variant="h5" className={classes.title}>
              Increase Engagement
            </Typography>

            <img
              src={increaseEngagementIcon}
              alt="increase engagement icon"
              width="200px"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CTABlock />
      </Grid>
    </Grid>
  );
};

export default MobileApp;
