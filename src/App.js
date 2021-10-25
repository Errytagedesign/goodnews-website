// components
import { useState } from "react";

// import { useDispatch } from "react-redux";
// import { fetchPosts } from "./actions/posts"
import Dashboard from "./components/dashboards/Dashboard";

// General imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootsrapt css
import "bootstrap/dist/css/bootstrap.min.css";

// main css
import "./App.css";

import MasterLayout from "./layout/MasterLayout";
import { News, NewsPub } from "./components/dashboards/News";
// import PreLoader from "./components/PreLoader/PreLoader";

function App() {
  const [currentId, setCurrentId] = useState(0);

  return (
    <div className="App">
      <Router>
        {/* <PreLoader /> */}

        <Switch>
          {/* <Route path="/dashboard" exact component={Dashboard} /> */}
          <Route
            exact
            path="/dashboard"
            render={(props) => (
              <Dashboard
                currentId={currentId}
                setCurrentId={setCurrentId}
                {...props}
              />
            )}
          />

          <Route path="/news/news1" exact component={NewsPub} />

          <Route path="/news" exact component={News} />

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
