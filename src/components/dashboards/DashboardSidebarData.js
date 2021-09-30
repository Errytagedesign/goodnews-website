/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  MenuButton,
  Youtube,
  Envelope,
  CalendarEvent,
  CaretDownFill,
  CaretUpFill,
  CpuFill,
} from "react-bootstrap-icons";
// import axios from "axios";

export const DashboardSidebarData = [
  {
    title: "Newsfeeds",
    path: "/newsfeed",
    icon: <MenuButton size={20} />,
    iconClosed: <CaretDownFill className="ms-3" />,
    iconOpen: <CaretUpFill className="ms-3" />,
  },
  {
    title: "News",
    path: "#",
    icon: <MenuButton size={20} />,
    iconClosed: <CaretDownFill className="ms-3" />,
    iconOpen: <CaretUpFill className="ms-3" />,

    subCat: [
      {
        title: "Publish News",
        path: "/news/news1",
        icon: <CpuFill size={20} />,
      },

      {
        title: "My Post",
        path: "/dashboard",
        icon: <CpuFill size={20} />,
      },
    ],
  },

  {
    title: "Videos",
    path: "/dashboard",
    icon: <Youtube size={20} />,
    iconClosed: <CaretDownFill />,
    iconOpen: <CaretUpFill />,

    subCat: [
      {
        title: "Videos",
        path: "/dashboard",
        icon: <CpuFill size={20} />,
      },

      {
        title: "My Videos",
        path: "/dashboard",
        icon: <CpuFill size={20} />,
      },
    ],
  },

  {
    title: "Newsletter",
    path: "/dashboard",
    icon: <Envelope size={20} />,
    iconClosed: <CaretDownFill />,
    iconOpen: <CaretUpFill />,
  },

  {
    title: "Events",
    path: "/dashboard",
    icon: <CalendarEvent size={20} />,
    iconClosed: <CaretDownFill />,
    iconOpen: <CaretUpFill />,
  },
];

// function MenuData1() {
//   // eslint-disable-next-line react-hooks/exhaustive-deps

//   const [categories, setCategories] = React.useState(null);

//   React.useEffect(() => {
//     axios
//       .get("https://api-good-news.herokuapp.com/api/categories/all")
//       .then((response) => {
//         setCategories(response.data);
//       });
//   }, []);

//   if (categories !== "null") {
//     console.log(categories.data);
//   }
//   return categories;
// }

// export const MenuData12 = MenuData1();
