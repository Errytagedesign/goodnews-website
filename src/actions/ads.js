import * as api from "../api";
import {
  CREATEADS,
  UPDATEADS,
  DELETEADS,
  FETCH_ALL_ADS,
} from "../constants/actionTypes";

import Swal from "sweetalert2";

export const fetchAdsPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchAdsPosts();
    const data = response.data.ads;

    dispatch({ type: FETCH_ALL_ADS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createAdsPost = (ads) => async (dispatch) => {
  try {
    const { data } = await api.createAdsPost(ads);

    if (data) {
      Swal.fire("Ads Created Succesfully");
      setTimeout(() => {
        window.location.replace("/myads");
      }, 3000);
    }

    // console.log(data)
    dispatch({ type: CREATEADS, payload: data });
  } catch (error) {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.title}, ${error.response.data.imageUrl}, ${error.response.data.url}, ${error.response.data.category}, ${error.response.data.message}`,
      });
    }
    console.log(error);
  }
};

export function updateAdsPost(id, ads) {
  return async (dispatch) => {
    try {
      const { title, category, imageUrl, url } = ads;

      let updateData = {
        title,
        category,
        imageUrl,
        url,
      };

      const { data } = await api.updateAdsPost(id, updateData);

      if (data) {
        Swal.fire("Ads Updated Succesfully");
      }
      //   console.log(data);
      dispatch({ type: UPDATEADS, payload: data });
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.title}, ${error.response.data.imageUrl}, ${error.response.data.url}, ${error.response.data.category}, ${error.response.data.message}`,
        });
      }
      console.log(error);
    }
  };
}

export const deleteAdsPost = (id) => async (dispatch) => {
  try {
    await api.deleteAdsPost(id);
    dispatch({ type: DELETEADS, payload: id });
  } catch (error) {
    console.log(error);
  }
};
