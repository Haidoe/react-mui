import Grid from "@material-ui/core/Grid";
import HeroBlock from "./HeroBlock";
import ServiceBlock from "./ServiceBlock";
import useStyles from "./styles";
import RevolutionBlock from "./RevolutionBlock";

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <HeroBlock />
      </Grid>

      <Grid item className={classes.serviceBlockContainer}>
        <ServiceBlock />
      </Grid>

      <Grid item>
        <RevolutionBlock />
      </Grid>
    </Grid>
  );
}
