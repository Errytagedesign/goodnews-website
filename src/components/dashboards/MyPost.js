import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../actions/posts";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Tables from "../Table/Table";
// import Form from "../Form/Form";
import UpdatePublishedNews from "./UpdatePublishedNews";
// import { Button } from "@material-ui/core";
// import { Redirect } from "react-router";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";

// import News from "./News";

// pages

// import Publishnews from "./Publishnews";

// General imports
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootsrapt css
// import "bootstrap/dist/css/bootstrap.min.css";

function MyPost(props) {
  const user = JSON.parse(localStorage.getItem("profile"));

  // const [currentId, setCurrentId] = useState(0);
  const { currentId, setCurrentId } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [currentId, dispatch]);

  const redirect = () => {
    window.location.replace("/authsignin");
  };

  if (!user) {
    return (
      <>
        <DashboardNavbar />
        <div>
          <br /> <br />
          <h2>Login as an Admin to acess this Page</h2>
          <h2>
            Click this{" "}
            <button className="btn btn-success" onClick={redirect}>
              Link{" "}
            </button>{" "}
            to go to Login Page
          </h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <DashboardNavbar />
        <div className="d-flex flex-row">
          <DashboardSidebar className="w-25" />

          {/* <Router className="w-50">
          <Switch>
            <Route path="/dashboard/news" exact>
              <News />
            </Route>
  
            <Redirect from="/dashboard" to="/dashboard/news" />
  
            <Route path="/dashboard/video" exact>
              <video />
            </Route>
          </Switch>
        </Router> */}
          {/* </div> */}
          <div className="w-75">
            <Tables setCurrentId={setCurrentId} />
            <UpdatePublishedNews
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </div>
        </div>
      </>
    );
  }
}

export default MyPost;
