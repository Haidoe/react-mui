import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import rootIcon from "../../../../../assets/root.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "400px",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  container: {
    textAlign: "center",
    padding: "5em",
    [theme.breakpoints.down("sm")]: {
      padding: "5em 3em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3em 1em",
    },
  },
  title: {
    fontFamily: "Raleway",
    fontWeight: 700,
    color: theme.palette.common.blue,
    marginTop: "2em",
    marginBottom: "1em",
  },
  subtitle: {
    fontFamily: "Roboto",
    color: theme.palette.common.grey,
    width: "400px",
    margin: "0 auto",
    marginBottom: "0.5em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const ThirdBlock = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <img src={rootIcon} alt="root icon" className={classes.img} />

        <Typography variant="h4" className={classes.title}>
          Root-Cause Analysis
        </Typography>

        <Typography variant="subtitle1" className={classes.subtitle}>
          Many problems are merely symptoms of larger, underlying issues.
        </Typography>

        <Typography variant="subtitle1" className={classes.subtitle}>
          We can help you thoroughly examine all areas of your business to
          develop a holistic plan for the most effective implementation of
          technology.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ThirdBlock;
