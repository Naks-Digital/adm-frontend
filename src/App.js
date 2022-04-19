import React from "react";
import "./newSiteModal.css";
import ResponsiveDrawer from "./navigation/nav_bar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Campaign from "./menu_components/campaign.js";
import Home from "./menu_components/home.js";
import Photographs from "./menu_components/photographs.js";
import Profile from "./menu_components/profile.js";
import Settings from "./menu_components/settings.js";
import Site from "./menu_components/site.js";
// import RootReducer from "./root_reducer.js";
// import AddSite from "./modal.js";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {

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

// export default App;
