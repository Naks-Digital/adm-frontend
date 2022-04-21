import React from "react";
import AccountOverview from "./profile_options/account_overview";
import EditProfile from "./profile_options/edit_profile";
import ChangePassword from "./profile_options/change_password";
import NotificationSettings from "./profile_options/notification_settings";
import PrivacySettings from "./profile_options/privacy_settings";
import LogOut from "./profile_options/log_out";
import $ from "jquery";

const components = {
  account_overview: <AccountOverview />,
  edit_profile: <EditProfile />,
  change_password: <ChangePassword />,
  notification_settings: <NotificationSettings />,
  privacy_settings: <PrivacySettings />,
  log_out: <LogOut />,
};

export default function Profile() {
  function changeComponent(component) {
    $("#component_div").html(component);
    alert("huehuehuehuehuehuehue");
  }

  return (
    <>
      <div>
        <div>
          <div>
            <img src="/resources/logo192.png" />
          </div>
          <div onClick={() => changeComponent(components.account_overview)}>
            <label>
              {/* <button
                onClick={() => changeComponent(components.account_overview)}
              >
                Account overview
              </button> */}
              <h4>Account overview</h4>
            </label>
          </div>
          <div onClick={() => changeComponent(components.edit_profile)}>
            <label>
              <h4>Edit profile</h4>
            </label>
          </div>
          <div onClick={() => changeComponent(components.change_password)}>
            <label>
              <h4>Change password</h4>
            </label>
          </div>
          <div
            onClick={() => changeComponent(components.notification_settings)}
          >
            <label>
              <h4>Notification settings</h4>
            </label>
          </div>
          <div onClick={() => changeComponent(components.privacy_settings)}>
            <label>
              <h4>Privacy settings</h4>
            </label>
          </div>
          <div onClick={() => changeComponent(components.log_out)}>
            <label>
              <h4>Log out</h4>
            </label>
          </div>
        </div>
        <div id="component_div"></div>
      </div>
    </>
  );
}
