import React from "react";

const CreateForm = ({
  handleSubmit,
  handleChange,
  handleFileInput,
  title,
  address,
  Coordinates,
  price,
  description,
  capacity
}) => (
  <form className="uk-form-stacked" onSubmit={handleSubmit}>
    <div className="uk-margin">
      <label className="uk-form-label">Title:</label>
      <div className="uk-form-controls">
        <input
          onChange={handleChange}
          name="title"
          value={title}
          className="uk-input"
          type="text"
        />
      </div>
    </div>

    <div className="uk-margin">
      <label className="uk-form-label">Address:</label>
      <div className="uk-form-controls">
        <input
          onChange={handleChange}
          name="address"
          value={address}
          className="uk-input"
          type="text"
        />
      </div>
    </div>

    <div className="uk-margin">
      <label className="uk-form-label">Capacity:</label>
      <div className="uk-form-controls">
        <input
          onChange={handleChange}
          name="capacity"
          value={capacity}
          className="uk-input"
          step="1"
          min="1"
          type="number"
        />
      </div>
    </div>

    <div className="uk-margin">
      <label className="uk-form-label">Coordinates:</label>
      <div className="uk-form-controls">
        <input
          onChange={handleChange}
          name="Coordinates"
          value={Coordinates}
          className="uk-input"
          type="text"
        />
      </div>
    </div>

    <div className="uk-margin">
      <label className="uk-form-label">Description:</label>
      <div className="uk-form-controls">
        <textarea
          className="uk-textarea"
          name="description"
          cols="10"
          rows="5"
          onChange={handleChange}
        >
          {description}
        </textarea>
      </div>
    </div>

    <div className="uk-margin">
      <label className="uk-form-label">Price:</label>
      <div className="uk-form-controls">
        <input
          onChange={handleChange}
          name="price"
          value={price}
          className="uk-input"
          type="text"
        />
      </div>
    </div>

    <div className="uk-margin">
      <label className="uk-form-label">Images:</label>
      <div className="uk-form-controls">
        <input
          onChange={handleFileInput}
          name="images"
          className="uk-input"
          type="file"
          multiple
        />
      </div>
    </div>

    <button type="submit" className="uk-button uk-button-primary">
      Subir propiedad
    </button>
  </form>
);

export default CreateForm;
