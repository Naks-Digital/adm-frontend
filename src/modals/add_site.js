import { React, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function AddSite() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newSite, setNewSite] = useState({
    site_code: null,
    sub_environment: null,
    state_name: null,
    city_name: null,
    location: null,
    traffic_movement: null,
    post_code: null,
    latitude: null,
    longitude: null,
    media_vehicle: null,
    size_h: null,
    size_w: null,
    position: null,
    media_type: null,
    display_cost: null,
    additional_size_comments: null,
    printing_material: null,
    owner_of_media: null,
  });

  const captureResponse = (event) => {
    console.log(event.target.value);
    // setGetValue(event.target.value);
    // setNewSite((newSite) => (newSite[event.target.id] = event.target.value)); //Here is the problem**

    const copyObj = newSite;
    if (event.target.value != null) {
      copyObj[event.target.id] = event.target.value;
      console.log(event.target.id);
      console.log(event.target.value);
      console.log(copyObj);
      setNewSite({ ...copyObj });
      // dispatch({ type: "CANPOST" });
    }
  };

  function addTheSite() {
    for (const element in newSite) {
      if (newSite[element] == null) {
        console.log("element" + newSite[element]);
        alert("Please fill all the fields");
        // return;
        // dispatch({ type: "CANPOST" });
      } else {
        console.log(newSite);
        dispatch({ type: "ADDSITEHIDE" });
      }
    }
    axios
      .post("/media", newSite)
      .then((response) => {
        console.log("posted the data");
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  return (
    <Modal
      show={state.addSiteModalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Add a site
              </Modal.Title>
            </Modal.Header> */}
      <Modal.Body>
        <div className="inputs">
          <div>
            <label>Site Code : </label>
            <input
              type="text"
              id="site_code"
              // value={newSite.site_code}
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>Sub Environment : </label>
            <input
              type="text"
              id="sub_environment"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>State name : </label>
            <input
              type="text"
              id="state_name"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>City name : </label>
            <input
              type="text"
              id="city_name"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>Location : </label>
            <input type="text" id="location" onChange={captureResponse}></input>
          </div>
          <div>
            <label>Traffic movement : </label>
            <input
              type="text"
              id="traffic_movement"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>Post code : </label>
            <input
              type="text"
              id="post_code"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>Latitude : </label>
            <input type="text" id="latitude" onChange={captureResponse}></input>
          </div>
          <div>
            <label>Longitude : </label>
            <input
              type="text"
              id="longitude"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>Media vehicle : </label>
            <input
              type="text"
              id="media_vehicle"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>Width : </label>
            <input type="text" id="size_w" onChange={captureResponse}></input>
          </div>
          <div>
            <label>Height : </label>
            <input type="text" id="size_h" onChange={captureResponse}></input>
          </div>
          <div>
            <label>Position : </label>
            <input type="text" id="position" onChange={captureResponse}></input>
          </div>
          <div>
            <label>Media type : </label>
            <input
              type="text"
              id="media_type"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>Display cost : </label>
            <input
              type="text"
              id="display_cost"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>Additional size comments : </label>
            <input
              type="text"
              id="additional_size_comments"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>Printing material : </label>
            <input
              type="text"
              id="printing_material"
              onChange={captureResponse}
            ></input>
          </div>
          <div>
            <label>Owner of media : </label>
            <input
              type="text"
              id="owner_of_media"
              onChange={captureResponse}
            ></input>
          </div>
        </div>
        <div>
          <label>Upload photos : </label>
          <input type="file"></input>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => dispatch({ type: "ADDSITEHIDE" })}>Reset</Button>
        <Button onClick={() => dispatch({ type: "ADDSITEHIDE" })}>
          Cancel
        </Button>
        <Button onClick={addTheSite}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}

// "SiteNo-11A"	"Elevated Road"	"Gujarat"	"Ahmedabad"	"Aravalli"	"Surat to Aravalli"	"534230"	"25.9448"	"73.9845"	"Unipole"	"15"	"14"	"Left"	"Lit"	"1000000"	"This is a unipole"	"Blackback 280 GSM"	"Myntra"
