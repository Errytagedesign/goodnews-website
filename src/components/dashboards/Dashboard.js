import React, { useEffect, useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import styled from "styled-components";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { Button } from "react-bootstrap";

const CardWrapp = styled.div`
  background-color: var(--main-color);
  padding: 5em;
  border-radius: 10px;
  box-shadow: 2px 5px 7px 2px #c2c2c2;
  margin: 1em auto;

  &:hover {
    background-color: var(--pry-color);
  }

  color: #fff;
`;

function Dashboard(props) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api-good-news.herokuapp.com/api/admin-users/admin/dashboard"
      )
      .then((response) => {
        setDashboardData(response.data.data);
        console.log(response.data.data);
      });
  }, []);

  // const redirect = () => {
  //   window.location.replace("/authsignin");
  // };

  // if (!user) {
  //   return (
  //     <>
  //       <DashboardNavbar />
  //       <div>
  //         <br /> <br />
  //         <h2>Login as an Admin to acess this Page</h2>
  //         <h2>
  //           Click this{" "}
  //           <button className="btn btn-success" onClick={redirect}>
  //             Link{" "}
  //           </button>{" "}
  //           to go to Login Page
  //         </h2>
  //       </div>
  //     </>
  //   );
  // } else {

  const redirect = () => {
    localStorage.clear();
    window.location.replace("/authsignin");
  };

  if (!user) {
    return (
      <>
        <DashboardNavbar />
        <div>
          <br /> <br />
          <h2>You are not an Admin, Login as an Admin to access this Page</h2>
          <h2>
            Click this <Button onClick={redirect}>Link </Button> to go to Login
            Page
          </h2>
        </div>
      </>
    );
  }
  //

  if (user.token.length > 500) {
    return (
      <>
        <DashboardNavbar />
        <div>
          <br /> <br />
          <h2>You are not an Admin, Login as an Admin to access this Page</h2>
          <h2>
            Click this <Button onClick={redirect}>Link </Button> to go to Login
            Page
          </h2>
        </div>
      </>
    );
  }

  if (user.result.role.toLowerCase() !== "admin") {
    return (
      <>
        <DashboardNavbar />
        <div>
          <br /> <br />
          <h2>You are not an Admin, Login as an Admin to access this Page</h2>
          <h2>
            Click this <Button onClick={redirect}>Link </Button> to go to Login
            Page
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
          <div className="w-75 container ">
            <div className="d-flex flex-wrap  mt-5 ">
              {!dashboardData ? (
                <CircularProgress />
              ) : (
                <>
                  <CardWrapp className="col-5">
                    {" "}
                    <h2> User </h2> <h3> {dashboardData.totalNumberOfUser} </h3>{" "}
                  </CardWrapp>
                  <CardWrapp className="col-5 ">
                    {" "}
                    <h2>Post</h2> <h3> {dashboardData.totalNumberOfPost} </h3>{" "}
                  </CardWrapp>
                  <CardWrapp className="col-5 ">
                    {" "}
                    <h2>Categories</h2>{" "}
                    <h3> {dashboardData.totalNumberOfCategories} </h3>{" "}
                  </CardWrapp>
                  <CardWrapp className="col-5">
                    {" "}
                    <h2>Videos</h2>{" "}
                    <h3 style={{ color: "white" }}>
                      {" "}
                      {dashboardData.toatalNumberOfVideos}{" "}
                    </h3>{" "}
                  </CardWrapp>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
