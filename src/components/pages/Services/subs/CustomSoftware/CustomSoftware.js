import Grid from "@material-ui/core/Grid";
import TransitionBlock from "../../TransitionBlock";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";
import CTABlock from "../../../../CTABlock/CTABlock";
import FourthBlock from "./FourthBlock";

const CustomSoftware = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <TransitionBlock />
      </Grid>

      <FirstBlock />

      <SecondBlock />

      <ThirdBlock />

      <FourthBlock />

      <Grid item>
        <CTABlock />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
