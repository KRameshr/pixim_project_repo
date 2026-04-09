import React from "react";

const Gallery = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center my-5">
        <h4>No images found</h4>
        <p>Try searching for something else!</p>
      </div>
    );
  }

  return (
    <div className="row">
      {data.map(({ id, fullImageUrl, smallImageUrl, title }) => (
        <div key={id} className="col-md-4 mb-4">
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
      ))}
    </div>
  );
};

export default Gallery;
