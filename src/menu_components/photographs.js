import React from "react";
import { useSelector, useDispatch } from "react-redux";
import $ from "jquery";

export default function Photographs() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>PHOTOGRAPHS</h1>
        <img src="/resources/logo192.png" />
        {state.siteImages.map((images) =>
          images.map((image) => (
            <div>
              <img src={image} />
            </div>
          ))
        )}
        {state.siteImages.map((images) => console.log(images))}
      </div>
    </>
  );
}
