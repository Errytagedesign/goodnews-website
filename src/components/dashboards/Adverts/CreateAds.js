import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAdsPost } from "../../../actions/ads";
import DashboardNavbar from "../../DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "../../dashboards/DashboardSidebar";
// import { Cloudinary } from "cloudinary-core";
import axios from "axios";
import { Button } from "react-bootstrap";

import styled from "styled-components";

// import { Link } from "react-router-dom";

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  padding: 2em;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  background: var(--main-color);
  width: 80%;
  margin: 0 auto;
  border-radius: 15px;
  &:hover {
    background: var(--pry-color);
    box-shadow: 1px 2px 3px 1.5px #c1c1c1;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const LabelHeading = styled.label`
  color: var(--main-color);
  font-weight: 600;
  font-size: 1.5rem;

  margin: 0 auto;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

function CreateAds() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  //   const [createAds, setCreateAds] = useState("");
  const [formdata, setFormdata] = useState({
    title: "",
    imageUrl: "",
    url: "",
    category: "",
  });
  const [image, setImage] = useState("");

  const handImageUpload = (e) => {
    const files = e.target.files[0];
    console.log(files);

    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "gztyasbe");

    axios
      .post("https://api.cloudinary.com/v1_1/dmsyfdo0y/image/upload", data)
      .then((response) => {
        setFormdata({ ...formdata, imageUrl: response.data.secure_url });
        setImage(response.data.secure_url);
        console.log(response);
      });

    // const data = new FormData();
    // data.append("file", e.target.files[0]);
    // data.append("upload_preset", "gztyasbe");
    // setImage(files);
    // console.log(files);
  };

  // const handleSubmitImage = (e) => {
  //   const data = new FormData();
  //   data.append("file", image);
  //   data.append("upload_preset", "gztyasbe");

  //   axios
  //     .post("https://api.cloudinary.com/v1_1/dmsyfdo0y/image/upload", data)
  //     .then((response) => {
  //       setFormdata({ ...formdata, imageUrl: response.data.secure_url });
  //       console.log(response);
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createAdsPost(formdata));
    // axios.post(`${baseURL}/ads`, formdata).then((response) => {
    //   console.log(response);
    // });
    // console.log(formdata);
  };

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
            <div className="d-flex flex-row border m-3 p-3">
              <Input
                id="file"
                onChange={handImageUpload}
                type="file"
                className="form-control w-25 me-3"
              />
              <Label htmlFor="file"> Upload Ads Image </Label>{" "}
              {/* <Button className="col-25" onClick={handleSubmitImage}>
              Upload Image
            </Button> */}
            </div>
            <div className="w-75 mt-2 m-auto mb-4 p-3">
              <img className="mx-auto col-12" src={image} alt="" />
            </div>
            <LabelHeading className="mt-2 mb-3">
              {" "}
              Landing page url{" "}
            </LabelHeading>
            <input
              type="url"
              onChange={(e) =>
                setFormdata({ ...formdata, url: e.target.value })
              }
              className="form-control mb-5 p-3 m-auto w-75 text-center"
              placeholder="Landing page Url"
            />
            <LabelHeading className="mt-2 mb-3">
              {" "}
              Ads Descriptions{" "}
            </LabelHeading>
            <textarea
              cols="40"
              rows="5"
              type="text"
              onChange={(e) =>
                setFormdata({ ...formdata, title: e.target.value })
              }
              className="form-control m-auto mt-2 mb-5 p-3 w-75 text-center"
              placeholder="Ads Description"
            />
            <LabelHeading className="mt-2 mb-3">
              {" "}
              Select Ads Placement{" "}
            </LabelHeading>
            <select
              onChange={(e) =>
                setFormdata({ ...formdata, category: e.target.value })
              }
              className="form-control m-auto p-3 mt-2 mb-3 w-75 text-center"
            >
              <option> Select Category </option>
              <option value="1"> Desktop Heading </option>
              <option value="2"> Desktop Sidebar </option>
              <option value="3"> Mobile </option>
            </select>

            <Button
              style={{ background: "#006900" }}
              className="border-0 p-3 m-5 w-75"
              onClick={handleSubmit}
            >
              {" "}
              Create Ad{" "}
            </Button>
          </section>
        </div>
      </div>
    );
  }
}

export default CreateAds;
