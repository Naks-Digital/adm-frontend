import { React, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import "../menu_components/campaign.css";
import "./create_campaign.css";

export default function CreateCampaign() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [selectedSites, setSelectedSites] = useState([]);
  const [images, setImages] = useState([[]]);

  function createACampaign() {
    dispatch({ type: "CREATEHIDE" });
    console.log(state.siteImages);
  }

  function addSiteToList(e) {
    const dataCopy = data;
    const selectedSitesCopy = selectedSites;
    // selectedSitesCopy.push(e.target.value);
    selectedSitesCopy[e.target.value] = dataCopy[e.target.value];
    setSelectedSites(selectedSitesCopy);
    const imagesCopy = images;
    selectedSites.map((row) => {
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
      images.push(imagesCopy);
      console.log("imagesCopy" + imagesCopy);
    });
    // console.log("The Key" + e.target.key);
    // console.log("The Value" + e.target.value);
  }

  useEffect(() => {
    axios.get("/media").then((response) => {
      setData(response.data);
      // setWholeData(response.data);
      console.log("Whole data :");
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Modal
        className="create_modal"
        show={state.createModalShow}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="body_parent">
            <div className="campaign_inputs">
              {/* <div className="campaign_inputs_left">
              <div className="campaign_inputs_child">
                <label>Name the Campaign : </label>
                <input type="text"></input>
              </div>
              <div className="campaign_inputs_child">
                <label>Start Date : </label>
                <input type="text"></input>
              </div>
              <div className="campaign_inputs_child">
                <label>End Date : </label>
                <input type="text"></input>
              </div>
              <div className="campaign_inputs_child">
                <label>Total Price Cap : </label>
                <input type="text"></input>
              </div>
            </div>
            <div className="campaign_inputs_right">
              <div className="campaign_inputs_child">
                <label>No. of Sites : </label>
                <input type="text"></input>
              </div>
              <div className="campaign_inputs_child">
                <label>Select Sites : </label>
                <input type="text"></input>
              </div>
              <div className="campaign_inputs_child">
                <label>Add extra photographs : </label>
                <input type="text"></input>
              </div>
              <div className="campaign_inputs_child">
                <label>Select from existing Campaigns : </label>
                <input type="text"></input>
              </div>
            </div> */}
              <div className="campaign_labels_left">
                <label>Name the Campaign : </label>
                <label>Start Date : </label>
                <label>End Date : </label>
                <label>Total Price Cap : </label>
              </div>
              <div className="campaign_inputs_left">
                <input type="text"></input>
                <input type="text"></input>
                <input type="text"></input>
                <input type="text"></input>
              </div>
              <div className="campaign_labels_right">
                <label>No. of Sites : </label>
                <label>Select Sites : </label>
                <label>Add extra photographs : </label>
                <label>Select from existing Campaigns : </label>
              </div>
              <div className="campaign_inputs_right">
                <input type="text"></input>
                {/* <input type="text"></input> */}
                <select onChange={addSiteToList} multiple>
                  {data.map((item, index) => (
                    <option value={index}>{item.site_code}</option>
                  ))}
                </select>

                <input type="text"></input>
                <input type="text"></input>
              </div>
            </div>
            <div className="gallery">
              {images.map((images) =>
                images.map((image) => (
                  <div>
                    <img src={image} />
                  </div>
                ))
              )}
            </div>
            <ul>
              {selectedSites.map((item) => (
                <li>{item.site_code}</li>
              ))}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => dispatch({ type: "CREATEHIDE" })}>
            Reset
          </Button>
          <Button onClick={() => dispatch({ type: "CREATEHIDE" })}>
            Cancel
          </Button>
          <Button onClick={createACampaign}>Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
