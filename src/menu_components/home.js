import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home_parent">
        <div className="campaign_tile">
          <div>
            <h1>Create campaigns and schedule them</h1>
          </div>
        </div>
        <div className="photographs_tile">
          <div>
            <h1>See all the photographs of media at one place</h1>
          </div>
        </div>
        <div className="site_tile">
          <div>
            <h1>See details of all sites</h1>
          </div>
        </div>
        <div className="profile_tile">
          <div>
            <h1>Create and edit profile</h1>
          </div>
        </div>
      </div>
    </>
  );
}
