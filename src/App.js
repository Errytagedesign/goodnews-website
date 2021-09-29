// components

import Dashboard from "./components/Dashboard";

// General imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootsrapt css
import "bootstrap/dist/css/bootstrap.min.css";

// main css
import "./App.css";

import MasterLayout from "./layout/MasterLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />

          <Route
            path="/"
            name="Home"
            render={(props) => <MasterLayout {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
