import { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./ui/Headers";
import Footer from "./ui/Footer";
import theme from "./ui/Theme";

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [serviceSelected, setServiceSelected] = useState(0);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/services":
        setTabValue(1);
        setServiceSelected(0);
        break;
      case "/customsoftware":
        setTabValue(1);
        setServiceSelected(1);
        break;
      case "/mobileapps":
        setServiceSelected(2);
        setTabValue(1);
        break;
      case "/websites":
        setServiceSelected(3);
        setTabValue(1);
        break;
      case "/revolution":
        setTabValue(2);
        break;
      case "/about":
        setTabValue(3);
        break;
      case "/contact":
        setTabValue(4);
        break;
      case "/":
        setTabValue(0);
        break;
      default:
        break;
    }
  }, [tabValue, serviceSelected]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={tabValue}
          setValue={setTabValue}
          setServiceSelected={setServiceSelected}
          serviceSelected={serviceSelected}
        />

        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ minHeight: "85vh" }}> Home </div>}
          />

          <Route
            exact
            path="/services"
            component={() => <div> Services </div>}
          />

          <Route
            exact
            path="/customsoftware"
            component={() => <div> Custom Software </div>}
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

          <Route exact path="/about" component={() => <div> About Us </div>} />

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

        <Footer
          setValue={setTabValue}
          setServiceSelected={setServiceSelected}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
