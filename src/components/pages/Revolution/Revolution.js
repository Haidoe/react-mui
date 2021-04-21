import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import visionIcon from "../../../assets/vision.svg";
import animationData from "../../../animations/technologyAnimation/data";
import CTABlock from "../../CTABlock/CTABlock";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Raleway",
    fontWeight: 700,
    color: theme.palette.common.blue,
    marginBottom: "1em 0",
  },
  subtitle: {
    fontFamily: "Roboto",
    color: theme.palette.common.grey,
    marginBottom: "1em",
  },
  container: {
    maxWidth: "2560px",
    margin: "0 auto",
  },
  item: {
    width: "1280px",
    margin: "1em auto",
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

const Revolution = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item className={classes.item}>
        <Typography variant="h3" className={classes.title}>
          The Revolution
        </Typography>
      </Grid>

      <Grid item className={classes.item}>
        <Grid container alignItems="center">
          <Grid item sm={6}>
            <img src={visionIcon} alt="vision icon" width="500px" />
          </Grid>

          <Grid item sm={6}>
            <Typography variant="h5" className={classes.title}>
              Vision
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life’s obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.item}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.title}>
              Vision
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life’s obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Lottie options={defaultOptions} height="500px" width="100%" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CTABlock />
      </Grid>
    </Grid>
  );
};

export default Revolution;
