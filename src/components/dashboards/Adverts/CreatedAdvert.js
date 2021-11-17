/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";

import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { deleteAdsPost } from "../../../actions/ads";

const ImageWrapper = styled.img`
  width: 100%;
  margin: 0 auto;
  transition: all 0.3s
  animation: animateImage 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LandingPageLink = styled.a`
  text-decoration: none;
  color: black;
`;

function CreatedAdvert({ setCurrentAdsId }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const ads = useSelector((state) => state.AdsPosts);
  console.log(ads);
  const dispatch = useDispatch();

  async function delAdsPost(id) {
    // dispatch(deletePost(id));
    Swal.fire({
      title: "Are you sure you want to delete this Ads?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      preConfirm: () => {
        return dispatch(deleteAdsPost(id));
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

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
    return !ads.length ? (
      <> </>
    ) : (
      <section className="d-flex flex-wrap justify-content-between container">
        {ads.map((ad) => (
          <div className="col-3 p-2 card">
            <LandingPageLink href={ad.url} target="_blank" rel="noreferrer">
              <div className="w-100">
                <ImageWrapper src={ad.imageUrl} />
              </div>
            </LandingPageLink>
            <p className="mb-3 mt-2 card-body">{ad.title}</p>
            <small className="border border-primary p-2 mt-2">
              {ad.category}
            </small>
            <Button
              onClick={() => {
                setCurrentAdsId(ad._id);
                // window.scrollTo({
                //   top: 2000,
                //   behavior: "smooth",
                // });
                setTimeout(() => {
                  window.location.href = "#id";
                }, 2000);
              }}
              className="w-100 mb-1 mt-3"
              variant="success"
            >
              {" "}
              Edit{" "}
            </Button>{" "}
            <Button
              onClick={() => delAdsPost(ad._id)}
              variant="danger"
              className="w-100 mb-1 mt-1"
            >
              Delete
            </Button>
          </div>
        ))}
      </section>
    );
  }
}

export default CreatedAdvert;
