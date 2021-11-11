import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./NewsCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import axios from "axios";
import { likePost } from "../actions/posts";
import { searchLikePost } from "../actions/search";

import { ChatFill, HeartFill } from "react-bootstrap-icons";

import { Eye } from "react-bootstrap-icons";
import { Button } from "@material-ui/core";
import { CAT_NEWS_LIKE } from "../constants/actionTypes";
import { headlineLikePost } from "../actions/headlines";
// import Image from '../assets/Greater Lagos 5.jpg'

// const baseURL = "http://localhost:3001/api";
const baseURL = "https://api-good-news.herokuapp.com/api";

function NewsCard(props) {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile"))?.result);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${baseURL}/admin-users/aUser/614f4d55d35c933f145fa99a`)
  //     .then((response) => {
  //       setUser(response.data);
  //     });
  // }, []);

  const {
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
  } = props;

  // const addLike = async (e) => {
  //   await axios
  //     .put(`${baseURL}/posts/addLike/${postId}?userId=614f4d55d35c933f145fa99a`)
  //     .then((response) => {
  //       console.log(response);
  //     });
  //   // eslint-disable-next-line no-restricted-globals
  //   location.reload();
  // };
  // const removeLike = async (e) => {
  //   await axios
  //     .put(
  //       `${baseURL}/posts/removeLike/${postId}?userId=614f4d55d35c933f145fa99a`
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     });
  //   // eslint-disable-next-line no-restricted-globals
  //   location.reload();
  // };
  // const Like = async (e) => {
  //   e.preventDefault();

  //   // console.log(user.data.data.userLikedPost);
  //   if (!user.data.userLikedPost.includes(postId)) {
  //     addLike();
  //   }
  //   if (user.data.userLikedPost.includes(postId)) {
  //     removeLike();
  //   }
  // };

  // const Like = async (e) => {
  //      if (!user.userLikedPost.includes(postId)) {
  //       dispatch(likePost(postId, user._id))
  //   }
  //   if (user.userLikedPost.includes(postId)) {
  //     dispatch(unLikePost(postId, user._id))
  //   }
  // }

  // var liked = "";
  // if (!user) {
  //   liked += "icons";
  // } else if (!(user.userLikedPost.includes(postId))) {
  //   liked += "icons";
  // } else {
  //   liked += "heart"; 3 me, bash and abba
  // }
  // console.log(likes)

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
        // <><ThumbUpAltIcon fontSize="small" />&nbsp;{(likes > 1) ? `You and ${likes - 1} other${(likes - 1) > 1 ? 's' : ''}` : (likes === 1) ? `You` : `${likes} {${likes} === 1 ? 'Like' : 'Likes'}` }</>
        <>
          {/* <ThumbUpAltIcon fontSize="small" />&nbsp;{likeArray.length > 2 ? `You and ${likeArray.length - 1} others` : `${likeArray.length} like${likeArray.length > 1 ? 's' : ''}` } */}
          <HeartFill size={20} className={`heart`} />
          {likeArray.length}
        </>
      ) : (
        <>
          {/* <ThumbUpAltOutlined fontSize="small" />&nbsp;{likes} {likes === 1 ? 'Like' : 'Likes'} */}
          <HeartFill size={20} className={`icons`} />
          {likeArray.length}
        </>
      );
    }

    // return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
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
          <img className="" src={imagesrc} alt="" />
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
          <Button
            className="mt-3"
            size="small"
            color="primary"
            disabled={!user}
            onClick={LikePost}
          >
            <Likes />
          </Button>
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
