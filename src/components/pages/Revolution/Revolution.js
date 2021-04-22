import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

import visionIcon from "../../../assets/vision.svg";
import animationData from "../../../animations/technologyAnimation/data";
import CTABlock from "../../CTABlock/CTABlock";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Raleway",
    fontWeight: 700,
    color: theme.palette.common.blue,
    marginBottom: "1em",
  },
  subtitle: {
    fontFamily: "Roboto",
    color: theme.palette.common.grey,
    marginBottom: "1em",
  },
  container: {
    maxWidth: "2560px",
    margin: "0 auto",
  },
  item: {
    width: "1280px",
    margin: "1em auto",
    padding: "0 2em",
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRation: "xMidYMid slice",
  },
};

const Revolution = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item className={classes.item}>
        <Typography variant="h3" className={classes.title}>
          The Revolution
        </Typography>
      </Grid>

      <Grid item className={classes.item}>
        <Grid
          container
          alignItems="center"
          direction={matchesMD ? "column-reverse" : "row"}
        >
          <Grid item sm={6}>
            <img src={visionIcon} alt="vision icon" width="500px" />
          </Grid>

          <Grid
            item
            sm={6}
            style={{
              marginBottom: matchesMD ? "3em" : undefined,
              textAlign: matchesMD ? "center" : "right",
            }}
          >
            <Typography variant="h5" className={classes.title}>
              Vision
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life’s obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.item}>
        <Grid
          container
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
        >
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.title}>
              Technology
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              In 2013, Facebook invented a new way of building websites. This
              new system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a <b>huge</b> leap
              forward.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much
              as possible on their work itself.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              This puts personalization in your pocket — faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Lottie options={defaultOptions} height="500px" width="100%" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CTABlock />
      </Grid>
    </Grid>
  );
};

export default Revolution;
