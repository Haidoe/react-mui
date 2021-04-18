import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const TransitionBlock = () => {
  return (
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
  );
};

export default TransitionBlock;
