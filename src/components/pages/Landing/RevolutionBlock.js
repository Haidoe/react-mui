import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import LearnMoreBtn from "./LearnMoreBtn";

const RevolutionBlock = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.revolutionContainer}
    >
      <Card className={classes.revCard}>
        <CardContent>
          <Grid container direction="column" className={classes.revolutionBox}>
            <Grid item style={{ marginBottom: "2em" }}>
              <Typography variant="h3" className={classes.revolutionTitle}>
                The Revolution
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: "1em" }}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                Visionary insights coupled with cutting-edge technology is
                <br /> a recipe for revolution
              </Typography>
            </Grid>

            <Grid item>
              <LearnMoreBtn />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div className={classes.revolutionBg} />
    </Grid>
  );
};

export default RevolutionBlock;
