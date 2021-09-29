// import TopStories from "../pages/TopStories";
// import Technology from "../pages/Technology";
// import Sport from "../pages/Sport";
// import Politics from "../pages/Politics";
import GreaterLagos from "../pages/GreaterLagos";
// import FashionLifestyle from "../pages/FashionLifestyle";
// import Entertainments from "../pages/Entertainments";
// import Education from "../pages/Education";
// import BusinessFinance from "../pages/BusinessFinance";
// import Opinion from "../pages/Opinion";
import NewsReadurl from "../pages/NewsReadUrl";
// import Videos from "../pages/videos";
// import Newsletter from "../pages/newsletter";

export const routes = [
  // {
  //   path: "/",
  //   exact: true,
  //   name: "Home",
  //   component: TopStories,
  // },
  // {
  //   path: "/technology",
  //   exact: true,
  //   name: "Technology",
  //   component: Technology,
  // },
  // {
  //   path: "/sport",
  //   exact: true,
  //   name: "Sport",
  //   component: Sport,
  // },
  // {
  //   path: "/politics",
  //   exact: true,
  //   name: "Politics",
  //   component: Politics,
  // },
  // {
  //   path: "/greaterLagos",
  //   exact: true,
  //   name: "Greater Lagos",
  //   component: GreaterLagos,
  // },
  // {
  //   path: "/fashionLifestyle",
  //   exact: true,
  //   name: "Fashion Lifestyle",
  //   component: FashionLifestyle,
  // },
  // {
  //   path: "/entertainments",
  //   exact: true,
  //   name: "Entertainments",
  //   component: Entertainments,
  // },
  // {
  //   path: "/education",
  //   exact: true,
  //   name: "Education",
  //   component: Education,
  // },
  // {
  //   path: "/businessFinance",
  //   exact: true,
  //   name: "Business Finance",
  //   component: BusinessFinance,
  // },
  // {
  //   path: "/opinion",
  //   exact: true,
  //   name: "Opinion",
  //   component: Opinion,
  // },

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
    component: GreaterLagos,
  },
  // {
  //   path: "/videos",
  //   exact: true,
  //   name: "Videos",
  //   component: Videos,
  // },
  // {
  //   path: "/newsletter",
  //   exact: true,
  //   name: "Newsletter",
  //   component: Newsletter,
  // },

  // {
  //   path: "/events",
  //   exact: true,
  //   name: "Events",
  //   component: Events,
  // },
];
