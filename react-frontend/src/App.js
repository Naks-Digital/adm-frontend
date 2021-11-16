import React, { useState, useEffect } from "react";
import Datatable from "./datatable";
import axios from "axios";
import ReactDOM from "react-dom";
import { Button, button, Modal } from "react-bootstrap";
import "./modal.css";
// import AddSite from "./modal.js";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [site, setSite] = useState("");
  const [city, setCity] = useState("");
  const [loc, setLoc] = useState("");
  const [apiRes, setApiRes] = useState([]);
  const [show, setShow] = useState(false);
  const [getValue, setGetValue] = useState("");
  const [dataObj, setDataObj] = useState({ siteCode: "" });

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
    });
  }, []);

  function clickclick() {
    var siteCode = site.split(" ").join("&");
    var cityName = city.split(" ").join("&");
    var location = loc.split(" ").join("&");
    // console.log(loc.split(" ").join("&"));
    axios
      .get(
        "/media/?site_code=" +
          siteCode +
          "&city_name=" +
          cityName +
          "&location=" +
          location
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

  function captureResponse(inputResponse) {
    console.log(inputResponse);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={site}
          onChange={(e) => setSite(e.target.value)}
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
        />
        <button onClick={clickclick}>clickclick</button>
        <button onClick={clickclick}>Delete a site</button>
        {/* <button onClick={showModal}>Add a site</button> */}
        <Button onClick={() => setShow(true)}>Open</Button>
        {/* <Modal show={show}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Hello Body</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal> */}
        <Modal
          show={show}
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
                  // value={(e) => {
                  //   setGetValue(e.target.value);
                  // }}
                  onBlur={(e) => captureResponse(e.target.value)}
                ></input>
              </div>
              <div>
                <label>Sub Environment : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>State name : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>City name : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Location : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Traffic movement : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Post code : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Latitude : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Longitude : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Media vehicle : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Width : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Height : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Position : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Media type : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Display cost : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Additional size comments : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Printing material : </label>
                <input type="text"></input>
              </div>
              <div>
                <label>Owner of media : </label>
                <input type="text"></input>
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
                setShow(false);
              }}
            >
              Reset
            </Button>
            <Button onClick={() => setShow(false)}>Cancel</Button>
            <Button
              onClick={() => {
                alert("Site Created");
                setShow(false);
              }}
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Datatable data={apiRes == "" ? data : apiRes} />
        {/* <Datatable data={apiRes == "" ? search(data) : search(apiRes)} /> */}
      </div>
    </div>
  );
}
