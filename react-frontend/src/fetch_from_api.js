import axios from "axios";
import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
// import "./fetch_from_api.css";

export default class FetchRandomUser extends Component {
  constructor() {
    super();
    this.state = {
      siteData: null,
    };
  }

  componentDidMount = () => {
    axios.get("/media").then((response) => {
      console.log(response.data[1]);
      this.setState({
        siteData: response.data,
      });
      console.log(this.state.siteData);
    });
  };

  renderData = (siteData, index) => {
    return (
      <tr key={index}>
        <td>{siteData.sitecode}</td>
        <td>{siteData.subenvironment}</td>
        <td>{siteData.statename}</td>
        <td>{siteData.cityname}</td>
        <td>{siteData.location}</td>
        <td>{siteData.trafficmovement}</td>
        <td>{siteData.postcode}</td>
        <td>{siteData.latitude}</td>
        <td>{siteData.longitude}</td>
        <td>{siteData.mediavehicle}</td>
        <td>{siteData.sizew}</td>
        <td>{siteData.sizeh}</td>
        <td>{siteData.position}</td>
        <td>{siteData.mediatype}</td>
        <td>{siteData.displaycost}</td>
        <td>{siteData.printingmaterial}</td>
      </tr>
    );
  };

  render() {
    const { siteData } = this.state;
    if (!siteData) return <div>didn't get anything</div>;
    return (
      <ReactBootStrap.Table>
        <thead>
          <tr>
            <th>SiteCode</th>
            <th>SubEnvironment</th>
            <th>StateName</th>
            <th>CityName</th>
            <th>Location</th>
            <th>Traffic Movement</th>
            <th>Postcode</th>
            <th>Lattitude</th>
            <th>Longitude</th>
            <th>MediaVehicle</th>
            <th>Size-W</th>
            <th>Size-H</th>
            <th>Position</th>
            <th>Media Type</th>
            <th>DisplayCost</th>
            <th>Printing Material</th>
          </tr>
        </thead>
        <tbody>{siteData.map(this.renderData)}</tbody>
      </ReactBootStrap.Table>
      //   <div>{siteData.map(this.renderData)}</div>
    );
  }
}
