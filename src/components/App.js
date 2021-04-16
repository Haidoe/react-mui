import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./ui/Headers";
import Footer from "./ui/Footer";
import theme from "./ui/Theme";
import LandingPage from "./pages/Landing";
import ServicesPage from "./pages/Services";
import CustomSoftwarePage from "./pages/Services/subs/CustomSoftware";
import ContextProvider from "./Provider";

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={LandingPage} />

            <Route exact path="/services" component={ServicesPage} />

            <Route
              exact
              path="/customsoftware"
              component={CustomSoftwarePage}
            />

            <Route
              exact
              path="/mobileapps"
              component={() => <div> Mobile Apps </div>}
            />

            <Route
              exact
              path="/websites"
              component={() => <div> Websites </div>}
            />

            <Route
              exact
              path="/revolution"
              component={() => <div> Revolution </div>}
            />

            <Route
              exact
              path="/about"
              component={() => <div> About Us </div>}
            />

            <Route
              exact
              path="/contact"
              component={() => <div> Contact Us </div>}
            />

            <Route
              exact
              path="/Estimate"
              component={() => <div> Estimate </div>}
            />
          </Switch>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
