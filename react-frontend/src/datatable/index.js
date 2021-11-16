import React, { useState } from "react";
import "../card.css";

export default function Datatable({ data }) {
  // const data_object = [
  //   {site_code: data.site_code},
  //   {location: data.location},
  //   {media_type: data.media_type},
  //   {price_per_month: data.display_cost},
  // ];

  const [priceDetails, setPriceDetails] = useState([]);
  const [checkTrue, setCheckTrue] = useState(false);
  const [checkTrueArr, setCheckTrueArr] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function ifChecked(checkedId, cost) {
    // alert(checkedId);
    console.log(checkedId);
    console.log(cost);
    priceDetails.push(cost);
    setPriceDetails(priceDetails);
    console.log(priceDetails);
    setCheckTrue(true);
    console.log(checkTrueArr);
  }

  return (
    <div>
      <div id="empty_response"></div>
      <div className="parent_cards_total">
        <div id="all_cards">
          {data.map((rows) => (
            <div className="check_card">
              <input
                type="checkbox"
                cost={rows.display_cost}
                id={Object.keys(data)}
                defaultChecked={false}
                onChange={(e,cost) => {
                  ifChecked(e.target.id, cost);
                }}
              />
              <div className="media_card">
                <img src="/image.jpg" />
                <div>
                  <div className="card_details">
                    Site Code: {rows.site_code}
                  </div>
                  <div className="card_details">Location: {rows.location}</div>
                  <div className="card_details">
                    Media Type: {rows.media_type}
                  </div>
                </div>
                <div className="card_details">
                  Price per month: {rows.display_cost}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total_price">
          {checkTrue ? (
            <div>
              All Sites:
              <div>
                {priceDetails.map((elmnt) => (
                  <p>{elmnt}</p>
                ))}
              </div>
              {/* {priceDetails.map((elmnt) => (
                <p>{elmnt},</p>
              ))} */}
              {/* <i>Selected sites here with their respective prices</i> */}
              <br />
              Estimate Price: <div>{priceDetails}</div>
              {/* <i>Total price of all sites</i> */}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <table cellPadding={2} cellSpacing={2}>
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((item) => <th>{item}</th>)}
          </tr>    ------this tr tag should be commented-------
          <th>Site Code</th>
          <th>Sub Environment</th>
          <th>State Name</th>
          <th>City Name</th>
          <th>Location</th>
          <th>Traffic Movement</th>
          <th>Post Code</th>
          <th>Lattitude</th>
          <th>Longitude</th>
          <th>Media Vehicle</th>
          <th>Width</th>
          <th>Height</th>
          <th>Position</th>
          <th>Media Type</th>
          <th>Display Cost</th>
          <th>Printing Material</th>
        </thead>
        <tbody>
          {data.map((rows) => (
            <tr>
              <td>{rows.uuid}</td>      ------this td tag should be commented-------
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
              <td>{rows.onwer_of_media}</td>    ------this td tag should be commented-------
              <td>{rows.createdat}</td>    ------this td tag should be commented-------
              <td>{rows.updatedat}</td>    ------this td tag should be commented-------
            </tr>
          ))}
        </tbody>
      </table> */}
      <div id="garbage"></div>
      {data.length === 0 && <p>No data found</p>}
    </div>
  );
}
// use redux
