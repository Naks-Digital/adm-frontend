import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const MenuOptions = [
  { title: "Home", path: "/", icon: <AiIcons.AiFillHome />, cName: "nav-text" },
  {
    title: "Campaign",
    path: "/campaign",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Site",
    path: "/site",
    icon: <FaIcons.FaSitemap />,
    cName: "nav-text",
  },
  {
    title: "Photographs",
    path: "/photographs",
    icon: <IoIcons.IoMdPhotos />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaIcons.FaPersonBooth />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoIosSettings />,
    cName: "nav-text",
  },
];
