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

export const MenuData = [
  {
    title: "Categories",
    path: "/",
    icon: <MenuButton size={20} />,
    iconClosed: <CaretDownFill className="ms-3" />,
    iconOpen: <CaretUpFill className="ms-3" />,

    subCat: [
      {
        title: "Technology",
        path: "/technology",
        icon: <CpuFill size={20} />,
      },

      {
        title: "Sport",
        path: "/sport",
        icon: <CpuFill size={20} />,
      },

      {
        title: "Politics",
        path: "/politics",
        icon: <CpuFill size={20} />,
      },

      {
        title: "Greater Lagos",
        path: "/greaterlagos",
        icon: <CpuFill size={20} />,
      },

      {
        title: "Fashion and Lifestyle",
        path: "/fashionLifestyle",
        icon: <CpuFill size={20} />,
      },

      {
        title: "Entertainments",
        path: "/entertainments",
        icon: <CpuFill size={20} />,
      },

      {
        title: "Education",
        path: "/education",
        icon: <CpuFill size={20} />,
      },

      {
        title: "Business and Finance",
        path: "/businessFinance",
        icon: <CpuFill size={20} />,
      },

      {
        title: "Opinion",
        path: "/opinion",
        icon: <CpuFill size={20} />,
      },
    ],
  },

  {
    title: "Videos",
    path: "/",
    icon: <Youtube size={20} />,
    iconClosed: <CaretDownFill />,
    iconOpen: <CaretUpFill />,
  },

  {
    title: "Newsletter",
    path: "/",
    icon: <Envelope size={20} />,
    iconClosed: <CaretDownFill />,
    iconOpen: <CaretUpFill />,
  },

  {
    title: "Events",
    path: "/",
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
