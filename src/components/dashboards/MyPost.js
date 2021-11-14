import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../actions/posts";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Tables from "../Table/Table";
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
