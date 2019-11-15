import React from "react";

const default_picture =
  "https://icon-library.net/images/profile-picture-icon/profile-picture-icon-24.jpg";

const ProfileShowInfo = ({
  profilepic = default_picture,
  toggleEdit,
  username,
  email
}) => {
  return (
    <div>
      <img
        className="uk-border-circle"
        src={profilepic}
        alt=""
        height="100"
        width="100"
      />
      <div className="uk-margin-small-top">
        <h4>{username}</h4>
        <h6 className="uk-margin-remove-top">{email}</h6>
      </div>
      <button className="uk-button uk-button-primary" onClick={toggleEdit}>
        Edit
      </button>
    </div>
  );
};

export default ProfileShowInfo;
