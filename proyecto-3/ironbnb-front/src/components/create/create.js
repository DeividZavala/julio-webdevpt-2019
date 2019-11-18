import React, { useEffect, useState, useContext } from "react";
import CreateForm from "./createForm";
import Card from "~components/common/Card";
import useForm from "~hooks/useForm";
import { AppContext } from "../../AppContext";
import { createProperty } from "~services/properties";

const Create = () => {
  const { form, handleInput, handleFileInput } = useForm();
  const [formattedImages, setFormattedImages] = useState([]);
  const { user } = useContext(AppContext);

  useEffect(() => {
    const { images } = form;
    getDataUrl(images);
  }, [form.images]);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();

    for (let key in form) {
      if (key === "images") {
        for (let file of Array.from(form[key])) {
          formData.append(key, file);
        }
      }
      if (key === "coordinates") {
        for (let coord of form[key].split(",")) {
          formData.append(key, coord);
        }
      } else {
        formData.append(key, form[key]);
      }
    }

    createProperty(formData).then(res => {
      const { property } = res.data;
      console.log(property);
    });
  };

  //Si te gusta la negra, esta casa es para ti, esta para morirse segun el dueño anterior

  const getDataUrl = files => {
    if (!files) return;
    const dataUrls = Array.from(files).map(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFormattedImages(prevState => [...prevState, reader.result]);
      };
    });

    return dataUrls;
  };

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className="uk-grid uk-child-width-1-2">
          <div>
            <CreateForm
              handleFileInput={handleFileInput}
              handleChange={handleInput}
              handleSubmit={handleSubmit}
            />
          </div>
          <div>
            <Card {...form} images={formattedImages} owner={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
