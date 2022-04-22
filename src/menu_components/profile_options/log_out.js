import React from "react";

export default function LogOut() {
  return (
    <>
      <div>
        <h1>LOG OUT</h1>
      </div>
      <div>
        <button
          style={{
            padding: "2%",
            /* height: 2%; */
            width: "auto",
            borderStyle: "dashed",
            borderRadius: "40px",
          }}
        >
          Log out
        </button>
      </div>
    </>
  );
}
