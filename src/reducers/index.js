import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import cats from "./cat";
import headlineCat from "./headlines";
import navbar from "./navbar";
import searchPosts from "./search";
import AdsPosts from "./ads";

export default combineReducers({
  posts,
  auth,
  cats,
  headlineCat,
  navbar,
  searchPosts,
  AdsPosts,
});
