import React, { useState } from "react";
import { createPost } from "../../services/posts";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const Create = () => {
  const [form, handleInputs, handleFileInput] = useForm();
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    const { image, caption } = form;
    formData.append("image", image[0]);
    formData.append("caption", caption);
    createPost(formData).then(() => {
      push("/");
    });
  };

  return (
    <div className="uk-section">
      <div className="uk-container uk-flex uk-flex-center">
        <form className="uk-form-stacked uk-width-1-2" onSubmit={handleSubmit}>
          <div className="uk-margin">
            <label>Caption:</label>
            <input
              onChange={handleInputs}
              className="uk-input"
              name="caption"
              value={form.caption ? form.caption : ""}
              type="text"
            />
          </div>
          <div className="uk-margin">
            <label>Image:</label>
            <input
              onChange={handleFileInput}
              className="uk-input"
              name="image"
              type="file"
              multiple
            />
          </div>
          <button className="uk-button uk-button-primary" type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
