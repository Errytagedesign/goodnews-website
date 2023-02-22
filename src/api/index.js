import axios from "axios";

// const baseURL = "http://localhost:3001" //Local baseURL
// const API = axios.create({ baseURL })
const API = axios.create({ baseURL: "https://goodnews-ng.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchPosts = async () => await API.get("/api/posts/all");

export const fetchOnePost = async (id) => await API.get(`/api/posts/${id}`);

export const searchPost = async (searchBody) =>
  await API.post(`/api/search`, searchBody);

export const fetchTopPosts = async () => await API.get("/api/posts/top-posts");

export const fetchCatPosts = async (id) =>
  await API.get(`/api/posts/cat/${id}`);

export const fetchCats = async () => await API.get(`/api/categories/all`);

export const createPost = async (newPost) =>
  await API.post("/api/posts", newPost);

export const updatePost = async (id, updatePost) =>
  await API.put(`/api/posts/${id}`, updatePost);

export const deletePost = async (id) => await API.delete(`/api/posts/${id}`);

export const likePost = async (id, userId) =>
  await API.put(`/api/posts/addLike/${id}/${userId}`);

export const signIn = async (formData) =>
  await API.post("/auth/login", formData);

export const signUp = async (formData) =>
  await API.post("/auth/register", formData);

// For Adverts
export const fetchAdsPosts = async () => await API.get("/api/ads/all");
export const createAdsPost = async (newAds) =>
  await API.post("/api/ads", newAds);

export const updateAdsPost = async (id, updateAds) =>
  await API.put(`/api/ads/${id}`, updateAds);

export const deleteAdsPost = async (id) => await API.delete(`/api/ads/${id}`);
