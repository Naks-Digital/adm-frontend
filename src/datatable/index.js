import React, { useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import "../card.css";
import "../expandSite.css";

export default function Datatable({ data, images }) {
  // const data_object = [
  //   {site_code: data.site_code},
  //   {location: data.location},
  //   {media_type: data.media_type},
  //   {price_per_month: data.display_cost},
  // ];

  const myContainer = useRef(null);

  const [priceArray, setPriceArray] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [idOfCard, setIdOfCard] = useState(0);
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

      var sumPriceCopy = sumPrice;
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

    setIdOfCard(cardId + 1);

    // setExpandedModalData(data[cardId]);
    // console.log(expandedModalData);

    var expandedModalDataCopy = expandedModalData;
    expandedModalDataCopy = data[cardId];
    setExpandedModalData(expandedModalDataCopy);
    console.log(expandedModalData);
    console.log(images);
  }

  return (
    <div>
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
                // id={rows.site_code}
                className="media_card"
                onClick={(e) => {
                  expandCard(index);
                }}
              >
                <img className="image" src="/image.jpg" alt="" />
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
        id="expand_site_modal"
        // data={expandedModalData}
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="expand_site_modal_body">
            <div className="expand_site_modal_body_images">
              {/* {images[idOfCard].map((image) => (
                <img src={image} />
              ))} */}
              {/* <img className="image" src="/image.jpg" alt="" />
              <img className="image" src="/image.jpg" alt="" />
              <img className="image" src="/image.jpg" alt="" /> */}
            </div>
            <div className="expand_site_modal_body_site_details">
              <div>
                <div>Site Code :{expandedModalData.site_code}</div>
                <div>Sub Environment :{expandedModalData.sub_environment}</div>
                <div>State Name :{expandedModalData.state_name}</div>
                <div>City Name :{expandedModalData.city_name}</div>
                <div>Location :{expandedModalData.location}</div>
                <div>
                  Traffic Movement :{expandedModalData.traffic_movement}
                </div>
                <div>Post Code :{expandedModalData.post_code}</div>
                <div>Latitude :{expandedModalData.latitude}</div>
                <div>Longitude :{expandedModalData.longitude}</div>
              </div>
              <div>
                <div>Media Vehicle :{expandedModalData.media_vehicle}</div>
                <div>Width :{expandedModalData.size_w}</div>
                <div>Height :{expandedModalData.size_h}</div>
                <div>Position :{expandedModalData.position}</div>
                <div>Media Type :{expandedModalData.media_type}</div>
                <div>Display Cost :{expandedModalData.display_cost}</div>
                <div>
                  Additional Comments :
                  {expandedModalData.additional_size_comments}
                </div>
                <div>
                  Printing Material :{expandedModalData.printing_material}
                </div>
                <div>Owner of Media :{expandedModalData.owner_of_media}</div>
              </div>
            </div>
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
