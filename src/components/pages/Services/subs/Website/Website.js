import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import TransitionBlock from "../../TransitionBlock";
import CTABlock from "../../../../CTABlock/CTABlock";
import analyticsIcon from "../../../../../assets/analytics.svg";
import outreachIcon from "../../../../../assets/outreach.svg";
import seoIcon from "../../../../../assets/seo.svg";
import ecommerceIcon from "../../../../../assets/ecommerce.svg";

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
  subtitleContainer: {
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  firstBlockContainer: {
    width: "500px",
    textAlign: "center",
    padding: "1em",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  itemContainer: {
    padding: "2em 4em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "2em 1em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em 0.5em",
    },
  },
  img: {
    marginRight: "1em",
    width: "280px",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
      marginRight: 0,
    },
  },
  analytics: {
    paddingLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
}));

const WebDev = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid item>
        <TransitionBlock />
      </Grid>

      <Grid item>
        <Grid container justify="center" alignItems="center">
          <div className={classes.firstBlockContainer}>
            <Typography variant="h4" className={classes.title}>
              Website Development
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>

            <Typography variant="subtitle1" className={classes.subtitle}>
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid item className={classes.itemContainer}>
        <Typography
          variant="h5"
          className={`${classes.title} ${classes.analytics}`}
        >
          Analytics
        </Typography>

        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
        >
          <Grid item>
            <img
              className={classes.img}
              src={analyticsIcon}
              alt="analytics icon"
            />
          </Grid>

          <Grid item className={classes.subtitleContainer}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Knowledge is power, and data is 21st Century gold. Analyzing this
              data can reveal hidden patterns and trends in your business,
              empowering you to make smarter decisions with measurable effects.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.itemContainer}>
        <Grid
          container
          alignItems={matchesSM ? "center" : "flex-end"}
          direction="column"
        >
          <Grid item>
            <Typography
              variant="h5"
              className={`${classes.title} ${classes.analytics}`}
            >
              E-Commerce
            </Typography>

            <Grid
              container
              alignItems="center"
              direction={matchesSM ? "column" : "row"}
            >
              <Grid item>
                <img
                  className={classes.img}
                  src={ecommerceIcon}
                  alt="globe icon"
                />
              </Grid>

              <Grid item className={classes.subtitleContainer}>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  It’s no secret that people like to shop online.
                </Typography>

                <Typography variant="subtitle1" className={classes.subtitle}>
                  In 2017 over <b> $2.3 trillion </b> was spent in e-commerce,
                  and it’s time for your slice of that pie.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.itemContainer}>
        <Typography
          variant="h5"
          className={`${classes.title} ${classes.analytics}`}
        >
          Outreach
        </Typography>

        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
        >
          <Grid item>
            <img
              className={classes.img}
              src={outreachIcon}
              alt="megaphone icon"
            />
          </Grid>

          <Grid item className={classes.subtitleContainer}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Draw people in with a dazzling website. Showing off your products
              online is a great way to help customers decide what’s right for
              them before visiting in person.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.itemContainer}>
        <Grid container justify={matchesSM ? "center" : "flex-end"}>
          <Grid item>
            <Typography variant="h5" className={classes.title}>
              Outreach
            </Typography>

            <Grid container direction={matchesSM ? "column" : "row"}>
              <Grid item>
                <img
                  className={classes.img}
                  src={seoIcon}
                  alt="search engine optimization icon"
                />
              </Grid>

              <Grid item className={classes.subtitleContainer}>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  How often have you ever been to the second page of Google
                  results?
                </Typography>

                <Typography variant="subtitle1" className={classes.subtitle}>
                  If you’re like us, probably never.
                </Typography>

                <Typography variant="subtitle1" className={classes.subtitle}>
                  Customers don’t go there either, so we make sure your website
                  is designed to end up on top.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CTABlock />
      </Grid>
    </Grid>
  );
};

export default WebDev;
