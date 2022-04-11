import React, { useState, useEffect } from "react";
import Datatable from "./datatable";
import axios from "axios";
import ReactDOM from "react-dom";
import { Button, Modal } from "react-bootstrap";
import "./newSiteModal.css";
import ResponsiveDrawer from "./navigation/nav_bar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AddSite from "./modal.js";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [site, setSite] = useState("");
  const [siteCode, setSiteCode] = useState("");
  const [city, setCity] = useState("");
  const [loc, setLoc] = useState("");
  const [apiRes, setApiRes] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [csv, setCsv] = useState();
  const [images, setImages] = useState([[]]);
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
        console.log(row.site_image);
        if (row.site_image != null) {
          var imageArray = row.site_image;
          for (var i = 0; i < imageArray.length; i++) {
            imageArray[i] = imageArray[i].split("/").join("\\");
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

  function addTheSite() {
    setModalShow(false);
    axios
      .post("/media", newSite)
      .then((response) => {
        console.log("posted the data");
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  function getFilteredSites() {
    var siteCode = site;
    // .split(" ").join("&");
    var cityName = city.split(" ").join("&");
    var location = loc.split(" ").join("&");
    axios
      .get(
        "/media/?site_code=" + site + "&city_name=" + city + "&location=" + loc
      )
      .then((response) => {
        if (response.data == "") {
          // alert("Got nothing");
          const element = (
            <h1>
              Couldn't get data from the given keywords. You can see the whole
              data below.
            </h1>
          );
          ReactDOM.render(element, document.getElementById("empty_response"));
        } else {
          setApiRes(response.data);
          console.log("Filtered data :");
          console.log(response.data);
        }
      });
  }

  function deleteSite() {
    var siteCode = site.split(" ").join("&");
    var cityName = city.split(" ").join("&");
    var location = loc.split(" ").join("&");
    axios
      .delete(
        "/media/?site_code=" + site + "&city_name=" + city + "&location=" + loc
      )
      .then((response) => {
        console.log(response);
      });
  }

  const captureResponse = (event) => {
    console.log(event.target.value);
    // setGetValue(event.target.value);
    // setNewSite((newSite) => (newSite[event.target.id] = event.target.value)); //Here is the problem**

    const copyObj = newSite;
    copyObj[event.target.id] = event.target.value;
    console.log(event.target.id);
    console.log(event.target.value);
    console.log(copyObj);
    setNewSite({ ...copyObj });
  };

  const sendImage = (event) => {
    const data = new FormData();
    console.log("site code...." + siteCode);
    data.append("image", images);
    // data.append("site", siteCode);
    console.log(data.get("image"));
    axios
      .post("http://localhost:5000/uploadImage?site_code=" + siteCode, data)
      .then((res) => {
        // res.set('Access-Control-Allow-Origin', '*');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendCSV = (event) => {
    const data = new FormData();
    data.append("file", csv);
    console.log("Hey");
    console.log(data);
    axios
      .post(
        "http://localhost:5000/uploadCSV",
        data
        // , {
        //   headers: { "Content-Type": "text/csv" },
        // }
      )
      .then((res) => {
        // res.set('Access-Control-Allow-Origin', '*');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   function captureResponse(e, inputResponse, id) {
  //     console.log(inputResponse);
  //     // setGetValue(inputResponse);
  //     setNewSite((newSite[id] = inputResponse)); //Here is the problem**
  //     console.log(id);
  //     console.log(inputResponse);
  //     console.log(newSite);
  //     console.log(getValue);
  //   }
  // });

  return (
    <div>
      <Router>
        <ResponsiveDrawer />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
      <div>
        <input
          type="text"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          placeholder="site"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="city"
        />
        <input
          type="text"
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          placeholder="location"
        />
        <Button onClick={getFilteredSites}>Get filtered sites</Button>
        <Button onClick={deleteSite}>Delete a site</Button>
        {/* <button onClick={showModal}>Add a site</button> */}
        <br />
        <Button onClick={() => setModalShow(true)}>Add a site</Button>
        <Button onClick={() => alert("Sites added to campaign")}>
          Add to campaign
        </Button>
        <br />
        <label>Upload photos : </label>
        <input
          type="file"
          accept=".png"
          onChange={(event) => {
            const file = event.target.files[0];
            console.log("file" + file);
            setImages(file);
            console.log("setImages" + images);
          }}
        ></input>
        <input
          type="text"
          value={siteCode}
          onChange={(e) => setSiteCode(e.target.value)}
          placeholder="site code"
        />
        <Button onClick={sendImage}>Upload Image</Button>
        <br />
        <lable htmlFor="file">Upload CSV File : </lable>
        <input
          type="file"
          accept=".csv"
          onChange={(event) => {
            const file = event.target.files[0];
            console.log(file);
            setCsv(file);
          }}
        ></input>
        <Button onClick={sendCSV}>Upload CSV</Button>
        <br />
        <a
          href="https://github.com/Naks-Digital/Sample-CSV-file/blob/master/data%20-%20Sheet1.csv"
          target="_blank"
          download
        >
          Sample file
        </a>
        {/* <Modal show={modalShow}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Hello Body</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal> */}
        <Modal
          show={modalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Add a site
            </Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div className="inputs">
              <div>
                <label>Site Code : </label>
                <input
                  type="text"
                  id="site_code"
                  value={newSite.site_code}
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Sub Environment : </label>
                <input
                  type="text"
                  id="sub_environment"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>State name : </label>
                <input
                  type="text"
                  id="state_name"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>City name : </label>
                <input
                  type="text"
                  id="city_name"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Location : </label>
                <input
                  type="text"
                  id="location"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Traffic movement : </label>
                <input
                  type="text"
                  id="traffic_movement"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Post code : </label>
                <input
                  type="text"
                  id="post_code"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Latitude : </label>
                <input
                  type="text"
                  id="latitude"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Longitude : </label>
                <input
                  type="text"
                  id="longitude"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Media vehicle : </label>
                <input
                  type="text"
                  id="media_vehicle"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Width : </label>
                <input
                  type="text"
                  id="size_w"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Height : </label>
                <input
                  type="text"
                  id="size_h"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Position : </label>
                <input
                  type="text"
                  id="position"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Media type : </label>
                <input
                  type="text"
                  id="media_type"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Display cost : </label>
                <input
                  type="text"
                  id="display_cost"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Additional size comments : </label>
                <input
                  type="text"
                  id="additional_size_comments"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Printing material : </label>
                <input
                  type="text"
                  id="printing_material"
                  onChange={captureResponse}
                ></input>
              </div>
              <div>
                <label>Owner of media : </label>
                <input
                  type="text"
                  id="owner_of_media"
                  onChange={captureResponse}
                ></input>
              </div>
            </div>
            <div>
              <label>Upload photos : </label>
              <input type="file"></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                alert("Inputs Reset");
                setModalShow(false);
              }}
            >
              Reset
            </Button>
            <Button onClick={() => setModalShow(false)}>Cancel</Button>
            <Button onClick={addTheSite}>Create</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Datatable data={apiRes == "" ? data : apiRes} images={images} />
        {/* <Datatable data={apiRes == "" ? search(data) : search(apiRes)} /> */}
      </div>
    </div>
  );
}
