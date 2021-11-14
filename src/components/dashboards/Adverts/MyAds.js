import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAdsPosts } from "../../../actions/ads";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "../../dashboards/DashboardSidebar";
import CreatedAdvert from "./CreatedAdvert";
import UpdateAds from "./UpdateAds";

function MyAds(props) {
  const { currentAdsId, setCurrentAdsId } = props;
  const [closePop, setClosePop] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdsPosts());
  }, [currentAdsId, dispatch]);

  const closePopup = () => {
    setClosePop(!closePop);
  };
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

          {
            <UpdateAds
              currentAdsId={currentAdsId}
              setCurrentAdsId={setCurrentAdsId}
              handClose={closePopup}
            />
          }
        </section>
      </div>
    </div>
  );
}

export default MyAds;
