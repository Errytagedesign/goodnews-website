/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  PlusSquare,
  Youtube,
  CaretDownFill,
  CaretUpFill,
  CpuFill,
  Newspaper,
  Rss,
  FileEarmark,
  CardList,
  BadgeAd,
  Table,
} from "react-bootstrap-icons";
// import axios from "axios";

export const DashboardSidebarData = [
  {
    title: "Newsfeeds",
    path: "/newsfeed",
    icon: <Rss size={20} />,
    iconClosed: <CaretDownFill className="ms-3" />,
    iconOpen: <CaretUpFill className="ms-3" />,
  },
  {
    title: "News",
    path: "#",
    icon: <Newspaper size={20} />,
    iconClosed: <CaretDownFill className="ms-3" />,
    iconOpen: <CaretUpFill className="ms-3" />,

    subCat: [
      {
        title: "New Post",
        path: "/publishnews",
        icon: <FileEarmark size={20} />,
      },

      {
        title: "My Posts",
        path: "/mypost",
        icon: <Table size={20} />,
      },
    ],
  },
  {
    title: "Adverts",
    path: "#",
    icon: <BadgeAd size={20} />,
    iconClosed: <CaretDownFill className="ms-3" />,
    iconOpen: <CaretUpFill className="ms-3" />,

    subCat: [
      {
        title: "New Ads",
        path: "/createads",
        icon: <PlusSquare size={20} />,
      },

      {
        title: "My Ads",
        path: "/myads",
        icon: <CardList size={20} />,
      },
    ],
  },

  {
    title: "Videos",
    path: "/vidoes",
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
];

// function MenuData1() {
//   // eslint-disable-next-line react-hooks/exhaustive-deps

//   const [categories, setCategories] = React.useState(null);

//   React.useEffect(() => {
//     axios
//       .get("https://goodnews-ng.herokuapp.com/api/categories/all")
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
