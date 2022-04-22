import React, { useEffect, useState } from "react";
// import Datatable from "./datatable/index.js";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";

export default function Photographs() {
  const [apiRes, setApiRes] = useState([]);
  const [images, setImages] = useState([[]]);

  useEffect(() => {
    axios.get("/media").then((response) => {
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
    <>
      <div>
        <h1>PHOTOGRAPHS</h1>
        {images.map((images) =>
          images.map((image) => (
            <div>
              <img src={image} />
            </div>
          ))
        )}
      </div>
    </>
  );
}
