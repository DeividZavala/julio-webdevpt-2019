import React, { useEffect, useContext } from "react";
import Card from "~components/common/Card";
import { getProperties } from "~services/properties";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { user, properties, setProperties } = useContext(AppContext);
  const { push } = useHistory();

  useEffect(() => {
    if (!user) return push("/login");

    getProperties().then(res => {
      const { properties } = res.data;
      console.log(properties);
      setProperties(properties);
    });
  }, []);

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className="uk-grid uk-child-width-1-3 uk-grid-match uk-grid-small">
          {properties.map((property, index) => (
            <Card key={index} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
