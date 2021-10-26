import React from "react";
import "../fetch_from_api.css";

export default function Datatable({ data }) {
  return (
    <table cellPadding={2} cellSpacing={2}>
      <thead>
        <tr>
          {data[0] && Object.keys(data[0]).map((item) => <th>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((rows) => (
          <tr>
            <td>{rows.uuid}</td>
            <td>{rows.siteCode}</td>
            <td>{rows.subEnvironment}</td>
            <td>{rows.stateName}</td>
            <td>{rows.cityName}</td>
            <td>{rows.Location}</td>
            <td>{rows.trafficMovement}</td>
            <td>{rows.postCode}</td>
            <td>{rows.Latitude}</td>
            <td>{rows.Longitude}</td>
            <td>{rows.sizeW}</td>
            <td>{rows.sizeH}</td>
            <td>{rows.Position}</td>
            <td>{rows.mediaType}</td>
            <td>{rows.displayCost}</td>
            <td>{rows.additionalSizeComments}</td>
            <td>{rows.printingMaterial}</td>
            <td>{rows.onwerOfMedia}</td>
            <td>{rows.createdAt}</td>
            <td>{rows.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// use redux
