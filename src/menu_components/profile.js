import React, { useState } from "react";
import AccountOverview from "./profile_options/account_overview";
import EditProfile from "./profile_options/edit_profile";
import ChangePassword from "./profile_options/change_password";
import NotificationSettings from "./profile_options/notification_settings";
import PrivacySettings from "./profile_options/privacy_settings";
import LogOut from "./profile_options/log_out";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import "./profile.css";

const components = {
  account_overview: <AccountOverview />,
  edit_profile: <EditProfile />,
  change_password: <ChangePassword />,
  notification_settings: <NotificationSettings />,
  privacy_settings: <PrivacySettings />,
  log_out: <LogOut />,
};

export default function Profile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [displayed_component, setDisplayedComponent] = useState("");

  // function changeComponent(component) {
  // $("#component_div").html(component);
  // alert("hello");
  // var copy = displayed_component;
  // copy.push(dispatch({ type: "ACCOUNT_OVERVIEW" }));
  // setDisplayedComponent(copy);
  // }

  return (
    <>
      <div className="profile_parent">
        <div className="control_div">
          <div className="control_div_subsections_img">
            <img
              src="/profile_default.png"
              alt="profile_default"
              style={{ width: "128px", height: "128px" }}
            />
          </div>
          <div
            className="control_div_subsections"
            onClick={() => setDisplayedComponent("ACCOUNT_OVERVIEW")}
          >
            {/* <div onClick={() => changeComponent("ACCOUNT_OVERVIEW")}> */}
            <label>
              {/* <button
                onClick={() => changeComponent(components.account_overview)}
              >
                Account overview
              </button> */}
              <h4>Account overview</h4>
            </label>
          </div>
          <hr />
          <div
            className="control_div_subsections"
            onClick={() => setDisplayedComponent("EDIT_PROFILE")}
          >
            {/* <div onClick={() => changeComponent("EDIT_PROFILE")}> */}
            <label>
              <h4>Edit profile</h4>
            </label>
          </div>
          <hr />
          <div
            className="control_div_subsections"
            onClick={() => setDisplayedComponent("CHANGE_PASSWORD")}
          >
            {/* <div onClick={() => changeComponent("CHANGE_PASSWORD")}> */}
            <label>
              <h4>Change password</h4>
            </label>
          </div>
          <hr />
          <div
            className="control_div_subsections"
            onClick={() => setDisplayedComponent("NOTIFICATION_SETTINGS")}
          >
            {/* <div onClick={() => changeComponent("NOTIFICATION_SETTINGS")}> */}
            <label>
              <h4>Notification settings</h4>
            </label>
          </div>
          <hr />
          <div
            className="control_div_subsections"
            onClick={() => setDisplayedComponent("PRIVACY_SETTINGS")}
          >
            {/* <div onClick={() => changeComponent("PRIVACY_SETTINGS")}> */}
            <label>
              <h4>Privacy settings</h4>
            </label>
          </div>
          <hr />
          <div
            className="control_div_subsections"
            onClick={() => setDisplayedComponent("LOG_OUT")}
          >
            {/* <div onClick={() => changeComponent("LOG_OUT")}> */}
            <label>
              <h4>Log out</h4>
            </label>
          </div>
          <hr />
        </div>
        {/* {displayed_component.map((item) => (
          <div id="component_div">{item}</div>
        ))} */}
        <div id="component_div">
          {displayed_component == "LOG_OUT" ? (
            <LogOut />
          ) : displayed_component == "EDIT_PROFILE" ? (
            <EditProfile />
          ) : displayed_component == "CHANGE_PASSWORD" ? (
            <ChangePassword />
          ) : displayed_component == "NOTIFICATION_SETTINGS" ? (
            <NotificationSettings />
          ) : displayed_component == "PRIVACY_SETTINGS" ? (
            <PrivacySettings />
          ) : (
            <AccountOverview />
          )}
        </div>
      </div>
    </>
  );
}
