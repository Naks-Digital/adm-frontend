import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";

export default function DeleteCampaign() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function deleteCampaign() {
    dispatch({ type: "DELETEHIDE" });
  }

  return (
    <>
      <Modal
        show={state.deleteModalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Campaign</th>
                <th>Client Name</th>
                <th>No. of Sites included</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Campaign 1</td>
                <td>Client 1</td>
                <td>10</td>
                <td>April</td>
                <td>May</td>
                <td>700000</td>
                <td>
                  <EditIcon />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Campaign 2</td>
                <td>Client 2</td>
                <td>10</td>
                <td>April</td>
                <td>May</td>
                <td>700000</td>
                <td>
                  <EditIcon />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Campaign 3</td>
                <td>Client 3</td>
                <td>10</td>
                <td>April</td>
                <td>May</td>
                <td>700000</td>
                <td>
                  <EditIcon />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Campaign 4</td>
                <td>Client 4</td>
                <td>10</td>
                <td>April</td>
                <td>May</td>
                <td>700000</td>
                <td>
                  <EditIcon />
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => dispatch({ type: "DELETEHIDE" })}>
            Reset
          </Button>
          <Button onClick={() => dispatch({ type: "DELETEHIDE" })}>
            Cancel
          </Button>
          <Button onClick={deleteCampaign}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
