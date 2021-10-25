import * as api from "../api";
import { SEARCH_FETCH_ALL , SEARCH_POST_LIKE } from "../constants/actionTypes";

export const fetchPosts = () => async (dispatch) => {
    try {
      const response = await api.fetchPosts();
      const data = response.data.data;
      dispatch({ type: SEARCH_FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const searchLikePost = (id, userId) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id, userId);
      console.log(data.post)
      dispatch({ type: SEARCH_POST_LIKE, payload: data.post });
    } catch (error) {
      console.log(error);
    }
  };