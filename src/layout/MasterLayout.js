import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
// import MobileNavbar from "../components/MobileNavbar";

import { routes } from "../routes/routes";

function MasterLayout() {
  return (
    <>
      <Router>
        <Navbar />

        {/* <MobileNavbar /> */}

        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              )
            );
          })}
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default MasterLayout;
