import React, { useState, useContext } from "react";
import ProfileForm from "./profileForm";
import ProfileShowInfo from "./profileShowInfo";
import { useForm } from "../../hooks/useForm";
import { AppContext } from "../../AppContext";
import { updateUser } from "../../services/user";

const Profile = () => {
  const [isEditing, setEditing] = useState(false);
  const [form, handleInputs, handleFileInput] = useForm();
  const { user, setUser } = useContext(AppContext);
  const [submitting, setSubmitting] = useState(false);

  const toggleSubmitting = () => {
    setSubmitting(prevState => !prevState);
  };

  const toggleEdit = () => {
    setEditing(prevState => !prevState);
  };

  const handleSubmit = e => {
    e.preventDefault();
    toggleSubmitting();
    const { _id } = user;
    const formData = new FormData();
    console.log("submit", form);
    for (let key in form) {
      const value = key === "profilepic" ? form[key][0] : form[key];
      formData.append(key, value);
    }
    // TODO correr el servicio
    updateUser(_id, formData).then(res => {
      const { user } = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      toggleEdit();
      toggleSubmitting();
    });
  };

  return (
    <div className="uk-section">
      <div className="uk-container uk-flex uk-flex-center uk-text-center">
        {isEditing ? (
          <ProfileForm
            toggleEdit={toggleEdit}
            handleSubmit={handleSubmit}
            handleInputs={handleInputs}
            handleFileInput={handleFileInput}
            {...form}
            user={user}
            submitting={submitting}
          />
        ) : (
          <ProfileShowInfo toggleEdit={toggleEdit} {...user} />
        )}
      </div>
    </div>
  );
};

export default Profile;
