import * as api from "../api";
import {
  FETCH_ALL_NAVBAR_CAT
  } from "../constants/actionTypes";
  

export const fetchCats = () => async (dispatch) => {
    try {
      const response = await api.fetchCats();
      const data = response.data.data;
      dispatch({ type: FETCH_ALL_NAVBAR_CAT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };