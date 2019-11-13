import React from "react";
import moment from "moment";

const PostCard = ({
  _id,
  image,
  caption,
  currentUser,
  author,
  createdAt,
  deletePost
}) => (
  <div className="uk-margin-small-bottom">
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
            <h3 className="uk-card-title uk-margin-remove-bottom">
              {author.username ? author.username : author.email}
            </h3>
            <p className="uk-text-meta uk-margin-remove-top">
              <time>{moment(createdAt).fromNow()}</time>
            </p>
          </div>
          {currentUser === author._id ? (
            <div>
              <span uk-icon="more-vertical"></span>
              <div uk-dropdown="mode:click">
                <ul className="uk-nav uk-dropdown-nav">
                  <li className="uk-active">
                    <a href="#">Editar</a>
                  </li>
                  <li className="uk-nav-divider"></li>
                  <li>
                    <button onClick={() => deletePost(_id)}>Borrar</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
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
