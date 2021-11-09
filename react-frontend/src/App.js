import React, { useState, useEffect } from "react";
import Datatable from "./datatable";
import axios from "axios";
import ReactDOM from 'react-dom'

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [site, setSite] = useState("");
  const [city, setCity] = useState("");
  const [loc, setLoc] = useState("");
  const [apiRes, setApiRes] = useState([]);
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
          const element = <h1>Couldn't get data from the given keywords. You can see the whole data below.</h1>;
          ReactDOM.render(element, document.getElementById("empty_response"));
        } else {
          setApiRes(response.data);
          console.log("Filtered data :");
          console.log(response.data);
        }
      });
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
      </div>
      <div>
        <Datatable data={apiRes == "" ? data : apiRes} />
        {/* <Datatable data={apiRes == "" ? search(data) : search(apiRes)} /> */}
      </div>
    </div>
  );
}
