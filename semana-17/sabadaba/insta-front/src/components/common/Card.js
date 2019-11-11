import React from "react";

const PostCard = ({ image, caption }) => (
  <div>
    <div className="uk-card uk-card-default">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width={40}
              alt={caption}
              height={40}
              src="https://getuikit.com/docs/images/avatar.jpg"
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
            <p className="uk-text-meta uk-margin-remove-top">
              <time dateTime="2016-04-01T19:00">April 01, 2016</time>
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body uk-cover-container uk-remove-padding uk-height-medium">
        <img src={image} alt={caption} uk-cover="true" />
      </div>
      <div className="uk-card-footer">{caption}</div>
    </div>
  </div>
);

export default PostCard;
