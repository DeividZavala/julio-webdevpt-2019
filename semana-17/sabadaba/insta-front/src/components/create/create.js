import React, { useState } from "react";
import { createPost } from "../../services/posts";

const Create = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState();

  const handleChange = e => {
    const name = e.target.name;
    const value = name === "caption" ? e.target.value : e.target.files[0];

    name === "caption" ? setCaption(value) : setImage(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);
    createPost(formData).then(res => {
      console.log(res.data);
    });
  };

  return (
    <div className="uk-section">
      <div className="uk-container uk-flex uk-flex-center">
        <form className="uk-form-stacked uk-width-1-2" onSubmit={handleSubmit}>
          <div className="uk-margin">
            <label>Caption:</label>
            <input
              onChange={handleChange}
              className="uk-input"
              name="caption"
              value={caption}
              type="text"
            />
          </div>
          <div className="uk-margin">
            <label>Image:</label>
            <input
              onChange={handleChange}
              className="uk-input"
              name="image"
              type="file"
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
