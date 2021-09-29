import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import News from "./News";

// pages

// import Publishnews from "./Publishnews";

// General imports
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootsrapt css
// import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <div className="d-flex flex-row">
      <DashboardSidebar className="w-25" />

      <Router className="w-50">
        <Switch>
          <Route path="/dashboard/news" exact>
            <News />
          </Route>

          <Redirect from="/dashboard" to="/dashboard/news" />

          {/* <Route path="/dashboard/video" exact>
            <video />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default Dashboard;
