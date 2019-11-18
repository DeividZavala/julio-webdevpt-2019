import React from "react";
import currencyFormatter from "currency-formatter";

const Card = ({ title, images = [], description, price, owner, capacity }) => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-small-bottom">
        <div className="uk-card-media-top">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            uk-slideshow="true"
          >
            <ul className="uk-slideshow-items">
              {images.map((image, index) => (
                <li key={index}>
                  <img src={image} alt="" uk-cover="true" />
                </li>
              ))}
            </ul>

            <a
              className="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-previous="true"
              uk-slideshow-item="previous"
            ></a>
            <a
              className="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-next="true"
              uk-slideshow-item="next"
            ></a>
          </div>
        </div>
        <div className="uk-card-body uk-padding-small">
          <h3 className="uk-card-title">{title}</h3>
          <p className="uk-text-break uk-height-small uk-height-max-small uk-overflow-auto">
            {description}
          </p>
          <hr />
          <div className="uk-grid uk-child-width-1-2 uk-grid-collapse">
            <div className="uk-text-center">
              <h5>Host</h5>
              <div
                className="uk-grid-small uk-flex-middle uk-flex-center uk-text-center"
                uk-grid="true"
              >
                <div className="uk-width-auto">
                  <img
                    className="uk-border-circle"
                    width="40"
                    height="40"
                    src="http://getuikit.com/docs/images/avatar.jpg"
                  />
                </div>
                <div className="uk-width-expand">
                  <h3 className="uk-card-title uk-margin-remove-bottom uk-text-truncate">
                    {owner ? owner.username : "No disponible"}
                  </h3>
                  <p className="uk-text-meta uk-margin-remove-top">
                    <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                  </p>
                </div>
              </div>
            </div>
            <div className="uk-flex uk-flex-column uk-padding-small uk-flex-middle">
              <h6>Precio por noche:</h6>
              <span className="uk-label uk-width-1-1 uk-text-center">
                {currencyFormatter.format(price, { code: "MXN" })}
              </span>
            </div>
          </div>
          <hr />
          <div className="uk-flex uk-flex-center uk-flex-middle">
            <a className="uk-button uk-button-primary">Reservar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
