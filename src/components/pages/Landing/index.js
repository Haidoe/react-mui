import Grid from "@material-ui/core/Grid";
import HeroBlock from "./HeroBlock";

export default function LandingPage() {
  return (
    <Grid container direction="column">
      <Grid item>
        <HeroBlock />
      </Grid>
    </Grid>
  );
}
