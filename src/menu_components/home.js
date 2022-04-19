import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home_parent">
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
      </div>
    </>
  );
}
