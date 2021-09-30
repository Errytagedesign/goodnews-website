import Categories from "../pages/Categories";
import NewsReadurl from "../pages/NewsReadUrl";
import TopStories from "../pages/TopStories";

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Top Stories",
    component: TopStories,
  },
  {
    path: "/post",
    exact: true,
    name: "Post",
    component: NewsReadurl,
  },

  {
    path: "/categories",
    exact: true,
    name: "Categories",
    component: Categories,
  },
];
