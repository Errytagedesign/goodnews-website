import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../actions/posts";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Tables from "../Table/Table";
import { Button } from "react-bootstrap";
// import Form from "../Form/Form";
import UpdatePublishedNews from "./UpdatePublishedNews";

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
