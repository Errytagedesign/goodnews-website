import Categories from "../pages/Categories";
import NewsReadurl from "../pages/NewsReadUrl";
import TopStories from "../pages/TopStories";
import Events from "../pages/Event";
import Newsletter from "../pages/Newsletter";
import Videos from "../pages/Videos";
import ContactUs from "../components/contactus/ContactUs";
import AboutUs from "../pages/AboutUs";

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Top Stories",
    component: TopStories,
  },
  {
    path: "/readalso",
    exact: true,
    name: "ReadAlso",
    component: NewsReadurl,
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
