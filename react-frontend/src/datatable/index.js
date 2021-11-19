import React, { useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import "../card.css";

export default function Datatable({ data }) {
  // const data_object = [
  //   {site_code: data.site_code},
  //   {location: data.location},
  //   {media_type: data.media_type},
  //   {price_per_month: data.display_cost},
  // ];

  const myContainer = useRef(null);

  const [priceArray, setPriceArray] = useState([]);
  var [sumPrice, setSumPrice] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [expandedModalData, setExpandedModalData] = useState({});
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
    false,
  ]);

  function ifChecked(checkedId, cost) {
    // const checkTrueArrCopy = checkTrueArr;
    // checkTrueArrCopy[checkedId] = true;
    // setCheckTrueArr(checkTrueArrCopy);

    // const priceDetailsCopy = priceArray;
    // priceDetailsCopy.push(cost);
    // setPriceArray(priceDetailsCopy);

    // setPriceHtml(cost);
    const priceArrayCopy = priceArray;
    if (priceArrayCopy[checkedId] == null) {
      priceArrayCopy[checkedId] = cost;
      setPriceArray(priceArrayCopy);
      console.log(priceArray);

      const sumPriceCopy = sumPrice;
      sumPriceCopy = sumPriceCopy + parseInt(cost);
      setSumPrice(sumPriceCopy);
    }
  }

  // function ifChecked(e) {
  //   // const checkTrueArrCopy = checkTrueArr;
  //   // checkTrueArrCopy[checkedId] = true;
  //   // setCheckTrueArr(checkTrueArrCopy);

  //   // const priceDetailsCopy = priceArray;
  //   // priceDetailsCopy.push(cost);
  //   // setPriceArray(priceDetailsCopy);

  //   // setPriceHtml(cost);
  //   var checkedId = e.target.id;
  //   var cost = e.target.cost;
  //   console.log(cost);
  //   if (e.target.checked == true) alert("i am checked");
  //   else alert("i am not checked");
  //   const priceArrayCopy = priceArray;
  //   if (priceArrayCopy[checkedId] == null) {
  //     priceArrayCopy[checkedId] = cost;
  //     setPriceArray(priceArrayCopy);
  //     console.log(priceArray);

  //     sumPrice = sumPrice + parseInt(cost);
  //     setSumPrice(sumPrice);
  //   }
  // }

  function expandCard(cardId) {
    setModalShow(true);

    var expandedModalDataCopy = expandedModalData;
    expandedModalDataCopy = data[cardId];
    setExpandedModalData(expandedModalDataCopy);

    console.log(data[cardId]);
  }

  return (
    <div>
      <div id="empty_response"></div>
      <div className="parent_cards_total">
        <div id="all_cards">
          {data.map((rows, index) => (
            <div className="check_card">
              <input
                ref={myContainer}
                type="checkbox"
                cost={rows.display_cost}
                id={index}
                defaultChecked={false}
                onChange={(e) => {
                  ifChecked(e.target.id, rows.display_cost);
                }}
                // onChange={ifChecked}
              />
              <div
                // id={index}
                className="media_card"
                onClick={(e) => {
                  console.log(e.target.id);
                  expandCard(index);
                }}
              >
                <img src="/image.jpg" alt="" />
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
          All sites:
          {priceArray.map((onePrice) => (
            <p>
              {onePrice}
              <br />
            </p>
          ))}
          <br />
          Estimated price: {sumPrice}
          {/* <p>
            {priceArray.map((onePrice) => {
              sumPrice = sumPrice + parseInt(onePrice);
              return sumPrice;
            })}
          </p> */}
        </div>
      </div>
      <Modal
        // data={expandedModalData}
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <img src="/image.jpg" alt="" />
          <div>
            {/* <div>Site Code :{data.site_code}</div> */}
            <div>Sub Environment :</div>
            <div>State Name :</div>
            <div>City Name :</div>
            <div>Location :</div>
            <div>Traffic Movement :</div>
            <div>Post Code :</div>
            <div>Latitude :</div>
            <div>Longitude :</div>
            <div>Media Vehicle :</div>
            <div>Width :</div>
            <div>Height :</div>
            <div>Position :</div>
            <div>Media Type :</div>
            <div>Display Cost :</div>
            <div>Additional Comments :</div>
            <div>Owner of Media :</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button
            onClick={() => {
              alert("Inputs Reset");
              setModalShow(false);
            }}
          >
            Reset
          </Button> */}
          <Button onClick={() => setModalShow(false)}>Cancel</Button>
          {/* <Button onClick={addTheSite}>Create</Button> */}
        </Modal.Footer>
      </Modal>
      <div id="garbage"></div>
      {data.length === 0 && <p>No data found</p>}
    </div>
  );
}
// use redux
