import React, { useState, useEffect } from "react";
import Datatable from "../datatable";
import axios from "axios";
import ReactDOM from "react-dom";
import { Button, Modal } from "react-bootstrap";
import "../newSiteModal.css";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function Site() {
  const [data, setData] = useState([]);
  const [site, setSite] = useState("");
  const [siteCode, setSiteCode] = useState("");
  const [city, setCity] = useState("");
  const [loc, setLoc] = useState("");
  const [apiRes, setApiRes] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [csv, setCsv] = useState();
  const [images, setImages] = useState([[]]);
  const [uploadImages, setUploadImages] = useState([[]]);
  const [newSite, setNewSite] = useState({
    site_code: "",
    sub_environment: "",
    state_name: "",
    city_name: "",
    location: "",
    traffic_movement: "",
    post_code: "",
    latitude: "",
    longitude: "",
    media_vehicle: "",
    size_h: "",
    size_w: "",
    position: "",
    media_type: "",
    display_cost: "",
    additional_size_comments: "",
    printing_material: "",
    owner_of_media: "",
  });

  // const [searchColumns, setSearchColumns] = useState([
  //   "site_code",
  //   "city_name",
  //   "location",
  // ]);

  useEffect(() => {
    axios.get("/media").then((response) => {
      setData(response.data);
      console.log("Whole data :");
      console.log(response.data);
      const imagesCopy = images;
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
          imagesCopy.push(imageArray);
          console.log(imageArray);
        }
        setImages(imagesCopy);
        console.log("imagesCopy" + imagesCopy);
      });
      // if (response.data[15].site_image != null) {
      //   var imageArray = response.data[15].site_image;
      //   for (var i = 0; i < imageArray.length; i++) {
      //     imageArray[i] = imageArray[i].split("/").join("\\");
      //   }
      //   // var formattedImage = response.data[15].site_image + "";
      //   // formattedImage = formattedImage.split("/").join("\\");
      //   setImages(imageArray);
      // }
    });
  }, []);

  return (
    <div>
      <div>
        <Datatable data={apiRes == "" ? data : apiRes} images={images} />
        {/* <Datatable data={apiRes == "" ? search(data) : search(apiRes)} /> */}
      </div>
    </div>
  );
}
