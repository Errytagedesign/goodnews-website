import * as api from "../api";
import {
  FETCH_ALL,
  FETCH_TOP_POSTS,
  SEARCH_POST,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_ONE_POST,
} from "../constants/actionTypes";

import Swal from "sweetalert2";

export const fetchTopPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchTopPosts();
    const data = response.data.data;
    dispatch({ type: FETCH_TOP_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    const data = response.data.data;
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchOnePost = (id) => async (dispatch) => {
  try {
    const response = await api.fetchOnePost(id);
    const data = response.data;
    dispatch({ type: FETCH_ONE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const searchPost = (searchBody) => async (dispatch) => {
  try {
    const response = await api.searchPost(searchBody);
    const data = response.data.data;
    // console.log(data)
    dispatch({ type: SEARCH_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    if (data) {
      Swal.fire("Article Created Succesfully");
      setTimeout(() => {
        window.location.replace("/dashboard");
      }, 3000);
    }

    // console.log(data)
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.title}, ${error.response.data.nameOfAuthor}, ${error.response.data.content}, ${error.response.data.category}, ${error.response.data.message}`,
      });
    }
    console.log(error);
  }
};

export function updatePost(id, post) {
  return async (dispatch) => {
    try {
      const { title, category, description, content, imageUrl, nameOfAuthor } =
        post;

      let updateData = {
        title,
        category,
        description,
        content,
        imageUrl,
        nameOfAuthor,
      };

      const { data } = await api.updatePost(id, updateData);

      if (data) {
        Swal.fire("Article Updated Succesfully");
      }
      console.log(data);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.title}, ${error.response.data.nameOfAuthor}, ${error.response.data.content}, ${error.response.data.category}, ${error.response.data.message}`,
        });
      }
      console.log(error);
    }
  };
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id, userId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id, userId);
    console.log(data.post);
    dispatch({ type: LIKE, payload: data.post });
  } catch (error) {
    console.log(error);
  }
};
