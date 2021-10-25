import * as api from "../api";
import {
    FETCH_HEADLINE_POST, HEADLINE_POST_LIKE
} from "../constants/actionTypes";

export const fetchCatPosts = (id) => async (dispatch) => {
    try {
      const response = await api.fetchCatPosts(id);
      const data = response.data.data;
      dispatch({ type: FETCH_HEADLINE_POST, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const headlineLikePost = (id, userId) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id, userId);
      console.log(data.post)
      dispatch({ type: HEADLINE_POST_LIKE, payload: data.post });
    } catch (error) {
      console.log(error);
    }
  };