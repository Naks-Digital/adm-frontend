import React, { useEffect } from "react";
import "./newSiteModal.css";
import ResponsiveDrawer from "./navigation/nav_bar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Campaign from "./menu_components/campaign.js";
import Home from "./menu_components/home.js";
import Photographs from "./menu_components/photographs.js";
import Profile from "./menu_components/profile.js";
import Settings from "./menu_components/settings.js";
import Site from "./menu_components/site.js";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import RootReducer from "./root_reducer.js";
// import AddSite from "./modal.js";

require("es6-promise").polyfill();
require("isomorphic-fetch");
require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("/media").then((response) => {
      console.log("Whole data :");
      console.log(response.data);
      var siteImagesCopy = state.siteImages;
      response.data.map((row) => {
        // console.log("without split" + row.site_image);
        if (row.site_image != null) {
          var imageArray = row.site_image;
          for (var i = 0; i < imageArray.length; i++) {
            imageArray[i] = imageArray[i].split(" ").join("%20");
            var a = imageArray[i].split("public");
            // console.log("imageArray[i]" + a[1]);
            imageArray[i] = a[1];
          }
          siteImagesCopy.push(imageArray);
          // console.log(imageArray);
        }
        state.siteImages = siteImagesCopy;
      });
    });
  }, []);

  return (
    <div>
      <Router>
        <ResponsiveDrawer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/site" element={<Site />} />
          <Route path="/photographs" element={<Photographs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}
