import React, { useState } from "react";
import "./campaign.css";
import EditIcon from "@mui/icons-material/Edit";
import { Modal, Button } from "react-bootstrap";
// import CreateCampaign from "../modals/create_campaign";

export default function Campaign() {
  const [createCampaignModalShow, setCreateCampaignModalShow] = useState(false);
  const [deleteCampaignModalShow, setDeleteCampaignModalShow] = useState(false);

  function createCampaign() {
    setCreateCampaignModalShow(!createCampaignModalShow);
  }

  function deleteCampaign() {
    setDeleteCampaignModalShow(!deleteCampaignModalShow);
  }

  return (
    <>
      <div className="home_campaign">
        <div className="ongoing">
          <div>
            <h3>Ongoing campaigns</h3>
          </div>
          <ol>
            <li>Campaign 1</li>
            <li>Campaign 2</li>
            <li>Campaign 3</li>
            <li>Campaign 4</li>
            <li>Campaign 5</li>
            <li>Campaign 6</li>
            <li>Campaign 7</li>
          </ol>
        </div>
        <div className="upcoming">
          <div>
            <h3>Upcoming campaigns</h3>
          </div>
          <ol>
            <li>Campaign 1</li>
            <li>Campaign 2</li>
            <li>Campaign 3</li>
            <li>Campaign 4</li>
            <li>Campaign 5</li>
          </ol>
        </div>
        <div className="expired">
          <div>
            <h3>Expired campaigns</h3>
          </div>
          <ol>
            <li>Campaign 1</li>
            <li>Campaign 2</li>
            <li>Campaign 3</li>
            <li>Campaign 4</li>
          </ol>
        </div>
        <div className="statistics">
          <h1>500+ Sites</h1>
          <h1>50+ Campaigns</h1>
        </div>
      </div>
      <div className="campaign_buttons">
        <Button
          style={{ backgroundColor: "#274776" }}
          onClick={() => setDeleteCampaignModalShow(true)}
        >
          Delete
        </Button>
        <Button
          style={{ backgroundColor: "#274776" }}
          onClick={() => setCreateCampaignModalShow(true)}
        >
          Create
        </Button>
      </div>
      <div>
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
      </div>
      <Modal
        show={createCampaignModalShow}
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
          <div className="campaign_inputs">
            <div>
              <div>
                <label>Name the Campaign : </label>
                <input
                  type="text"
                  // id="site_code"
                  // value={}
                  // onChange={}
                ></input>
              </div>
              <div>
                <label>Start Date : </label>
                <input
                  type="text"
                  // id="sub_environment"
                  // onChange={}
                ></input>
              </div>
              <div>
                <label>End Date : </label>
                <input
                  type="text"
                  // id="state_name"
                  // onChange={}
                ></input>
              </div>
              <div>
                <label>Total Price Cap : </label>
                <input
                  type="text"
                  // id="city_name"
                  // onChange={}
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label>No. of Sites : </label>
                <input
                  type="text"
                  // id="location"
                  // onChange={}
                ></input>
              </div>
              <div>
                <label>Select Sites : </label>
                <input
                  type="text"
                  // id="traffic_movement"
                  // onChange={}
                ></input>
              </div>
              <div>
                <label>Add extra photographs : </label>
                <input
                  type="text"
                  // id="post_code"
                  // onChange={}
                ></input>
              </div>
              <div>
                <label>Select from existing Campaigns : </label>
                <input
                  type="text"
                  // id="latitude"
                  // onChange={}
                ></input>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              alert("Inputs Reset");
              setCreateCampaignModalShow(false);
            }}
          >
            Reset
          </Button>
          <Button onClick={() => setCreateCampaignModalShow(false)}>
            Cancel
          </Button>
          <Button onClick={createCampaign}>Create</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={deleteCampaignModalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>DELETE</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              alert("Inputs Reset");
              setDeleteCampaignModalShow(false);
            }}
          >
            Reset
          </Button>
          <Button onClick={() => setDeleteCampaignModalShow(false)}>
            Cancel
          </Button>
          <Button onClick={deleteCampaign}>Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
