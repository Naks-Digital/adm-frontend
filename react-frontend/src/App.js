import React, { useState, useEffect } from "react";
import Datatable from "./datatable";
import axios from "axios";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["siteCode", "cityName", "Location"])

  useEffect(() => {
    axios.get("/media").then((response) => {
      setData(response.data);
      console.log(response.data);
      // console.log(data);
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
  //     rows.filter(rows => rows.siteCode.toLowerCase().indexOf(q) > -1 ||
  //     rows.siteCode.toLowerCase().indexOf(q) > -1 ||
  //     rows.cityName.toLowerCase().indexOf(q) > -1 ||
  //     rows.Location.toLowerCase().indexOf(q) > -1 ));
  // }

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
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
