import React from "react";
import "./edit_profile.css";

export default function EditProfile() {
  return (
    <>
      <div>
        <h1>EDIT PROFILE</h1>
      </div>
      <div className="ep_subsections">
        <label>
          <b>Edit</b>
        </label>
        <input type="text"></input>
      </div>
      <div className="ep_subsections">
        <label>
          <b>Gender</b>
        </label>
        <select>
          <option>Male</option>
          <option>Female</option>
          <option>Non-binary</option>
        </select>
        {/* <input type="dropdown"></input> */}
      </div>
      <div className="ep_subsections">
        <label>
          <b>Date of Birth</b>
        </label>
        <input type="date"></input>
      </div>
      <div className="ep_subsections">
        <label>
          <b>Country of Origin</b>
        </label>
        <input type="text"></input>
      </div>
      <hr />
      <div className="ep_subsections_btn">
        <button
          style={{
            padding: "2%",
            /* height: 2%; */
            width: "auto",
            borderStyle: "dashed",
            borderRadius: "40px",
          }}
        >
          CANCEL
        </button>
        <button
          style={{
            padding: "2%",
            /* height: 2%; */
            width: "auto",
            borderStyle: "dashed",
            borderRadius: "40px",
          }}
        >
          SAVE PROFILE
        </button>
      </div>
    </>
  );
}
