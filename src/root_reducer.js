import React, { useState, useEffect } from "react";
// import Datatable from "./datatable/index.js";
import axios from "axios";
import AccountOverview from "./menu_components/profile_options/account_overview";
import ChangePassword from "./menu_components/profile_options/change_password";
import EditProfile from "./menu_components/profile_options/edit_profile";
import LogOut from "./menu_components/profile_options/log_out";
import NotificationSettings from "./menu_components/profile_options/notification_settings";
import PrivacySettings from "./menu_components/profile_options/privacy_settings";
import "./newSiteModal.css";

require("es6-promise").polyfill();
require("isomorphic-fetch");
require("es6-promise").polyfill();
require("isomorphic-fetch");

const initialState = {
  createModalShow: false,
  deleteModalShow: false,
  siteImages: [],
  // component: "",
};

// window.onload = function Neww() {
function Neww() {
  useEffect(() => {
    axios.get("/media").then((response) => {
      const siteImagesCopy = initialState.siteImages;
      response.data.map((row) => {
        console.log("without split" + row.site_image);
        if (row.site_image != null) {
          var imageArray = row.site_image;
          for (var i = 0; i < imageArray.length; i++) {
            imageArray[i] = imageArray[i].split(" ").join("%20");
            var a = imageArray[i].split("public");
            console.log("imageArray[i]" + a[1]);
            imageArray[i] = a[1];
          }
          siteImagesCopy.push(imageArray);
        }
        console.log("siteImagesCopy" + siteImagesCopy);
      });
      return {
        ...initialState,
        siteImages: [...initialState.siteImages, siteImagesCopy],
      };
    });
  }, []);
}

export default function RootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "CREATESHOW":
      return { createModalShow: true };
    case "CREATEHIDE":
      return { createModalShow: false };
    case "DELETESHOW":
      return { deleteModalShow: true };
    case "DELETEHIDE":
      return { deleteModalShow: false };
    case "PUTIMAGES":
      return { ...state, siteImages: [...state.siteImages] };
    // case "ACCOUNT_OVERVIEW":
    //   return { ...state, component: <AccountOverview /> };
    // case "EDIT_PROFILE":
    //   return { ...state, component: <EditProfile /> };
    // case "CHANGE_PASSWORD":
    //   return { ...state, component: <ChangePassword /> };
    // case "NOTIFICATION_SETTINGS":
    //   return { ...state, component: <NotificationSettings /> };
    // case "PRIVACY_SETTINGS":
    //   return { ...state, component: <PrivacySettings /> };
    // case "LOG_OUT":
    //   return { ...state, component: <LogOut /> };
    default:
      return state;
  }

  // function Site() {
  //   const [data, setData] = useState([]);
  //   const [apiRes, setApiRes] = useState([]);
  //   const [images, setImages] = useState([[]]);

  //   return (
  //     <div>
  //       <div>
  //         <Datatable data={data} images={images} />
  //       </div>
  //     </div>
  //   );
  // }
}
