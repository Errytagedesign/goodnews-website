import Categories from "../pages/Categories";
import Search from "../pages/Search";
import NewsReadurl from "../pages/NewsReadUrl";
import TopStories from "../pages/TopStories";
import Events from "../pages/Event";
import Newsletter from "../pages/Newsletter";
import Videos from "../pages/Videos";
import ContactUs from "../components/contactus/ContactUs";
import AboutUs from "../pages/AboutUs";
import AuthSignIn from "../components/Auth/AuthSignIn";
import AuthSignUp from "../components/Auth/AuthSignUp";
import APINewsRead from "../components/APINewsFeeds/APINewsRead";
import APINewsCategory from "../components/APINewsFeeds/APINewsCategory";

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Top Stories",
    component: TopStories,
  },
  {
    path: "/authsignin",
    exact: true,
    name: "Authentication",
    component: AuthSignIn,
  },
  {
    path: "/authsignup",
    exact: true,
    name: "Authentication",
    component: AuthSignUp,
  },

  {
    path: "/post",
    exact: true,
    name: "Post",
    component: NewsReadurl,
  },

  {
    path: "/newsread",
    exact: true,
    name: "NewsRead",
    component: APINewsRead,
  },

  {
    path: "/search",
    exact: true,
    name: "Search",
    component: Search,
  },

  {
    path: "/categories",
    exact: true,
    name: "Categories",
    component: Categories,
  },

  {
    path: "/apicategory",
    exact: true,
    name: "Categories",
    component: APINewsCategory,
  },

  {
    path: "/videos",
    exact: true,
    name: "Videos",
    component: Videos,
  },
  {
    path: "/newsletter",
    exact: true,
    name: "Newsletter",
    component: Newsletter,
  },

  {
    path: "/events",
    exact: true,
    name: "Events",
    component: Events,
  },

  {
    path: "/contactus",
    exact: true,
    name: "ContactUs",
    component: ContactUs,
  },

  {
    path: "/aboutus",
    exact: true,
    name: "AboutUs",
    component: AboutUs,
  },
];
