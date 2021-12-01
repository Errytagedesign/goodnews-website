import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAdsPost } from "../../../actions/ads";
import axios from "axios";
import { X } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

import Swal from "sweetalert2";

import styled from "styled-components";

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

const PopupBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  height: 70vh;
  overflow-x: scroll;
  margin-top: 20px;
  background: #fff;

  border: 1px solid #999;

  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;

  border-radius: 50%;
  line-height: 20px;
  text-align: center;

  font-size: 20px;

  :hover {
    box-shadow: 1px 3px 5px grey;
  }
`;

const PopHead = styled.div`
  position: fixed;
  background-color: rgb(211, 211, 211);

  width: inherit;

  height: 50px;
`;

function UpdateAds({ currentAdsId, setCurrentAdsId }) {
  const dispatch = useDispatch();
  const ads = useSelector((state) =>
    currentAdsId ? state.AdsPosts.find((ad) => ad._id === currentAdsId) : null
  );

  //   const [categories, setCategories] = useState(null);

  // const [closePop, setClosePop] = useState(true);

  const [formdata, setFormdata] = useState({
    title: "",
    imageUrl: "",
    url: "",
    category: "",
  });

  useEffect(() => {
    if (ads) {
      setFormdata(ads);
    }
  }, [ads]);

  //   console.log(formdata);

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
  };

  const closePopup = () => {
    setCurrentAdsId(0);
    // setClosePop(!closePop);
    // console.log(!closePop);
  };

  async function handleUpdateAds(e) {
    e.preventDefault();
    if (formdata) {
      if (formdata.category === "desktopHeading") {
        formdata.category = "1";
      } else if (formdata.category === "desktopSidebar") {
        formdata.category = "2";
      } else if (formdata.category === "mobile") {
        formdata.category = "3";
      }
    }

    if (currentAdsId !== 0) {
      dispatch(updateAdsPost(currentAdsId, formdata));
      Swal.fire("Article Updated Succesfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

  return (
    <>
      {" "}
      {!ads ? (
        <></>
      ) : (
        <PopupBox>
          <Box className="w-75">
            <PopHead className="popheading d-flex flex-row justify-content-start p-2 mb-3">
              <CloseIcon>
                <X
                  className="close-icon"
                  onClick={closePopup}
                  size={25}
                  color="black"
                />
              </CloseIcon>
            </PopHead>
            <div className="d-flex flex-row border mt-5 m-3 p-3">
              <Input
                id="file"
                onChange={handImageUpload}
                type="file"
                className="form-control w-25 me-3"
              />
              <Label htmlFor="file"> Upload Ads Image </Label>{" "}
            </div>
            <div className="w-75 mt-2 m-auto mb-4 p-3">
              <img
                id="id"
                className="mx-auto col-12"
                src={image ? image : formdata.imageUrl}
                alt=""
              />
            </div>
            <LabelHeading className="mt-2 mb-3">
              {" "}
              Landing page url{" "}
            </LabelHeading>
            <input
              value={formdata.url}
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
              value={formdata.title}
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
              <option value={formdata.category}> {formdata.category} </option>
              <option value="1"> Desktop Heading </option>
              <option value="2"> Desktop Sidebar </option>
              <option value="3"> Mobile </option>
            </select>

            <Button
              style={{ background: "#006900" }}
              className="border-0 p-3 mt-3 mb-5 w-75"
              onClick={handleUpdateAds}
            >
              {" "}
              Update Ad{" "}
            </Button>
          </Box>
        </PopupBox>
      )}{" "}
    </>
  );
}
export default UpdateAds;
