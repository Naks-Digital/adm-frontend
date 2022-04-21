import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function CreateCampaign() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function createCampaign() {
    dispatch({ type: "CREATEHIDE" });
  }

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
          <div className="campaign_inputs">
            <div className="campaign_inputs_left">
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
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => dispatch({ type: "CREATEHIDE" })}>
            Reset
          </Button>
          <Button onClick={() => dispatch({ type: "CREATEHIDE" })}>
            Cancel
          </Button>
          <Button onClick={createCampaign}>Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
