import React from "react";
import { Button } from "react-bootstrap";

function AdsCard(props) {
  return (
    <div>
      <img src={props.imageUrl} alt="" />
      <Button
        callback={props.onClick}
        // onClick={() => {
        //   setCurrentAdsId(ad._id);
        //   // window.scrollTo({
        //   //   top: 2000,
        //   //   behavior: "smooth",
        //   // });
        //   // setTimeout(() => {
        //   //   window.location.href = "#id";
        //   // }, 2000);
        // }}
      >
        {" "}
        Edit{" "}
      </Button>{" "}
      <Button
        callback={props.onClick}
        //   onClick={() => delAdsPost(ad._id)}
        variant="danger"
      >
        Delete
      </Button>
    </div>
  );
}

export default AdsCard;
