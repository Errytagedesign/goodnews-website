import React from "react";
import "./NewsPage.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

import styled from "styled-components";
import Technology from "../pages/Technology";

// import Comments from "./Comments";

const ReadAlso = styled.div`
  background: var(--main-color);
  border-top: 4px solid grey;
  margin-top: 3em;
  margin-bottom: 6em;
`;

function NewsPage(props) {
  return (
    <div className="newsPage mt-5 container">
      <div className="newstime d-flex flex-row justify-content-between p-1">
        {" "}
        <p>Top News | GoodNews </p> <p>5 Minutes Ago </p>{" "}
      </div>
      <h2> {props.articleTitle} </h2>

      <img className="col-12 " src={props.articleImage} alt="" />

      <p className="p-5"> {props.articleContents} </p>

      {/* Social share start */}

      <div className="d-flex flex-row justify-content-around  col-10 col-md-7 ps-4">
        <p className="share">Share</p>

        <FacebookShareButton url={props.url} title={props.articleTitle}>
          <div>
            <FacebookIcon logoFillColor="White" round="true" size={35}>
              {" "}
            </FacebookIcon>
          </div>
        </FacebookShareButton>

        <TwitterShareButton url={props.url} title={props.articleTitle}>
          <div>
            <TwitterIcon logoFillColor="White" round="true" size={35}>
              {" "}
            </TwitterIcon>
          </div>
        </TwitterShareButton>

        <LinkedinShareButton url={props.url} title={props.articleTitle}>
          <div>
            <LinkedinIcon logoFillColor="White" round="true" size={35}>
              {" "}
            </LinkedinIcon>
          </div>
        </LinkedinShareButton>

        <WhatsappShareButton url={props.shareUrl} title={props.articleTitle}>
          <div>
            <WhatsappIcon logoFillColor="White" round="true" size={35}>
              {" "}
            </WhatsappIcon>
          </div>
        </WhatsappShareButton>
      </div>
      {/* Social share end */}

      {/* <Comments /> */}
      <ReadAlso>
        <p className="share"> Read Also </p>
        <Technology />
      </ReadAlso>
    </div>
  );
}

export default NewsPage;
