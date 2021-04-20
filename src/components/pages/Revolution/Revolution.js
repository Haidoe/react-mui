import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {},
  subtitle: {},
}));
const Revolution = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h2">The Revolution</Typography>
      </Grid>

      <Grid item>
        <Grid container>
          <Grid item>
            <img alt="vision icon" />
          </Grid>

          <Grid item>
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

      <Grid item>
        <Grid container>
          <Grid item>
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

          <Grid item>
            <img alt="technology icon" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;
