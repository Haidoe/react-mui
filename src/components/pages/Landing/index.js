import Grid from "@material-ui/core/Grid";
import HeroBlock from "./HeroBlock";
import ServiceBlock from "./ServiceBlock";
import RevolutionBlock from "./RevolutionBlock";
import InfoBlock from "./InfoBlock";
import CTABlock from "../../CTABlock";
import useStyles from "./styles";

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

      <Grid item>
        <InfoBlock />
      </Grid>

      <Grid item>
        <CTABlock />
      </Grid>
    </Grid>
  );
}
