import React, { useState, useEffect } from "react";
import Datatable from "../datatable";
import axios from "axios";
import "../newSiteModal.css";
import ReactDOM from "react-dom";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import AddSite from "../modals/add_site.js";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function Site() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [wholeData, setWholeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [siteCode, setSiteCode] = useState("");
  // const [apiRes, setApiRes] = useState([]);
  const [images, setImages] = useState([[]]);
  const [site, setSite] = useState("");
  const [uploadImages, setUploadImages] = useState([[]]);
  // const [siteCode, setSiteCode] = useState("");
  const [city, setCity] = useState("");
  const [loc, setLoc] = useState("");

  useEffect(() => {
    getWholeData();
  }, []);

  function getWholeData() {
    axios.get("/media").then((response) => {
      setData(response.data);
      // setWholeData(response.data);
      console.log("Whole data :");
      console.log(response.data);
      const imagesCopy = images;
      response.data.map((row) => {
        console.log("without split" + row.site_image);
        if (row.site_image != null) {
          var imageArray = row.site_image;
          for (var i = 0; i < imageArray.length; i++) {
            imageArray[i] = imageArray[i].split(" ").join("%20");
            var a = imageArray[i].split("public");
            console.log("imageArray[i]" + a[1]);
            imageArray[i] = a[1];
          }
          imagesCopy.push(imageArray);
          console.log(imageArray);
        }
        setImages(imagesCopy);
        // state.siteImages.push(imagesCopy);
        console.log("imagesCopy" + imagesCopy);
      });
    });
  }

  const sendImage = (event) => {
    const data = new FormData();
    console.log("site code...." + siteCode);
    data.append("image", uploadImages);
    // data.append("site", siteCode);
    console.log(data.get("image"));
    axios
      .post("http://localhost:5000/uploadImage?site_code=" + siteCode, data)
      .then((res) => {
        // res.set('Access-Control-Allow-Origin', '*');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function getFilteredSites() {
    var siteCode = site.split(" ").join("");
    // .split(" ").join("&");
    var cityName = city.split(" ").join("&");
    var location = loc.split(" ").join("&");
    axios
      .get(
        "/media/?site_code=" + site + "&city_name=" + city + "&location=" + loc
      )
      .then((response) => {
        if (response.data == "") {
          // alert("Got nothing");
          const element = (
            <h1>
              Couldn't get data from the given keywords. You can see the whole
              data below.
            </h1>
          );
          ReactDOM.render(element, document.getElementById("empty_response"));
        } else {
          setData(response.data);
          // setFilteredData(response.data);
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
          placeholder="site"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="city"
        />
        <input
          type="text"
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          placeholder="location"
        />
        <button onClick={getFilteredSites}>Apply filters</button>
        <button onClick={getWholeData}>X</button>

        <button onClick={() => dispatch({ type: "ADDSITESHOW" })}>
          Add a site
        </button>

        <label>Upload photos : </label>
        <input
          type="file"
          accept=".png"
          onChange={(event) => {
            const file = event.target.files[0];
            console.log("file" + file);
            setUploadImages(file);
            console.log("setUploadImages" + uploadImages);
          }}
        ></input>
        <input
          type="text"
          value={siteCode}
          onChange={(e) => setSiteCode(e.target.value)}
          placeholder="site code"
        />
        <Button onClick={sendImage}>Upload Image</Button>
        <br />
        <Datatable data={data} images={images} />
        <AddSite />
      </div>
    </div>
  );
}

// import React, { useState, useRef } from "react";
// import { Button, Modal } from "react-bootstrap";
// import "../card.css";
// import "../expandSite.css";
// import { useSelector, useDispatch } from "react-redux";

// export default function Site({ data, images }) {
//   const state = useSelector((state) => state);
//   const dispatch = useDispatch();
//   // const data_object = [
//   //   {site_code: data.site_code},
//   //   {location: data.location},
//   //   {media_type: data.media_type},
//   //   {price_per_month: data.display_cost},
//   // ];

//   const myContainer = useRef(null);

//   const [priceArray, setPriceArray] = useState([]);
//   const [sumPrice, setSumPrice] = useState(0);
//   const [modalShow, setModalShow] = useState(false);
//   const [idOfCard, setIdOfCard] = useState(0);
//   const [expandedModalData, setExpandedModalData] = useState({});
//   const [checkTrueArr, setCheckTrueArr] = useState([
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]);

//   function ifChecked(checkedId, cost) {
//     // const checkTrueArrCopy = checkTrueArr;
//     // checkTrueArrCopy[checkedId] = true;
//     // setCheckTrueArr(checkTrueArrCopy);

//     // const priceDetailsCopy = priceArray;
//     // priceDetailsCopy.push(cost);
//     // setPriceArray(priceDetailsCopy);

//     // setPriceHtml(cost);
//     const priceArrayCopy = priceArray;
//     if (priceArrayCopy[checkedId] == null) {
//       priceArrayCopy[checkedId] = cost;
//       setPriceArray(priceArrayCopy);
//       console.log(priceArray);

//       var sumPriceCopy = sumPrice;
//       sumPriceCopy = sumPriceCopy + parseInt(cost);
//       setSumPrice(sumPriceCopy);
//     }
//   }

//   // function ifChecked(e) {
//   //   // const checkTrueArrCopy = checkTrueArr;
//   //   // checkTrueArrCopy[checkedId] = true;
//   //   // setCheckTrueArr(checkTrueArrCopy);

//   //   // const priceDetailsCopy = priceArray;
//   //   // priceDetailsCopy.push(cost);
//   //   // setPriceArray(priceDetailsCopy);

//   //   // setPriceHtml(cost);
//   //   var checkedId = e.target.id;
//   //   var cost = e.target.cost;
//   //   console.log(cost);
//   //   if (e.target.checked == true) alert("i am checked");
//   //   else alert("i am not checked");
//   //   const priceArrayCopy = priceArray;
//   //   if (priceArrayCopy[checkedId] == null) {
//   //     priceArrayCopy[checkedId] = cost;
//   //     setPriceArray(priceArrayCopy);
//   //     console.log(priceArray);

//   //     sumPrice = sumPrice + parseInt(cost);
//   //     setSumPrice(sumPrice);
//   //   }
//   // }

//   function expandCard(cardId) {
//     setModalShow(true);

//     setIdOfCard(cardId + 1);

//     // setExpandedModalData(data[cardId]);
//     // console.log(expandedModalData);

//     var expandedModalDataCopy = expandedModalData;
//     expandedModalDataCopy = data[cardId];
//     setExpandedModalData(expandedModalDataCopy);
//     console.log(expandedModalData);
//     console.log("CHECKING FOR THE IMAGE PATH DATATABLE" + images);
//   }

//   return (
//     <div>
//       <div className="parent_cards_total">
//         <div id="all_cards">
//           {data.map((rows, index) => (
//             <div className="check_card">
//               <input
//                 ref={myContainer}
//                 type="checkbox"
//                 cost={rows.display_cost}
//                 id={index}
//                 defaultChecked={false}
//                 onChange={(e) => {
//                   ifChecked(e.target.id, rows.display_cost);
//                 }}
//                 // onChange={ifChecked}
//               />
//               <div
//                 // id={rows.site_code}
//                 className="media_card"
//                 onClick={(e) => {
//                   expandCard(index);
//                 }}
//               >
//                 <img className="image" src="/image.jpg" alt="" />
//                 {/* <img className="image" src="/resources/logo192.png" alt="" /> */}
//                 <div>
//                   <div className="card_details">
//                     Site Code: {rows.site_code}
//                   </div>
//                   <div className="card_details">Location: {rows.location}</div>
//                   <div className="card_details">
//                     Media Type: {rows.media_type}
//                   </div>
//                 </div>
//                 <div>
//                   <div className="card_details">
//                     Price per month: {rows.display_cost}
//                   </div>
//                   <Button>Add to campaign</Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="total_price">
//           All sites:
//           {priceArray.map((onePrice) => (
//             <p>
//               {onePrice}
//               <br />
//             </p>
//           ))}
//           <br />
//           Estimated Price: {sumPrice}
//           {/* <p>
//             {priceArray.map((onePrice) => {
//               sumPrice = sumPrice + parseInt(onePrice);
//               return sumPrice;
//             })}
//           </p> */}
//         </div>
//       </div>
//       <Modal
//         id="expand_site_modal"
//         // data={expandedModalData}
//         show={modalShow}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Body>
//           <div className="expand_site_modal_body">
//             <div className="expand_site_modal_body_images">
//               {state.siteImages[idOfCard].map((image) => (
//                 <div>
//                   <img src={image} />
//                 </div>
//               ))}
//               {/* <img className="image" src="/image.jpg" alt="" />
//               <img className="image" src="/image.jpg" alt="" />
//               <img className="image" src="/image.jpg" alt="" /> */}
//             </div>
//             <div className="expand_site_modal_body_site_details">
//               <div>
//                 <div>Site Code :{expandedModalData.site_code}</div>
//                 <div>Sub Environment :{expandedModalData.sub_environment}</div>
//                 <div>State Name :{expandedModalData.state_name}</div>
//                 <div>City Name :{expandedModalData.city_name}</div>
//                 <div>Location :{expandedModalData.location}</div>
//                 <div>
//                   Traffic Movement :{expandedModalData.traffic_movement}
//                 </div>
//                 <div>Post Code :{expandedModalData.post_code}</div>
//                 <div>Latitude :{expandedModalData.latitude}</div>
//                 <div>Longitude :{expandedModalData.longitude}</div>
//               </div>
//               <div>
//                 <div>Media Vehicle :{expandedModalData.media_vehicle}</div>
//                 <div>Width :{expandedModalData.size_w}</div>
//                 <div>Height :{expandedModalData.size_h}</div>
//                 <div>Position :{expandedModalData.position}</div>
//                 <div>Media Type :{expandedModalData.media_type}</div>
//                 <div>Display Cost :{expandedModalData.display_cost}</div>
//                 <div>
//                   Additional Comments :
//                   {expandedModalData.additional_size_comments}
//                 </div>
//                 <div>
//                   Printing Material :{expandedModalData.printing_material}
//                 </div>
//                 <div>Owner of Media :{expandedModalData.owner_of_media}</div>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//           // onClick={() => {
//           //   alert("Inputs Reset");
//           //   setModalShow(false);
//           // }}
//           >
//             Reset
//           </Button>
//           <Button onClick={() => setModalShow(false)}>Cancel</Button>
//         </Modal.Footer>
//       </Modal>
//       <div id="garbage"></div>
//       {data.length === 0 && <p>No data found</p>}
//     </div>
//   );
// }
