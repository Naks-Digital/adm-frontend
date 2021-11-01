import React from "react";
import "../fetch_from_api.css";

export default function Datatable({ data }) {
  return (
    <div>
      <table cellPadding={2} cellSpacing={2}>
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((item) => <th>{item}</th>)}
          </tr>
          {/* <th>SiteCode</th>
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
          <th>Printing Material</th> */}
        </thead>
        <tbody>
          {data.map((rows) => (
            <tr>
              {/* <td>{rows.uuid}</td> */}
              <td>{rows.site_code}</td>
              <td>{rows.sub_environment}</td>
              <td>{rows.state_name}</td>
              <td>{rows.city_name}</td>
              <td>{rows.location}</td>
              <td>{rows.traffic_movement}</td>
              <td>{rows.post_code}</td>
              <td>{rows.latitude}</td>
              <td>{rows.longitude}</td>
              <td>{rows.size_w}</td>
              <td>{rows.size_h}</td>
              <td>{rows.position}</td>
              <td>{rows.media_type}</td>
              <td>{rows.display_cost}</td>
              <td>{rows.additional_size_comments}</td>
              <td>{rows.printing_material}</td>
              <td>{rows.onwer_of_media}</td>
              <td>{rows.createdat}</td>
              <td>{rows.updatedat}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && <p>No data found</p>}
    </div>
  );
}
// use redux
