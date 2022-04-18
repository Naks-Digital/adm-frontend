import React, { useState, useEffect } from "react";
import Datatable from "../datatable";
import axios from "axios";
import "../newSiteModal.css";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function Site() {
  const [data, setData] = useState([]);
  const [apiRes, setApiRes] = useState([]);
  const [images, setImages] = useState([[]]);

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
    });
  }, []);

  return (
    <div>
      <div>
        <Datatable data={apiRes == "" ? data : apiRes} images={images} />
      </div>
    </div>
  );
}
