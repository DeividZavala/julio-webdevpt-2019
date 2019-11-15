import React from "react";

const ProfileForm = ({
  handleSubmit,
  username,
  user,
  toggleEdit,
  handleInputs,
  handleFileInput,
  submitting
}) => {
  if (!username) {
    username = user.username;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="uk-margin">
        <label htmlFor="">Profile picture:</label>
        <input
          type="file"
          onChange={handleFileInput}
          className="uk-input"
          name="profilepic"
        />
      </div>
      <div className="uk-margin">
        <label htmlFor="">Username:</label>
        <input
          type="text"
          className="uk-input"
          onChange={handleInputs}
          value={username}
          name="username"
        />
      </div>
      <div className="uk-flex uk-flex-center">
        <button
          type="button"
          disabled={submitting}
          onClick={toggleEdit}
          className="uk-button uk-button-danger uk-margin-small-top uk-margin-small-right"
        >
          Cancel
        </button>
        <button
          disabled={submitting}
          type="submit"
          className="uk-button uk-button-primary uk-margin-small-top"
        >
          {submitting ? (
            <span>
              Updating... <span uk-spinner="true"></span>
            </span>
          ) : (
            "save"
          )}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
