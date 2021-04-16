import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Block from "../Landing/ServiceBlock";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3em 2em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 0",
    },
  },
  titleContainer: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  title: {
    marginLeft: "5rem",
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: theme.palette.common.blue,
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item className={classes.titleContainer}>
        <Typography variant="h2" className={classes.title}>
          Services
        </Typography>
      </Grid>

      <Grid item>
        <Block />
      </Grid>
    </Grid>
  );
};

export default Services;
