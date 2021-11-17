import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAdsPosts } from "../../../actions/ads";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "../../dashboards/DashboardSidebar";
import CreatedAdvert from "./CreatedAdvert";
import UpdateAds from "./UpdateAds";
import { Button } from "react-bootstrap";

function MyAds(props) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { currentAdsId, setCurrentAdsId } = props;
  // const [closePop, setClosePop] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdsPosts());
  }, [currentAdsId, dispatch]);

  // const closePopup = () => {
  //   setClosePop(!closePop);
  // };

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
      <div>
        <DashboardNavbar />
        <div className="d-flex flex-row">
          <DashboardSidebar className="w-25" />
          <section className="w-75">
            <h1 className="mt-4">Current Live Adverts</h1>
            <CreatedAdvert
              currentAdsId={currentAdsId}
              setCurrentAdsId={setCurrentAdsId}
            />

            {currentAdsId !== 0 ? (
              <UpdateAds
                currentAdsId={currentAdsId}
                setCurrentAdsId={setCurrentAdsId}
              />
            ) : (
              <></>
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default MyAds;
