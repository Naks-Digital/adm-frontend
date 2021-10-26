import axios from "axios";
import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./fetch_from_api.css";

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
        <td>{siteData.siteCode}</td>
        <td>{siteData.subEnvironment}</td>
        <td>{siteData.stateName}</td>
        <td>{siteData.cityName}</td>
        <td>{siteData.Location}</td>
        <td>{siteData.trafficMovement}</td>
        <td>{siteData.postCode}</td>
        <td>{siteData.Latitude}</td>
        <td>{siteData.Longitude}</td>
        <td>{siteData.mediaVehicle}</td>
        <td>{siteData.sizeW}</td>
        <td>{siteData.sizeH}</td>
        <td>{siteData.Position}</td>
        <td>{siteData.mediaType}</td>
        <td>{siteData.displayCost}</td>
        <td>{siteData.printingMaterial}</td>
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
