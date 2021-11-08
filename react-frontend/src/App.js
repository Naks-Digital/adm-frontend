import React, { useState, useEffect } from "react";
import Datatable from "./datatable";
import axios from "axios";
// import http from "http-common";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [site, setSite] = useState("");
  const [city, setCity] = useState("");
  const [loc, setLoc] = useState("");
  const [apiRes, setApiRes] = useState([]);
  const [searchColumns, setSearchColumns] = useState([
    "site_code",
    "city_name",
    "location",
  ]);

  useEffect(() => {
    axios.get("/media").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  // useEffect(() => {
  //   fetch("localhost:5000/media")
  //   .then((response) => response.json())
  //   .then((json) => setData(json));
  // }, []);

  // function search(rows){
  //   console.log(rows);
  //   return (
  //     rows.filter(rows => rows.siteCode.toLowerCase().indexOf(site) > -1 ||
  //     rows.cityName.toLowerCase().indexOf(site) > -1 ||
  //     rows.Location.toLowerCase().indexOf(site) > -1 ));
  // }

  function search(rows) {
    // console.log(data+"data");
    // console.log("rows data");
    // console.log(rows);
    // console.log(data);
    // console.log(site);
    return rows.filter((row) =>
      searchColumns.some(
        // console.log(row)
        // (column) => {<div>{row[column]}</div>
        // console.log(row[column]+"rc");}

        (column) =>
          row[column].toString().toLowerCase().indexOf(site.toLowerCase()) > -1
      )
    );
  }

  // function clickclick() {
  //   const element = document.querySelector("#post-request .article-id");
  //   const article = { site, city, loc };
  //   axios
  //     .post("/media", article)
  //     .then((response) => (document.getElementById("garbage").innerHTML = response.data));
  // }

  function clickclick() {
    axios
      .get(
        "/media/?site_code=" + site + "&city_name=" + city + "&location=" + loc
      )
      .then((res) => {
        setApiRes(res);
        console.log("/media/?site_code=" + site + "&city_name=" + city + "&location=" + loc);
        console.log("This is fetched backend data :" + res.data);
        console.log("This is status of the fetched backend data :" + res.status);
        console.log("This is statusText of the fetched backend data :" + res.statusText);
        console.log("This is headers of the fetched backend data :" + res.headers);
        console.log("This is config of the fetched backend data :" + res.config);
      });
  }

  // function searchWithAPI(item) {
  //   setSite(item);
  //   axios.get(`/media/?siteCode=${item}`).then((resdata) => {
  //     console.log("later");
  //     console.log(resdata.data);
  //     return resdata.data;
  //   });
  // }

  // const columns = data[0] && Object.keys(data[0]);
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
        {/* <input type="text" value={site} onChange={(e) => searchWithAPI(e.target.value)} /> */}
        {
          // columns && columns.map(column => <lable>
          //   <input type="checkbox" checked={searchColumns.includes(column)} onChange={(e) => {
          //     const checked = searchColumns.includes(column);setSearchColumns(prev => checked ? prev.filter(sc => sc != column): [...prev, column])
          //   }} />
          //   {column}
          // </lable>)          This code is foe checkboxes if needed in future
        }
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
}
