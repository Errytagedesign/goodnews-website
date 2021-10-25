import * as api from "../api";
import {
  FETCH_ALL_CAT,
  FETCH_CAT_POST
} from "../constants/actionTypes";

export const fetchCatPosts = (id) => async (dispatch) => {
    try {
      const response = await api.fetchCatPosts(id);
      const data = response.data.data;
      console.log(data)
      dispatch({ type: FETCH_CAT_POST, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const fetchCats = () => async (dispatch) => {
    try {
      const response = await api.fetchCats();
      const data = response.data.data;
      dispatch({ type: FETCH_ALL_CAT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };