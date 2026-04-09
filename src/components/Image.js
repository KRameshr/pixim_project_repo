import React from "react";

const Image = ({ fullImageUrl, smallImageUrl, title }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <a href={fullImageUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={smallImageUrl}
            className="card-img-top"
            alt={title || "Image"}
          />
        </a>
        <div className="card-body">
          <p className="card-text text-truncate">{title || "Untitled"}</p>
        </div>
      </div>
    </div>
  );
};

export default Image;
