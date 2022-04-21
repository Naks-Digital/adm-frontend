// import React, { useState, useEffect } from "react";
// import Datatable from "./datatable/index.js";
// import axios from "axios";
import "./newSiteModal.css";

const initialState = {
  createModalShow: false,
  deleteModalShow: false,
  siteImages: [],
};

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
      return { ...state, siteImages: [...state.siteImages, payload] };
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
