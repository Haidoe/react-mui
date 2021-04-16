import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import LearnMoreBtn from "../../LearnMoreBtn";

const InfoBlock = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.revolutionContainer}
    >
      <Grid
        container
        alignItems="center"
        justify="space-between"
        className={classes.infoContainer}
      >
        <Grid item className={classes.infoItem}>
          <Typography variant="h3" className={classes.infoTitle}>
            About Us
          </Typography>
          <Typography style={{ marginBottom: "1em" }}>
            Let's get personal.
          </Typography>
          <LearnMoreBtn color="white" url="/about" />
        </Grid>

        <Grid item className={classes.infoItem} style={{ textAlign: "right" }}>
          <Typography variant="h3" className={classes.infoTitle}>
            Contact Us
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.infoSubtitle}
            style={{ marginBottom: "1em" }}
          >
            Let's get personal.
          </Typography>
          <LearnMoreBtn color="white" url="/contact" />
        </Grid>
      </Grid>

      <div className={classes.infoBBg} />
    </Grid>
  );
};

export default InfoBlock;
