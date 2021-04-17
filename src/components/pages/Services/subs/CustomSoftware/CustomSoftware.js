import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";

const useStyles = makeStyles((theme) => ({
  transitionContainer: {},
}));

const CustomSoftware = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item className={classes.transitionContainer}>
        <Grid container justify="space-between">
          <Grid item>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <FirstBlock />

      <SecondBlock />

      <ThirdBlock />
    </Grid>
  );
};

export default CustomSoftware;
