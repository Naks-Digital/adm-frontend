import React from "react";
import "./campaign.css";
import EditIcon from "@mui/icons-material/Edit";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CreateCampaign from "../modals/create_campaign.js";
import DeleteCampaign from "../modals/delete_campaign";
// import CreateCampaign from "../modals/create_campaign";

export default function Campaign() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function createCampaign() {
    dispatch({ type: "CREATEHIDE" });
  }

  function deleteCampaign() {
    dispatch({ type: "DELETEHIDE" });
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
          onClick={() => dispatch({ type: "DELETESHOW" })}
        >
          Delete
        </Button>
        <Button
          style={{ backgroundColor: "#274776" }}
          onClick={() => dispatch({ type: "CREATESHOW" })}
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
      <CreateCampaign />
      <DeleteCampaign />
    </>
  );
}
