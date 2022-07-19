import React from "react";
import "./change_password.css";

export default function ChangePassword() {
  return (
    <>
      <div>
        <h1>CHANGE PASSWORD</h1>
      </div>
      <div className="cp_subsections">
        <label>
          <b>Current password</b>
        </label>
        <input type="text"></input>
      </div>
      <div className="cp_subsections">
        <label>
          <b>New password</b>
        </label>
        <input type="text"></input>
      </div>
      <div className="cp_subsections">
        <label>
          <b>Repeat new password</b>
        </label>
        <input type="text"></input>
      </div>
      <hr />
      <div className="cp_subsections_btn">
        <button
          style={{
            width: "auto",
            padding: "2%",
            borderStyle: "dashed",
            borderRadius: "40px",
          }}
        >
          CANCEL
        </button>
        <button
          style={{
            width: "auto",
            padding: "2%",
            borderStyle: "dashed",
            borderRadius: "40px",
          }}
        >
          SET NEW PASSWORD
        </button>
      </div>
    </>
  );
}
