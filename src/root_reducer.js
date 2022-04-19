// import React, { useState, useEffect } from "react";
// import Datatable from "./datatable/index.js";
// import axios from "axios";
// import "../newSiteModal.css";

const initialState = {
  createModalShow: false,
  deleteModalShow: false,
};

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATESHOW":
      return { createModalShow: true };
    case "CREATEHIDE":
      return { createModalShow: false };
    case "DELETESHOW":
      return { deleteModalShow: true };
    case "DELETEHIDE":
      return { deleteModalShow: false };
    default:
      return state;
  }
}
