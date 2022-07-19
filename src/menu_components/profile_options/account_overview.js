import React from "react";
import "./account_overview.css";
import EditIcon from "@mui/icons-material/Edit";

export default function AccountOverview() {
  return (
    <>
      <div>
        <h1>ACCOUNT OVERVIEW</h1>
      </div>
      <div>
        <h3>Profile</h3>
      </div>
      <div className="ao_subsections">
        <label>Username</label>
        <label>Administrator</label>
      </div>
      <hr />
      <div className="ao_subsections">
        <label>Date of Birth</label>
        <label>13 July 1995</label>
      </div>
      <hr />
      <div className="ao_subsections">
        <label>Country of Origin</label>
        <label>India</label>
      </div>
      <hr />
      <div className="ao_subsections_btn">
        <button
          style={{
            padding: "2%",
            /* height: 2%; */
            width: "auto",
            borderStyle: "dashed",
            borderRadius: "40px",
          }}
        >
          Edit Profile
          <EditIcon />
        </button>
      </div>
    </>
  );
}
