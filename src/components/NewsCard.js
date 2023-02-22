import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./NewsCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import axios from "axios";
import { likePost } from "../actions/posts";
import { searchLikePost } from "../actions/search";

import { ChatFill, HeartFill, Eye } from "react-bootstrap-icons";

import { CAT_NEWS_LIKE } from "../constants/actionTypes";
import { headlineLikePost } from "../actions/headlines";
import NoImage from "../assets/noImage.jpeg";

// const baseURL = "http://localhost:3001/api";
const baseURL = "https://goodnews-ng.herokuapp.com/api";

function NewsCard({
  title,
  imagesrc,
  url,
  comment,
  views,
  postId,
  likeArray,
  categoryTrue,
  readAlso,
  search,
  headline,
}) {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile"))?.result);
  }, []);

  const LikePost = async () => {
    if (categoryTrue === true) {
      await axios
        .put(`${baseURL}/posts/addLike/${postId}/${userId}`)
        .then((response) => {
          let data = response.data.post;
          dispatch({ type: CAT_NEWS_LIKE, payload: data });
        });
    } else if (readAlso === true) {
      await axios
        .put(`${baseURL}/posts/addLike/${postId}/${userId}`)
        .then((response) => {
          let data = response.data.post;
          dispatch({ type: CAT_NEWS_LIKE, payload: data });
        });
    } else if (search === true) {
      dispatch(searchLikePost(postId, userId));
    } else if (headline === true) {
      dispatch(headlineLikePost(postId, userId));
    } else {
      dispatch(likePost(postId, userId));
    }
  };

  let userId = user?._id || user?.googleId;
  const Likes = () => {
    if (likeArray.length > 0) {
      return likeArray.includes(user?.googleId || user?._id) ? (
        <>
          <HeartFill size={20} className={`heart`} />
          {likeArray.length}
        </>
      ) : (
        <>
          <HeartFill size={20} className={`icons`} />
          {likeArray.length}
        </>
      );
    }

    return (
      <>
        <HeartFill size={20} className={`icons`} />
        &nbsp;{likeArray.length}
      </>
    );
  };

  return (
    <div>
      <section className="p-3 mt-2 newscard">
        <div className="col-12">
          {" "}
          <img className="" src={!imagesrc ? NoImage : imagesrc} alt="" />
        </div>

        <Link
          onClick={() =>
            setTimeout(() => {
              // window.location.reload();
              // window.history.go();
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }, 2000)
          }
          to={url}
        >
          <h2>{title.slice(0, 40) + "..."}</h2>
        </Link>

        <div className="d-flex  justify-content-around topBorder">
          <button
            className="mt-3"
            size="small"
            color="primary"
            disabled={!user}
            onClick={LikePost}
          >
            <Likes />
          </button>
          <div className="mt-3">
            <ChatFill className="icons" />
            <small> {comment} </small>{" "}
          </div>
          <div className="mt-3">
            {" "}
            <Eye className="icons" /> <small> {views} </small>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsCard;
